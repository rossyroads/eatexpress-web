#!/bin/sh

whoami

# Const
SCRIPTS_PATH=/workspace/.devcontainer/scripts

# Permissions
cd /workspace
sudo chown -R ${USER}:${USER} .
sudo chown -R ${USER}:${USER} ~/.ssh
chmod 0700 ~/.ssh
chmod 600 ~/.ssh/*
chmod 0744 ${SCRIPTS_PATH}/*

# Check if repo initialized
if [[ -f '/workspace/package.json' ]]; then
    # Build
    cd /workspace

    # Install Node version
    ${SCRIPTS_PATH}/nvm-install.sh

    # NPM
    npm install -g npm@latest

    # Install pnpm
    # npm rm -g pnpm
    npm install -g pnpm@latest

    if [ -f "package.json" ]; then
        pnpm install
        # pnpm build
    fi

    # Turbo
    # npm install -g turbo

    # # Deno CLI for Supabase
    # curl -fsSL https://deno.land/install.sh | sh -s -- -y

    # # Vercel cli
    # npm i -g vercel

    # Gitlab-ci-linter
  #   curl -1sLf \
  # 'https://dl.cloudsmith.io/public/orobardet/gitlab-ci-linter/setup.deb.sh' \
  # | sudo -E bash
  #   sudo apt-get install -y gitlab-ci-linter
  #   echo "machine gitlab.com account <YOUR_PERSONAL_ACCESS_TOKEN>" >> ~/.netrc
fi

# Database setup
# TBA

# Aliases
${SCRIPTS_PATH}/aliases.sh

# Bashrc additions
${SCRIPTS_PATH}/bashrc.sh
