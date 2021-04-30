
function totalTip(bill, service){
switch(service){
    case 'good':
        tip = .2;
        tipAmount = (bill * tip);
        return tipAmount
        break;
    case 'fair':
        tip = .15;
        tipAmount = (bill * tip);
        return tipAmount
        break;
    case 'bad':
        tip = .10;
        tipAmount = (bill * tip);
        return tipAmount
        break;
    default:
        console.log("You didn't select a level of service. Try again!");
        break;
}
}
totalTip(300, 'fair')
console.log(`Total Tip is $${tipAmount}`);