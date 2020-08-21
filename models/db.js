const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://deepak:2254@cluster0-bqywo.mongodb.net/EmployeeDatabase?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
require('./employee.model')