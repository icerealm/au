const client = require('./protoApi.js')

module.exports = {
    findCategories: httpResponse => {
        client.findCatetories({query:""}, (err, data) => {
            if (error) {
                httpResponse.status(500).send({
                    message: err
                })
            }
            httpResponse.send(data)
        })
    },
    testCategories: () => {
        return ["test1", "test2"]
    }
}
