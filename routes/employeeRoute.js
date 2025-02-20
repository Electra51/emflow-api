import express from "express";
import {
  createEmployeeController,
  deleteEmployeeByIdController,
  getAllEmployeeController,
  getEmployeeByIdController,
  updateEmployeeByIdController,
} from "../controllers/employeeController.js";
import { uploadImageController } from "../controllers/uploadImageController.js";

const router = express.Router();

router.post("/employee-add", createEmployeeController);
router.get("/employee-all", getAllEmployeeController);
router.get("/:id", getEmployeeByIdController);
router.patch("/employee-update/:id", updateEmployeeByIdController);
router.delete("/employee-delete/:id", deleteEmployeeByIdController);
router.use("/upload-image", uploadImageController);

export default router;
