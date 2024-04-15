import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    console.log({ req: req.body });
    res.json({ success: true, message: "Success" });
  } catch (err) {
    console.log({ err });
  }
});

export default router;
