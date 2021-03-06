const database = require('../database');

exports.ListarProductos = async (req,res) => {
    try {
        const productos = await database.query("SELECT * FROM productos");
        res.status(200).json({ productos });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ListarProducto = async (req,res) => {
    try {
        const { id } = req.params;
        const produc = await database.query("SELECT * FROM productos WHERE idproductos = ?", [id]);
        res.status(200).json({ produc });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.EliminarProducto = async (req,res) => {
    try {
        const { id } = req.params;
        await database.query("DELETE FROM productos WHERE idproductos = ?", [id]);
        res.status(200).json({ msg: "Producto eliminado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.ModificarProducto = async (req,res) => {
    try {
        const { id } = req.params;
        const { imagen, nombre, precio, descripcion } = req.body;
        await database.query("UPDATE productos SET imagen = ?, nombre = ?, precio = ?, descripcion = ? WHERE idproductos = ?", [imagen, nombre, precio, descripcion, id]);
        res.status(200).json({ msg: "Producto modificado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}

exports.AgregarProducto = async (req,res) => {
    try {
        const { imagen, nombre, precio, descripcion } = req.body;
        await database.query("INSERT INTO productos(imagen, nombre, precio, descripcion) VALUES (?,?,?,?)", [imagen, nombre, precio, descripcion, ]);
        res.status(200).json({ msg: "Producto agregado" });
    } catch (err) {
        res.status(401).json({ err: err });
    }
}