#!/bin/bash -i

# Bashrc Additions
cat <<EOF >>~/.bashrc
 # 
# gitlab-ci-linter
export GCL_NETRC=1
export DO_NOT_TRACK=1
EOF
