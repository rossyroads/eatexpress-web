#!/bin/sh -i

# Reuse ssh-agent, but don't throw error when no agent present
ssh-add -l || true

# export DO_NOT_TRACK=1
# export NODE_ENV=dev