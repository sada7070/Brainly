import { Router } from "express";
import AuthenticatedRequest, { userMiddleware } from "../middleware";
import { linkModel } from "../db";
import { generate } from "../utils";

const shareRouter = Router();

// '/api/v1/brain/...' comes here.
// route to generate sharable link.
shareRouter.post("/share", userMiddleware, async(req: AuthenticatedRequest, res) => {
    const share = req.body.share;

    if(share) {
        const URL = await linkModel.create({
            userId: req.userId,
            hash: generate(20)
        })
        res.json({
            message: "Updated sharable link.",
            URL: URL.hash
        })
    } else {
        // if user want to disable the URL.
        await linkModel.deleteOne({
            userId: req.userId
        });

        res.json({
            message: "Sharable link is deleted."
        })
        return;
    }

  
})

export default shareRouter;