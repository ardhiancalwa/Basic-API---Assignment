const express = require("express")
const app = express()

// set to read a request from JSON format

app.use(express.json())
// JSON is String

app.post("/uang", (request, response) => {
    let uang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500]
    let butuhUang = request.body.butuhUang
    let hasil = []

    for (let i = 0; i < uang.length; i++) {
        if (butuhUang >= uang[i]) {
            let jmlUang = Math.floor(butuhUang/uang[i])
            butuhUang -= (jmlUang * uang[i])

            hasil.push({
                pecahan : uang[i],
                jumlah : jmlUang
            })
        }
    }


    return response.json({
        hasil_pecahan : hasil
    })
})

app.listen(1700, () => {
    console.log('Server run at port 1700');
})