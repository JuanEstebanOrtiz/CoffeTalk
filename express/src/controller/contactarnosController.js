const database = require('../database');

exports.ListarContactarnos = async (req,res) => {
    try {
        const contactarnos = await database.query("SELECT * FROM contactarnos");
        res.status(200).json({ contactarnos});
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ListarContactarno = async (req,res) => {
    try {
        const { id } = req.params;
        const contac = await database.query("SELECT * FROM contactarnos WHERE idcontactarnos = ?", [id]);
        res.status(200).json({ contac });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarContactarno = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM contactarnos WHERE idcontactarnos = ?", [id]);
        res.status(200).json({ msg: "Contactarnos eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarContactarno = async (req,res) => {
    try {
        const { id } = req.params;
        const { nombre, email, descripcion } = req.body;
        await database.query("UPDATE contactarnos SET nombre = ?, email = ?, descripcion = ? WHERE idcontactarnos = ?", [nombre, email, descripcion, id]);
        res.status(200).json({ msg: "Contactarnos modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarContactarno = async (req,res) => {
    try {
        const { nombre, email, descripcion } = req.body;
        await database.query("INSERT INTO contactarnos(nombre, email, descripcion) VALUES (?,?,?)", [nombre, email, descripcion]);
        res.status(200).json({ msg: "Contactarnos agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}