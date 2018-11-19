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
        else if(numType === "all"){
            
            var allDice = [4, 6, 8, 10, 12, 20, "pct"];
            
            for(var i = 0; i <= 6; i++){
                if(i === 6){
                    var setAll = [10, 20, 30, 40, 50, 60, 70, 80, 90];
                    var pctOnesAll = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
                    var pctTensAll = setAll[Math.floor(Math.random() * setAll.length)];
                    var outputRoll = pctOnesAll + pctTensAll;
                    $("." + allDice[6]).html("You rolled: " + outputRoll + "%");
                }
                else{
                    var outputRoll = Math.floor(Math.random() * allDice[i]) + 1;
                    $("." + allDice[i]).html("You rolled: " + outputRoll);
                }
            }
            
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