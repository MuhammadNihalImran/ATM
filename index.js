#! /usr/bin/env node
import inquirer from 'inquirer';
async function main() {
    const mypin = 1234; // Example PIN
    let balanceAmount = 1000; // Example balance amount
    const pin = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: "Enter your pin:",
        }
    ]);
    if (pin.pin === mypin) {
        const draw = await inquirer.prompt([
            {
                message: "What operation do you want to perform?",
                name: "operator",
                type: "list",
                choices: ["withdraw", "check balance"],
            }
        ]);
        if (draw.operator === "withdraw") {
            const amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount you want to withdraw:"
                }
            ]);
            if (amount.amount <= balanceAmount) {
                balanceAmount -= amount.amount;
                console.log("Remaining balance:", balanceAmount);
            }
            else {
                console.log("Insufficient balance.");
            }
        }
        else if (draw.operator === "check balance") {
            console.log("Your balance: ", balanceAmount);
        }
    }
    else {
        console.log("Wrong PIN!");
    }
}
main();
