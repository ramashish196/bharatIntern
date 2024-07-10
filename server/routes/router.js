import express from "express";
import { homeRoute, login } from "../controller/routeComtroller.js";
const router = express.Router();
router.post("/add", homeRoute);
router.post("/login", login);
export { router };
