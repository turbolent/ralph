import fnmatch
import os
import shutil
import subprocess

src = 'src'
build = 'build'
prefix = len(src)

for srcroot, dirnames, filenames in os.walk(src):
    buildroot = build + srcroot[prefix:]
    if not os.path.exists(buildroot):
        os.mkdir(buildroot)
    for filename in filenames:
        srcpath = os.path.join(srcroot, filename)
        print '*', srcpath
        if fnmatch.fnmatch(filename, '*.ralph'):
            buildfilename = os.path.splitext(filename)[0] + '.js'
            buildpath = os.path.join(buildroot, buildfilename)
            input = open(srcpath, 'r')
            output = open(buildpath, 'w')
            process = subprocess.Popen(['node', 'compile.js', '--bootstrap'],
                                       stdin=input, stdout=output)
        else:
            buildpath = os.path.join(buildroot, filename)
            shutil.copy(srcpath, buildpath)
