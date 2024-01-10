const userAttachmentCollection = require("../../model/userModel");

const getUsers = async (req, res) => {
    try {
        const result = await userAttachmentCollection.find();
        res.status(200).send(result);
    }
    catch (error) {
        console.error('Error getting user data:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = getUsers;