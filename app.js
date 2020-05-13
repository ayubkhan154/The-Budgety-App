var budgetController = (function() {
        //Some Code
})();

var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    };
    
    return{

      getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();

var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstrings();

         document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

         document.addEventListener('keypress', function (event) {
             if (event.keyCode === 13 || event.which === 13) {
                 console.log('check key', event.keyCode);
                 ctrlAddItem();
             }
         });
    };

    var ctrlAddItem = function(){
         // 1. Get the input data

         var input = UICtrl.getInput();
         console.log(input);

         // 2. Get Item to the budget controller

         // 3. Add the item to UI

         // 4. Calculate budget

         // 5. Dislay budget on UI 
        console.log("Hii");
    };

    return{
        init: function(){
            setupEventListeners();
        }
    };

})(budgetController, UIController);

//execute Event Listeners
controller.init();