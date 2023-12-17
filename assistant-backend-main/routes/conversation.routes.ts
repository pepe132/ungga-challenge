import {Router} from 'express'
import { getConversation } from '../controllers/conversation'

const router=Router()

router.post('/converse',getConversation)

export default router;