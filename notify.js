const querystring = require('querystring');
const request = require('request')

// line notify 取得發行權杖
var token = "執行token";
// 發送的訊息
var form =  {
    'message': "Hello World~~~~"
};
var formData = querystring.stringify(form);

request({
    headers : {
        "Authorization": "Bearer " + token,
        "Content-Type" : "application/x-www-form-urlencoded"
    },
    uri: 'https://notify-api.line.me/api/notify',
    body: formData,
    method: 'POST'
  }, function (err, res, body) {
  });
