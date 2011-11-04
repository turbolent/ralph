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
parser.add_option("-e", "--environment", dest="environment", default=False,
                  help="runtime environment")
parser.add_option("-a", "--async",
                  action="store_true", dest="async", default=False,
                  help="asynchronous module loading")
parser.add_option("-o", "--optimize",
                  action="store_true", dest="optimize", default=False,
                  help="optimize code (ringojs environment only)")
parser.add_option("-p", "--path", dest="path", default="",
                  help="modules path", metavar="PATH")

(options, args) = parser.parse_args()
prefix = len(options.src)
arguments = ['--async'] if options.async else []
if options.bootstrap:
    arguments.append('--bootstrap')
if options.optimize and options.environment == "ringojs":
    arguments.append('--optimize')

env = os.environ

if options.environment == "node":
    command = ['node', 'compile.js']
    env['NODE_PATH'] = options.path
elif options.environment == "xpcshell":
    command = ['xpcshell', 'require.js', 'file://' + os.getcwd() + '/compile.js']
    env['MODULE_PATH'] = options.path
elif options.environment == "ringojs":
    command = ['ringo', '-l', '-m', options.path, 'compile.js']

cmd = command + arguments

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
            process = subprocess.Popen(cmd, stdin=input, stdout=output)
            if process.wait() != 0:
                exit(1)
        else:
            destpath = os.path.join(destroot, filename)
            shutil.copy(srcpath, destpath)
