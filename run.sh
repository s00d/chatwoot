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

OPEN="no"
while [[ "$#" -gt 0 ]]; do
    case $1 in
      -o|--open|-O|--OPEN) OPEN="yes"; shift ;;
      *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done
echo "auto browser open: $OPEN"

if [[ "yes" == $RELOAD ]]
then
  bundle exec rake db:create
  bundle exec rake db:reset
fi

if [[ "yes" == $OPEN ]]
then
  open http://127.0.0.1:3000/
  open http://127.0.0.1:3000/widget_tests
fi

foreman start -f Procfile.dev
