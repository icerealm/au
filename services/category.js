const client = require('./protoApi.js')

const printResponse = (error, response) => {
    if (error){
        console.log("Error:", error)
    }else {
        console.log(response)
    }
}

module.exports = {
    findCategories: () => {
        client.findCatetories({query:"query by js"}, printResponse)
    },
    testCategories: () => {
        return ["test1", "test2"]
    }
}
