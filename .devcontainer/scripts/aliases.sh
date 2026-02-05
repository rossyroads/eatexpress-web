#!/bin/bash -i

# Alias Setup
cat <<EOF >~/.bash_aliases
alias alias-update='bash /workspace/.devcontainer/scripts/aliases.sh && source ~/.bash_aliases'
alias ssha='eval \$(ssh-agent) && ssh-add ~/.ssh/id_rsa'
alias pn=pnpm
alias supa='pnpm exec supabase --workdir /workspace/apps'
alias gcl='gitlab-ci-linter'
alias pnx='pnpm exec'
EOF
