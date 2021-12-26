const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/F8_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect succses')
    }
    catch (e) {
        console.log('connect fail')
    }
}

module.exports = {connect}