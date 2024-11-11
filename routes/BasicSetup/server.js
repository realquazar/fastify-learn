// package.json and package-lock.json must be included in all project directories

const fastify = require('fastify')({logger: true})
const PORT = 5000
const items = require('./Items')

fastify.get('/items', (request, reply) => {
    reply.send(items)
})

fastify.get('/items/:id', (request, reply) => {
    const {id} = request.params
    const item = items.find(item => item.id === id)
    reply.send(item)
})

const start = async () => {
    try {
        await fastify.listen({port: PORT})
        
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)        
    }
}
start();
