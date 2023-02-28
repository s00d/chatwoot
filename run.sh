#!/bin/bash
#bundle
#yarn

RELOAD="no"
while [[ "$#" -gt 0 ]]; do
    case $1 in
      -r|--reload|-R|--RELOAD) RELOAD="yes"; shift ;;
      *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done
echo "auto db reload: $RELOAD"

if [[ "yes" == $RELOAD ]]
then
  bundle exec rake db:create
  bundle exec rake db:reset
fi

open http://127.0.0.1:3000/
open http://127.0.0.1:3000/widget_tests

foreman start -f Procfile.dev
