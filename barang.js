const { request, response } = require("express")
const express = require("express")

const app = express()
// set to read a request data from JSON format
app.use(express.json())

// JSON is STRING

app.post("/barang", (request, response) => {
    // store the request data
    let barang = request.body.barang
    let jmlTotal = 0

    for (let i = 0; i < barang.length; i++) {
        jmlTotal += barang[i].harga * barang[i].jumlah
    }
    
    let PPN = jmlTotal * 11/10

    // give a response dat
    return response.json({
        "total": PPN
})
})
app.listen(1600, () => {
    console.log(`Server run on port 1600`);
})