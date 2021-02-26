const database = require('../database');

exports.ListarCestas = async (req,res) => {
    try {
        const cestas = await database.query("SELECT * FROM cesta");
        res.status(200).json({ cestas });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ListarCesta = async (req,res) => {
    try {
        const { id } = req.params;
        const cesta = await database.query("SELECT * FROM cesta WHERE idcesta = ?", [id]);
        res.status(200).json({ cesta });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarCesta = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM cesta WHERE idcesta = ?", [id]);
        res.status(200).json({ msg: "Cesta eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarCesta = async (req,res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, cantidad, total, cliente, cell, direccion } = req.body;
        await database.query("UPDATE cesta SET nombre = ?, descripcion = ?, precio = ?, cantidad = ?, total = ?, cliente = ?, cell = ?, direccion = ? WHERE idcesta = ?", [nombre, descripcion, precio, cantidad, total, cliente, cell, direccion, id]);
        res.status(200).json({ msg: "Cesta modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarCesta = async (req,res) => {
    try {
        const { nombre, descripcion, precio, cantidad, total, cliente, cell, direccion } = req.body;
        await database.query("INSERT INTO cesta(nombre, descripcion, precio, cantidad, total, cliente, cell, direccion) VALUES (?,?,?,?,?,?,?,?)", [nombre, descripcion, precio, cantidad, total, cliente, cell, direccion]);
        res.status(200).json({ msg: "Cesta agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}