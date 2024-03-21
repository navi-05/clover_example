  const container = document.getElementById('container')
  const getButton = document.getElementById('get')

  getButton.addEventListener('click', () => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => generateUI(data.products))
  })

  function generateContent(product) {

    const innerDiv = document.createElement("div")
    innerDiv.style.display = "flex"
    innerDiv.style.gap = "10px"
    innerDiv.style.alignItems = "center"

    // Heading
    const heading = document.createElement("h1")
    heading.innerHTML = product.title

    // Appends 
    innerDiv.appendChild(heading)
    container.appendChild(innerDiv)
  }

  function generateUI(products) {
    products?.length > 1 ? products?.map((product, i) => generateContent(product)) : generateContent(products)
  }

  // Targetting the form
  const getByIdForm = document.getElementById('getById')
  getByIdForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = e.target[0].value

    fetch(`http://localhost:3000/products/${formData}`)
      .then(res => res.json())
      .then(data => generateUI(data))
  })

  // Targeting the createNewForm
  const createNewForm = document.getElementById('createNew')
  createNewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = e.target[0].value

    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        title: formData
      })
    }).then(res => res.json()).then(data => generateUI(data))
  })
