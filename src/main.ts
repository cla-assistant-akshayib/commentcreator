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
    const prDescription = context.payload
    console.log(JSON.stringify(prDescription, null, 2))
    const description = "Hello, if you solve this issue, you can get 220.9283 CC2."
    console.log("This is the message I found: " + description)
    if (regexpCC2.test(description))
    { // Note: If user specifies more than one amount ("e.g 'I could give you 100 CC2 or 220 CC2, the following
      // function chooses the first one (i.e. 100 CC2) automatically.)
      const amountPlusCC2 = regexpCC2.exec(description)![0]
      // We only want the amount, so let's cut the 'CC2' from the string
      console.log("The pull request definition specifies the following amount!"+ amountPlusCC2.substring(-4, amountPlusCC2.length-4))
    }else
    {
      console.log("The pull request definition does NOT have an amount")
    }
  } catch (error) {
    core.setFailed(error.message)
  }

}
run()