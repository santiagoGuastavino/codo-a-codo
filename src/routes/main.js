import express from 'express'
import {
  index,
  cv,
  google
} from '../controllers/mainController.js'

const router = express.Router()

router.get('/', index)
router.get('/cv', cv)
router.get('/google', google)

export default router
