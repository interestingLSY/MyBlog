#!/bin/bash

ud = $(date +%Y%m%d-%h:%m)

clear

echo ----------adding...----------
git add .

echo ----------commiting...----------
git commit -a -m "Update on $ud"

echo ----------pushing...----------
git push origin master


