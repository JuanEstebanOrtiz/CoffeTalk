const database = require('../database');

exports.ListarUsuarios = async (req,res) => {
    try {
        const user = await database.query("select u.id, u.nombre, u.cell, u.direccion, u.email, u.password, r.rol, r.idroles from usuario u, roles r where r.idroles = u.idroles");
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
        const { nombre, cell, direccion, email, password, idroles } = req.body;
        await database.query("UPDATE usuario SET nombre = ?, cell = ?, direccion = ?, email = ?, password = ?, idroles = ? WHERE id = ?", [nombre, cell, direccion, email, password, idroles, id]);
        res.status(200).json({ msg: "Usuario modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarUsuario = async (req,res) => {
    try {
        const { nombre, cell, direccion, email, password, idroles } = req.body;
        await database.query("INSERT INTO usuario(nombre, cell, direccion, email, password, idroles) VALUES (?,?,?,?,?,?)", [nombre, cell, direccion, email, password, idroles]);
        res.status(200).json({ msg: "Usuario agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.LoginUsuario = async (req,res) => {
    try {
        const { email, password } = req.body;
        const datos = [ email, password ];
        const LoginUsuario = await database.query("SELECT * FROM usuario where email = ? AND password = ?", datos);
        res.status(200).json({ LoginUsuario });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}