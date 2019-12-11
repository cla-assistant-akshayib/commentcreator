"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github_1 = require("@actions/github");
let regexpCC2 = /\d*\.?\d*\s?([C,c][C,c]2|[C,c]oder [C,c]oins?)/;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("context is " + JSON.stringify(github_1.context, null, 2));
            const message = core.getInput('message');
            const prDescription = github_1.context.payload.pull_request.comment.body;
            const description = JSON.stringify(prDescription, null, 2);
            console.log("This is the message I found: " + JSON.stringify(prDescription, null, 2));
            /*if (regexpCC2.test(description))
            {
              console.log("It it as an amount!")
            }else
            {
              console.log("It does NOT have an amount")
            }
        */
            /*    await octokit.issues.createComment({
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  issue_number: context.issue.number,
                  body: message
                })
            */
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
