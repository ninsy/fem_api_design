#!/bin/bash
export NODE_ROOT=$(pwd)

if [[ $1 == 'dev' ]]; then
  export NODE_ENV='development'
elif [[ $1 == 'prod' ]]; then
  export NODE_ENV='production'
fi
