function add(value){
    document.getElementById('display').value += value;
/*
-Añade en el display el respectivo valor que se clicka en el boton 
-En la funcion add Se agrega el valor que contiene el boton como string
-con el document.getElementById('Nombre de donde se muestran los datos').value llamamos a todo lo que trae el display y a eso le asignamos con
el += value lo que trae el mismo document.getelement agregado al nuevo valor que se agregue por medio de la misma funcion add, si se clickea
un boton funcionara individualmente
*/
};

function equal(){
    const valDisplay = document.getElementById('display').value
    const result = eval(valDisplay); //Pasa de simples strings a calculos matematicos
    document.getElementById('display').value = result;
/*
-Lo que hacemos con la funcion igual para poder conseguir el resultado es que creamos una constante que tenga el valor del display osea que 
traiga todo lo del get.ElementById, el cual contendra todo el valor que se alla agregado con la funcion add
-Despues en otra constante llamada resultado usamos el metodo eval que nos permite convertir todos los strings que tenga el display en 
operaciones matematicas, aceptando todos los numeros y signos matematicos y se lo asignamos
-Finalmente Al mismo .getElementById le decimos que sea igual a la variable resultado que contiene el display pero con el metodo eval asi
convirtiendo todo a operaciones matematicas y numeros que puede procesar la calculadora
*/    
};

function del(){
    document.getElementById('display').value = '';
/*
-Aqui lo que conseguimos es que en la funcion que creamos para borrar digitos en el display, mencionamos el .getElementById es igual a 
vacio que en este caso se representa con '', para poder que no tiene ningun digito 
*/
};