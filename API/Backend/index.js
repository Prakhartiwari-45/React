import express from 'express'
const app=express();
const port=process.env.PORT||3000;

app.get('/api/products',(req,res) =>{
    const products = [
    {
        id: 1,
        name: 'table wooden',
        price: 200,
        image: 'https://picsum.photos/seed/table-wooden/650/940'
    }, {
        id: 2,
        name: 'table glass',
        price: 250,
        image: 'https://picsum.photos/seed/table-glass/650/940'
    }, {
        id: 3,
        name: 'chair leather',
        price: 150,
        image: 'https://picsum.photos/seed/chair-leather/650/940'
    }, {
        id: 4,
        name: 'sofa fabric',
        price: 500,
        image: 'https://picsum.photos/seed/sofa-fabric/650/940'
    }, {
        id: 5,
        name: 'bookshelf oak',
        price: 300,
        image: 'https://picsum.photos/seed/bookshelf-oak/650/940'
    }
]
//http://localhost:3000/api/products?search=metal

    if(req.query.search){
      const filterProducts=  products.filter(product => product.name.includes(req.query.search))
      res.send(filterProducts);
      return;
    }

    setTimeout(()=>{
        res.send(products);
    },3000)
})



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})