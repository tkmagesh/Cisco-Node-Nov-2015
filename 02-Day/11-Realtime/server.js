var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(conn){
    conn.on("text", function(msg){
        server.connections.forEach(function(con){
            con.sendText(msg);
        });
    });
});
server.listen(9090);
console.log("WebSocket server running on port 9090");
