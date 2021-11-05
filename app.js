const http = require('http')

const server = http.createServer((req, res)=>{

    if(req.url=== '/'){
        res.end('Home Page')
    }
    
    if(req.url=== '/about'){
        for (let index = 0; index < 1000; index++) {
            for (let p = 0; p < 1000; p++) {
                console.log(p)
            }
            
        }
        res.end('About Page')
    }
    res.end('Error Page')


})

server.listen(5000,()=>{
    console.log('server listening 5000')
})