//  https://github.com/rihamphero/Assignment3

    function kilometerToMeter(kilometer){
        var meter = kilometer * 1000;
        return meter;
    
    }
    var Karim = kilometerToMeter(20);

    

    function hotelCost(days){
        var cost = 0;
        if(days <=10){
        cost = days * 100;
     }
     else if(days<=20){
         var firstDays = 10 * 100;
         var remaining = days-10;
         var secondDays = remaining * 80;
         cost = firstDays + secondDays;
     }
     else{
         var firstDays = 10 * 100;
         var secondDays = 10 * 80;
         var remaining = days - 20;
         var thirdDays = remaining * 50;
         cost = firstDays + secondDays + thirdDays;
     }
        return cost;
     }
        var count = hotelCost(40);