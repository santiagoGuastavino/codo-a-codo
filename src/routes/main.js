import express from 'express'
import {
  welcome,
  cv
} from '../controllers/mainController.js'

const router = express.Router()

router.get('/', welcome)
router.get('/cv', cv)

export default router
