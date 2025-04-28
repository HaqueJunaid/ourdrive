const mongoose = require("mongoose");

async function DB() {
    await mongoose.connect(process.env.MONGO_DB_URL);
}

module.exports = DB;