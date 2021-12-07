let howManyProducts = 0;
let precioAlfajor = 70;
let precioCaramelo = 5;
let precioFiltros = 150;
let precioPapelillos = 80;
let precioTabaco = 510;

alert("Bienvenido a mitrepoint.");


//pregunta cuantas unidades desea el ususario, el maximo es 10u.//
function howMany(){
    howManyProducts = parseInt(prompt("¿Cuántas unidades desea? (max 10u)"));
    if(howManyProducts > 10){
        alert("Seleccione 10 unidades o menos.");
        howMany();
    }
}



//pregunta qué producto desea el usuario y muestra el precio//
function select() {
    let productSelection = parseInt(prompt(`¿Qué producto le interesa? (seleccione con un numero de la lista)
1- Caramelos
2- Alfajores
3- Tabaco
4- Filtros
5- Papelillos 
6- Salir`));

    switch(productSelection){
        case 1: 
            alert(`los caramelos cuestan $${precioCaramelo}`);
            howMany();
            alert(`total a pagar: $${howManyProducts * precioCaramelo}`);
            break;

        case 2: 
            alert(`los alfajores cuestan $${precioAlfajor}`);
            howMany();
            alert(`total a pagar: $${howManyProducts * precioAlfajor}`);
            break;
        
        case 3: 
            alert(`el paquete de tabaco cuesta $${precioTabaco}`);
            howMany();
            alert(`total a pagar: $${howManyProducts * precioTabaco}`);
            break;

        case 4: 
            alert(`el paquete de 120 unidades de filtros cuesta $${precioFiltros}`);
            howMany();
            alert(`total a pagar: $${howManyProducts * precioFiltros}`);
            break;

        case 5:
            alert(`los papelillos cuestan $${precioPapelillos}`);
            howMany();
            alert(`total a pagar: $${howManyProducts * precioPapelillos}`);
            break;

        default: 
            alert("por favor ingrese un numero de la lista");
            select();
            break;
    }
}

select();
let adios = alert("Gracias por su compra, vuelva prontoS!");