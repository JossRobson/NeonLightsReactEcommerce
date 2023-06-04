export const getProductos = (id) => {
    return new Promise((res, rej) => {
      res(products);
    });
  };

export const getProductoById = (id) => {
    return new Promise( (res, rej ) =>{
      res(products.find( prod => prod.id === id))
    })
  }

export const getProductByCategory = (category) => {
    return new Promise ( (res, rej) => {
      res( products.filter(prod => prod.categoria === category))
    })
  }



let products = [
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
    categoria: "Sale",
    stock: 20,
    img: "/public/assets/Lights.jpg",
  },
 
  {
    id: '7',
    precio: 1100,
    titulo: "Lentes Premiere",
    categoria: "Sale",
    stock: 20,
    img: "/public/assets/Premiere.jpg",
  },
  {
    id: '8',
    precio: 1800,
    titulo: "Lentes Render",
    categoria: "Sale",
    stock: 20,
    img: "/public/assets/Render.jpg",
  },

  {
    id: '9',
    precio: 2200,
    titulo: "Lentes Saint",
    categoria: "Sale",
    stock: 20,
    img: "/public/assets/Saint.jpg",
  },

  {
    id: '10',
    precio: 3100,
    titulo: "Lentes Yellow",
    categoria: "Sale",
    stock: 20,
    img: "/public/assets/Yellow.jpg",
  },

  {
    id: '11',
    precio: 31500,
    titulo: "Lentes Prestige",
    categoria: "Sale",
    stock: 20,
    img: "/public/assets/Prestige.jpg",
  },

  
];

//HAY MÁS DIRECTAMENTE AGREGADOS EN FIREBASE

