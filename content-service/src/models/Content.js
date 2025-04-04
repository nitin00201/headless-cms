const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, required: true },  // Store only ID
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Content", ContentSchema);
