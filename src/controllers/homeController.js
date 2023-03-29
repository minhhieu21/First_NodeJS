const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World and nodemon!')
}

const getDemo = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getDemo
}