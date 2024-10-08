function mostrarProductos (){


let catalogo=' catálogo de productos: \n' /* la n hace que se permita el salto de line tipo listita */
/* fijarme si le puedo agregar un alert... tipo alert (seleccione A para frutas o B para verduras)
catalogo+='a FRUTAS' /*la idea es poner frutas y la lista de las frutas y despues la lista de las verduras*/
catalogo+='a) FRUTAS- \n';
catalogo+='1. bananas- $2000 \n';
catalogo+='2.manzanas- $1700 \n'; 
catalogo+='3.peras- $1300 \n';
catalogo+='4.frutillas- $1600 \n';
catalogo+='5.kiwi- $2600 \n';
catalogo+='b) VERDURAS- \n';
catalogo+='6.papa- $1400 \n';
catalogo+='7.calabaza-$1000 \n';
catalogo+='8.zanahoria- $1400\n';
return catalogo;
}

function comprarProductos(){

    let total=0;
    let seguirComprando=true;


    while (seguirComprando){
        let catalogo = mostrarProductos();
        let seleccion = prompt(
            catalogo+
            'Ingrese el numero del producto de desea seleccionar o escriba salir'); //el dato que se ingrese va  a estar guardada en la variable seleccion



if (seleccion === null || seleccion ==='')  //deberia mandar el mismo mensaje//
     { alert ('no ingresaste un dato valido');
continue;
       }

       if(seleccion==='salir'){
        break; //permite salir del bucle 

       }
seleccion = parseInt(seleccion); 

    if (isNaN(seleccion) || seleccion < 1 || seleccion > 8) { 
alert('No se encontro el producto vuelve a seleccionar');
continue  //salta la interaccion actual y vuelve a iniciar otra nueva // vuelve al comienzo 
}

if(seleccion === 'a'){
alert('Selecione las frutas que desea');

} else if(seleccion===1){
    total+= 2000;
    alert('Seleccionaste bananas');

}else if(seleccion===2){
    total+=1700;
    alert('Selecionaste manzanas');
    }else if(seleccion===3){

    total+=1300;
    alert('Seleccionaste peras');
} else if (seleccion===4){
    total+=1600;
    alert('Seleccionaste peras');
}else if (seleccion=== 5){
    total+=2600;
    alert('Seleccionaste kiwi');
} else if (seleccion === 'b'     ){
    alert('SECCION DE VERDURAS');
} else if (seleccion===6){
    total+=1400;
    alert('Seleccionaste papa');
} else if (seleccion===7){
    total+=1000;
    alert('seleccionaste calabaza');

} else if (seleccion ===8){
    total+=1400;
    alert('Seleccionaste zanahoria')
}
let agregarMasProductos=prompt('desea agregar mas productos?(si/no');
if(agregarMasProductos.toLocaleLowerCase() !== 'si')
 seguirComprando=false;}
alert(`El total de su compra es ${total}`);
}
comprarProductos();
