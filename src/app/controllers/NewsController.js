const res = require("express/lib/response");

class NewsController {
    //[GET] /news
    index(req, res) {
         res.render('news')
    }
    //[GET] /show
    show(req, res) {
        res.send('New Details')
    }
}
module.exports = new NewsController