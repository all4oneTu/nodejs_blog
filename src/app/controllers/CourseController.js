const Course = require('../modules/Course')
const res = require("express/lib/response");
const {mongooseToObject} = require('../../util/mongoose')
class CourseController {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', {course :mongooseToObject(course)})
             })
        .catch(next)
    }
    //[GET] /course/creat
    create(req, res, next) {
       res.render('courses/create')
    }
    //[POST] /course/store
    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {
            
        })
        
     }
}
module.exports = new CourseController