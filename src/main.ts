import * as core from '@actions/core'
import { context } from '@actions/github'
//const io = require('@actions/io')
import { GitHub } from '@actions/github'
import octokit from './octokit'


let regexpCC2: RegExp = /\d*\.?\d*\s?([C,c][C,c]2|[C,c]oder [C,c]oins?)/;

async function run() {
  try {
    //console.log("context is " + JSON.stringify(context, null, 2))
    const message = core.getInput('message')
    const prDescription = context.payload.pull_request!.description
    console.log(JSON.stringify(prDescription, null,2))
    // if (regexpCC2.test(message))
    // {
      
    // }

/*    await octokit.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body: message
    })
*/
  } catch (error) {
    core.setFailed(error.message)
  }

}
run()