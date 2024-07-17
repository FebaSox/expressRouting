//Import express from the express package
//Import db from mockdb/ (make sure to adjust the path realative to the current file)
import express from "express";
import db from "../mockdb/index.js";

//Create a variable named router, and assign the return value from express.Router() as its value
const router = express.Router();
//////////////////////////////////////////////////////////////////////
router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;

    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});
//////////////////////////////////////////////////////////////////////
router.post("/", async (req, res, next) => {
  try {
    const newUser = req.body;
    const data = await db.add(newUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});
//////////////////////////////////////////////////////////////////////
router.put("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    const updateUser = req.body;
    const data = await db.update(id, updatedUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});
//////////////////////////////////////////////////////////////////////
router.delete("/:id", async (req, res, next) => {
    try {
      const {id} = req.params;
      const updateUser = req.body;
      const data = await db.remove(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  });
//////////////////////////////////////////////////////////////////////
export default router;
