# Github Actions: Query Git branch name

Get pure Git branch name without ref/ prefix

## Inputs

### `name`

**Required** The environment variable name to export, ex. `CURRENT_BRANCH`, `GIT_BRANCH`. Default `"GIT_BRANCH_NAME"`.

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
