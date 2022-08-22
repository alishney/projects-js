// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

const bank = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money: 550,
    Fill: function () {
        let availableAmount = Number(input("Write how many ml of water you want to add:\n"));
        bank.water += availableAmount;
        availableAmount = Number(input("Write how many ml of milk you want to add:\n"));
        bank.milk += availableAmount;
        availableAmount = Number(input("Write how many grams of coffee beans you want to add:\n"));
        bank.beans += availableAmount;
        availableAmount = Number(input("Write how many disposable coffee cups you want to add:\n"));
        bank.cups += availableAmount;
    },
    Buy: function () {
        let action = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
        let availableCoffee = true;
        switch(action) {
            case "1":
                availableCoffee = (Math.min(Math.floor(bank.water / 250), Math.floor(bank.beans / 15), Math.floor(bank.cups)) > 0);
                if(availableCoffee){
                    console.log("I have enough resources, making you a coffee!");
                    bank.water -= 250;
                    bank.beans -= 16;
                    bank.cups -= 1;
                    bank.money += 4;
                } else {
                    console.log("Sorry, not enough water!");
                }
                break;
            case "2":
                availableCoffee = (Math.min(Math.floor(bank.water / 350), Math.floor(bank.milk / 75), Math.floor(bank.beans / 20), Math.floor(bank.cups)) > 0);
                if(availableCoffee) {
                    bank.water -= 350;
                    bank.milk -= 75;
                    bank.beans -= 20;
                    bank.cups -= 1;
                    bank.money += 7;
                } else {
                    console.log("Sorry, not enough water!");
                }
                break;
            case "3":
                availableCoffee = (Math.min(Math.floor(bank.water / 200), Math.floor(bank.milk / 100), Math.floor(bank.beans / 12), Math.floor(bank.cups)) > 0);
                if(availableCoffee) {
                    bank.water -= 200;
                    bank.milk -= 100;
                    bank.beans -= 12;
                    bank.cups -= 1;
                    bank.money += 6;
                } else {
                    console.log("Sorry, not enough water!");
                }
                break;
            case "back":
                break;
        }
    },
    Take: function () {
        console.log(`I gave you ${units[2]}${bank.money}`);
        bank.money = 0;
    },
    printCoffeeMachineState: function () {
        console.log(`The coffee machine has:
${bank.water} ${units[0]} of water
${bank.milk} ${units[0]} of milk
${bank.beans} ${units[1]} of coffee beans
${bank.cups} disposable cups
${units[2]}${bank.money} of money

`);}
};

const units = ["ml", "g", "$"];
let i = true;

while(i){
    const selectedAction  = input("Write action (buy, fill, take, remaining, exit):\n");
    switch(selectedAction) {
        case "buy":
            bank.Buy();
            break;
        case "fill":
            bank.Fill();
            break;
        case "take":
            bank.Take();
            break;
        case "remaining":
            bank.printCoffeeMachineState();
            break;
        case "exit":
            i = false;
            break;
    }
}




