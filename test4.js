// load library express
const { request, response } = require("express")
const e = require("express")
let express = require("express")
const { status } = require("express/lib/response")

// inisiasi objek baru dari express
let app = express()

// setting agar bisa membaca data request dg format json
app.use(express.json())

app.get("/profile/:nama/:usia", (request, response) => {
    // tampung data yang dikirimkan
    let nama = request.params.nama 
    let usia = request.params.usia

    let status = null

    if (usia < 10) {
        status = `Bocil Kematian`
    } else if (usia >= 10 && usia <= 20) {
        status = `Remaja`
    } else if (usia > 20 && usia < 50) {
        status = `Dewasa`
    } else if (usia >= 50) {
        status = `Tua`
    }

    return response.json({
        message: `Saya ${nama} adalah ${status}`
    })
})

app.listen(5000, () => {
    console.log(`Server run on port 5000`);
})