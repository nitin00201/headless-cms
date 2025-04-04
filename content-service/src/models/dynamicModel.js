const mongoose = require("mongoose");

const createDynamicModel = (name, fields) => {
    const schemaDefinition = {
        userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }  
    };

    fields.forEach(field => {
        schemaDefinition[field.name] = { type: mongoose.Schema.Types[field.type] };
        if (field.required) schemaDefinition[field.name].required = true;
        if (field.ref) schemaDefinition[field.name].ref = field.ref;
    });

    const schema = new mongoose.Schema(schemaDefinition, { timestamps: true });
    return mongoose.model(name, schema);
};

module.exports = createDynamicModel;
