$(document).ready(function(){
    
    function diceRoll(numType){
        
        if(numType === "pct"){
            console.log("flag");
            
            //var pctOnes = Math.floor(Math.random() * 10) + 0;
            var set = [10, 20, 30, 40, 50, 60, 70, 80, 90];
            var pctOnes = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
            var pctTens = set[Math.floor(Math.random() * set.length)];
            
            console.log(pctOnes);
            console.log(pctTens);
            
            var outputRoll = pctOnes + pctTens;
            
            $("." + numType).html("You rolled: " + outputRoll + "%");
        }
        else{
            
            var outputRoll = Math.floor(Math.random() * numType) + 1;

            $("." + numType).html("You rolled: " + outputRoll);
        }
        
        //$("output").hasClass(numType).html(numType);
        
        
        
    }
    
    $("button").on("click", function(){
        
        var selectedDice = $(this).val();
        
        console.log(selectedDice);
        
        diceRoll(selectedDice);
        
    });
    
});