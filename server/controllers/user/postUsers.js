const userAttachmentCollection = require("../../model/userModel");

const postNewAttachment = async (req, res) => {
    try {
        const id = req.query.id;
        const newAttachment = req.body;
        const existingAttachments = await userAttachmentCollection.findById(id);

        //Push new data with the existing data
        existingAttachments?.attachments?.push(...newAttachment);

        const result = await existingAttachments.save();
        res.status(200).send(result);

    }
    catch (error) {
        console.error('Error getting user data:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = postNewAttachment;