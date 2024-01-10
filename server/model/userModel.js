const { default: mongoose } = require("mongoose");

//Schema for user attachment data
const userAttachmentSchema = new mongoose.Schema({
    attachments: {
        type: Array,
        default: []
    },
    category: {
        type: String,
        required: true
    }
});


const userAttachmentCollection = mongoose.model("attachments", userAttachmentSchema);

module.exports = userAttachmentCollection;