const mongoose = require("mongoose");

const SchemaDefinition = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    fields: [
        {
            name: { type: String, required: true },
            type: { type: String, required: true },
            required: { type: Boolean, default: false },
            ref: { type: String, default: null }
        }
    ],
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }  // 🔒 Associate schema with user
});

module.exports = mongoose.model("SchemaDefinition", SchemaDefinition);
