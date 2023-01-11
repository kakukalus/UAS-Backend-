const db = require(`../config/database`);

class Patient {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patient";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO patient SET ?";
      db.query(sql, data, function (err, results) {
        resolve(results.insertId);
      });
    });
    return new Promise((resolve, reject) => {
      const sql = "SELECT patient.name, patient.phone, patient.address, status.status, patient.date_in, patient.date_out FROM patient JOIN status ON patient.id_status = status.id WHERE patient.id = ? ";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT patient.name, patient.phone, patient.address, status.status, patient.date_in, patient.date_out FROM patient JOIN status ON patient.id_status = status.id WHERE patient.id = ? ";
      db.query(sql, id, (err, results) => {
        resolve(results[0]);
      });
    });
  }
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patient SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, result) => {
        resolve(result);
      });
    });
    const patient = await this.find(id);
    return patient;
    // return new Promise((resolve, reject)=>
    // {
    //     const sql = "SELECT patient.name, patient.phone, patient.address, status.status, patient.date_in, patient.date_out FROM patient JOIN status ON patient.id_status = status.id WHERE patient.id = ? ";
    //     db.query(sql, id, (err, results)=>
    //     {
    //         resolve(results[0]);
    //     });
    // });
  }
  static async delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patient WHERE  = ?";
      db.query(sql, id, (err, result) => {
        resolve(result);
      });
    });
  }
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT patient.name, patient.phone, patient.address, status.status, patient.date_in, patient.date_out FROM patient JOIN status ON patient.id_status = status.id WHERE patient.name LIKE ?";
      db.query(sql, `%${name}%`, (err, result) => {
        resolve(result);
      });
    });
  }
  static findByStatus(id_status) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT patient.name, patient.phone, patient.address, status.status, patient.date_in, patient.date_out FROM patient JOIN status ON patient.id_status = status.id WHERE patient.id_status = ?";
      db.query(sql, id_status, (err, result) => {
        resolve(result);
      });
    });
  }
}

module.exports = Patient;
