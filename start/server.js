// Link: http://127.0.0.1:5000/routename

const fastify = require('fastify')({ logger: true })
const PORT = 5000

fastify.get('/routename', (request, reply) => {
    reply.send( {test: "hello"} )
})

const start = async () => {
    try {
        await fastify.listen(PORT)
    }
    catch(error) {
        fatsify.log.error(error)
        process.exit(1)
    }
}
start();
