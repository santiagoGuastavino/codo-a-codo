import express from 'express'
import {
  index,
  cv,
  google,
  calculator
} from '../controllers/mainController.js'

const router = express.Router()

router.get('/', index)
router.get('/cv', cv)
router.get('/google', google)
router.get('/calculator', calculator)

export default router
