const router=require('express').Router()
const chatController=require('../Controller/chatController')

router.route('/chat').get(chatController.renderChat)

module.exports=router