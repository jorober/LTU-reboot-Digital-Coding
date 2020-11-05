
/*
var bill = 100;
var tip1 = bill / 100;
var tip2 = tip1 * 10;
var tip = 'Your bill total is '+ bill  + ' and your required tip is ' + tip2.toFixed(2);

document.write(tip)
*/


var bill = 100.106;
var tip1 = bill / 100;
var tip2 = tip1 * 10;
var total = bill + tip2
var output = 'Your total bill is ' + total.toFixed(2) + ' we have added a tip of ' + tip2.toFixed(2) + '. Your bill without the tip is ' + bill.toFixed(2)
document.write(output)


