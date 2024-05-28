# GIT commands and code snippet

## How to clone all projects of a group at once in GitLab?

[Using glab-cli](https://stackoverflow.com/a/29104065)

```glab
# install glab-cli first

glab auth login --hostname hostname.my.domain --token <token>

glab repo clone -g <group> -a=false -p --paginate -G
```

[Powershell run git pull over all subdirectories](https://stackoverflow.com/questions/3497123/run-git-pull-over-all-subdirectories)

```powershell
Get-ChildItem -Recurse -Directory -Hidden -Filter .git | ForEach-Object { & git --git-dir="$($_.FullName)" --work-tree="$(Split-Path $_.FullName -Parent)" pull origin master }
```

[Shell one liner with curl, jq, tr](https://stackoverflow.com/a/56679722)
```sh
for repo in $(curl -s --header "PRIVATE-TOKEN: your_private_token" https://<your-host>/api/v4/groups/<group_id> | jq -r ".projects[].ssh_url_to_repo"); do git clone $repo; done;
```

## Update git creds

### Local token

update git token
```sh
git remote -v

git remote set-url origin [repo-url]

# for this repo for example is:
git remote set-url origin https://isaacTadela:ghp_XXXX@github.com/isaacTadela/mkdocs-material.git

# for private gitlab instance:
git remote set-url origin https://<USERNAME>:ghp_XXXX@gitlab.xyz.cloud/<PROJECT>/<REPO>.git

git remote -v
```

## vs code shortcut

keyboard shortcut for Git Sync, by default there is none so you need to add it


git.sync  - Ctrl + Shift + Enter
git.push    - ??

git.undoCommit - Ctrl + Shift + PageDown


```mermaid
sequenceDiagram
  par Local changes
  Working directory ->> Stash: stash your changes
  Stash ->> Working directory: apply your changes
  Working directory ->> Staging directory: add to index
  Staging directory ->> Local Repo: commit your changes
  end
  Remote Repo -->> Local Repo: fetch from remote
  Local Repo ->> Working directory: checkout branches
  Local Repo ->> Working directory: merge and rebase branches
  Remote Repo -->> Working directory: pull from remote
```

