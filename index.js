const core = require('@actions/core');

async function run() {
    try {
        // get input
        const name = core.getInput('name', { required: true })
        // export variable
        core.exportVariable(name, process.env.GITHUB_REF.split('/').slice(2).join('/'));
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run()
