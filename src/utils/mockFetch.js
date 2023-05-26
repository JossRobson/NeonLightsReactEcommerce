export const getProductos = (id) => {
    return new Promise((res, rej) => {
      res(productos);
    });
  };

export const getProductoById = (id) => {
    return new Promise( (res, rej ) =>{
      res(productos.find( prod => prod.id === id))
    })
  }

export const getProductByCategory = (category) => {
    return new Promise ( (res, rej) => {
      res( productos.filter(prod => prod.categoria === category))
    })
  }



let productos = [
  {id: '1',
   precio: 1000, 
   titulo: "Lentes Balenciaga", 
   categoria: "Ingresos", 
   stock: 20, 
   img: "/public/assets/Balenciaga.jpg",},
  {
    id: '2',
    precio: 1400,
    titulo: "Lentes Beber",
    categoria: "Ingresos",
    stock: 20,
    img: "/public/assets/Beber.jpg",
  },
  {
    id: '3',
    precio: 2000,
    titulo: "Lentes Bside",
    categoria: "Ingresos",
    stock: 20,
    img: "/public/assets/Bside.jpg",
  },
  {
    id: '4',
    precio: 2000,
    titulo: "Lentes Budapest",
    categoria: "Ingresos",
    stock: 20,
    img: "/public/assets/Budapest.jpg",
  },
  
  {
    id: '5',
    precio: 1400,
    titulo: "Lentes Golden",
    categoria: "Ingresos",
    stock: 20,
    img: "/public/assets/Golden.jpg",
  },

  {
    id: '6',
    precio: 1600,
    titulo: "Lentes Lights",
    categoria: "2x1",
    stock: 20,
    img: "/public/assets/Lights.jpg",
  },
 
  {
    id: '7',
    precio: 1100,
    titulo: "Lentes Premiere",
    categoria: "2x1",
    stock: 20,
    img: "/public/assets/Premiere.jpg",
  },
  {
    id: '8',
    precio: 1800,
    titulo: "Lentes Render",
    categoria: "2x1",
    stock: 20,
    img: "/public/assets/Render.jpg",
  },

  {
    id: '9',
    precio: 9200,
    titulo: "Lentes Saint",
    categoria: "2x1",
    stock: 20,
    img: "/public/assets/Saint.jpg",
  },

  {
    id: '10',
    precio: 8100,
    titulo: "Lentes Yellow",
    categoria: "2x1",
    stock: 20,
    img: "/public/assets/Yellow.jpg",
  },

  
];


