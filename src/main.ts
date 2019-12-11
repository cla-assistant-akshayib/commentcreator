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
      const amountPlusCC2 = regexpCC2.exec(description)![0]
      // We only want the amount, so let's cut the 'CC2' from the string
      console.log("It has an amount!"+ amountPlusCC2.substring(-4, amountPlusCC2.length-4))
      console.log("We found these many expressions: ", regexpCC2.exec(description)!.length)
    }else
    {
      console.log("It does NOT have an amount")
    }
    const description1 = "Hello, if you solve this issue, you can get 220.9283 CC2 or 100 CC2 or 100000 CC2. You choose:)"
    console.log("This is the message I found: " + description1)
    if (regexpCC2.test(description1))
    {
      console.log("We found these many expressions: ", regexpCC2.exec(description1)!)
    }else
    {
      console.log("It does NOT have an amount")
    }
  } catch (error) {
    core.setFailed(error.message)
  }

}
run()