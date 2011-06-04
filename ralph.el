(defvar ralph-mode-font-lock-keywords
  '(("<\\(\\sw\\|\\s_\\)+>" . font-lock-type-face)
	("\\*\\(\\sw\\|\\s_\\)+\\*" . font-lock-constant-face)
	"#rest\\|#key"
	"define-\\(function\\|class\\|module\\)"
	"bind" "define" "set!" "get" "when"))

(define-derived-mode
  ralph-mode lisp-mode "Ralph"
  "Major mode"
  (set (make-local-variable 'lisp-indent-function)
	   'ralph-indent-function)
  (set (make-local-variable 'font-lock-defaults)
	   '(ralph-mode-font-lock-keywords nil t)))

;; ralph specific offsets here
(put 'when 'ralph-indent-function 1)
(put 'unless 'ralph-indent-function 1)
(put 'bind 'ralph-indent-function 1)
(put 'if 'ralph-indent-function nil)
(put 'for 'ralph-indent-function 2)
(put 'method 'ralph-indent-function 1)
(put 'block 'ralph-indent-function 1)
(put 'bind 'ralph-indent-function 2)

(defun ralph-indent-function (indent-point state)
  "Same as 'lisp-indent-function but uses 'ralph-indent-function symbol

This function is the normal value of the variable `ralph-indent-function'.
It is used when indenting a line within a function call, to see if the
called function says anything special about how to indent the line.

INDENT-POINT is the position where the user typed TAB, or equivalent.
Point is located at the point to indent under (for default indentation);
STATE is the `parse-partial-sexp' state for that position.

If the current line is in a call to a Lisp function
which has a non-nil property `ralph-indent-function',
that specifies how to do the indentation.  The property value can be
* `defun', meaning indent `defun'-style;
* an integer N, meaning indent the first N arguments specially
  like ordinary function arguments and then indent any further
  arguments like a body;
* a function to call just as this function was called.
  If that function returns nil, that means it doesn't specify
  the indentation.

This function also returns nil meaning don't specify the indentation."
  (let ((normal-indent (current-column)))
    (goto-char (1+ (elt state 1)))
    (parse-partial-sexp (point) calculate-lisp-indent-last-sexp 0 t)
    (if (and (elt state 2)
             (not (looking-at "\\sw\\|\\s_")))
        ;; car of form doesn't seem to be a symbol
        (progn
          (if (not (> (save-excursion (forward-line 1) (point))
                      calculate-lisp-indent-last-sexp))
              (progn (goto-char calculate-lisp-indent-last-sexp)
                     (beginning-of-line)
                     (parse-partial-sexp (point)
                                         calculate-lisp-indent-last-sexp 0 t)))
          ;; Indent under the list or under the first sexp on the same
          ;; line as calculate-lisp-indent-last-sexp.  Note that first
          ;; thing on that line has to be complete sexp since we are
          ;; inside the innermost containing sexp.
          (backward-prefix-chars)
          (current-column))
      (let ((function (buffer-substring (point)
                                        (progn (forward-sexp 1) (point))))
            method)
        (setq method (or (get (intern-soft function) 'ralph-indent-function)
                         (get (intern-soft function) 'lisp-indent-hook)))
        (cond ((or (eq method 'defun)
                   (and (null method)
                        (> (length function) 3)
                        (string-match "\\`def" function)))
               (lisp-indent-defform state indent-point))
              ((integerp method)
               (lisp-indent-specform method state
                                     indent-point normal-indent))
              (method
               (funcall method indent-point state)))))))

(provide 'ralph)
