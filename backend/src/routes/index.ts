import { Router } from "express";
import userRouter from "./user"
import contentRouter from "./contents";

const router = Router();

// '/api/v1/user/...' requests goes to the 'userRouter'.
router.use("/user", userRouter);
router.use("/content", contentRouter);

export default router;