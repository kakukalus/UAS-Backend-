// TODO 4: SETUP CONTROLLER
const Patient = require("../models/Patient");

class PatientController {
  async index(req, res) {
    const patient = await Patient.all();
    if (patient.length == 0) {
      return res.status(200).json({ message: "Data is empty" });
    }
    const response = {
      message: "Show All Patient Data",
      data: patient,
    };
    res.status(200).json(response);
  }
  async store(req, res) {
    const patient = await Patient.create(req.body);
    const response = {
      message: "Add Data Patient",
      data: patient,
    };
    res.status(201).json(response);
  }
  async show(req, res) {
    const { id } = req.params;

    const patient = await Patient.find(id);
    if (!patient) {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
    const response = {
      message: "Get Detail Resource",
      data: patient,
    };
    res.status(200).json(response);
  }
  async update(req, res) {
    const { id } = req.params;

    const patient = await Patient.find(id);
    if (patient) {
      const patientUpdate = await Patient.update(id, req.body);
      const response = {
        message: "Data Updated!",
        data: patientUpdate,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
  }
  async destroy(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);
    console.log(patient);
    if (patient) {
      await Patient.delete(id);
      const data = {
        message: "data deleted",
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Resource not found",
      };
      res.status(404).json(data);
    }
  }
  async search(req, res) {
    const { name } = req.params;
    const patient = await Patient.search(name);
    if (patient.length == 0) {
      return res.status(404).json({ message: "Resource not found" });
    }
    const response = {
      message: "Show All Patient Data",
      data: patient,
    };
    res.status(200).json(response);
  }
  async positive(req, res) {
    const patient = await Patient.findByStatus(1);
    const data = {
      message: "Get positive resource",
      total: patient.length,
      data: patient,
    };
    res.status(200).json(data);
  }
  async recovery(req, res) {
    const patient = await Patient.findByStatus(2);
    const data = {
      message: "Get recovery resource",
      total: patient.length,
      data: patient,
    };
    res.status(200).json(data);
  }
  async dead(req, res) {
    const patient = await Patient.findByStatus(3);
    const data = {
      message: "Get dead resource",
      total: patient.length,
      data: patient,
    };
    res.status(200).json(data);
  }
}

const object = new PatientController();

module.exports = object;
