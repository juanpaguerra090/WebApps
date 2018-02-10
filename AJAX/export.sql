-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 10, 2018 at 11:47 PM
-- Server version: 5.6.35
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `webapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `PARTIDO`
--

CREATE TABLE `PARTIDO` (
  `ID` int(11) NOT NULL,
  `LOCAL` varchar(20) NOT NULL,
  `VISITOR` varchar(20) NOT NULL,
  `LOCAL_SCORE` int(11) NOT NULL,
  `VISITOR_SCORE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `PARTIDO`
--

INSERT INTO `PARTIDO` (`ID`, `LOCAL`, `VISITOR`, `LOCAL_SCORE`, `VISITOR_SCORE`) VALUES
(1, 'Tigres', 'Chivas', 2, 2),
(2, 'Chivas', 'Atlas', 0, 0),
(3, 'Jaguares', 'Veracruz', 0, 0);

-- Modificar la tabla para actualizar los resultados
UPDATE partido SET visitor_score = 2 WHERE id = 1;