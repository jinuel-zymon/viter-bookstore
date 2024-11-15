-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2024 at 08:26 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `books_bestsellers`
--

CREATE TABLE `books_bestsellers` (
  `bestsellers_aid` int(11) NOT NULL,
  `bestsellers_title` varchar(150) NOT NULL,
  `bestsellers_author` varchar(100) NOT NULL,
  `bestsellers_type` varchar(50) NOT NULL,
  `bestsellers_rank` varchar(10) NOT NULL,
  `bestsellers_genre` varchar(50) NOT NULL,
  `bestsellers_year` varchar(10) NOT NULL,
  `bestsellers_category` varchar(50) NOT NULL,
  `bestsellers_summary` text NOT NULL,
  `bestsellers_price` varchar(20) NOT NULL,
  `bestsellers_photo` varchar(100) NOT NULL,
  `bestsellers_is_active` tinyint(1) NOT NULL,
  `bestsellers_datetime` varchar(20) NOT NULL,
  `bestsellers_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_bestsellers`
--

INSERT INTO `books_bestsellers` (`bestsellers_aid`, `bestsellers_title`, `bestsellers_author`, `bestsellers_type`, `bestsellers_rank`, `bestsellers_genre`, `bestsellers_year`, `bestsellers_category`, `bestsellers_summary`, `bestsellers_price`, `bestsellers_photo`, `bestsellers_is_active`, `bestsellers_datetime`, `bestsellers_created`) VALUES
(1, 'Book of Disquiet', 'Fernando Pessoa', 'Paperback', '1', 'Essays', '2333', 'Classics', 'dsfdsfdsf', '222', 'disquiet.jpg', 1, '2024-11-15 11:53:05', '2024-11-15 08:41:22'),
(3, 'The Myth of Sisyphus', 'Albert Camus', 'Paperback', '2', 'Essays', '1960', 'Modern Classics', 'dsfdsfdsfsfdsf', '600', 'myth.jpg', 1, '2024-11-15 11:52:34', '2024-11-15 08:51:41'),
(4, 'East Of Eden', 'John Steinbeck', 'Paperback', '3', 'Historical', '100', 'Modern Classics', 'fdgfdgdfgd', '999', 'eden.jpg', 1, '2024-11-15 11:53:17', '2024-11-15 10:09:42'),
(5, 'M Train', 'Patti Smith', 'Paperback', '4', 'Memoir', '2016', 'Modern Classics', 'dsfdsfsdfdsf', '999', 'mtrain.jpg', 1, '2024-11-15 11:55:55', '2024-11-15 10:12:38'),
(6, 'The Complete Works of Alberto Caeiro', 'Fernando Pessoa', 'Paperback', '5', 'Poetry', '1980', 'Classics', 'dsfdsfdsfdfdsf', '1500', 'caeiro.jpg', 1, '2024-11-15 11:51:45', '2024-11-15 10:14:39'),
(7, 'The Woman Destroyed', 'Simone de Beauvoir', 'Paperback', '6', 'Literary', '1989', 'Modern Classics', '231sdfdsfafds', '786', 'twd.jpg', 1, '2024-11-15 11:52:45', '2024-11-15 10:36:46');

-- --------------------------------------------------------

--
-- Table structure for table `books_books`
--

CREATE TABLE `books_books` (
  `books_aid` int(11) NOT NULL,
  `books_title` varchar(150) NOT NULL,
  `books_author` varchar(100) NOT NULL,
  `books_type` varchar(50) NOT NULL,
  `books_genre` varchar(50) NOT NULL,
  `books_year` varchar(10) NOT NULL,
  `books_category` varchar(50) NOT NULL,
  `books_summary` text NOT NULL,
  `books_price` varchar(20) NOT NULL,
  `books_photo` varchar(100) NOT NULL,
  `books_is_active` tinyint(1) NOT NULL,
  `books_datetime` varchar(20) NOT NULL,
  `books_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_books`
--

INSERT INTO `books_books` (`books_aid`, `books_title`, `books_author`, `books_type`, `books_genre`, `books_year`, `books_category`, `books_summary`, `books_price`, `books_photo`, `books_is_active`, `books_datetime`, `books_created`) VALUES
(4, 'Boredom', 'Alberto Moravia', 'Paperback', 'Literary', '1999', 'NYRB', 'Boredomgfnfnddd', '950', 'boredom.jpg', 1, '2024-11-15 07:45:53', '2024-11-14 13:13:39'),
(8, 'Letters to a Young Poet', 'Rainer Maria Rilke', 'Paperback', 'Essays', '2000', 'Classics', '22222dffggfdgdfgfdg', '450', 'poet.jpg', 1, '2024-11-15 11:36:15', '2024-11-15 08:54:28'),
(9, 'Frankenstein', 'Mary Shelley', 'Paperback', 'Sci-Fi', '1800', 'Classics', 'dffdsfsdfdsfdsfdsf', '700', 'frankenstein.jpg', 1, '2024-11-15 09:36:41', '2024-11-15 09:05:28'),
(10, 'Abigail', 'Magda Szabo', 'Paperback', 'Historical', '1989', 'NYRB', 'dsfdsfdsfdsfdsfcvvvvv', '999', 'abigail.jpg', 1, '2024-11-15 09:06:40', '2024-11-15 09:06:40'),
(11, 'Little Women', 'Louisa May Alcott', 'Paperback', 'Drama', '1899', 'Classics', '34342erffsfdsdsdfs', '899', 'little.jpg', 1, '2024-11-15 10:40:50', '2024-11-15 10:18:01'),
(12, 'The Phantom of the Opera', 'Gaston Leroux', 'Paperback', 'Literary', '1900', 'Classics', '213213dfsdfsdsf', '490', 'phantom.jpg', 1, '2024-11-15 10:19:02', '2024-11-15 10:19:02'),
(13, 'The Posthumous Memoirs of Bras Cubas', 'Machado de Assis', 'Paperback', 'Memoir', '1880', 'Classics', 'eqwe2432324324324', '999', 'bras.jpg', 1, '2024-11-15 10:20:57', '2024-11-15 10:20:57'),
(14, 'Beware Of Pity', 'Stefan Zweig', 'Paperback', 'Historical', '1933', 'NYRB', 'wi3err90we8ty', '931', 'bop.jpg', 1, '2024-11-15 10:23:05', '2024-11-15 10:23:05'),
(15, 'Chess Story', 'Stefan Zweig', 'Paperback', 'Literary', '1923', 'NYRB', 'dsfdsf23213213123', '213', 'chess.jpg', 1, '2024-11-15 10:23:44', '2024-11-15 10:23:44'),
(16, 'Season of Migration to the North', 'Tayeb Salih', 'Paperback', 'Literary', '1988', 'NYRB', 'DSFDSFDS', '899', 'north.jpg', 1, '2024-11-15 10:25:41', '2024-11-15 10:25:41'),
(17, 'Pride and Prejudice', 'Jane Austen', 'Paperback', 'Drama', '1800', 'Classics', '232123213dsfdsffds', '899', 'pride.jpg', 1, '2024-11-15 10:42:43', '2024-11-15 10:42:43');

-- --------------------------------------------------------

--
-- Table structure for table `books_settings_booktype`
--

CREATE TABLE `books_settings_booktype` (
  `booktype_aid` int(11) NOT NULL,
  `booktype_title` varchar(50) NOT NULL,
  `booktype_is_active` tinyint(1) NOT NULL,
  `booktype_datetime` varchar(20) NOT NULL,
  `booktype_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_settings_booktype`
--

INSERT INTO `books_settings_booktype` (`booktype_aid`, `booktype_title`, `booktype_is_active`, `booktype_datetime`, `booktype_created`) VALUES
(1, 'Paperback', 1, '2024-11-14 15:45:06', '2024-11-14 15:19:11'),
(2, 'Hardcover', 1, '2024-11-15 07:07:24', '2024-11-14 15:24:49'),
(7, 'Special Edition', 1, '2024-11-15 11:52:16', '2024-11-15 11:49:20');

-- --------------------------------------------------------

--
-- Table structure for table `books_settings_category`
--

CREATE TABLE `books_settings_category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_settings_category`
--

INSERT INTO `books_settings_category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(3, 'Modern Classics', 1, '2024-11-15 11:48:54', '2024-11-15 07:45:05'),
(4, 'NYRB', 1, '2024-11-15 11:48:32', '2024-11-15 11:48:32'),
(5, 'Classics', 1, '2024-11-15 11:48:42', '2024-11-15 11:48:42');

-- --------------------------------------------------------

--
-- Table structure for table `books_settings_genre`
--

CREATE TABLE `books_settings_genre` (
  `genre_aid` int(11) NOT NULL,
  `genre_title` varchar(50) NOT NULL,
  `genre_is_active` tinyint(1) NOT NULL,
  `genre_datetime` varchar(20) NOT NULL,
  `genre_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_settings_genre`
--

INSERT INTO `books_settings_genre` (`genre_aid`, `genre_title`, `genre_is_active`, `genre_datetime`, `genre_created`) VALUES
(1, 'Fantasy', 1, '2024-11-15 07:43:23', '2024-11-15 07:43:23'),
(3, 'Historical', 1, '2024-11-15 11:49:09', '2024-11-15 11:49:09'),
(4, 'Sci-Fi', 1, '2024-11-15 11:49:36', '2024-11-15 11:49:36'),
(5, 'Literary', 1, '2024-11-15 11:49:57', '2024-11-15 11:49:57'),
(6, 'Essays', 1, '2024-11-15 11:50:16', '2024-11-15 11:50:16'),
(7, 'Drama', 1, '2024-11-15 11:50:27', '2024-11-15 11:50:27'),
(8, 'Memoir', 1, '2024-11-15 11:50:45', '2024-11-15 11:50:45'),
(9, 'Poetry', 1, '2024-11-15 11:51:19', '2024-11-15 11:51:19');

-- --------------------------------------------------------

--
-- Table structure for table `books_settings_mop`
--

CREATE TABLE `books_settings_mop` (
  `mop_aid` int(11) NOT NULL,
  `mop_title` varchar(50) NOT NULL,
  `mop_is_active` tinyint(1) NOT NULL,
  `mop_datetime` varchar(20) NOT NULL,
  `mop_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_settings_mop`
--

INSERT INTO `books_settings_mop` (`mop_aid`, `mop_title`, `mop_is_active`, `mop_datetime`, `mop_created`) VALUES
(2, 'G-Cash', 1, '2024-11-15 07:42:45', '2024-11-15 07:42:45'),
(3, 'Credit Card', 1, '2024-11-15 12:29:37', '2024-11-15 12:29:37'),
(4, 'Cash', 1, '2024-11-15 12:29:44', '2024-11-15 12:29:44');

-- --------------------------------------------------------

--
-- Table structure for table `books_transaction`
--

CREATE TABLE `books_transaction` (
  `transaction_aid` int(11) NOT NULL,
  `transaction_cart_books` text NOT NULL,
  `transaction_cart_bestsellers` text NOT NULL,
  `transaction_change` int(11) NOT NULL,
  `transaction_mop` varchar(20) NOT NULL,
  `transaction_payment` int(11) NOT NULL,
  `transaction_subtotal` int(11) NOT NULL,
  `transaction_finaltotal` int(11) NOT NULL,
  `transaction_is_active` tinyint(1) NOT NULL,
  `transaction_datetime` varchar(20) NOT NULL,
  `transaction_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_transaction`
--

INSERT INTO `books_transaction` (`transaction_aid`, `transaction_cart_books`, `transaction_cart_bestsellers`, `transaction_change`, `transaction_mop`, `transaction_payment`, `transaction_subtotal`, `transaction_finaltotal`, `transaction_is_active`, `transaction_datetime`, `transaction_created`) VALUES
(1, '[{\"books_aid\":4,\"books_title\":\"Boredom\",\"books_author\":\"Alberto Moravia\",\"books_type\":\"Paperback\",\"books_genre\":\"Literary\",\"books_year\":\"1999\",\"books_category\":\"NYRB\",\"books_summary\":\"Boredomgfnfnddd\",\"books_price\":\"950\",\"books_photo\":\"boredom.jpg\",\"books_is_active\":1,\"books_datetime\":\"2024-11-15 07:45:53\",\"books_created\":\"2024-11-14 13:13:39\",\"quantity\":1},{\"books_aid\":11,\"books_title\":\"Little Women\",\"books_author\":\"Louisa May Alcott\",\"books_type\":\"Paperback\",\"books_genre\":\"Drama\",\"books_year\":\"1899\",\"books_category\":\"Classics\",\"books_summary\":\"34342erffsfdsdsdfs\",\"books_price\":\"899\",\"books_photo\":\"little.jpg\",\"books_is_active\":1,\"books_datetime\":\"2024-11-15 10:40:50\",\"books_created\":\"2024-11-15 10:18:01\",\"quantity\":1},{\"books_aid\":17,\"books_title\":\"Pride and Prejudice\",\"books_author\":\"Jane Austen\",\"books_type\":\"Paperback\",\"books_genre\":\"Drama\",\"books_year\":\"1800\",\"books_category\":\"Classics\",\"books_summary\":\"232123213dsfdsffds\",\"books_price\":\"899\",\"books_photo\":\"pride.jpg\",\"books_is_active\":1,\"books_datetime\":\"2024-11-15 10:42:43\",\"books_created\":\"2024-11-15 10:42:43\",\"quantity\":1}]', '[{\"bestsellers_aid\":5,\"bestsellers_title\":\"M Train\",\"bestsellers_author\":\"Patti Smith\",\"bestsellers_type\":\"Paperback\",\"bestsellers_rank\":\"4\",\"bestsellers_genre\":\"Memoir\",\"bestsellers_year\":\"2016\",\"bestsellers_category\":\"Modern Classics\",\"bestsellers_summary\":\"dsfdsfsdfdsf\",\"bestsellers_price\":\"999\",\"bestsellers_photo\":\"mtrain.jpg\",\"bestsellers_is_active\":1,\"bestsellers_datetime\":\"2024-11-15 11:55:55\",\"bestsellers_created\":\"2024-11-15 10:12:38\",\"quantity\":1},{\"bestsellers_aid\":4,\"bestsellers_title\":\"East Of Eden\",\"bestsellers_author\":\"John Steinbeck\",\"bestsellers_type\":\"Paperback\",\"bestsellers_rank\":\"3\",\"bestsellers_genre\":\"Historical\",\"bestsellers_year\":\"100\",\"bestsellers_category\":\"Modern Classics\",\"bestsellers_summary\":\"fdgfdgdfgd\",\"bestsellers_price\":\"999\",\"bestsellers_photo\":\"eden.jpg\",\"bestsellers_is_active\":1,\"bestsellers_datetime\":\"2024-11-15 11:53:17\",\"bestsellers_created\":\"2024-11-15 10:09:42\",\"quantity\":1}]', 159, 'Credit Card', 5000, 4746, 4841, 1, '2024-11-15 14:14:22', '2024-11-15 14:14:22'),
(2, '[]', '[{\"bestsellers_aid\":5,\"bestsellers_title\":\"M Train\",\"bestsellers_author\":\"Patti Smith\",\"bestsellers_type\":\"Paperback\",\"bestsellers_rank\":\"4\",\"bestsellers_genre\":\"Memoir\",\"bestsellers_year\":\"2016\",\"bestsellers_category\":\"Modern Classics\",\"bestsellers_summary\":\"dsfdsfsdfdsf\",\"bestsellers_price\":\"999\",\"bestsellers_photo\":\"mtrain.jpg\",\"bestsellers_is_active\":1,\"bestsellers_datetime\":\"2024-11-15 11:55:55\",\"bestsellers_created\":\"2024-11-15 10:12:38\",\"quantity\":1}]', 7981, 'Credit Card', 9000, 999, 1019, 1, '2024-11-15 15:23:32', '2024-11-15 15:23:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books_bestsellers`
--
ALTER TABLE `books_bestsellers`
  ADD PRIMARY KEY (`bestsellers_aid`);

--
-- Indexes for table `books_books`
--
ALTER TABLE `books_books`
  ADD PRIMARY KEY (`books_aid`);

--
-- Indexes for table `books_settings_booktype`
--
ALTER TABLE `books_settings_booktype`
  ADD PRIMARY KEY (`booktype_aid`);

--
-- Indexes for table `books_settings_category`
--
ALTER TABLE `books_settings_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `books_settings_genre`
--
ALTER TABLE `books_settings_genre`
  ADD PRIMARY KEY (`genre_aid`);

--
-- Indexes for table `books_settings_mop`
--
ALTER TABLE `books_settings_mop`
  ADD PRIMARY KEY (`mop_aid`);

--
-- Indexes for table `books_transaction`
--
ALTER TABLE `books_transaction`
  ADD PRIMARY KEY (`transaction_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books_bestsellers`
--
ALTER TABLE `books_bestsellers`
  MODIFY `bestsellers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `books_books`
--
ALTER TABLE `books_books`
  MODIFY `books_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `books_settings_booktype`
--
ALTER TABLE `books_settings_booktype`
  MODIFY `booktype_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `books_settings_category`
--
ALTER TABLE `books_settings_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `books_settings_genre`
--
ALTER TABLE `books_settings_genre`
  MODIFY `genre_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `books_settings_mop`
--
ALTER TABLE `books_settings_mop`
  MODIFY `mop_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `books_transaction`
--
ALTER TABLE `books_transaction`
  MODIFY `transaction_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
