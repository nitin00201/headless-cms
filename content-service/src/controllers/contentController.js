const SchemaDefinition = require("../models/schemaModel");
const createDynamicModel = require("../models/dynamicModel");

exports.createContent = async (req, res) => {
    try {
        const { schemaName, data } = req.body;
        const userId = req.user.id;  // Get user ID from JWT

        // Find schema owned by the user
        const schemaDefinition = await SchemaDefinition.findOne({ name: schemaName, userId });
        if (!schemaDefinition) return res.status(404).json({ message: "Schema not found or unauthorized" });

        // Create a Mongoose model dynamically
        const DynamicModel = createDynamicModel(schemaName, schemaDefinition.fields);

        // Save content to the database
        const newContent = new DynamicModel({ ...data, userId });
        await newContent.save();

        res.status(201).json({ message: "Content created successfully", data: newContent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteContent = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);

        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }

        if (content.author.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this content" });
        }

        await content.deleteOne();
        res.status(200).json({ message: "Content deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateContent = async (req, res) => {
    try {
        const { title, body } = req.body;
        const content = await Content.findById(req.params.id);

        if (!content) {
            return res.status(404).json({ message: "Content not found" });
        }

        if (content.author.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to update this content" });
        }

        content.title = title || content.title;
        content.body = body || content.body;

        await content.save();
        res.status(200).json({ message: "Content updated successfully", content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};