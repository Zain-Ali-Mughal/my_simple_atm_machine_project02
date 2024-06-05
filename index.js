#! /usr/bin/env node
// Making a simple ATM machine
import inquirer from "inquirer";
import chalk from "chalk";
// Setting my balance and pin number.
let myBalance = 100000;
let myPin = 1998;
// Printing a welcome message for the user.
console.log(chalk.green(`
==========================================
`));
console.log(chalk.bold.blue("\n\tWelcome to my ATM machine\n"));
console.log(chalk.green(`
==========================================
`));
// Making code ask the user for pin number.
let askPin = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: chalk.yellow("Please enter your pin number ="),
    },
]);
// Checking if the pin number is correct or not.
if (askPin.pin === myPin) {
    console.log(chalk.blue(`
------------------------------------------
`));
    console.log(chalk.green("\n\tPin number is correct"));
    console.log(chalk.blue(`
------------------------------------------
`));
    // Making code ask the user what they want to do.
    let askAction = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: chalk.yellow("\n\tWhat do you want to do?\n\n"),
            choices: ["Withdraw", "Deposit", "Check Balance"],
        },
    ]);
    // Checking if the user wants to withdraw, deposit, or check balance.
    if (askAction.action === "Withdraw") {
        console.log(chalk.blue(`
------------------------------------------
`));
        console.log(chalk.cyan("\n\tYou want to withdraw"));
        console.log(chalk.blue(`
------------------------------------------
`));
        // Asking the user how much they want to withdraw.
        let askAmount = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: chalk.yellow("\n\tHow much do you want to withdraw?"),
            },
        ]);
        // Checking if the user has enough balance to withdraw.
        if (askAmount.amount <= myBalance) {
            myBalance = myBalance - askAmount.amount;
            console.log(chalk.blue(`
------------------------------------------
`));
            console.log(chalk.green("\n\tYou have withdrawn " + askAmount.amount));
            console.log(chalk.green("\n\tYour new balance is " + myBalance));
            console.log(chalk.blue(`
------------------------------------------
`));
        }
        else {
            console.log(chalk.blue(`
------------------------------------------
`));
            console.log(chalk.red("\n\tYou don't have enough money"));
            console.log(chalk.blue(`
------------------------------------------
`));
        }
    }
    else if (askAction.action === "Deposit") {
        console.log(chalk.blue(`
------------------------------------------
`));
        console.log(chalk.cyan("\n\tYou want to deposit"));
        console.log(chalk.blue(`
------------------------------------------
`));
        // Asking the user how much they want to deposit.
        let askAmount = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: chalk.yellow("\n\tHow much do you want to deposit?"),
            },
        ]);
        myBalance = myBalance + askAmount.amount;
        console.log(chalk.blue(`
------------------------------------------
`));
        console.log(chalk.green("\n\tYou have deposited " + askAmount.amount));
        console.log(chalk.green("\n\tYour new balance is " + myBalance));
        console.log(chalk.blue(`
------------------------------------------
`));
    }
    else if (askAction.action === "Check Balance") {
        console.log(chalk.blue(`
------------------------------------------
`));
        console.log(chalk.green("\n\tYour current balance is " + myBalance));
        console.log(chalk.blue(`
------------------------------------------
`));
    }
}
else {
    console.log(chalk.blue(`
------------------------------------------
`));
    console.log(chalk.red("\n\tPin number is not correct"));
    console.log(chalk.blue(`
------------------------------------------
`));
}
