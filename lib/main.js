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
let regexpCC2 = /\d\d*?\.?\d*\s?[C,c][C,c]2/;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //NOTE: check for Null!
            //console.log("context is " + JSON.stringify(context, null, 2))
            const message = core.getInput('message');
            //const prDescription = context.payload!.base.body
            const description = "Hello, if you solve this issue, you can get 220.9283 CC2.";
            console.log("This is the message I found: " + description);
            if (regexpCC2.test(description)) {
                console.log("It has an amount!" + regexpCC2.exec(description)[0].substring(-4));
            }
            else {
                console.log("It does NOT have an amount");
            }
            const noAmountMessage = "Hello, if you want to solve this issue, I will give you cookies CC2:)";
            if (regexpCC2.test(noAmountMessage)) {
                console.log("2:It has an amount!");
            }
            else {
                console.log("2:It does NOT have an amount");
            }
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
