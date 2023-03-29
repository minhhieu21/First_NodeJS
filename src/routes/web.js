const express = require('express');
const { getHomepage, getDemo } = require('../controllers/homeController');
const router = express.Router();

// router.Method('/router',handle);

//khai báo route
router.get('/', getHomepage);

//khai báo route
router.get('/demo', getDemo);

module.exports = router; //export default