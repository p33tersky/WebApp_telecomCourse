const express = require('express');
const httpServer = express();
const dialer = require('dialer').Dialer;
const config = {
url: 'https://uni-call.fcc-online.pl',
login: 'focus09',
password: '#789o2jbfdgd'
};
dialer.configure(config);
// Serwer nasłuchuje na porcie 3000
httpServer.listen(3000, function () {
console.log('Example app listening on port 3000!')
})
httpServer.get('/call/:number1/:number2', (req, res) => {
const number1 = req.params.number1;
const number2 = req.params.number2;
dialer.call(number1,number2);
res.json({success: true});
})