const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/belanja", (request, response) => {
    let barang = request.body.barang
    let hasil = []

    for (let i = 0; i < barang.length; i++) {
        if (barang[i].qty >= barang[i].min_discount) {
            let hargaAkhir = (barang[i].price * barang[i].qty) - (barang[i].price * barang[i].qty * barang[i].discount)
            hasil.push({
                "barang" : barang[i].name,
                "total" : hargaAkhir,
                "total.item" : barang[i].qty
            })
        } else if (barang[i].qty < barang[i].min_discount) {
            let hargaAkhir = barang[i].price * barang[i].qty
            hasil.push({
                "barang" : barang[i].name,
                "total" : hargaAkhir,
                "total.item" : barang[i].qty
            })
        }
    }

    return response.json({
        Belanja : hasil
    })
})

app.listen(1900, () => {
    console.log('Server run at port 1900');
})