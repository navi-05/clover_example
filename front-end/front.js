  const container = document.getElementById('container')
  const getButton = document.getElementById('get')

  const baseUrl = `https://clover-example.onrender.com`

  getButton.addEventListener('click', () => {
    fetch(baseUrl)
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

    fetch(`${baseUrl}/${formData}`)
      .then(res => res.json())
      .then(data => generateUI(data))
  })

  // Targeting the createNewForm
  const createNewForm = document.getElementById('createNew')
  createNewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = e.target[0].value

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        title: formData
      })
    }).then(res => res.json()).then(data => generateUI(data))
  })
