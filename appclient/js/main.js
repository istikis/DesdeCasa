
//Fichero javascript para app

/* 
console.info("Esto lo puedes ver depurado en el navegador");
console.debug("esto es una traza de tipo debug");
console.trace("esto se usa para tracear o decir que entras y sales");
console.warn("Mensaje de Warning!");
console.error("Ha petado nuestra App"); 
*/

const personas = [
  {
    nombre: "Oconnor",
    avatar: "img/avatar1.png",
    sexo: "h",
  },
  {
    nombre: "Pepa",
    avatar: "img/avatar2.png",
    sexo: "m",
  },
  {
    nombre: "JoseMAri",
    avatar: "img/avatar3.png",
    sexo: "h",
  },
];

window.addEventListener('load', init() );

function init(){
    console.debug('Document Load and Ready');    
    listener();
    
    //TODO llamada Ajax al servicio Rest, Cuidado es ASINCRONO!!!!!
    
    //pintarLista( personas );
    pintarListaRest( personas );

}//init

function pintarListaRest(PersonasRest){
  const url = `http://localhost:8080/apprest/api/personas/`;

  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {
        const personasRest = JSON.parse(this.responseText);

        console.debug('Personas Rest %o', personasRest);

        //seleccionar la lista por id
        let lista = document.getElementById('alumnos');
        lista.innerHTML = ''; // vaciar html 
        personasRest.forEach( p => lista.innerHTML += `<li>
                                                            <div class="card border border-warning" style="width: 10rem;">
                                                                <p id="id-p-card" >${p.id}</p>
                                                                <img src="../img/${p.avatar}" class="card-img-top" alt="Responsive image">
                                                                <div class="card-body">
                                                                    <h2 class="card-title text-center"><b>${p.nombre}</b></h2>
                                                                </div>
                                                            </div> 
                                                      </li>` );
      }
    };
    request.open("GET", url, true);
    request.send();
}
/**
 * Inicializamos los listener de index.hml
 */
function listener(){

    let selectorSexo = document.getElementById('selectorSexo');
    let inputNombre = document.getElementById('inombre');



    //selectorSexo.addEventListener('change', busqueda( selectorSexo.value, inputNombre.value ) );
    
    selectorSexo.addEventListener('change', function(){
        const sexo = selectorSexo.value;
        console.debug('cambiado select ' + sexo);
        if ( 't' != sexo ){
            const personasFiltradas = personas.filter( el => el.sexo == sexo );
            pintarLista(personasFiltradas);
        }else{
            pintarLista(personas);
        }    
    });
    

    inputNombre.addEventListener('keyup', function(){
        const busqueda = inputNombre.value.toLowerCase();
        console.debug('tecla pulsada, valor input ' +  busqueda );
        if ( busqueda ){
            const personasFiltradas = personas.filter( el => el.nombre.toLowerCase().includes(busqueda));
            pintarLista(personasFiltradas);
        }else{
            pintarLista(personas);
        }    
    });


}

function pintarLista( arrayPersonas ){
    //seleccionar la lista por id
    let lista = document.getElementById('alumnos');
    lista.innerHTML = ''; // vaciar html 
    arrayPersonas.forEach( p => lista.innerHTML += `<li>
                                                        <div class="card" style="width: 10rem;">
                                                            <img src="${p.avatar}" class="card-img-top" alt="Responsive image">
                                                            <div class="card-body">
                                                                <h2 class="card-title">${p.nombre}</h2>
                                                            </div>
                                                        </div> 
                                                   </li>` );
}


function busqueda( sexo = 't', nombreBuscar = '' ){

    console.info('Busqueda sexo %o nombre %o', sexo, nombreBuscar );
}


/* window.addEventListener("load", init());

function init() {
  // es importante esperar que todo este cargando para comenzar
  console.debug("Document Load and Ready");
  pintarLista2();
  


} //init

function pintarLista2(){
  const urlLista = `http://localhost:8080/apprest/api/personas/`;

  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {
        const personas = JSON.parse(this.responseText);

        console.debug(personas);

        let lista = document.getElementById('lista');
        lista.innerHTML = '';

        personas.forEach(el => {
          lista.innerHTML += `<li><img src="${p.avatar}" alt="avatar">${p.nombre}</li>`;
        });
      }
    };
    request.open("GET", urlLista, true);
    request.send();
}

function pintarLista(arrayPersonas) {
  //seleccionar la lista por id
  let lista = document.getElementById("alumnos");
  lista.innerHTML = "";
  arrayPersonas.forEach(
    (p) =>
      (lista.innerHTML += `<li><img src="${p.avatar}" alt="avatar">${p.nombre}</li>`)
  );
}

function seleccionSexo() {
  let option = document.getElementById("selectorSexo").value;
  console.log(option);

  if(option !== 't'){
    const personasFiltradas = personas.filter((p) => p.sexo == `${option}`);
    pintarLista(personasFiltradas);
  }else {
    pintarLista(personas);
  }
  
} */
