const express = require('express');
const router = express.Router();
import classController from '../controllers/class'

router.post('/create', classController.create);
router.post('/get', classController.get);
router.post('/join', classController.join);
router.post('/remove', classController.remove);

export default router
