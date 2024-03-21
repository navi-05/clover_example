import express from 'express' // ESM 

import { fileURLToPath } from 'url'
import { dirname } from 'path';

const app = express();
const folderName = dirname(fileURLToPath(import.meta.url))


// res.send()
// res.end()
// res.json()
// res.sendFile()

// folderName -> kandupudikka oru way iruntha



app.get('/', (req, res) => {
  res.sendFile(folderName + "/index.html")
})

app.get('/contact', (req, res) => {
  res.sendFile(folderName + "/contact.html")
})

app.get('/about', (req, res) => {
  res.sendFile(folderName + "/about.html")
})

app.listen(3000, () => console.log("SERVER STARTED"))