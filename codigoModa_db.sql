-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: railway
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `gerencias`
--

DROP TABLE IF EXISTS `gerencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gerencias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `grupos_id` int DEFAULT NULL,
  `fecha_endulzada` datetime DEFAULT NULL,
  `fecha_descubrimiento` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_gerencias_grupos_idx` (`grupos_id`),
  CONSTRAINT `fk_gerencias_grupos` FOREIGN KEY (`grupos_id`) REFERENCES `microcosmos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gerencias`
--

LOCK TABLES `gerencias` WRITE;
/*!40000 ALTER TABLE `gerencias` DISABLE KEYS */;
INSERT INTO `gerencias` VALUES (1,'Gerencia de logistica',1,'2022-01-06 00:00:00','2023-01-11 00:00:00'),(2,'Gerencia de industrial',1,NULL,NULL),(3,'Gerencia de marcas y mercadeo',4,NULL,NULL),(4,'Gerencia de compras',4,NULL,NULL),(5,'Gerencia de tecnologia',2,NULL,NULL),(6,'Gerencia legal',2,NULL,NULL),(7,'Gerencia de servicios compartidos',2,NULL,NULL),(8,'Gerencia de desarrollo organizional',2,NULL,NULL),(9,'Grencia digital',3,NULL,NULL),(10,'Gerencia de nuevos negocios',3,NULL,NULL);
/*!40000 ALTER TABLE `gerencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `microcosmos`
--

DROP TABLE IF EXISTS `microcosmos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `microcosmos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `microcosmos`
--

LOCK TABLES `microcosmos` WRITE;
/*!40000 ALTER TABLE `microcosmos` DISABLE KEYS */;
INSERT INTO `microcosmos` VALUES (1,'Cadena de Abastecimiento'),(2,'Administrativos '),(3,'Nuevos negocios '),(4,'UEN '),(5,'Canal ');
/*!40000 ALTER TABLE `microcosmos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contrasenia` varchar(200) NOT NULL,
  `gerencias_id` int NOT NULL,
  `rolUsuario` int DEFAULT NULL,
  `gustos` varchar(200) NOT NULL,
  `disgusto` varchar(200) NOT NULL,
  `alegrias` varchar(200) NOT NULL,
  `amigoSecreto` text,
  PRIMARY KEY (`id`),
  KEY `fk_usuarios_gerencias1_idx` (`gerencias_id`),
  CONSTRAINT `fk_usuarios_gerencias1` FOREIGN KEY (`gerencias_id`) REFERENCES `gerencias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (20,'admin','admin@admin.com','$2a$10$kmIYZ1gClPV8t.JmoTuBueH0oRepbhPW51ogpaFZCbkbjxEsL7xZC',1,1,'hola','hola','hola',NULL),(22,'prueba','prueba@gmail.com','$2a$10$h3Q.du7wvEz4qAja0AXQZOoXYvtlPLvW1mHrJgbPdVWbPaY8Kmaga',1,2,'joaj','ohj','oj',NULL),(33,'Martin Sanchez ','sanchezmartin2435@gmail.com','$2a$10$iqezDlcwFR75sARfaToQQuaeS8g2JzKb6.d0DFAqLISmt5I9w0DJ6',5,1,'jhgafx','kjbk','jvbk',NULL),(34,'Martin Sanchez ','maxtin123@hotmail.com','$2a$10$TfnkUa9NfQH0.2pkp/NTROAStKskWyOtOU1/YacmoQ.8dvw5mPHUS',3,1,'ab','jkh','h',NULL),(35,' maria','admin@admin.com','$2a$10$FBg35xgsqS4ql.uRiYjAPOM8RuK3A0hD6wxB/UU7ZBFbyoYU80A.W',10,1,'ambjkjab','kjb','kjb',NULL),(36,'prueba','admin@hoa.com','$2a$10$9FPaDTU2cgIvGJDRkgLTaOiPFB9YnDo8y7eR3Tojz8R/22TXt5rFq',1,2,'jkah','hljhg','kjg',NULL),(37,' martin','admin@sjhv.com','$2a$10$b6HzrZhZnkE/zt1mmC3suubiBJ2ya6MMbrZAnxHhyd.6HJSMG6Ubm',1,2,'jhgvjh','vhv','k',NULL);
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

-- Dump completed on 2022-11-02 17:30:46
