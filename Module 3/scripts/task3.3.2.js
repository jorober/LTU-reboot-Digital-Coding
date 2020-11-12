function drinkOrder (drink, size){
    
    var drinkLow = drink.toLowerCase();

    switch (drinkLow) {

        case 'cola':
            console.log('You have ordered a ' + size + ' ' + drinkLow);
            break;

        case 'lemonade':
            console.log('You have ordered a ' + size + ' ' + drinkLow);
            break;

        case 'orangeade':
            console.log('You have ordered a ' + size + ' ' + drinkLow);
             break;
    
        default:
            console.log(drink + ' drink ERROR drink unavailable neyyegrgh error');
            break;
    }
}