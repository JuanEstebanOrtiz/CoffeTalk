-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-02-2021 a las 15:42:36
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
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `precio` int(100) DEFAULT NULL,
  `cantidad` int(100) DEFAULT NULL,
  `total` int(100) DEFAULT NULL,
  `cliente` varchar(30) DEFAULT NULL,
  `cell` varchar(10) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cesta`
--

INSERT INTO `cesta` (`idcesta`, `nombre`, `descripcion`, `precio`, `cantidad`, `total`, `cliente`, `cell`, `direccion`) VALUES
(1, 'cafe1', 'rico café caliente', 15000, 2, 30000, 'Juan Esteban Ortiz Valenzuela', '3165074526', 'call 71 #25-41'),
(2, 'cafe2', 'rico café caliente', 30000, 2, 60000, 'Juan Esteban Ortiz Valenzuela', '3165074526', 'call 71 #25-41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `idcomentario` int(11) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `comentario` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`idcomentario`, `nombre`, `comentario`) VALUES
(1, 'Juan Esteban Ortiz', 'el producto café 1 esta muy rico');

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
  `producto` varchar(30) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `galeria`
--

INSERT INTO `galeria` (`idgaleria`, `producto`, `imagen`) VALUES
(1, 'cafe1', 'imagen1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idproductos` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `precio` int(100) DEFAULT NULL,
  `descripcion` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idproductos`, `nombre`, `precio`, `descripcion`) VALUES
(2, 'cafe 1', 15000, 'cafe 1');

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
(1, 'políticas de los términos y condiciones de la app');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `cell` varchar(10) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `cell`, `direccion`, `email`, `password`) VALUES
(2, 'Juan Esteban Ortiz Valenzuela', '3165074526', 'calle 71 #25-41', 'juanesor@hotmail.com', '123456789');

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
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idproductos`);

--
-- Indices de la tabla `terminos_condiciones`
--
ALTER TABLE `terminos_condiciones`
  ADD PRIMARY KEY (`idterminos_condiciones`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cesta`
--
ALTER TABLE `cesta`
  MODIFY `idcesta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `idcomentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `contactarnos`
--
ALTER TABLE `contactarnos`
  MODIFY `idcontactarnos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `galeria`
--
ALTER TABLE `galeria`
  MODIFY `idgaleria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idproductos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `terminos_condiciones`
--
ALTER TABLE `terminos_condiciones`
  MODIFY `idterminos_condiciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
