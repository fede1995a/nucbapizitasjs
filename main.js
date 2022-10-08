const categoria=document.getElementById('categorias');
const populares=document.getElementById('populares');

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