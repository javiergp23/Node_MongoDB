const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://javiergp23:80221002936@cluster0.bhmv5dn.mongodb.net/test');
}

module.exports = startDB;