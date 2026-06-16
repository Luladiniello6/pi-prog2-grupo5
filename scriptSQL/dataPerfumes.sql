CREATE DATABASE  IF NOT EXISTS `dataperfumes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `dataperfumes`;
-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dataperfumes
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int(10) unsigned DEFAULT NULL,
  `idProducto` int(10) unsigned DEFAULT NULL,
  `comentario` varchar(1000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idProducto` (`idProducto`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,1,'Muy buen perfume','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(2,2,1,'Me encanto, lo uso todos los dias','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(3,3,1,'Super recomendable','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(4,2,2,'Rico aroma','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(5,3,2,'Muy dulce para mi gusto','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(6,4,2,'Excelente calidad','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(7,1,3,'Increible fragancia','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(8,4,3,'Muy duradero','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(9,5,3,'Me gusto bastante','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(10,3,4,'Muy elegante','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(11,2,4,'Ideal para salir','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(12,5,4,'Lo volveria a comprar','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(13,1,5,'Un perfume unico','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(14,2,5,'Muy intenso','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(15,4,5,'Me sorprendio','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(16,5,6,'Muy fresco','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(17,3,6,'Perfecto para el dia','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(18,1,6,'Aroma suave','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(19,2,7,'Muy bueno','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(20,4,7,'Clasico y elegante','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(21,5,7,'Me encanto','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(22,3,8,'Muy liviano','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(23,1,8,'Ideal verano','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(24,2,8,'Lo recomiendo','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(25,4,9,'Muy dulce','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(26,5,9,'Aroma fuerte','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(27,3,9,'Me gusto mucho','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(28,1,10,'Excelente','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(29,2,10,'No me gusto tanto','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(30,5,10,'Muy duradero','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(31,6,3,'el mejor perfume','2026-06-15 20:02:50','2026-06-15 20:02:50',NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `idUsuario` int(10) unsigned DEFAULT NULL,
  `nombre` varchar(1000) NOT NULL,
  `fotoDeImagen` varchar(255) DEFAULT 'default.jpg',
  `descripcion` varchar(1000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `idUsuario` (`idUsuario`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'Sauvage - Dior','images/sauvage.jpg','Es una fragancia famosa por su frescura cítrica y potente fondo amaderado. Inspirada en espacios abiertos, combina bergamota de Calabria, pimienta, lavanda y ambroxan para lograr un aroma crudo, noble y sensual, ideal para el hombre moderno.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(2,2,'The Only One EDP - Dolce & Gabbana','images/theonlyone.jpg','Es una fragancia oriental vainilla para mujeres que combina violeta, café y caramelo, creando un aroma dulce, sofisticado y cremoso.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(3,5,'Invictus Victory - Rabanne','images/invictusvictory.jpg','Es una fragancia oriental fresco y sensual para hombres, caracterizado por el contraste entre un frescor cítrico-picante y una intensidad vainillada-amaderada.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(4,4,'212 Vip Rose - Carolina Herrera','images/212vip.jpg','Es una fragancia femenina de la familia olfativa Floral Frutal, diseñada para ser sofisticada, vibrante y divertida.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(5,1,'Ombre Leather Parfum - Tom Ford','images/ombreleather.jpg','Es una fragancia unisex que intensifica el aroma original con un acorde de cuero negro, hojas de violeta, cedro y jazmín sambac, logrando una estela floral-amaderada profunda, sensual y más opulenta.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(6,3,'Idôle EDP - Lancome','images/idole.jpg','Es una fragancia diseñada para ser fresca, limpia y luminosa, con un marcado acento en la rosa moderna.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(7,3,'Pour Homme Dylan Blue - Versace','images/dylanblue.jpg','Es una fragancia caracterizada por un aroma fresco, intenso y mediterráneo. Equilibra notas acuáticas y cítricas (bergamota, pomelo) con toques especiados, ambroxán y un fondo de incienso, resultando en un perfume versátil, limpio y elegante para uso diario.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(8,2,'Everyone EDT - Calvin Klein','images/everyone.jpg','Es una fragancia unisex, cítrica y amaderada. Combina aceite de naranja orgánica, té azul y cedro para un aroma fresco, enérgico y versátil, ideal para el uso diario y climas cálidos.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(9,5,'Bitter Peach EDP - Tom Ford','images/bitterpeach.png','Es una fragancia unisex, descrita explícitamente dulce, peligrosa y voluptuosa. Combina notas intensas de durazno de viña, naranja sanguina y cardamomo con un corazón de ron y davana, sobre una base seductora de sándalo y pachulí.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(10,1,'Goddess - Burberry','images/goddess.jpg','Es una fragancia diseñada para la mujer moderna que busca confianza y poder. Se destaca por un trío único de vainillas, lavanda, cacao y jengibre, ofreciendo un aroma dulce, sofisticado y duradero, con una propuesta elegante y recargable que evoca la fuerza interior.','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(16,6,'moncler pour homme','images/default.jpg','fragancia de perfume de hombre','2026-06-16 01:50:30','2026-06-16 01:50:30',NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `contrasenia` varchar(1000) NOT NULL,
  `fotoDePerfil` varchar(1000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'biran','braiangomez@gmail.com','proyecto','/images/profile-default.png','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(2,'lourdes','lourdesD@gmail.com','proyecto1','/images/profile-default.png','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(3,'ivan','IvanL@gmail.com','proyecto2','/images/profile-default.png','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(4,'valen','ValentinV@gmail.com','proyecto3','/images/profile-default.png','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(5,'lucas','Lucas@gmail.com','proyecto4','/images/profile-default.png','2026-06-10 20:52:53','2026-06-10 20:52:53',NULL),(6,'nicolas','i@I.com','$2b$10$8lnMw4/2euQ635kWvlMgEuf3txHuBqaTRGFweEzh4UvzPbgpW.Gci','','2026-06-10 20:53:30','2026-06-10 20:53:30',NULL),(7,'ivan','ivan@gmail.com','$2b$10$Ys3OQesqch1340AhBfwrd.ZMunhWRPck5At0LaL2qFbEUbX4qMkCS','','2026-06-15 23:17:20','2026-06-15 23:17:20',NULL),(8,'maria eugenia','maru@gmail.com','$2b$10$F/sJ7EbMab0.D14PSPxRQuhK7WgWLFiU8MZICsZXW6mZINV1i4Zgu','','2026-06-16 00:16:12','2026-06-16 00:16:12',NULL),(9,'nelly','nelly@gmail.com','$2b$10$MTWX6XQacDkHZA/1/L8myOutFBckT8jvjpepfXI9RFv5VZdhCQtE.','','2026-06-16 02:00:32','2026-06-16 02:00:32',NULL),(10,'pablo','pablo@gmail.com','$2b$10$uRCKVdjeuCUT7kEgZOevPevRPhG.ewQ4WQmvgosBCiDz.zj4lokNu','images/profile-default.png','2026-06-16 02:05:51','2026-06-16 02:05:51',NULL),(11,'pollo','pollo@gmail.com','$2b$10$wbuOT.6xya04I8hun7409OGeUbaHbDtpoeBC2F0rgBHPnTH7KY4De','images/profile-default.png','2026-06-16 02:06:53','2026-06-16 02:06:53',NULL),(12,'fina','fina@gmail.com','$2b$10$lc.5T1DLX3ioVUnnvFSqlOs5vSWMS8oettVLVA.VQuvOTTpuUTLTG','images/profile-default.png','2026-06-16 02:09:39','2026-06-16 02:09:39',NULL),(13,'bauti','bauti@gmail.com','$2b$10$nzMZug2KnFmQt/FpbcOs2.fJVR5HyqO78RMyFc25ztJWhz3E9JHlS','images/profile-default.png','2026-06-16 02:10:29','2026-06-16 02:10:29',NULL),(14,'toto','toto@gmail.com','$2b$10$gjjxrHlEUi/kFsfppEML7..GBbH6L/PSRZ81E6/33ft/KfdZ6BRwK','images/fotoDePerfil.png','2026-06-16 02:12:36','2026-06-16 02:12:36',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-06-15 23:30:16
