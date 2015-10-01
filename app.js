var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
app.service('RacingService', RacingService);
//No need to change anything above this line.

// function RacingService(){
//     var sv = this;
//     
//     sv.addTwoNumbers = function(x,y){
//         return x + y;
//     };
// 
// }

function MainController(RacingService) {
    var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.
    vm.bank = 200;
    vm.joe = new Guy ('joe', 100);
    vm.bob = new Guy ('bob', 150);
    vm.froglist = [];
    
    var finishLine = 93;
    var maxDistance = 97;

    //keep this function
    vm.addFrogToList = function(frog){
        vm.froglist.push(frog);
    }

    vm.test = RacingService.addTwoNumbers(3,3);


    // vm.froglist = [vm.frog1, vm.frog2, vm.frog3];
   // vm.frog1.push  is there a way to push the frogs to an array?
    
    function Racer(LaneNum, name, posX){
        this.LaneNum = LaneNum;
        this.name = name;
        this.posX = posX;
    }
    
    function checkWinners() {
        var potentialWinners = [];
        vm.winners = [];
        race.forEach(function(frog){
            if (frog.posX >= finishLine){
                potentialWinners.push(frog);
            } 
        });
        if(potentialWinners.length > 0) {
            var firstToCross = 0;
            var firstPlace;
            potentialWinners.forEach(function(frog){
                if (frog.posX > firstToCross){
                    firstToCross = frog.posX;
                    firstPlace = frog;
                } else {
                    vm.winners.push(frog);
                }
            });
            vm.winners.unshift(firstPlace);
            vm.racing = false;
        } else {
            vm.winners = potentialWinners;
        }
    }

    function moveFrogs(){
        var indexOfFrogToMove = Math.floor(Math.random * vm.race.length) * 3;
        vm.race[indexOfFrogToMove].posX += Math.random * 3;
        if(vm.racing) {
            checkWinners;
            setTimeout(vm.moveFrogs, 200)
        }
        // vm.froglist.forEach(function(frog){
        //     frog.posX += Math.random();
        // })
    }

    vm.startRace = function() {
        if(!vm.racing)
        setTimeout(function(){
            moveFrogs();
        }, 200);
    }
    
    // Betters Below Here
    
    function Guy(name, startingCash){
        this.name = name;
        this.cash = startingCash;
        this.giveCash = function(amount) {
            if (amount <= this.cash && amount > 0) {
                this.cash = this.cash - amount;
                return amount;
            } else {
                alert("I don't have enough cash to give you " + amount + ". " + this.name + " says...");
                return 0;
            }
        };
        this.receiveCash = function(amount) {
            if (amount > 0) {
                this.cash = this.cash + amount;
                return amount;
            } else {
                alert(amount + " isn't an amount I'll take " + this.name + " says...");
                return 0;
            }
        }
    }
    vm.giveMoneyToJoe = function() {
        if (vm.bank >= 10) {
            vm.bank -= vm.joe.receiveCash(10)
        } else {
            alert("The bank is out of money.")
        }
    }

    vm.receiveMoneyFromBob = function() {
        vm.bank += vm.bob.giveCash(5)
    }


    function testing (){
       var frog1 = new Racer (1, 'Jimmy', 1);
       var frog2 = new Racer (2, 'George', 1);
       var frog3 = new Racer (3, 'Frank', 1);
       vm.addFrogToList(frog1);
       vm.addFrogToList(frog2);
       vm.addFrogToList(frog3);
    }
    testing();

}