import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 80

async function main() {

  // Connecting to mongo named docker container including mongodb
  await mongoose.connect('mongodb://mongo:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Auth at http://localhost:${port}`)
  })

}

main();