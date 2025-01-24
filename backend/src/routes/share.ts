import { Router } from "express";
import AuthenticatedRequest, { userMiddleware } from "../middleware";
import { ContentModel, LinkModel, UserModel } from "../db";
import { generate } from "../utils";

const shareRouter = Router();

// '/api/v1/brain/...' comes here.
// route to generate sharable link.
shareRouter.post("/share", userMiddleware, async(req: AuthenticatedRequest, res) => {
    const share = req.body.share;

    if(share) {
        const existingLink = await LinkModel.findOne({
            userId : req.userId
        });

        if(existingLink) {
            res.json({
                hash: existingLink.hash
            })
            return;
        }

        const hash = generate(10);
        await LinkModel.create({
            userId: req.userId,
            hash: hash
        })
        res.status(200).json({
            message: "Sharable link generated.",
            hash
        })
    } else {
        // if user want to disable the hash.
        await LinkModel.deleteOne({
            userId: req.userId
        });

        res.status(200).json({
            message: "Sharable link is deleted."
        })
        return;
    }
})

export default shareRouter;