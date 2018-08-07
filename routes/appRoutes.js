module.exports = app => {
    const categorySvc = require('../services/category.js')

    app.get('/app/categories', (req, res) =>{ 
        data = categorySvc.testCategories()
        res.send(data)
    })

    app.post('/app/categories', (req, res) => {
        res.status(201).send({
            message: "Created"
        })
    })
}