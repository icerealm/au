module.exports = app => {
    const categorySvc = require('../services/category.js')

    app.get('/app/categories', (req, res) =>{ 
        categorySvc.findCategories(res)
    })

    app.post('/app/categories', (req, res) => {
        res.status(201).send({
            message: "Created"
        })
    })
}