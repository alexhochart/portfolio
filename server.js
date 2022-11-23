
const express = require('express')
const path = require("path");
const cors = require("cors");
const app = express()

require('dotenv').config()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('public', options))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// Get a full listing
app.get('/api/:col', async (req, res) => {
  
  (async () => {
    const CyclicDb = require('cyclic-dynamodb')
    const db = CyclicDb("busy-tunic-boaCyclicDB")
    const col = req.params.col
    console.log(`list collection: ${col} with params: ${JSON.stringify(req.params)}`)
    const items = await db.collection(col).list()
    console.log(JSON.stringify(items, null, 2))

    //
    const run = async function(){
        let portfolio = db.collection(col)

        // create an item in collection with key "leo"
        let list = await portfolio.list()
        console.log(list)
    }
    run()
    //
    res.json({}).end()
  })();
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Portfolio app listening at http://localhost:${port} - ${process.env.API_USER_NAME}`)
})
