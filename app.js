var https = require("https");
setInterval(function() {

https.get('https://hmadedotwork.herokuapp.com', (res) => {
//   const { statusCode } = res;
//   const contentType = res.headers['content-type'];
// console.log('statusCode', statusCode);

//   let error;
//   if (statusCode !== 200) {
//     error = new Error('Request Failed.\n' +
//                       `Status Code: ${statusCode}`);
//   } else if (!/^application\/json/.test(contentType)) {
//     error = new Error('Invalid content-type.\n' +
//                       `Expected application/json but received ${contentType}`);
//   }
//   if (error) {
//     console.error(error.message);
//     // consume response data to free up memory
//     res.resume();
//     return;
//   }

//   res.setEncoding('utf8');
//   let rawData = '';
//   res.on('data', (chunk) => { rawData += chunk; });
//   res.on('end', () => {
//     try {
//       const parsedData = JSON.parse(rawData);
//       console.log(parsedData);
//     } catch (e) {
//       console.error(e.message);
//     }
//   });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

}, 300000); // every 5 minutes
