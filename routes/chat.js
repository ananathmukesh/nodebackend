const express = require('express');
const router = express.Router();

const { 
    getMsgSenderReceiver,
    storeMessage,
    getchatMaster_id,
    joinChatMaster
 } = require('../controllers/chatController');

 router.post('/chatconversation',getMsgSenderReceiver);
 router.post('/msgconversation',storeMessage);
 router.post('/getchatmasterid',getchatMaster_id);
 router.post('/joinchatmaster',joinChatMaster);

module.exports = router;