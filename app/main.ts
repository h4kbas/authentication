import express from "express";
const app = express();
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Auth at http://localhost:${port}`)
})
