# Github Actions: Query Git branch name

Get pure Git branch name without `***/ref/` prefix.

## Inputs

### `name`

**Required** The environment variable name to export, ex. `CURRENT_BRANCH`, `GIT_BRANCH`. Default `"GIT_BRANCH_NAME"`.

## Outputs

### `git_branch_name`

The current Git branch name.

## Example usage

Export to default environment variable `GIT_BRANCH_NAME`.
```yaml
uses: petehouston/github-actions-query-branch-name@v1.0
```

Export to custom environment variable, ex. `MY_BRANCH`
```yaml
uses: petehouston/github-actions-query-branch-name@v1.0
with:
  name: MY_BRANCH
```

Get branch name from output.
```yaml
- name: Query Git branch name
  uses: petehouston/github-actions-query-branch-name@v1.0
  id: queryBranch
- name: Get Git branch name
  run: |-
    echo "GIT_BRANCH_NAME = $GIT_BRANCH_NAME"
    echo "Branch name: ${{ steps.queryBranch.outputs.git_branch_name }}"
```
