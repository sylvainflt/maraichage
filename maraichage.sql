-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 20 jan. 2023 à 17:24
-- Version du serveur :  8.0.31-0ubuntu0.20.04.2
-- Version de PHP : 8.0.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `maraichage`
--

-- --------------------------------------------------------

--
-- Structure de la table `rendez_vous`
--

CREATE TABLE `rendez_vous` (
  `id` int NOT NULL,
  `dateRDV` date DEFAULT NULL,
  `heureDebut` time DEFAULT NULL,
  `heureFin` time DEFAULT NULL,
  `Client` varchar(50) COLLATE utf32_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_bin;

--
-- Déchargement des données de la table `rendez_vous`
--

INSERT INTO `rendez_vous` (`id`, `dateRDV`, `heureDebut`, `heureFin`, `Client`) VALUES
(1, '2023-01-19', '08:00:00', '10:00:00', 'la ferme du pont'),
(2, '2023-01-20', '11:00:00', '12:00:00', 'l\'auberge à Martine'),
(3, '2023-01-21', '14:00:00', '14:30:00', 'chez Maurice'),
(4, '2023-01-20', '15:00:00', '16:00:00', 'la ferme Duchaussey'),
(5, '2023-01-20', '18:00:00', '19:00:00', 'robert'),
(6, '2023-01-20', '18:30:00', '19:00:00', 'jean'),
(7, '2023-01-20', '18:30:00', '19:30:00', 'jeanne'),
(8, '2023-01-20', '19:08:00', '20:08:00', 'jeannette'),
(9, '2023-01-20', '22:15:00', '22:21:00', 'albert'),
(10, '2023-01-21', '15:15:00', '22:21:00', 'albert'),
(11, '2023-01-21', '15:15:00', '16:21:00', 'chez Sylvain'),
(12, '2023-01-21', '17:15:00', '19:21:00', 'chez Antoine'),
(13, '2023-01-22', '17:15:00', '19:21:00', 'chez Antoine'),
(14, '2023-01-22', '20:15:00', '21:21:00', 'chez Georgette');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `rendez_vous`
--
ALTER TABLE `rendez_vous`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `rendez_vous`
--
ALTER TABLE `rendez_vous`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
