const express = require('express');
const {showHomePage, showHomePage2, showBlogPage, showShopPage, showSingleBlogPage } = require('../controller/pageroutescontroller');



const routes = express.Router();



routes.get('/',showHomePage)

routes.get('/blog',showBlogPage )

routes.get('/shop',showShopPage )

routes.get('/singleblog', showSingleBlogPage)

routes.get('/page2', showHomePage2)






module.exports = routes ;
