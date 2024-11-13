const items = require('../Items')

// You can change the output of the schema to display whatever you want
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        //id: {type: 'string'},
                        name: {type: 'string'}
                    }
                }
            }
    }
}
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOpts,(request, reply) => {
        reply.send(items)
    })
    
    fastify.get('/items/:id', (request, reply) => {
        const {id} = request.params
        const item = items.find(item => item.id === id)
        reply.send(item)
    })
    
    done()
}

module.exports = itemRoutes
