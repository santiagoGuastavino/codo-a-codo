import express from 'express'
import { integrator, integratorBuy } from '../controllers/integratorController.js'

const router = express.Router()

router.get('/', integrator)
router.get('/buy', integratorBuy)

export default router
