import { Router } from "express";
import AuthenticatedRequest, { userMiddleware } from "../middleware";
import { contentModel } from "../db";

const contentRouter = Router();

// '/api/v1/dashboard/...' comes here.
// Add new content.
contentRouter.post("/content",userMiddleware, async(req: AuthenticatedRequest, res) => {
    const { title, link } = req.body;

    await contentModel.create({
        title,
        link,
        tags: [],
        userId: req.userId
    })

    res.json({
        message: "Content added."
    })
})

// Fetching all existing documents (no pagination).
contentRouter.get("/content", userMiddleware, async(req: AuthenticatedRequest, res) => {
    const userId = req.userId;
    const content = await contentModel.find({
        userId: userId
    }).populate("userId", "userName");
    res.json({
        content
    })
})

// Delete a document.
contentRouter.delete("/content", userMiddleware, async(req: AuthenticatedRequest, res) => {
    const contentId = req.body.contentId;

    await contentModel.deleteMany({
        _id: contentId,
        userId: req.userId
    })

    res.json({
        message: "Content deleted successfully."
    })
})

export default contentRouter;