-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.10.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for nic
CREATE DATABASE IF NOT EXISTS `nic` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `nic`;

-- Dumping structure for table nic.ayushman_claims
CREATE TABLE IF NOT EXISTS `ayushman_claims` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `districtname` varchar(50) NOT NULL,
  `noofclaims` int(11) NOT NULL,
  `claimamount` decimal(20,6) NOT NULL,
  `entrydate` date NOT NULL DEFAULT curdate(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.ayushman_claims: ~27 rows (approximately)
/*!40000 ALTER TABLE `ayushman_claims` DISABLE KEYS */;
INSERT INTO `ayushman_claims` (`id`, `districtname`, `noofclaims`, `claimamount`, `entrydate`) VALUES
	(1, 'BALOD', 27093, 17.150000, '2023-03-27'),
	(2, 'BALODA BAZAR', 44119, 29.650000, '2023-03-27'),
	(3, 'BALRAMPUR', 27842, 18.630000, '2023-03-27'),
	(4, 'bastar', 44018, 34.050000, '2023-03-27'),
	(5, 'bemetara', 17030, 8.290000, '2023-03-27'),
	(6, 'bijapur', 22640, 13.820000, '2023-03-27'),
	(7, 'bilaspur', 97563, 129.520000, '2023-03-27'),
	(8, 'dantewada', 10834, 6.180000, '2023-03-27'),
	(9, 'dhamtari', 34256, 38.010000, '2023-03-27'),
	(10, 'durg', 90938, 96.820000, '2023-03-27'),
	(11, 'gariyaband', 17519, 13.600000, '2023-03-27'),
	(12, 'gaurella pendra marwahi', 3751, 1.170000, '2023-03-27'),
	(13, 'janjgir-champa', 34440, 24.750000, '2023-03-27'),
	(14, 'kabirdham', 25910, 28.170000, '2023-03-27'),
	(15, 'kanker', 31982, 22.750000, '2023-03-27'),
	(16, 'kondagaon', 19525, 28.170000, '2023-03-27'),
	(17, 'korba', 40018, 32.520000, '2023-03-27'),
	(18, 'korea', 34672, 21.640000, '2023-03-27'),
	(19, 'mhasamund', 26057, 32.840000, '2023-03-27'),
	(20, 'mungeli', 14013, 8.000000, '2023-03-27'),
	(21, 'narayanpur', 6280, 4.410000, '2023-03-27'),
	(22, 'raigarh', 75000, 59.000000, '2023-03-27'),
	(23, 'raipur', 275257, 501.000000, '2023-03-27'),
	(24, 'rajnandgaon', 59801, 71.210000, '2023-03-27'),
	(25, 'sukma', 10373, 5.130000, '2023-03-27'),
	(26, 'surajpur', 23494, 5.130000, '2023-03-27'),
	(27, 'surguja', 55278, 59.290000, '2023-03-27');
/*!40000 ALTER TABLE `ayushman_claims` ENABLE KEYS */;

-- Dumping structure for table nic.daulat
CREATE TABLE IF NOT EXISTS `daulat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(50) NOT NULL,
  `date` date NOT NULL DEFAULT curdate(),
  `hospitalcode` int(11) NOT NULL,
  `noofopd` int(11) NOT NULL,
  `noofipd` int(11) NOT NULL,
  `totalbedoccupied` int(11) NOT NULL,
  `userrole` int(11) NOT NULL DEFAULT 2,
  `totalayushman` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` char(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.daulat: ~0 rows (approximately)
/*!40000 ALTER TABLE `daulat` DISABLE KEYS */;
/*!40000 ALTER TABLE `daulat` ENABLE KEYS */;

-- Dumping structure for table nic.district_master
CREATE TABLE IF NOT EXISTS `district_master` (
  `distcode` int(11) NOT NULL,
  `distnamehi` varchar(50) NOT NULL DEFAULT '',
  `distnameen` varchar(50) NOT NULL DEFAULT '',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`distcode`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.district_master: ~33 rows (approximately)
/*!40000 ALTER TABLE `district_master` DISABLE KEYS */;
INSERT INTO `district_master` (`distcode`, `distnamehi`, `distnameen`, `id`) VALUES
	(39, '', 'SURGUJA', 2),
	(40, '', 'BILASPUR', 3),
	(41, '', 'RAIGARH', 4),
	(42, '                     ', 'RAJNANDGAON', 1),
	(43, '', 'DURG', 5),
	(44, '', 'RAIPUR', 6),
	(45, '', 'BASTAR', 7),
	(53, '', 'KORIA', 8),
	(54, '', 'JANJGIR-CHAMPA', 9),
	(55, '', 'KORBA', 10),
	(56, '', 'JASHPUR', 11),
	(57, '', 'KABIRDHAM', 12),
	(58, '', 'MAHASAMUND', 13),
	(59, '', 'DHAMTARI', 14),
	(60, '', 'KANKER', 15),
	(61, '', 'DANTEWADA', 16),
	(62, '', 'NARAYANPUR', 17),
	(63, '', 'BIJAPUR', 18),
	(64, '', 'SUKMA', 19),
	(65, '', 'KONDAGAON', 20),
	(66, '', 'BALODA BAZAR', 21),
	(67, '', 'GARIYABANDH', 22),
	(68, '', 'BEMETARA', 23),
	(69, '', 'BALOD', 24),
	(70, '', 'MUNGELI', 25),
	(71, '', 'SURAJPUR', 26),
	(72, '', 'BALRAMPUR', 27),
	(76, '', 'Gaurella Pendra Marwahi', 28),
	(77, '', 'KHAIRGARH CHHUIKHADAN GANDAI', 29),
	(78, '', 'MANENDRAGARH CHIRIMIRI BHARATPUR', 30),
	(79, '', 'MOHLA MANPUR AMBAGARH CHOUKI', 31),
	(80, '', 'SAKTI', 32),
	(81, '', 'SARANGARH BILAIGARH', 33);
/*!40000 ALTER TABLE `district_master` ENABLE KEYS */;

-- Dumping structure for table nic.hospital_login
CREATE TABLE IF NOT EXISTS `hospital_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(50) NOT NULL,
  `date` date NOT NULL DEFAULT curdate(),
  `hospitalcode` int(11) NOT NULL,
  `noofopd` int(11) NOT NULL,
  `noofipd` int(11) NOT NULL,
  `totalbedoccupied` int(11) NOT NULL,
  `userrole` int(11) NOT NULL DEFAULT 2,
  `totalayushman` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` char(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.hospital_login: ~7 rows (approximately)
/*!40000 ALTER TABLE `hospital_login` DISABLE KEYS */;
INSERT INTO `hospital_login` (`id`, `password`, `date`, `hospitalcode`, `noofopd`, `noofipd`, `totalbedoccupied`, `userrole`, `totalayushman`, `email`, `mobile`) VALUES
	(1, 'speciality1', '2023-03-20', 2, 23, 23, 23, 2, 23, 'email19@gmail.com', '8493397648'),
	(2, 'speciality2', '2023-03-21', 1, 43, 53, 43, 2, 13, 'email16@gmail.com', '9497397648'),
	(3, 'speciality1', '2023-03-19', 2, 34, 34, 34, 2, 34, 'email21@gmail.com', '8497397678'),
	(4, 'speciality1', '2023-03-22', 2, 34, 44, 32, 2, 12, 'email11@gmail.com', '8497393648'),
	(5, 'speciality3', '2023-03-07', 1, 22, 34, 43, 2, 11, 'email3@gmail.com', '8494397648'),
	(6, 'Pass@123', '2023-03-29', 2, 67, 87, 78, 2, 75, 'email@gmail.com', '8497397648'),
	(7, 'Pass@123', '2023-03-29', 1, 102, 109, 99, 2, 93, 'email1@gmail.com', '9839232256');
/*!40000 ALTER TABLE `hospital_login` ENABLE KEYS */;

-- Dumping structure for table nic.hospital_master
CREATE TABLE IF NOT EXISTS `hospital_master` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hospitalcode` int(11) NOT NULL,
  `hospitalname` varchar(50) NOT NULL,
  `distcode` int(11) NOT NULL,
  `blockcode` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.hospital_master: ~2 rows (approximately)
/*!40000 ALTER TABLE `hospital_master` DISABLE KEYS */;
INSERT INTO `hospital_master` (`id`, `hospitalcode`, `hospitalname`, `distcode`, `blockcode`) VALUES
	(3, 1, 'dr. hospital', 4, 0),
	(4, 2, 'dr.A.P.J. hospital', 8, 0);
/*!40000 ALTER TABLE `hospital_master` ENABLE KEYS */;

-- Dumping structure for table nic.immunization_details_entry
CREATE TABLE IF NOT EXISTS `immunization_details_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hospitalcode` int(11) NOT NULL,
  `immunizationid` int(11) NOT NULL,
  `noofimmunization` int(11) NOT NULL,
  `entrydate` date NOT NULL DEFAULT curdate(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.immunization_details_entry: ~9 rows (approximately)
/*!40000 ALTER TABLE `immunization_details_entry` DISABLE KEYS */;
INSERT INTO `immunization_details_entry` (`id`, `hospitalcode`, `immunizationid`, `noofimmunization`, `entrydate`) VALUES
	(1, 1, 1, 1000, '2023-03-13'),
	(2, 2, 2, 65, '2023-03-07'),
	(3, 2, 2, 43, '2023-03-13'),
	(4, 2, 2, 43, '2023-03-13'),
	(5, 2, 2, 33, '2023-03-10'),
	(6, 1, 3, 19, '2023-03-09'),
	(7, 1, 2, 45, '2023-03-17'),
	(8, 1, 2, 34, '2023-03-10'),
	(9, 1, 1, 1, '2023-05-06');
/*!40000 ALTER TABLE `immunization_details_entry` ENABLE KEYS */;

-- Dumping structure for table nic.immunization_master
CREATE TABLE IF NOT EXISTS `immunization_master` (
  `immunizationid` int(11) NOT NULL AUTO_INCREMENT,
  `immunizationname` varchar(255) NOT NULL,
  `immunizationfullname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`immunizationid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.immunization_master: ~0 rows (approximately)
/*!40000 ALTER TABLE `immunization_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `immunization_master` ENABLE KEYS */;

-- Dumping structure for table nic.ipd_details_entry
CREATE TABLE IF NOT EXISTS `ipd_details_entry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hospitalcode` int(11) NOT NULL,
  `entrydate` date NOT NULL DEFAULT curdate(),
  `noofcasereported` int(11) NOT NULL,
  `speciality` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.ipd_details_entry: ~4 rows (approximately)
/*!40000 ALTER TABLE `ipd_details_entry` DISABLE KEYS */;
INSERT INTO `ipd_details_entry` (`id`, `hospitalcode`, `entrydate`, `noofcasereported`, `speciality`) VALUES
	(1, 2, '2023-03-08', 567, 'speciality2'),
	(2, 2, '2023-03-06', 44, 'speciality2'),
	(3, 2, '2023-03-06', 44, 'speciality2'),
	(4, 1, '2023-03-15', 34, 'speciality2');
/*!40000 ALTER TABLE `ipd_details_entry` ENABLE KEYS */;

-- Dumping structure for table nic.registration
CREATE TABLE IF NOT EXISTS `registration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL DEFAULT 22,
  `email` varchar(50) NOT NULL DEFAULT 'nic@gov.in',
  `mobile` char(10) NOT NULL,
  `password` varchar(50) NOT NULL DEFAULT 'nic@123',
  `role` int(11) NOT NULL,
  `distname` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='registration';

-- Dumping data for table nic.registration: ~20 rows (approximately)
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` (`id`, `name`, `age`, `email`, `mobile`, `password`, `role`, `distname`) VALUES
	(1, 'nic2', 23, 'nic1@gov.in', '7879348751', 'nic@123', 1, 'RAIPUR'),
	(2, 'nic1', 22, 'nic1@gov.in', '7879348752', 'nic@123', 2, 'BILASPUR'),
	(3, 'nic3', 24, 'nic1@gov.in', '7879348753', 'nic@123', 3, 'DURG'),
	(4, 'nic4', 21, 'nic1@gov.in', '7879348754', 'nic@123', 2, 'RAJNANDGAON'),
	(5, 'nic5', 21, 'nic1@gov.in', '7879348755', 'nic@123', 2, 'MAHASAMUND'),
	(6, 'nic6', 29, 'nic1@gov.in', '7879348756', 'nic@123', 2, 'KANKER'),
	(7, 'nic7', 26, 'nic1@gov.in', '7879348757', 'nic@123', 2, 'BALOD'),
	(8, 'ni87', 27, 'nic1@gov.in', '7879338757', 'nic@123', 3, 'BILASPUR'),
	(9, 'nic9', 25, 'nic1@gov.in', '7879338737', 'nic@123', 3, 'RAJNANDGAON'),
	(10, 'nic10', 23, 'nic1@gov.in', '7579338737', 'nic@123', 3, 'MAHASAMUND'),
	(11, 'nic11', 28, 'nic1@gov.in', '7576338737', 'nic@123', 3, 'BALOD'),
	(12, 'nic12', 21, 'nic1@gov.in', '7576318737', 'nic@123', 2, 'RAIPUR'),
	(13, 'nic13', 31, 'nic1@gov.in', '7576312737', 'nic@123', 2, 'DURG'),
	(14, 'nic14', 22, 'nic1@gov.in', '7576310137', 'nic@123', 2, 'BEMETARA'),
	(15, 'nic15', 32, 'nic1@gov.in', '7576310137', 'nic@123', 3, 'RAIPUR'),
	(16, 'nic16', 27, 'nic1@gov.in', '7546310137', 'nic@123', 2, 'BASTAR'),
	(17, 'nic16', 27, 'nic1@gov.in', '7546310137', 'nic@123', 3, 'BEMETARA'),
	(18, 'peeyu', 22, 'peeyu@gmail.com', '8934933595', 'nic@123', 2, 'KONDAGAON'),
	(19, 'prachi', 22, 'prachi@gmail.com', '6548756578', 'nic@123', 3, 'BASTAR'),
	(20, 'manshi', 22, 'manshi@gmail.com', '9835763353', 'nic@123', 2, '');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;

-- Dumping structure for table nic.roleuser
CREATE TABLE IF NOT EXISTS `roleuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usertype` varchar(255) NOT NULL DEFAULT '0',
  `roleid` int(11) NOT NULL DEFAULT 0,
  `userlevel` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.roleuser: ~0 rows (approximately)
/*!40000 ALTER TABLE `roleuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `roleuser` ENABLE KEYS */;

-- Dumping structure for table nic.scheme_details
CREATE TABLE IF NOT EXISTS `scheme_details` (
  `schemeid` int(11) NOT NULL AUTO_INCREMENT,
  `schemename` varchar(255) NOT NULL DEFAULT '',
  `schemecategory` varchar(255) NOT NULL DEFAULT '',
  `schemeheadname` char(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`schemeid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.scheme_details: ~3 rows (approximately)
/*!40000 ALTER TABLE `scheme_details` DISABLE KEYS */;
INSERT INTO `scheme_details` (`schemeid`, `schemename`, `schemecategory`, `schemeheadname`) VALUES
	(1, 'health1', 'health', 'dr.b.h'),
	(2, 'health2', 'health', 'dr.h.k.'),
	(3, 'health3', 'health', 'dr.n.m.');
/*!40000 ALTER TABLE `scheme_details` ENABLE KEYS */;

-- Dumping structure for table nic.scheme_master
CREATE TABLE IF NOT EXISTS `scheme_master` (
  `schemeid` int(11) NOT NULL AUTO_INCREMENT,
  `schemename` varchar(255) NOT NULL,
  `schemeapi` varchar(255) NOT NULL,
  `schememethod` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`schemeid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.scheme_master: ~6 rows (approximately)
/*!40000 ALTER TABLE `scheme_master` DISABLE KEYS */;
INSERT INTO `scheme_master` (`schemeid`, `schemename`, `schemeapi`, `schememethod`) VALUES
	(1, 'dkbssy', 'localhost/', ''),
	(2, 'sotto', 'localhost/', ''),
	(3, 'ayushamaan', 'localhost/', ''),
	(4, 'DME Incentive', 'localhost//', ''),
	(5, 'DHS Incentive', 'localhost//', ''),
	(6, 'COVID Incentive', 'Localhost//', '');
/*!40000 ALTER TABLE `scheme_master` ENABLE KEYS */;

-- Dumping structure for table nic.speciality_master
CREATE TABLE IF NOT EXISTS `speciality_master` (
  `specialitycode` int(11) NOT NULL AUTO_INCREMENT,
  `specialityname` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`specialitycode`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table nic.speciality_master: ~3 rows (approximately)
/*!40000 ALTER TABLE `speciality_master` DISABLE KEYS */;
INSERT INTO `speciality_master` (`specialitycode`, `specialityname`) VALUES
	(1, 'speciality1'),
	(2, 'speciality2'),
	(3, 'speciality3');
/*!40000 ALTER TABLE `speciality_master` ENABLE KEYS */;

-- Dumping structure for table nic.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table nic.users: ~13 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
	(1, 'nic1', 'nic1@gmail.com', 'nic@123'),
	(2, 'nic2', 'nic1@gmail.com', 'nic@123'),
	(3, 'nic3', 'nic3@gmail.com', 'nic@123'),
	(4, 'nic4', 'nic4@gmail.com', 'nic@123'),
	(5, 'nic5', 'nic5@gmail.com', 'nic@123'),
	(6, 'nic6', 'nic6@gmail.com', 'nic@123'),
	(12, 'nic7', 'nic7@gmail.com', 'nic@123'),
	(13, 'nic8', 'nic8@gmail.com', 'nic@123'),
	(14, 'nic9', 'nic9@gmail.com', 'nic@123'),
	(15, 'nic10', 'nic10@gmail.com', 'nic@123'),
	(16, 'nic11', 'nic11@gmail.com', 'nic@123'),
	(18, 'prem', 'prem@gmail.com', 'nic@123'),
	(19, 'DAULAT', 'DAULAT@GMAIL.COM', 'NIC@123');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
