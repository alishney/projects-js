// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let bank = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550
};

let units = ["ml", "g", "$"];

function output() {
    console.log(`The coffee machine has:
${bank.water} ${units[0]} of water
${bank.milk} ${units[0]} of milk
${bank.beans} ${units[1]} of coffee beans
${bank.cups} disposable cups
${units[2]}${bank.money} of money

`);
};

function buy(){
    action = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    switch(action) {
        case "1":
            bank.water -= 250;
            bank.beans -= 16;
            bank.cups -= 1;
            bank.money += 4;
            break;
        case "2":
            bank.water -= 350;
            bank.milk -= 75;
            bank.beans -= 20;
            bank.cups -= 1;
            bank.money += 7;
            break;
        case "3":
            bank.water -= 200;
            bank.milk -= 100;
            bank.beans -= 12;
            bank.cups -= 1;
            bank.money += 6;
            break;
    }
};

function fill() {
    let amount = Number(input("Write how many ml of water you want to add:"));
    bank.water += amount;
    amount = Number(input("Write how many ml of milk you want to add:"));
    bank.milk += amount;
    amount = Number(input("Write how many grams of coffee beans you want to add:"));
    bank.beans += amount;
    amount = Number(input("Write how many disposable coffee cups you want to add:"));
    bank.cups += amount;
};

function take() {
    console.log(`I gave you ${units[2]}${bank.money}`);
    bank.money = 0;
};

for(i = 0; i < 100; i++){
    output();
    let activity = input("Write action (buy, fill, take):");
    switch(activity) {
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
    }
};
