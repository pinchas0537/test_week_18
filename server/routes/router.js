import {Router } from "express"
import { movies } from "../ctrls/cntrl.js"

const router = Router()

router.get("/movies",movies)

export default router