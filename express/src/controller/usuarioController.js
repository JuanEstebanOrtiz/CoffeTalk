const database = require('../database');

exports.ListarUsuarios = async (req,res) => {
    try {
        const user = await database.query("SELECT * FROM usuario");
        res.status(200).json({ user });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ListarUsuario = async (req,res) => {
    try {
        const { id } = req.params;
        const usuarios = await database.query("SELECT * FROM usuario WHERE id = ?", [id]);
        res.status(200).json({ usuarios });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarUsuario = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM usuario WHERE id = ?", [id]);
        res.status(200).json({ msg: "Usuario eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarUsuario = async (req,res) => {
    try {
        const { id } = req.params;
        const { nombre, cell, direccion, email, password } = req.body;
        await database.query("UPDATE usuario SET nombre = ?, cell = ?, direccion = ?, email = ?, password = ? WHERE id = ?", [nombre, cell, direccion, email, password, id]);
        res.status(200).json({ msg: "Usuario modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarUsuario = async (req,res) => {
    try {
        const { nombre, cell, direccion, email, password } = req.body;
        await database.query("INSERT INTO usuario(nombre, cell, direccion, email, password) VALUES (?,?,?,?,?)", [nombre, cell, direccion, email, password]);
        res.status(200).json({ msg: "Usuario agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}