# Github Actions: Query Git branch name

Get pure Git branch name without `***/ref/` prefix.

## Inputs

### `name`

**Required** The environment variable name to export, ex. `CURRENT_BRANCH`, `GIT_BRANCH`. Default `"GIT_BRANCH_NAME"`.

On `pull_request` event, two additional environment variables are exported for `HEAD` and `BASE`. The env names are suffixed with `_HEAD` and `_BASE`. By default, they are `GIT_BRANCH_NAME_HEAD` and `GIT_BRANCH_NAME_BASE`.

## Outputs

### `git_branch_name`

The current Git branch name.

On `pull_request` event, it is the same as `git_branch_name_head`.

### `git_branch_name_head`

The current Git branch name at `HEAD`. Only available on `pull_request` event.

### `git_branch_name_base`

The current Git branch name at `BASE`. Only available on `pull_request` event.

## Example usage

Export to default environment variable `GIT_BRANCH_NAME`.
```yaml
uses: petehouston/github-actions-query-branch-name@v1.2
```

Export to custom environment variable, ex. `MY_BRANCH`
```yaml
uses: petehouston/github-actions-query-branch-name@v1.2
with:
  name: MY_BRANCH
```

Get branch name from output.
```yaml
- name: Query Git branch name
  uses: petehouston/github-actions-query-branch-name@v1.2
  id: queryBranch
- name: Get Git branch name
  run: |-
    echo "GIT_BRANCH_NAME = $GIT_BRANCH_NAME"
    echo "Branch name: ${{ steps.queryBranch.outputs.git_branch_name }}"
```

Get branch name from `pull_request`.
```yaml
- name: Query Git branch name
  uses: petehouston/github-actions-query-branch-name@v1.2
  id: queryBranch
- name: Get Git branch name only on pull request
  if: github.event_name == 'pull_request'
  run: |-
    echo "GIT_BRANCH_NAME = $GIT_BRANCH_NAME"
    echo "GIT_BRANCH_NAME_HEAD = $GIT_BRANCH_NAME_BEAD"
    echo "GIT_BRANCH_NAME_BASE = $GIT_BRANCH_NAME_BASE"
    echo "Branch name: ${{ steps.queryBranch.outputs.git_branch_name }}"
    echo "Branch name: ${{ steps.queryBranch.outputs.git_branch_name_head }}"
    echo "Branch name: ${{ steps.queryBranch.outputs.git_branch_name_base }}"
```
