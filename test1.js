// load library express
const { request, response } = require("express")
const e = require("express")
let express = require("express")
const { status } = require("express/lib/response")

// inisiasi objek baru dari express
let app = express()

// endpoint pertama
app.use(express.json())
app.post("/kubus",(request, response) => {
    // tampung data sisi dan berat 
    let sisi = request.body.sisi
    
    let volume = sisi * sisi * sisi
    let lp = 6 * sisi * sisi

    return response.json({
        volume_kubus: volume,
        luas_permukaan_kubus: lp
    })
})

// endpoint kedua
app.use(express.json())
app.post("/balok",(request, response) => {
    // tampung data sisi dan berat 
    let panjang = request.body.panjang
    let lebar = request.body.lebar
    let tinggi = request.body.tinggi
    
    let volume = panjang * lebar * tinggi
    let lp = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))

    return response.json({
        volume_balok: volume,
        luas_permukaan_balok: lp
    })
})

// endpoint ketiga
app.use(express.json())
app.post("/tabung",(request, response) => {
    // tampung data sisi dan berat 
    let r = request.body.r
    let tinggi = request.body.tinggi
    
    let volume = Math.PI * r * r * tinggi
    let lp = 2 * 3.14 * r * (r + tinggi)

    return response.json({
        volume_tabung: volume,
        luas_permukaan_tabung: lp
    })
})

// endpoint keempat
app.use(express.json())
app.post("/bola",(request, response) => {
    // tampung data sisi dan berat 
    let r = request.body.r
    
    let volume = 4/3 * Math.PI * r * r * r
    let lp = 4 * Math.PI * r * r

    return response.json({
        volume_bola: volume,
        luas_permukaan_bola: lp
    })
})

app.listen(2000, () => {
    console.log(`Server run on port 2000`);
})