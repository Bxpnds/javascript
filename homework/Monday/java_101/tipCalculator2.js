function totalValue(bill, service){
    switch(service){
        case 'good':
            tip = .2;
            totalTip = (bill * tip) + bill;
            return totalTip
            break;
        case 'fair':
            tip = .15;
            totalTip = (bill * tip) + bill;
            return totalTip
            break;
        case 'bad':
            tip = .10;
            totalTip = (bill * tip) + bill;
            return totalTip
            break;
        default:
            console.log("You didn't select a level of service. Try again!");
            break;
    }
    }
    totalValue(300, 'fair')
    console.log(`Total Bill is $${totalTip}`);