const categoria=document.getElementById('categorias');
const populares=document.getElementById('populares');
const recomendados=document.getElementById('recomendados');


// array de la seccion de "Hoy te recomendamos"

let recomendadosArray = [
    {
      imagen: './assets/hero/bennaziana.png',
      nombre: 'Bennazianna',
      descripcion: 'La más completa',
      precio: '3650',
    },
    {
        imagen: './assets/hero/tronco-pizza.png',
        nombre: 'Tronco_Pizza',
        descripcion: 'Para todo el dia',
        precio: '870',
    },
    {
        imagen: './assets/hero/papas-provenzal.png',
        nombre: 'Papas | Provenzal',
        descripcion: 'Van como piña',
        precio: '360',
    },
];

// renderizo la lista de los mas recomendados
const renderRecomendados = recomendadosArray1 => {
    
    recomendados.innerHTML = recomendadosArray1.map(recomendados=>{
      return`
      <div class="recomendado">
      <img src="${recomendados.imagen}" alt="${recomendados.nombre}">
      <div class="recomendados__text">
          <span class="recomendados__nombre">${recomendados.nombre}</span>
          <span class="recomendados__descripcion">${recomendados.descripcion}</span>
          <span class="recomendados__precio">$${recomendados.precio}</span>
      </div>
      <input type="submit" value="Agregar" class="submit__recomendados">
  </div>
     `
 })
    .join('');
 }
renderRecomendados(recomendadosArray);

// array con los productos de categoria para despues renderizarlo

let categoriaArray=[
    {
        
        imagen:'./assets/categorias/pizzass.png',
        nombre:'Pizzas',
    },
    {
        imagen:'./assets/categorias/burger 1.png',
        nombre:'Hamburguesas',
    },
    {
        imagen:'./assets/categorias/fries 2.png',
        nombre:'Napapuki',
    },
    {
        imagen:'./assets/categorias/pizzass2.png',
        nombre:'Individuales',
    },
     {
        imagen:'./assets/categorias/buritto-1.png',
        nombre:'Wraps',
    },
     {
        imagen:'./assets/categorias/taco-1.png',
        nombre:'Mexican Food',
    }, 
    {
        imagen:'./assets/categorias/float-1.png',
        nombre:'Batidukis',
    },
];

//renderizo cstegoria
const rendercategoria = categoriaArray1 => {
    
    categoria.innerHTML = categoriaArray1.map(categori=>{
      return`
      <div class="categoria">
     
      <img src="${categori.imagen}" alt="">
     <h3>${categori.nombre}</h3>
     
     </div>
     `
 })
    .join('');
 }
rendercategoria(categoriaArray);

//array con los mas populares
let popularesArray=[
    {
        imagen:'./assets/populares/mrpitt.png',
        nombre:'La Mr.Pit',
        descripcion: 'solo para expertos',
        precio: '350',

    },
    {
        imagen:'./assets/populares/qjamone.png',
        nombre:'¡Q´Jamone!',
        descripcion: '¡BASTA!',
        precio: '350',

    },
    {
        imagen:'./assets/populares/charly.png',
        nombre:'La Charly Gacía',
        descripcion: 'solo para expertos',
        precio: '380',

    },
    {
        imagen:'./assets/populares/maradona.png',
        nombre:'La Maradona',
        descripcion: '¡Eterna!',
        precio: '450',

    },
    {
        imagen:'./assets/populares/picantovich.png',
        nombre:'Picantovich',
        descripcion: 'Pica 2 veces',
        precio: '750',

    },
    {
        imagen:'./assets/populares/hasbu.png',
        nombre:'La Hasbulla',
        descripcion: 'En honor al 1',
        precio: '990',

    },
    {
        imagen:'./assets/populares/messi.png',
        nombre:'Leo Messi',
        descripcion: '¡De pie señores!',
        precio: '10',

    },
    {
        imagen:'./assets/populares/nickgi.png',
        nombre:'Nick Gi',
        descripcion: 'La que desaparece',
        precio: 'gratis',

    },
];

//renderizamos los populares

const renderpopula = populares1 =>{
    populares.innerHTML= populares1.map(popular=>{
        return`
        <div class="popular">
       
        <img src="${popular.imagen}" alt="">
       <h2>${popular.nombre}</h2>
       <spam>${popular.descripcion}</spam>
       <h3> $ ${popular.precio}</h3>
       
       </div>
       `
    })
    .join('');
}

renderpopula(popularesArray);