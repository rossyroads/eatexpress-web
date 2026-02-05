#!/bin/bash -i
# INTERACTIVE
# nvm needs be run interactively, see https://github.com/microsoft/vscode-dev-containers/issues/559

whoami
cd /workspace

# Node
if [ -f "./.nvmrc" ]; then
    nvm install
    nvm use
else
    node -v >./.nvmrc
fi
