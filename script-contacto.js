var e;//creacion o declaracion de variable;
var f = null; //forma mas ideal de crear o declarar;

e = "Wilber";//asignacion de variable;
var a = "Hola";//creo y asigno;
var b = " mundo"
var c = a + b;
var a = 5;
var d = a >0;
d = !d;
//condicionales con Bifurcador condicional IF;
if(d==true){
    console.log("a es "+ a);
}else if(!d!==true){
    console.log("mi flaka tiene otro");
}else if(!!d==true){
    console.log("mi flaka me pidio boda");
}

//Condicionales con Bifurcador condicinoal SWITCH;

switch(5>5){
    case true: 
        console.log("mama");
        break;
    case false:
        console.log("papa");
        if(6!=(6+6-(2*3))){
            console.log("hermano")
        }else{
            console.log("primo")
        }
        break;
    default:
        console.log("no tiene parientes");
};