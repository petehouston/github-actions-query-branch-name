const core = require('@actions/core');

async function run() {
    try {
        // output name
        const OutputGitBranchName = 'git_branch_name';
        // get input
        const name = core.getInput('name', { required: true })
        // current branch
        const branchName = process.env.GITHUB_REF.split('/').slice(2).join('/');
        // export to variable
        core.exportVariable(name, branchName);
        // set output
        core.setOutput(OutputGitBranchName, branchName);

        // check if this is a pull request
        if (process.env.GITHUB_EVENT_NAME === 'pull_request') {
            // const baseBranchName = process.env.GITHUB_BASE_REF.split('/').slice(2).join('/');
            const baseBranchName = process.env.GITHUB_BASE_REF;
            core.exportVariable(`${name}_BASE`, baseBranchName);
            core.setOutput(`${OutputGitBranchName}_base`, baseBranchName);

            // const headBranchName = process.env.GITHUB_HEAD_REF.split('/').slice(2).join('/');
            const headBranchName = process.env.GITHUB_HEAD_REF;
            core.exportVariable(`${name}_HEAD`, headBranchName);
            core.setOutput(`${OutputGitBranchName}_head`, headBranchName);
        }
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run()
