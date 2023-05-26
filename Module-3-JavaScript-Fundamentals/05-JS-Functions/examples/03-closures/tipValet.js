function tipTheValet(tip){
    return function (bill){
        return console.log(tip + bill);
    }
}

let valetTip = tipTheValet(5);

valetTip(100);