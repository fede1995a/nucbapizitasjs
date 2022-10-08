const categoria=document.getElementById('categorias');

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
console.log(categoriaArray);