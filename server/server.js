const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const userData = require('../server/datas/users');
const toolRequestsData = require('../server/datas/toolRequests');
server.get('/api/users', (req,res,next)=>{
    res.status(200).send(userData.user);
});

server.get('/api/toolRequests', (req,res,next)=>{
    res.status(200).send(toolRequestsData.toolRequests);
    
});

server.get('/api/toolRequests/:id', (req,res,next)=>{
    res.status(200).send(toolRequestsData.toolRequests[0]);

});
server.listen(3000, ()=>{
    console.log('JSON server is running on port 3000');
});