const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const usuarioRoutes = require('./routes/usuario');
const productosRoutes = require('./routes/productos');
const cestaRoutes = require('./routes/cesta');
const comentarioRoutes = require('./routes/comentario');
const galeriaRoutes = require('./routes/galeria');
const contactarnosRoutes = require('./routes/contactarnos');
const terminos_condicionesRoutes = require('./routes/terminos_condiciones');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.use("/usuarios",usuarioRoutes);
app.use("/productos",productosRoutes);
app.use("/cestas",cestaRoutes);
app.use("/comentarios",comentarioRoutes);
app.use("/galerias",galeriaRoutes);
app.use("/contactarnos",contactarnosRoutes);
app.use("/terminos_condiciones",terminos_condicionesRoutes);

app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})