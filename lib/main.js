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
let regexpCC2 = /\d\d*?\.?\d*\s?[C,c][C,c]2/;
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //NOTE: check for Null!
            //console.log("context is " + JSON.stringify(context, null, 2))
            const message = core.getInput('message');
            const prDescription = github_1.context.payload;
            console.log(JSON.stringify(prDescription, null, 2));
            const description = "Hello, if you solve this issue, you can get 220.9283 CC2.";
            console.log("This is the message I found: " + description);
            if (regexpCC2.test(description)) { // Note: If user specifies more than one amount ("e.g 'I could give you 100 CC2 or 220 CC2, the following
                // function chooses the first one (i.e. 100 CC2) automatically.)
                const amountPlusCC2 = regexpCC2.exec(description)[0];
                // We only want the amount, so let's cut the 'CC2' from the string
                console.log("The pull request definition specifies the following amount!" + amountPlusCC2.substring(-4, amountPlusCC2.length - 4));
            }
            else {
                console.log("The pull request definition does NOT have an amount");
            }
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
