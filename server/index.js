const axios = require('axios')
const express = require('express')
const imdb = require('imdb')
const blueBirdPromise = require('bluebird')
const app = express()
const port = 3000
let movies

app.get('/movies', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.json({movies:movies})
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

const toHex = (str) => {
	let hex = '';
	for(var i=0;i<str.length;i++) {
		hex += ''+str.charCodeAt(i).toString(16);
	}
	return hex;
}
			
const hex2a = (hexx) => {
    let hex = hexx.toString();//force conversion
    let str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

const lookUpMovie = () => new Promise((resolve, reject) => {
    imdb(myarr[0], (e, data) => {
        if (e) {
            console.log(e)
            reject(e)
        }
        resolve(data)
    })
})

axios
    .get(`https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0x0e00d8bc271a6121cbde6d542abc7185c0f9d983&startblock=5217245&endblock=5218245&sort=asc&apikey=UVPS66SXVMYKVM9J8QMU6U86IG2KEN77QU`)
    .then(d => {
        data = d.data
        //console.log(data)
        maxsize = data.result.length;
        blueBirdPromise.map(data.result, (item, i) => {
            output = hex2a(item.input.substr(2));
            myarr = output.split(":");
            console.log(myarr)
            console.log(i)
            if (/ev\d{7}\/\d{4}(-\d)?|(ch|co|ev|nm|tt)\d{7}/.test(myarr[0])) {
                return lookUpMovie(myarr[0])
            }
        }, {concurrency: 10}).then(d => {
            movies = d
        })
    })