import * as core from '@actions/core'
import { context } from '@actions/github'
//const io = require('@actions/io')
import { GitHub } from '@actions/github'
import octokit from './octokit'


let regexpCC2: RegExp = /\d\d*?\.?\d*\s?[C,c][C,c]2/;

async function run() {
  try {
    //NOTE: check for Null!
    //console.log("context is " + JSON.stringify(context, null, 2))
    const message = core.getInput('message')
    //const prDescription = context.payload!.base.body
    const description = "Hello, if you solve this issue, you can get 220.9283 CC2."
    console.log("This is the message I found: " + description)
    if (regexpCC2.test(description))
    {
      const amount = regexpCC2.exec(description)![0].substring(-4, 2)
      console.log("It has an amount!"+ amount)
    }else
    {
      console.log("It does NOT have an amount")
    }
    const noAmountMessage = "Hello, if you want to solve this issue, I will give you cookies CC2:)"
    if (regexpCC2.test(noAmountMessage))
    {
      console.log("2:It has an amount!")
    }else
    {
      console.log("2:It does NOT have an amount")
    }
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