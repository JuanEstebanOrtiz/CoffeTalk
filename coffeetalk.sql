-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-04-2021 a las 06:12:47
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coffeetalk`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cesta`
--

CREATE TABLE `cesta` (
  `idcesta` int(11) NOT NULL,
  `cantidad` int(100) DEFAULT NULL,
  `total` int(100) DEFAULT NULL,
  `idproductos` int(11) DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cesta`
--

INSERT INTO `cesta` (`idcesta`, `cantidad`, `total`, `idproductos`, `idusuario`) VALUES
(2, 2, 60000, NULL, NULL),
(5, 2, 70000, 8, 7),
(6, 2, 30000, NULL, NULL),
(7, 2, 60000, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `idcomentario` int(11) NOT NULL,
  `comentario` varchar(100) DEFAULT NULL,
  `idproductos` int(11) DEFAULT NULL,
  `idusuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`idcomentario`, `comentario`, `idproductos`, `idusuario`) VALUES
(1, 'el producto café 1 esta muy rico', 8, 7),
(4, 'el producto cafe 3 esta frio', 8, 23);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactarnos`
--

CREATE TABLE `contactarnos` (
  `idcontactarnos` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `contactarnos`
--

INSERT INTO `contactarnos` (`idcontactarnos`, `nombre`, `email`, `descripcion`) VALUES
(1, 'Juan Esteban Ortiz', 'juanesor@hotmail.com', 'seguir actualizando la app ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `galeria`
--

CREATE TABLE `galeria` (
  `idgaleria` int(11) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`idgaleria`, `imagen`) VALUES
(1, 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/12/14/5fd7240cadcfe.jpeg'),
(8, 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/12/14/5fd7240cadcfe.jpeg'),
(9, 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/12/14/5fd7240cadcfe.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `cantidad`) VALUES
(1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_productos` int(11) NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_productos`, `nombre_producto`, `precio`) VALUES
(1, 'cafe1', 20000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idproductos` int(11) NOT NULL,
  `imagen` varchar(250) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `precio` int(250) DEFAULT NULL,
  `descripcion` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idproductos`, `imagen`, `nombre`, `precio`, `descripcion`) VALUES
(6, 'imagen1', 'cafe1', 15000, 'rico cafe 1 caliente'),
(7, 'imagen2', 'cafe2', 30000, 'rico cafe 2 caliente'),
(8, 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/12/14/5fd7240cadcfe.jpeg', 'cafe3', 35000, 'cafe 3 caliente'),
(9, 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/12/14/5fd7240cadcfe.jpeg', 'cafe4', 30000, 'seguir avanzando el segundo corte2'),
(10, 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/12/14/5fd7240cadcfe.jpeg', 'cafe5', 15000, 'seguir avanzando el segundo corte'),
(11, 'https://www.lavanguardia.com/files/image_948_465/uploads/2020/12/14/5fd7240cadcfe.jpeg', 'cafe6', 30000, 'cafe 2 caliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idroles` int(11) NOT NULL,
  `rol` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idroles`, `rol`) VALUES
(1, 'administrador'),
(2, 'usuarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terminos_condiciones`
--

CREATE TABLE `terminos_condiciones` (
  `idterminos_condiciones` int(11) NOT NULL,
  `politicas` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `terminos_condiciones`
--

INSERT INTO `terminos_condiciones` (`idterminos_condiciones`, `politicas`) VALUES
(1, 'políticas de los términos y condiciones de la app'),
(5, NULL),
(6, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `cell` varchar(10) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `idroles` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idusuario`, `nombre`, `cell`, `direccion`, `email`, `password`, `idroles`) VALUES
(7, 'Juan Esteban Ortiz Valenzuela', '3162074526', 'Calle 71#25-41 Terraza Algarrobo', 'juanesor@hotmail.com', '123456789', 2),
(8, 'Juan Ortiz', '3165074526', 'call 71 #25-41', 'juanesor1@hotmail.com', '12345678', 1),
(10, 'Felipe Nuñez', '3162074526', 'CL 55 A # 2 AW - 45', 'felipe@hotmail.com', '123456789', 2),
(23, 'Andrés Felipe 4', '3162074527', 'CL 55 A # 2 AW - 49', 'juanesor9@hotmail.com', '12345676', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuarios` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuarios`, `nombre`) VALUES
(1, 'juan ortiz'),
(2, 'juan ortiz');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id_venta` int(11) NOT NULL,
  `id_usuarios` int(11) NOT NULL,
  `id_productos` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id_venta`, `id_usuarios`, `id_productos`, `id_pedido`, `total`) VALUES
(1, 1, 1, 1, 60000);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cesta`
--
ALTER TABLE `cesta`
  ADD PRIMARY KEY (`idcesta`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`idcomentario`);

--
-- Indices de la tabla `contactarnos`
--
ALTER TABLE `contactarnos`
  ADD PRIMARY KEY (`idcontactarnos`);

--
-- Indices de la tabla `galeria`
--
ALTER TABLE `galeria`
  ADD PRIMARY KEY (`idgaleria`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_productos`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproductos`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idroles`);

--
-- Indices de la tabla `terminos_condiciones`
--
ALTER TABLE `terminos_condiciones`
  ADD PRIMARY KEY (`idterminos_condiciones`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuarios`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id_venta`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cesta`
--
ALTER TABLE `cesta`
  MODIFY `idcesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `idcomentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `contactarnos`
--
ALTER TABLE `contactarnos`
  MODIFY `idcontactarnos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `idgaleria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_productos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idproductos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idroles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `terminos_condiciones`
--
ALTER TABLE `terminos_condiciones`
  MODIFY `idterminos_condiciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
