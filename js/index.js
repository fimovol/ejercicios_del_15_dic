let products = [
    { id: 1, name: "tv", description: "TV 55 Pulgadas", brand: "chanchum", type: "tech" },
    { id: 3, name: "cellphone", description: "Androy 6/128GB", brand: "chaiomi", type: "tech" },
    { id: 2, name: "tv", description: "TV 55 Pulgadas", brand: "elyi", type: "tech" },
    { id: 4, name: "tv", description: "TV 65 Pulgadas", brand: "panachonic", type: "tech" },
    { id: 5, name: "cellphone", description: "Aifon 6/256GB", brand: "apol", type: "tech" },
    { id: 6, name: "bed", description: "KingSize", brand: "paiso", type: "home" },
    { id: 10, name: "bed", description: "QueenSize", brand: "rochen", type: "home" },
    { id: 8, name: "washing machine", description: "12Lt", brand: "elyi", type: "home" },
    { id: 9, name: "washing machine", description: "10Lt", brand: "panachonic", type: "home" },
    { id: 7, name: "tv", description: "TV 75 Pulgadas", brand: "chanchum", type: "tech" },
]
 
function obtenerProductoPorId(id){
    return products.find(product => product.id === id)
}
 
function obtenerProductosPorNombre(nombre){
    return products.filter(product => product.name === nombre)
}

function filtrarporcadaatributo(atributo,valor = ""){
    return products.filter(product => product[atributo]===valor)
}

function ordenarporatributo(atributo){
    // return products.sort(function(a,b){
    //     if (a[atributo] < b[atributo] ) {
    //         return -1;
    //     }
    //     if (a[atributo] > b[atributo] ) {
    //         return 1;
    //     }
    //     return 0;
    // })

    if(typeof products[0][atributo] === "string"){
        return products.sort((a, b) => {return a[atributo].localeCompare(b[atributo])})
    } else if(typeof products[0][atributo] === "number"){
        return products.sort((a, b) => {return a[atributo] - b[atributo]})
    } else {
        return 'No puedo ordernar ese tipo de dato.'
    }

}

function imprimirobjeto(){
    let imprimir = document.getElementById("imprimir")
    products.map(producto=> {
        imprimir.innerHTML += `<span class="cap separado">el nombre: ${producto.name}</span>`
        imprimir.innerHTML += `<span class="cap">la marca: ${producto.brand}</span>`
        imprimir.innerHTML += `<span class="cap">el tipo: ${producto.type}</span>`
        imprimir.innerHTML += `el id es: ${producto.id} <br/>`
        imprimir.innerHTML += `descripcion: ${producto.description} <br/>`
    })
}
function agregandoprecio(){
    
    let copia = products
    copia.map(producto => {
        let alaetorio = Math.random() * (1500  - 500 ) + 500 
        alaetorio = parseInt(alaetorio)
        producto.price = alaetorio
    })
    return copia
}
function filtrarporprecio(){
    let copia = agregandoprecio()
    return copia.filter( producto => producto.price > 1000)
}
function agregarnuevoelemento(){
    let copia = agregandoprecio()
    
    let parametros = Object.keys(copia[0])
    
    let objeto={

    }
    parametros.map( producto => {
        objeto[producto] = prompt(producto)
    })
    copia.push(objeto)
    return copia
}

function modidificaratrbutos(numerodeobjeto=0){
    let copia = agregandoprecio()
    let parametros = Object.keys(copia[0])
    parametros.map( producto => {
        copia[numerodeobjeto][producto] = prompt(producto)
    })
    return copia
    
}

function borrar(atributo,valor){
    let copia = agregandoprecio()
    return copia.filter( producto => producto[atributo] != valor)
}

// imprimirobjeto()
// console.log(filtrarporcadaatributo("name","cellphone"))
console.log(ordenarporatributo("brand"))
// console.log(agregandoprecio())
// console.log(filtrarporprecio())
// console.log(agregarnuevoelemento())
// console.log(modidificaratrbutos(1))
// console.log(borrar("name","cellphone"))