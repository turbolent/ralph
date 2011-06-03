import fnmatch
import os
import shutil
import subprocess
import optparse

parser = optparse.OptionParser()
parser.add_option("-s", "--source", dest="src", default="src",
                  help="directory containing source files", metavar="PATH")
parser.add_option("-d", "--destination", dest="dest", default="build",
                  help="directory containing source files", metavar="PATH")
parser.add_option("-b", "--bootstrap",
                  action="store_true", dest="bootstrap", default=False,
                  help="use bootstraping compiler")
parser.add_option("-a", "--async",
                  action="store_true", dest="async", default=False,
                  help="asynchronous module loading")

(options, args) = parser.parse_args()
prefix = len(options.src)
arguments = ['--async'] if options.async else []
if options.bootstrap:
    arguments.append('--bootstrap')

for srcroot, dirnames, filenames in os.walk(options.src):
    destroot = options.dest + srcroot[prefix:]
    if not os.path.exists(destroot):
        os.mkdir(destroot)
    for filename in filenames:
        srcpath = os.path.join(srcroot, filename)
        print '*', srcpath
        if fnmatch.fnmatch(filename, '*.ralph'):
            destfilename = os.path.splitext(filename)[0] + '.js'
            destpath = os.path.join(destroot, destfilename)
            input = open(srcpath, 'r')
            output = open(destpath, 'w')
            process = subprocess.Popen(['node', 'compile.js'] + arguments,
                                       stdin=input, stdout=output)
            if process.wait() != 0:
                exit(1)
        else:
            destpath = os.path.join(destroot, filename)
            shutil.copy(srcpath, destpath)
