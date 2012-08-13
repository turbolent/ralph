#!/bin/sh
svn co http://svn.webkit.org/repository/webkit/trunk WebKit --depth empty
cd WebKit
svn update WebKit.pro
svn update Source --set-depth immediates
svn update Source/JavaScriptCore --set-depth infinity
svn update Source/WTF --set-depth infinity
svn update Tools
Tools/Scripts/build-jsc --qt
