const Course = require('../modules/Course')
const res = require("express/lib/response");
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
    //[GET] /news
    index(req, res, next) {
        Course.find({})
            .then(Course => {
                res.render('home', {
                    course: mutipleMongooseToObject(Course)
                })
            })
            .catch(next)


        // res.render('home')
    }
    search(req, res) {
        res.render('search')
    }
}
module.exports = new SiteController