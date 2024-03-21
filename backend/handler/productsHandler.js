import data from '../data.json' assert { type: 'json' }
const products = Object.entries(data)[0][1]

// GET ALL PRODUCTS
export const getProducts = (req, res) => {
  res.json(data)
}

// GET EACH PRODUCT 
export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id == id)
  res.json(product)
}

// CREATE A NEW PRODUCT 
export const createNewProduct = (req, res) => {

  // We need to receive the "title" of the form here ()
  const { title } = req.body

  let newProducts = [...products];
  newProducts.push({
    id: products.length + 1,
    title: title
  })
  res.json(newProducts[newProducts.length - 1])
}

// UPDATE A PRODUCT 
export const updateProductById = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  // Finding the product with the id in the data
  let newProducts = [...products]

  // const desiredProduct = newProducts.find((product) => product.id == id)
  // desiredProduct.title = title;
  // console.log(newProducts)

  res.json(newProducts)
  
}