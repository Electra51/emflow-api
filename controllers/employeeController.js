import employeeModel from "../models/employeeModel.js";

export const createEmployeeController = async (req, res) => {
  try {
    const {
      employee_name,
      profile_picture,
      email,
      status,
      department,
      phone,
      address,
    } = req.body;

    const newEmployee = new employeeModel({
      employee_name,
      profile_picture,
      email,
      status,
      department,
      phone,
      address,
    });

    const savedEmployee = await newEmployee.save();

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      employee: savedEmployee,
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create employee",
      error: error.message,
    });
  }
};

export const getAllEmployeeController = async (req, res) => {
  try {
    const employees = await employeeModel.find();
    if (employees.length === 0) {
      return res.status(404).json({ message: "No employees found" });
    }
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Error fetching employees" });
  }
};

export const getEmployeeByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await employeeModel.findById(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee retrieved successfully",
      employee: employee,
    });
  } catch (error) {
    console.error("Error retrieving employee:", error);
    res.status(500).json({ error: "Error retrieving employee" });
  }
};

export const updateEmployeeByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedEmployee = await employeeModel.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).json({ error: "Error updating employee" });
  }
};

export const deleteEmployeeByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await employeeModel.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee deleted successfully",
      employee: deletedEmployee,
    });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Error deleting employee" });
  }
};
