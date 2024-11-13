const items = require('../Items')

const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: function (request, reply) {
        reply.send(items)
    }
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: function (request, reply) {
        const {id} = request.params
        const item = items.find(item => item.id === id)
        reply.send(item)
    }
}

function itemRoutes(fastify, options, done) {
    fastify.get('/items', getItemsOpts)
    
    fastify.get('/items/:id', getItemOpts)
    
    done()
}

module.exports = itemRoutes
