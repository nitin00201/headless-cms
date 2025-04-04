const SchemaDefinition = require("../models/schemaModel");

exports.createSchema = async (req, res) => {
    try {
        const { name, fields } = req.body;
        const userId = req.user.id;

        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Only admins can create schemas" });
        }

        const newSchema = new SchemaDefinition({ name, fields, userId });
        await newSchema.save();

        res.status(201).json({ message: "Schema created successfully", schema: newSchema });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteSchema = async (req, res) => {
    try {
        const schema = await SchemaDefinition.findById(req.params.id);

        if (!schema) {
            return res.status(404).json({ message: "Schema not found" });
        }

        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Only admins can delete schemas" });
        }

        await schema.deleteOne();
        res.status(200).json({ message: "Schema deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
