
//Add to display the value button that is pressed
function add(value){
    document.getElementById('display').value += value;
};

//Function that delete numbers in calculator, the value is equal to void for clean the display
function del(){
    document.getElementById('display').value = '';
};

// The result of the calculator operation
function equal(){
    const valDisplay = document.getElementById('display').value;
    const result = eval(valDisplay); //Eval is for calculate strings mathematically, the only strings become in mathematical operations
    document.getElementById('display').value = result;
};

