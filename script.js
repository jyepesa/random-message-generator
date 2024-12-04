let randomMessage = "";
function luckyAlcohol() {
    const randomNum = Math.floor(Math.random() * 8)
    switch(randomNum) {
        case 0:
            return "vodka";
            break;
        case 1:
            return "tequila";
            break;
        case 2: 
            return "beer";
            break;
        case 3: 
            return "gin";
            break;
        case 4:
            return "rum";
            break;
        case 5:
            return "wine";
            break;
        case 6:
            return "cognac";
            break;
        case 7:
            return "water";
            break;
    }
}
function moment() {
    const randomNum = Math.floor(Math.random() * 6)
    switch(randomNum) {
        case 0:
            return "doing yoga";
            break;
        case 1:
            return "waiting for your crush";
            break;
        case 2: 
            return "driving";
            break;
        case 3: 
            return "grocery shopping";
            break;
        case 4:
            return "being already drunk from something else";
            break;
        case 5:
            return "swimming";
            break;
    }
}
function place () {
    const randomNum = Math.floor(Math.random() * 6)
    switch(randomNum) {
        case 0:
            return "at work";
            break;
        case 1:
            return "at your in laws";
            break;
        case 2: 
            return "in the doctor's office";
            break;
        case 3: 
            return "in the line for the bank";
            break;
        case 4:
            return "at the beach";
            break;
        case 5:
            return "at church";
            break;
    }
}
function message() {
    const drink = luckyAlcohol()
    if (drink === "water") {
        console.log("You got water, that's just boring... Try again")
    } else {
        console.log(`Your lucky drink is ${drink}. It should be drunk while ${moment()} or ${place()}.`)
    }
}
message()