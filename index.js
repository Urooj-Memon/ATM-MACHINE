#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; //dollar
let myPin = 22880;
console.log("\n\tWELCOME! TO UROOJ - ATM MACHINE.");
console.log("\n\tMYPIN : 22880\t\n");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin:",
    }
]);
console.log(pinAnswer.pin);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select one option:",
            choices: ["withdraw", "check balance", "Fast cash"],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountanswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount:",
                type: "number",
            },
        ]);
        if (myBalance > amountanswer.amount) {
            myBalance -= amountanswer.amount;
            console.log(`${amountanswer.amount} Withdraw succesfully!`);
            console.log(`Your current Balance is:  ${myBalance}`);
        }
        else {
            console.log("Insufficient balance!!");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance} `);
    }
    else if (operationAns.operation === "Fast cash") {
        let amounttAnswer = await inquirer.prompt([
            {
                name: "Amount",
                message: "Enter your amount:",
                type: "list",
                choices: ["1000", "2000", "5000", "10000", "20000", "50000"],
            },
        ]);
        myBalance -= amounttAnswer.Amount;
        console.log(`your current Balance is: ${myBalance}`);
    }
}
else {
    console.log("Invalid pin number!");
}
