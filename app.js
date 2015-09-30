var app = angular.module('racingFrogs', []);
app.controller('MainController', MainController);
app.factory('racingService', RacingService);
//No need to change anything above this line.

app.factory('RacingService', RacingService);
    var sv = this;
    
    sv.addTwoNumbers - function(x,y){
        return x + y;
    }
    

function MainController() {
    var vm = this; //instead of using this when refering to the controller, let's use vm. It will make things easier.
    vm.bank = 200;
    vm.joe = new Guy ('joe', 100);
    vm.bob = new Guy ('bob', 150);
    vm.frog1 = new Racer (1, 'Jimmy', 1);
    vm.frog2 = new Racer (2, 'George', 1);
    vm.frog3 = new Racer (3, 'Frank', 1);

    vm.froglist = [vm.frog1, vm.frog2, vm.frog3];
   // vm.frog1.push  is there a way to push the frogs to an array?
    
    function Racer(LaneNum, name, posX){
        vm.LaneNum = LaneNum;
        vm.name = name;
        vm.posX = posX;
        
        function race(){
            vm.froglist.forEach(function(posX){
                posX += Math.random();
            })
        }
    }
    
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
}