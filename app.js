var http = require("http");
setInterval(function() {
    http.get("https://hmadedotwork.herokuapp.com");
}, 1200000); // every 20 minutes
