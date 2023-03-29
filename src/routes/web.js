const express = require('express');

const router = express.Router();



//khai báo route
router.get('/', (req, res) => {
    res.send('Hello World and nodemon!')
})

//khai báo route
router.get('/demo', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router; //export default