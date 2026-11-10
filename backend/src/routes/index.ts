import express from "express";

const router = express.Router();

router.get("/v1/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: Date.now(),
  });
});

export { router };
