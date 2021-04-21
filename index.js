const core = require('@actions/core');

async function run() {
    try {
        // get input
        const name = core.getInput('name', { required: true })
        // current branch
        const branchName = process.env.GITHUB_REF.split('/').slice(2).join('/');
        // export to variable
        core.exportVariable(name, branchName);
        // set output
        core.setOutput('git_branch_name', branchName);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run()
