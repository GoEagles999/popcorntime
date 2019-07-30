const axios = require('axios')
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

axios
    .get(`https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0x0e00d8bc271a6121cbde6d542abc7185c0f9d983&startblock=5217245&endblock=99999999&sort=asc&apikey=UVPS66SXVMYKVM9J8QMU6U86IG2KEN77QU`)
    .then(d => {
        data = d.data
        console.log(data)
        maxsize = data.result.length;
        data.result.forEach(elem => {
            output = hex2a(elem.input.substr(2));
            myarr = output.split(":");
            console.log(myarr)
        })
    })