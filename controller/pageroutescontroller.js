
const path    = require('path');


const showHomePage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}


const showHomePage2 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, ('../public/index-2.html')));
}


const showBlogPage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'));
}


const showShopPage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, ('../public/shop.html')));
}

const showSingleBlogPage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, ('../public/singleblog.html')));
}







module.exports = {
    showHomePage,
    showHomePage2,
    showBlogPage,
    showShopPage,
    showSingleBlogPage
}

