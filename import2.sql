-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 26, 2021 at 11:20 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aa`
--

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `meme_id`, `user_id`, `messages`, `comment_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'test', NULL, '2019-07-08 23:40:50', '2019-07-08 23:40:50'),
(2, 10, 1, 'test', NULL, '2019-07-08 23:41:10', '2019-07-08 23:41:10'),
(3, 428, 6, 'Old projector', NULL, '2019-07-14 22:48:37', '2019-07-14 22:48:37'),
(4, 1078, 1, 'ass flips', NULL, '2019-07-23 01:24:59', '2019-07-23 01:24:59'),
(5, 1670, 34, 'stupid human deserved it', NULL, '2019-07-30 22:21:44', '2019-07-30 22:21:44'),
(6, 1839, 34, 'no thanks', NULL, '2019-08-02 12:26:23', '2019-08-02 12:26:23'),
(7, 1795, 34, 'sweet', NULL, '2019-08-02 12:40:40', '2019-08-02 12:40:40'),
(8, 1983, 35, 'he needs his ass beat lol', NULL, '2019-08-03 19:29:31', '2019-08-03 19:29:31'),
(9, 1993, 34, 'I wouldn\'t ride with him', NULL, '2019-08-04 02:30:55', '2019-08-04 02:30:55'),
(10, 2054, 34, 'I would buy it', NULL, '2019-08-04 19:49:55', '2019-08-04 19:49:55'),
(11, 2040, 34, 'hero\'s', NULL, '2019-08-04 19:54:01', '2019-08-04 19:54:01'),
(12, 2039, 34, 'what a sweet dog', NULL, '2019-08-04 19:57:03', '2019-08-04 19:57:03'),
(13, 1315, 34, 'asshat', NULL, '2019-08-04 20:31:39', '2019-08-04 20:31:39'),
(14, 1174, 34, 'why isn\'t he playing ?!?!', NULL, '2019-08-04 20:32:55', '2019-08-04 20:32:55'),
(15, 2085, 34, 'WTF !?', NULL, '2019-08-05 13:28:16', '2019-08-05 13:28:16'),
(16, 1949, 34, 'I\'m not a pessimist and I\'d love to hear the the reasons they have for why this won\'t work for us  .', NULL, '2019-08-05 22:34:38', '2019-08-05 22:34:38'),
(17, 2206, 34, 'Hahaha', NULL, '2019-08-07 05:16:44', '2019-08-07 05:16:44'),
(18, 2204, 34, 'If only ....', NULL, '2019-08-07 05:17:15', '2019-08-07 05:17:15'),
(19, 2195, 34, 'Awesome', NULL, '2019-08-07 05:20:55', '2019-08-07 05:20:55'),
(20, 2203, 34, 'what a gentleman', NULL, '2019-08-07 05:26:19', '2019-08-07 05:26:19'),
(21, 2629, 38, 'there is barely any  difference in 15 years and 25', NULL, '2019-08-11 08:17:23', '2019-08-11 08:17:23'),
(22, 4574, 65, 'No the dentists would be 20 and two would disagree ???? or something else', NULL, '2019-09-04 21:51:01', '2019-09-04 21:51:01'),
(23, 3275, 65, 'I know that feeling bro', NULL, '2019-09-04 21:53:46', '2019-09-04 21:53:46'),
(24, 1955, 65, 'Thanks bro', NULL, '2019-09-04 21:58:46', '2019-09-04 21:58:46'),
(25, 340, 74, 'the fluffy purryer', NULL, '2019-09-16 11:39:04', '2019-09-16 11:39:04'),
(26, 12781, 102, 'Y\'all know a brother would have done had his pants down and be given Bambi the dark meat.', NULL, '2019-09-26 07:25:47', '2019-09-26 07:25:47'),
(27, 12980, 103, 'what the fuck', NULL, '2019-09-27 06:31:34', '2019-09-27 06:31:34'),
(28, 13122, 70, 'watch your head!????', NULL, '2019-09-28 01:35:58', '2019-09-28 01:35:58'),
(29, 13175, 102, 'Used to be a guy wanted a girl that was head over heels in love with him, nowadays guys want a girl that\'s heels over head in love with him.', NULL, '2019-09-28 15:07:38', '2019-09-28 15:07:38'),
(30, 13059, 102, 'Would you do this for your child?', NULL, '2019-09-28 15:14:54', '2019-09-28 15:14:54'),
(31, 13020, 102, 'Everybody wang chung tonight.', NULL, '2019-09-28 15:18:28', '2019-09-28 15:18:28'),
(32, 13245, 92, 'what tf', NULL, '2019-09-29 07:16:28', '2019-09-29 07:16:28'),
(33, 15921, 119, 'ngjhfhjgcgncb', NULL, '2019-10-16 10:37:01', '2019-10-16 10:37:01'),
(34, 15941, 119, 'hyyryr', NULL, '2019-10-16 11:15:17', '2019-10-16 11:15:17'),
(35, 16415, 123, 'awwww ????', NULL, '2019-10-23 15:40:21', '2019-10-23 15:40:21'),
(36, 24923, 150, 'When you try to look good infront of your crush but fail', NULL, '2019-12-15 04:00:43', '2019-12-15 04:00:43'),
(37, 24950, 150, 'Its so damn cute', NULL, '2019-12-15 12:08:35', '2019-12-15 12:08:35'),
(38, 25661, 150, 'Pinky toe and side of bed', NULL, '2019-12-19 04:43:53', '2019-12-19 04:43:53'),
(39, 26343, 150, 'Superman can whoop Thor no problem. But in BVS who won that fight? I think batman got the upperhand', NULL, '2019-12-23 06:50:33', '2019-12-23 06:50:33'),
(41, 27461, 174, 'I like this video', NULL, '2019-12-29 11:59:55', '2019-12-29 11:59:55'),
(42, 29497, 189, 'Helllll no popeyes does', NULL, '2020-01-09 17:44:35', '2020-01-09 17:44:35'),
(43, 29506, 189, 'sonic', NULL, '2020-01-09 17:45:36', '2020-01-09 17:45:36'),
(44, 29468, 189, 'ice melts in water', NULL, '2020-01-09 17:58:32', '2020-01-09 17:58:32'),
(45, 29437, 191, 'pev', NULL, '2020-01-10 06:02:50', '2020-01-10 06:02:50'),
(46, 30191, 189, 'no ill haunt your life till your so paranoid every time i lift up my hand you start crying', NULL, '2020-01-13 06:19:47', '2020-01-13 06:19:47'),
(47, 31216, 211, '????????????', NULL, '2020-01-18 09:12:05', '2020-01-18 09:12:05'),
(48, 32111, 131, 'i fuck Your pussy and ass ????????', NULL, '2020-01-23 03:30:08', '2020-01-23 03:30:08'),
(49, 32263, 228, 'shes good, and that baby is so cute I wanna hug her. ????', NULL, '2020-01-23 23:35:00', '2020-01-23 23:35:00'),
(50, 32710, 228, 'Sad. ????', NULL, '2020-01-26 14:12:18', '2020-01-26 14:12:18'),
(51, 34041, 239, 'stupid but cute:)', NULL, '2020-02-03 07:14:32', '2020-02-03 07:14:32'),
(52, 34808, 246, 'stupid. bs', NULL, '2020-02-07 22:19:37', '2020-02-07 22:19:37'),
(53, 36746, 211, 'so adorable????', NULL, '2020-02-19 03:48:41', '2020-02-19 03:48:41'),
(54, 37420, 262, 'wow', NULL, '2020-02-23 06:41:55', '2020-02-23 06:41:55'),
(55, 11513, 272, 'i love you', NULL, '2020-02-29 18:53:41', '2020-02-29 18:53:41'),
(56, 36974, 281, 'it is super smart idea', NULL, '2020-03-05 20:17:33', '2020-03-05 20:17:33'),
(57, 22584, 273, 'He at some ????', NULL, '2020-03-07 04:30:54', '2020-03-07 04:30:54'),
(58, 7679, 273, 'danm', NULL, '2020-03-08 11:24:00', '2020-03-08 11:24:00'),
(59, 31656, 296, 'owwwww !', NULL, '2020-03-12 08:21:57', '2020-03-12 08:21:57'),
(60, 36959, 310, '????????????????????????????', NULL, '2020-03-16 01:17:01', '2020-03-16 01:17:01'),
(61, 32805, 310, 'that is AMAZING', NULL, '2020-03-16 01:20:37', '2020-03-16 01:20:37'),
(62, 12976, 330, '????????', NULL, '2020-03-20 17:41:17', '2020-03-20 17:41:17'),
(63, 26638, 331, 'nice baby', NULL, '2020-03-20 18:03:46', '2020-03-20 18:03:46'),
(64, 15923, 131, 'fucking Crazy', NULL, '2020-03-21 14:23:52', '2020-03-21 14:23:52'),
(65, 8244, 353, 'cutteee????????????????????', NULL, '2020-03-26 21:58:22', '2020-03-26 21:58:22'),
(66, 10031, 362, 'u r vaaaaaaarrrrrrrrrrrryyyyyyyyyyyyyy gooooooooooooooooooodddddddddddddd aaaaattttttt wwwwwhhhhhaaaatt uuuuuu dddddooooo', NULL, '2020-03-27 22:07:44', '2020-03-27 22:07:44'),
(67, 14997, 384, 'lol', NULL, '2020-03-31 22:15:44', '2020-03-31 22:15:44'),
(68, 4200, 414, 'that looked like it hurt but ok', NULL, '2020-04-08 00:24:46', '2020-04-08 00:24:46'),
(69, 18052, 414, 'ow', NULL, '2020-04-08 00:27:22', '2020-04-08 00:27:22'),
(70, 24615, 388, 'this is the 100th time i see this meme', NULL, '2020-04-10 20:33:35', '2020-04-10 20:33:35'),
(71, 1698, 428, '????????????????????????????', NULL, '2020-04-11 18:07:20', '2020-04-11 18:07:20'),
(72, 36346, 440, 'lol', NULL, '2020-04-13 08:12:50', '2020-04-13 08:12:50'),
(73, 15603, 443, 'hi', NULL, '2020-04-13 14:36:03', '2020-04-13 14:36:03'),
(74, 2985, 443, '????????????????????', NULL, '2020-04-13 14:40:10', '2020-04-13 14:40:10'),
(75, 22394, 443, 'nice ????????', NULL, '2020-04-13 14:41:34', '2020-04-13 14:41:34'),
(76, 33518, 448, 'what on the world why would he do that but it is funny tho ????????????????????', NULL, '2020-04-14 09:47:24', '2020-04-14 09:47:24'),
(77, 28302, 443, 'hi', NULL, '2020-04-15 03:12:53', '2020-04-15 03:12:53'),
(78, 37729, 443, 'nice ????????', NULL, '2020-04-15 03:14:34', '2020-04-15 03:14:34'),
(79, 15022, 340, 'Awww the pain after that ????????', NULL, '2020-04-18 18:26:07', '2020-04-18 18:26:07'),
(80, 19566, 496, 'Dear Sir, For fuck sake! Sincerely,', NULL, '2020-04-24 18:19:22', '2020-04-24 18:19:22'),
(82, 2206, 499, 'siii porfa', NULL, '2020-04-26 01:24:10', '2020-04-26 01:24:10'),
(83, 3261, 503, 'oooooooo', NULL, '2020-04-26 04:54:38', '2020-04-26 04:54:38'),
(84, 4924, 531, 'its called chika dance , its from an anime called Kaguya-sama Love is war .', NULL, '2020-05-02 02:06:28', '2020-05-02 02:06:28'),
(85, 19088, 534, 'what da', NULL, '2020-05-02 22:09:13', '2020-05-02 22:09:13'),
(86, 21759, 535, 'ha', NULL, '2020-05-03 12:37:38', '2020-05-03 12:37:38'),
(87, 34946, 543, 'what', NULL, '2020-05-06 19:14:10', '2020-05-06 19:14:10'),
(88, 15061, 543, 'so cute', NULL, '2020-05-06 19:16:03', '2020-05-06 19:16:03'),
(89, 7862, 543, 'that is so big', NULL, '2020-05-07 03:28:22', '2020-05-07 03:28:22'),
(90, 17108, 569, 'hhhh', NULL, '2020-05-11 09:10:03', '2020-05-11 09:10:03'),
(91, 31142, 569, 'hhhhhhhhhhhhhhhhhhh', NULL, '2020-05-11 09:16:03', '2020-05-11 09:16:03'),
(94, 18287, 593, 'OOF', NULL, '2020-05-14 02:35:43', '2020-05-14 02:35:43'),
(95, 35937, 593, 'oof', NULL, '2020-05-14 02:38:52', '2020-05-14 02:38:52'),
(96, 35927, 593, 'so many memories', NULL, '2020-05-14 02:43:52', '2020-05-14 02:43:52'),
(97, 23366, 597, 'Notheing Happened.No Sound Or Picture.', NULL, '2020-05-14 11:19:38', '2020-05-14 11:19:38'),
(98, 18901, 597, 'the picture was showen to fast couldn\'t see it', NULL, '2020-05-14 11:30:23', '2020-05-14 11:30:23'),
(99, 20895, 597, 'notheing happened', NULL, '2020-05-14 11:44:41', '2020-05-14 11:44:41'),
(100, 23366, 597, 'notheing happened', NULL, '2020-05-14 12:57:48', '2020-05-14 12:57:48'),
(101, 37124, 597, 'nothen happened', NULL, '2020-05-14 13:12:50', '2020-05-14 13:12:50'),
(102, 32835, 597, 'nothen happened', NULL, '2020-05-14 13:54:16', '2020-05-14 13:54:16'),
(103, 35068, 667, 'jackass', NULL, '2020-05-23 21:25:53', '2020-05-23 21:25:53'),
(104, 8692, 681, 'It\'s so satisfying', NULL, '2020-05-26 18:51:49', '2020-05-26 18:51:49'),
(106, 20633, 633, 'L', NULL, '2020-05-29 08:17:41', '2020-05-29 08:17:41'),
(107, 26960, 633, 'what', NULL, '2020-05-29 08:22:12', '2020-05-29 08:22:12'),
(108, 28234, 754, 'heyy', NULL, '2020-06-08 02:19:18', '2020-06-08 02:19:18'),
(109, 30139, 764, 'nadiia', NULL, '2020-06-09 04:04:06', '2020-06-09 04:04:06'),
(110, 29734, 707, 'so true!', NULL, '2020-06-16 06:37:35', '2020-06-16 06:37:35'),
(111, 25822, 707, 'no, because the second one has a small banana in her bellybutton', NULL, '2020-06-16 06:39:17', '2020-06-16 06:39:17'),
(112, 28614, 707, 'everytime she laughed, I think of a sheep! ????????????', NULL, '2020-06-16 06:53:58', '2020-06-16 06:53:58'),
(113, 26565, 633, 'huh', NULL, '2020-06-17 00:54:48', '2020-06-17 00:54:48'),
(114, 2274, 843, 'happy bday kobe!', NULL, '2020-06-22 11:49:53', '2020-06-22 11:49:53'),
(115, 22385, 843, 'me too', NULL, '2020-06-22 12:02:27', '2020-06-22 12:02:27'),
(116, 22385, 843, 'me too', NULL, '2020-06-22 12:02:44', '2020-06-22 12:02:44'),
(117, 16203, 880, 'some marriages actually are against some people\'s religions though', NULL, '2020-06-28 04:31:18', '2020-06-28 04:31:18'),
(118, 7942, 913, '????', NULL, '2020-07-02 00:17:25', '2020-07-02 00:17:25'),
(119, 2449, 913, '????????????????????????????', NULL, '2020-07-02 00:18:29', '2020-07-02 00:18:29'),
(120, 32982, 929, 'Nah, inalso thought the tail was stuck in ice hehe', NULL, '2020-07-04 16:46:59', '2020-07-04 16:46:59'),
(121, 3402, 958, 'I see it', NULL, '2020-07-08 04:47:41', '2020-07-08 04:47:41'),
(122, 15887, 963, 'wow', NULL, '2020-07-08 09:14:51', '2020-07-08 09:14:51'),
(123, 5506, 967, 'oh no uou ganna have puppies', NULL, '2020-07-08 16:37:26', '2020-07-08 16:37:26'),
(125, 16186, 1004, 'ummmmm wtf', NULL, '2020-07-13 22:28:42', '2020-07-13 22:28:42'),
(126, 20747, 1018, 'ha ha ha ha ha good job ????', NULL, '2020-07-15 13:58:46', '2020-07-15 13:58:46'),
(127, 20747, 1018, '????', NULL, '2020-07-15 13:59:16', '2020-07-15 13:59:16'),
(128, 8725, 1018, 'ha ha ha', NULL, '2020-07-15 14:00:23', '2020-07-15 14:00:23'),
(130, 5236, 1058, '????????????????????', NULL, '2020-07-24 02:14:30', '2020-07-24 02:14:30'),
(131, 30147, 1080, 'loool', NULL, '2020-07-25 04:16:25', '2020-07-25 04:16:25'),
(132, 29377, 1081, 'no just no, it does no difference ????', NULL, '2020-07-25 05:28:42', '2020-07-25 05:28:42'),
(133, 1878, 1081, 'cool ????', NULL, '2020-07-25 05:29:36', '2020-07-25 05:29:36'),
(136, 18745, 1142, 'now that\'s funny', NULL, '2020-08-03 21:48:44', '2020-08-03 21:48:44'),
(137, 16721, 1142, '????????????????????', NULL, '2020-08-03 21:57:29', '2020-08-03 21:57:29'),
(138, 30810, 608, 'there is a city Iran in texas', NULL, '2020-08-07 23:41:29', '2020-08-07 23:41:29'),
(140, 10833, 1193, 'hbxnx', NULL, '2020-08-13 08:06:53', '2020-08-13 08:06:53'),
(141, 22272, 1200, '????????????????', NULL, '2020-08-14 21:24:49', '2020-08-14 21:24:49'),
(142, 34522, 1200, '????????', NULL, '2020-08-14 21:25:20', '2020-08-14 21:25:20'),
(143, 20302, 1200, '????????????????', NULL, '2020-08-14 21:28:13', '2020-08-14 21:28:13'),
(144, 15651, 1202, 'mantul', NULL, '2020-08-15 05:15:17', '2020-08-15 05:15:17'),
(145, 15960, 1202, 'mantul', NULL, '2020-08-15 07:36:46', '2020-08-15 07:36:46'),
(146, 557, 1208, 'wow wow!!????', NULL, '2020-08-16 20:37:05', '2020-08-16 20:37:05'),
(147, 25136, 1208, 'wow', NULL, '2020-08-16 20:39:07', '2020-08-16 20:39:07'),
(148, 16345, 1208, 'NOOOOOOOO????????', NULL, '2020-08-16 20:40:20', '2020-08-16 20:40:20'),
(149, 28627, 1208, 'fantastico bravo', NULL, '2020-08-16 20:50:13', '2020-08-16 20:50:13'),
(150, 23414, 1208, 'what?', NULL, '2020-08-16 20:59:13', '2020-08-16 20:59:13'),
(151, 22194, 1208, 'bravissimi????????', NULL, '2020-08-16 21:00:25', '2020-08-16 21:00:25'),
(152, 33181, 1208, 'povero gattino????????', NULL, '2020-08-16 21:07:55', '2020-08-16 21:07:55'),
(153, 21187, 1208, 'omg????????', NULL, '2020-08-16 21:08:59', '2020-08-16 21:08:59'),
(154, 32628, 1208, 'Non si fa????????', NULL, '2020-08-17 01:09:47', '2020-08-17 01:09:47'),
(155, 19734, 1208, 'figo stupendo!!????????????', NULL, '2020-08-17 01:11:24', '2020-08-17 01:11:24'),
(156, 35114, 1208, '90 che stile hene????????', NULL, '2020-08-17 01:13:06', '2020-08-17 01:13:06'),
(157, 35593, 1208, 'what?????????', NULL, '2020-08-17 01:13:55', '2020-08-17 01:13:55'),
(158, 15777, 1208, 'che scemenza eh cavoli come se la prendera il macchinista?Raga.', NULL, '2020-08-17 01:17:05', '2020-08-17 01:17:05'),
(159, 30117, 1208, 'Non ho capito??', NULL, '2020-08-17 01:18:49', '2020-08-17 01:18:49'),
(160, 14018, 1208, 'E arrivato Thornton??????????????hahah', NULL, '2020-08-17 01:22:31', '2020-08-17 01:22:31'),
(161, 3589, 296, 'looks like a baby killer whale', NULL, '2020-08-17 01:38:03', '2020-08-17 01:38:03'),
(162, 30234, 1208, 'momenti da brivido????????????', NULL, '2020-08-17 13:55:10', '2020-08-17 13:55:10'),
(163, 25256, 1209, 'povera', NULL, '2020-08-17 13:57:04', '2020-08-17 13:57:04'),
(164, 13856, 1208, 'Ma non ai paura?????????', NULL, '2020-08-17 13:58:45', '2020-08-17 13:58:45'),
(165, 5837, 1208, 'figo stupendo ????????', NULL, '2020-08-17 14:00:31', '2020-08-17 14:00:31'),
(166, 37288, 1208, 'hahaha', NULL, '2020-08-17 14:04:06', '2020-08-17 14:04:06'),
(167, 2093, 1208, 'che cattiveria', NULL, '2020-08-17 14:07:36', '2020-08-17 14:07:36'),
(168, 623, 608, '2/25', NULL, '2020-08-17 23:32:48', '2020-08-17 23:32:48'),
(169, 22302, 1200, '????????????????????', NULL, '2020-08-18 16:30:20', '2020-08-18 16:30:20'),
(170, 29916, 1200, '????????????', NULL, '2020-08-18 16:33:53', '2020-08-18 16:33:53'),
(171, 21533, 1200, '????', NULL, '2020-08-18 16:35:12', '2020-08-18 16:35:12'),
(172, 24684, 608, 'and then he tried to fuck me.', NULL, '2020-08-19 00:01:42', '2020-08-19 00:01:42'),
(173, 17418, 1200, '????????????????', NULL, '2020-08-19 18:54:55', '2020-08-19 18:54:55'),
(174, 30568, 296, 'to depressing ! worst joker ever !!! ????', NULL, '2020-08-21 03:55:40', '2020-08-21 03:55:40'),
(175, 5448, 1241, 'ya UE rusa????????????????????????', NULL, '2020-08-24 01:30:32', '2020-08-24 01:30:32'),
(176, 30471, 1241, 'pobre de el', NULL, '2020-08-24 01:31:13', '2020-08-24 01:31:13'),
(177, 21743, 1241, 'que chido', NULL, '2020-08-24 01:31:43', '2020-08-24 01:31:43'),
(178, 11279, 1251, 'She looks possessed????', NULL, '2020-08-26 02:15:30', '2020-08-26 02:15:30'),
(179, 27626, 1251, 'lol', NULL, '2020-08-27 08:09:01', '2020-08-27 08:09:01'),
(180, 7981, 1251, 'its a mating dance that they do', NULL, '2020-08-27 08:43:56', '2020-08-27 08:43:56'),
(181, 4403, 296, 'can\'t we all just get along ???', NULL, '2020-08-28 21:52:04', '2020-08-28 21:52:04'),
(182, 37080, 1272, 'lll', NULL, '2020-08-29 21:52:59', '2020-08-29 21:52:59'),
(183, 28718, 1272, 'love????', NULL, '2020-08-29 21:53:15', '2020-08-29 21:53:15'),
(184, 11640, 296, 'it\'s called I killed my wife and got away with it', NULL, '2020-09-01 05:41:33', '2020-09-01 05:41:33'),
(185, 27341, 1294, '????????', NULL, '2020-09-03 01:15:22', '2020-09-03 01:15:22'),
(186, 35636, 1200, 'Followyou', NULL, '2020-09-03 14:35:45', '2020-09-03 14:35:45'),
(187, 2307, 1200, '????????????????', NULL, '2020-09-03 14:38:54', '2020-09-03 14:38:54'),
(188, 22667, 1200, '????????????????????????', NULL, '2020-09-03 14:49:45', '2020-09-03 14:49:45'),
(189, 19357, 1297, 'that is fat mother fucker lol just kidding', NULL, '2020-09-04 02:17:17', '2020-09-04 02:17:17'),
(190, 33553, 1297, 'c duh', NULL, '2020-09-04 02:20:36', '2020-09-04 02:20:36'),
(191, 8206, 1329, 'tamuna pataruashvili', NULL, '2020-09-08 17:53:57', '2020-09-08 17:53:57'),
(193, 6282, 1342, 'qu??. Dios. los.  bendiga ????????', NULL, '2020-09-12 04:04:47', '2020-09-12 04:04:47'),
(196, 22480, 1350, 'Muhahhahahaha', NULL, '2020-09-15 21:38:30', '2020-09-15 21:38:30'),
(197, 31641, 1357, 'Nice', NULL, '2020-09-17 09:20:35', '2020-09-17 09:20:35'),
(198, 949, 1357, 'lol', NULL, '2020-09-17 09:21:09', '2020-09-17 09:21:09'),
(199, 7522, 1357, 'huge lol', NULL, '2020-09-17 09:21:52', '2020-09-17 09:21:52'),
(201, 37872, 1357, '(???__???)', NULL, '2020-09-19 09:53:11', '2020-09-19 09:53:11'),
(202, 26569, 1387, 'good', NULL, '2020-09-24 12:26:59', '2020-09-24 12:26:59'),
(203, 25948, 1387, 'good', NULL, '2020-09-24 16:06:43', '2020-09-24 16:06:43'),
(204, 8216, 1397, 'jajaja', NULL, '2020-09-26 21:19:03', '2020-09-26 21:19:03'),
(206, 34675, 1398, 'wow', NULL, '2020-09-27 00:21:36', '2020-09-27 00:21:36'),
(207, 34675, 1398, 'wow????', NULL, '2020-09-27 00:22:07', '2020-09-27 00:22:07'),
(208, 34401, 1398, 'wow', NULL, '2020-09-27 06:45:49', '2020-09-27 06:45:49'),
(209, 35796, 296, 'trader !', NULL, '2020-09-27 08:11:53', '2020-09-27 08:11:53'),
(210, 28581, 1350, 'Ducked', NULL, '2020-09-27 14:00:03', '2020-09-27 14:00:03'),
(212, 25825, 1500, 'omg', NULL, '2020-10-21 18:56:13', '2020-10-21 18:56:13'),
(213, 2229, 1509, 'jajaja', NULL, '2020-10-23 10:30:15', '2020-10-23 10:30:15'),
(214, 4821, 1509, 'ayu guar', NULL, '2020-10-23 10:31:19', '2020-10-23 10:31:19'),
(215, 4821, 1509, 'hot hou ya', NULL, '2020-10-23 10:31:56', '2020-10-23 10:31:56'),
(216, 16854, 1511, 'bad fucking dog awesome????', NULL, '2020-10-24 06:29:02', '2020-10-24 06:29:02'),
(217, 16004, 1534, '????????', NULL, '2020-10-29 07:11:06', '2020-10-29 07:11:06'),
(219, 32034, 1576, 'nice music', NULL, '2020-11-09 21:43:00', '2020-11-09 21:43:00'),
(220, 10365, 1573, 'loved the office', NULL, '2020-11-10 19:38:28', '2020-11-10 19:38:28'),
(221, 6654, 1573, 'lmao????', NULL, '2020-11-10 23:20:06', '2020-11-10 23:20:06'),
(222, 5894, 1584, 'Rangga', NULL, '2020-11-12 20:52:42', '2020-11-12 20:52:42'),
(223, 16040, 296, 'no way !!!', NULL, '2020-11-13 04:36:23', '2020-11-13 04:36:23'),
(224, 10202, 1573, 'lol', NULL, '2020-11-13 09:56:35', '2020-11-13 09:56:35'),
(225, 18459, 1573, 'wtf????', NULL, '2020-11-13 10:31:20', '2020-11-13 10:31:20'),
(226, 15955, 1573, 'damn????', NULL, '2020-11-13 10:37:19', '2020-11-13 10:37:19'),
(227, 28689, 296, 'I\'m in love !!!', NULL, '2020-11-17 04:09:24', '2020-11-17 04:09:24'),
(228, 25072, 1607, 'Hi', NULL, '2020-11-23 21:26:21', '2020-11-23 21:26:21'),
(229, 25072, 1607, 'Hi', NULL, '2020-11-23 21:26:59', '2020-11-23 21:26:59'),
(230, 25817, 1607, 'Hi', NULL, '2020-11-23 21:30:50', '2020-11-23 21:30:50'),
(231, 36517, 1590, 'Jsjsjsjjsjs', NULL, '2020-11-25 01:52:20', '2020-11-25 01:52:20'),
(232, 33388, 1590, 'Wtf su pta', NULL, '2020-11-25 01:55:49', '2020-11-25 01:55:49'),
(233, 16330, 1639, 'thats so cool', NULL, '2020-12-04 02:15:53', '2020-12-04 02:15:53'),
(234, 14735, 1639, 'this guy feeling like,\"dont cry dont cry dont cry\"????', NULL, '2020-12-04 02:19:39', '2020-12-04 02:19:39'),
(235, 29972, 1639, 'YEEEET????', NULL, '2020-12-04 02:24:10', '2020-12-04 02:24:10'),
(236, 6271, 1639, 'damn were did u find that son!????????', NULL, '2020-12-04 02:31:38', '2020-12-04 02:31:38'),
(237, 25832, 1639, 'awwwwww how to train your dragon#forlife??????', NULL, '2020-12-04 02:41:32', '2020-12-04 02:41:32'),
(238, 10741, 1639, 'omfg thank you this is so true #standupformen???????????????', NULL, '2020-12-04 02:43:37', '2020-12-04 02:43:37'),
(239, 16083, 1639, 'OMG thats so frikin COOL???????????????????', NULL, '2020-12-04 07:46:08', '2020-12-04 07:46:08'),
(240, 16416, 1639, 'thos r some fake teeth bruv', NULL, '2020-12-05 06:29:09', '2020-12-05 06:29:09'),
(241, 35759, 1639, 'art is the bueaty in life???', NULL, '2020-12-05 06:29:56', '2020-12-05 06:29:56'),
(242, 33347, 1639, 'id get it', NULL, '2020-12-05 06:35:31', '2020-12-05 06:35:31'),
(243, 2743, 1639, 'omfg lmfao', NULL, '2020-12-05 06:37:03', '2020-12-05 06:37:03'),
(244, 2743, 1639, 'that was a good laugh', NULL, '2020-12-05 06:37:55', '2020-12-05 06:37:55'),
(245, 7591, 1639, 'dat smart', NULL, '2020-12-05 06:41:21', '2020-12-05 06:41:21'),
(246, 17878, 1639, 'delishable lmao', NULL, '2020-12-05 06:48:31', '2020-12-05 06:48:31'),
(247, 14810, 1639, 'what idiot made that', NULL, '2020-12-05 06:52:54', '2020-12-05 06:52:54'),
(248, 7122, 1639, 'that was a fukn good damn laugh', NULL, '2020-12-05 06:56:22', '2020-12-05 06:56:22'),
(249, 27730, 1639, 'if i could id give this a 100000 likes', NULL, '2020-12-06 01:49:12', '2020-12-06 01:49:12'),
(250, 20000, 1639, 'i love u toph', NULL, '2020-12-06 01:56:51', '2020-12-06 01:56:51'),
(251, 18907, 1639, 'heros all three of tou???????????', NULL, '2020-12-06 03:32:24', '2020-12-06 03:32:24'),
(252, 1989, 1639, 'that tinyass fish', NULL, '2020-12-06 03:33:20', '2020-12-06 03:33:20'),
(253, 12620, 1639, 'omg how crazy can people get', NULL, '2020-12-06 03:35:27', '2020-12-06 03:35:27'),
(254, 11992, 1639, 'most pretty thing ive ever seen', NULL, '2020-12-06 03:36:55', '2020-12-06 03:36:55'),
(255, 14416, 1639, 'poor kitty', NULL, '2020-12-06 03:46:28', '2020-12-06 03:46:28'),
(256, 15943, 1639, 'it was at this moment she new she fuked up', NULL, '2020-12-06 03:47:01', '2020-12-06 03:47:01'),
(257, 27760, 1639, 'what idiot gave a thumbs down', NULL, '2020-12-06 04:54:16', '2020-12-06 04:54:16'),
(258, 7162, 1639, 'damn woman CANT U FIKN READ', NULL, '2020-12-06 04:55:50', '2020-12-06 04:55:50'),
(259, 19392, 1639, 'thats absolutly amazing', NULL, '2020-12-06 05:17:33', '2020-12-06 05:17:33'),
(260, 729, 1639, 'HAHAH LMAO', NULL, '2020-12-06 05:19:46', '2020-12-06 05:19:46'),
(261, 15367, 1639, 'OK grandpa', NULL, '2020-12-06 05:27:05', '2020-12-06 05:27:05'),
(262, 16084, 1639, 'WHY THE HELL WOULD YOU FUKIN DO THAT FUKERS!??!?!?!?!', NULL, '2020-12-06 05:32:01', '2020-12-06 05:32:01'),
(263, 29878, 1639, 'FUKIN ASSHOLE', NULL, '2020-12-06 05:33:34', '2020-12-06 05:33:34'),
(264, 15737, 1639, 'guy lookes frikin drunk lol????????????????', NULL, '2020-12-07 06:07:15', '2020-12-07 06:07:15'),
(265, 7428, 1639, 'SO CUUUUUUUTE!!!!!', NULL, '2020-12-07 06:09:51', '2020-12-07 06:09:51'),
(266, 8750, 1639, 'police r stupid and lots other in the world the actually give me a frikin rash', NULL, '2020-12-07 06:19:08', '2020-12-07 06:19:08'),
(267, 13566, 1639, 'WTF LMFFFFAOOO', NULL, '2020-12-07 06:21:27', '2020-12-07 06:21:27'),
(268, 21708, 1639, 'shes not going to hell shes going to my sicopathic brain were i can rip and torture that IDIOTIC ******', NULL, '2020-12-07 06:23:19', '2020-12-07 06:23:19'),
(269, 22014, 1639, 'TF', NULL, '2020-12-07 06:24:18', '2020-12-07 06:24:18'),
(270, 2885, 1639, 'oh m-', NULL, '2020-12-07 06:29:50', '2020-12-07 06:29:50'),
(271, 30983, 1639, 'who the heck have this a thumbs down......(R.I.P)', NULL, '2020-12-07 06:32:15', '2020-12-07 06:32:15'),
(272, 16672, 1647, 'mui bien foto', NULL, '2020-12-07 23:31:02', '2020-12-07 23:31:02'),
(273, 16283, 1639, 'his balls were found dead, as the same with his soul', NULL, '2020-12-08 03:12:19', '2020-12-08 03:12:19'),
(274, 12118, 1651, 'omg Aaaa', NULL, '2020-12-08 16:42:22', '2020-12-08 16:42:22'),
(275, 20570, 755, 'I got a Huawei!! Whats wrong with that??', NULL, '2020-12-11 20:46:45', '2020-12-11 20:46:45'),
(276, 34596, 755, 'The X Files lol', NULL, '2020-12-13 22:59:58', '2020-12-13 22:59:58'),
(277, 16949, 1639, 'i get that its really amazing but some people beat and abuse animals to do this tho.????????', NULL, '2020-12-13 23:26:18', '2020-12-13 23:26:18'),
(278, 17901, 1668, '????????', NULL, '2020-12-17 09:35:36', '2020-12-17 09:35:36'),
(279, 24049, 1712, 'haha', NULL, '2021-01-12 11:32:35', '2021-01-12 11:32:35'),
(280, 2148, 755, 'I feel old now!', NULL, '2021-01-13 06:28:29', '2021-01-13 06:28:29'),
(281, 17325, 1722, 'Jaja', NULL, '2021-01-18 05:58:14', '2021-01-18 05:58:14'),
(282, 13997, 1769, 'mmm', NULL, '2021-02-06 03:40:39', '2021-02-06 03:40:39'),
(283, 13997, 1769, 'que', NULL, '2021-02-09 00:13:48', '2021-02-09 00:13:48'),
(284, 31068, 296, 'you got knocked the fuck out !!!', NULL, '2021-02-11 03:25:19', '2021-02-11 03:25:19'),
(285, 11836, 1702, 'I respect you... so much.  you are my new spirit animal', NULL, '2021-02-13 07:41:05', '2021-02-13 07:41:05'),
(286, 17287, 1800, 'traducir en espa??ol', NULL, '2021-02-18 20:29:23', '2021-02-18 20:29:23'),
(287, 111, 1803, 'haha ????????????', NULL, '2021-02-19 14:03:23', '2021-02-19 14:03:23'),
(288, 30084, 1803, 'mantapq', NULL, '2021-02-19 14:07:13', '2021-02-19 14:07:13'),
(289, 30084, 1803, 'mantap', NULL, '2021-02-19 14:07:25', '2021-02-19 14:07:25'),
(290, 23021, 296, 'because we stole their country and killed their people', NULL, '2021-02-22 08:24:33', '2021-02-22 08:24:33'),
(292, 1825, 1702, 'get fucked', NULL, '2021-02-25 04:58:38', '2021-02-25 04:58:38'),
(293, 946, 1702, 'more like they are in the dark ages', NULL, '2021-02-25 05:59:32', '2021-02-25 05:59:32'),
(294, 10273, 1702, 'lgbt has lost their wat', NULL, '2021-02-25 06:05:41', '2021-02-25 06:05:41'),
(295, 10273, 1702, 'way... lost their way', NULL, '2021-02-25 06:05:55', '2021-02-25 06:05:55'),
(296, 23233, 1702, 'good work', NULL, '2021-02-28 05:04:10', '2021-02-28 05:04:10'),
(297, 16481, 1702, 'wonderful.  well done!  please make more', NULL, '2021-02-28 05:55:29', '2021-02-28 05:55:29'),
(298, 897, 1825, 'hi', NULL, '2021-02-28 15:25:07', '2021-02-28 15:25:07'),
(299, 21061, 1825, 'ha', NULL, '2021-02-28 15:26:01', '2021-02-28 15:26:01'),
(300, 484, 1702, 'influencers get fucked', NULL, '2021-02-28 20:33:40', '2021-02-28 20:33:40'),
(301, 29162, 1702, 'excellent!', NULL, '2021-03-06 05:06:02', '2021-03-06 05:06:02'),
(302, 3610, 1702, 'amen.  girl needs to shut the fuck up.', NULL, '2021-03-06 05:07:03', '2021-03-06 05:07:03'),
(303, 23744, 1702, 'get fucked!!', NULL, '2021-03-06 05:17:45', '2021-03-06 05:17:45'),
(304, 22527, 1702, 'forgiveness is good.  you don\'t have to staywith them', NULL, '2021-03-06 05:31:57', '2021-03-06 05:31:57'),
(305, 6734, 755, 'Because they\'re all sluts?', NULL, '2021-03-08 00:06:15', '2021-03-08 00:06:15'),
(306, 31500, 1702, 'the hero we need', NULL, '2021-03-08 00:21:36', '2021-03-08 00:21:36'),
(307, 37672, 1702, 'that show is trash.  the kind of people who watch that garbage think Lost was a great show', NULL, '2021-03-08 00:34:22', '2021-03-08 00:34:22'),
(308, 33938, 1576, '????', NULL, '2021-03-13 00:30:55', '2021-03-13 00:30:55');

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `name`, `images`, `created_at`, `updated_at`) VALUES
(1, 'GIF', NULL, '2019-07-08 23:17:50', '2019-07-08 23:17:50'),
(2, 'Awesome', NULL, '2019-07-08 23:17:50', '2019-07-08 23:17:50'),
(3, 'Video', NULL, '2019-07-08 23:17:50', '2019-07-08 23:17:50'),
(4, 'Funny', NULL, '2019-07-08 23:17:50', '2019-07-08 23:17:50'),
(5, 'WTF', NULL, '2019-07-08 23:17:50', '2019-07-08 23:17:50'),
(6, 'Sport ', NULL, '2019-07-08 23:17:51', '2019-07-08 23:17:51'),
(7, 'Ask 9GAG', NULL, '2019-07-08 23:17:51', '2019-07-08 23:17:51'),
(8, 'Meme', NULL, '2019-07-08 23:33:11', '2019-07-08 23:33:11'),
(9, 'Relationship', NULL, '2019-07-08 23:33:11', '2019-07-08 23:33:11'),
(10, 'Animals', NULL, '2019-07-09 07:28:21', '2019-07-09 07:28:21'),
(11, 'Gaming', NULL, '2019-07-09 16:21:43', '2019-07-09 16:21:43'),
(12, 'Movie & TV', NULL, '2019-07-09 18:50:53', '2019-07-09 18:50:53'),
(13, 'Crappy Design', NULL, '2019-07-09 20:42:12', '2019-07-09 20:42:12'),
(14, 'Star Wars', NULL, '2019-07-09 20:42:12', '2019-07-09 20:42:12'),
(15, 'Satisfying', NULL, '2019-07-10 08:24:56', '2019-07-10 08:24:56'),
(16, 'Food & Drinks', NULL, '2019-07-10 10:31:40', '2019-07-10 10:31:40'),
(17, 'Savage', NULL, '2019-07-10 15:47:38', '2019-07-10 15:47:38'),
(18, 'Comic & Webtoon', NULL, '2019-07-10 23:07:30', '2019-07-10 23:07:30'),
(19, 'PC Master Race', NULL, '2019-07-11 19:41:05', '2019-07-11 19:41:05'),
(20, 'Cosplay', NULL, '2019-07-11 19:41:05', '2019-07-11 19:41:05'),
(21, 'Travel & Photography', NULL, '2019-07-11 22:06:13', '2019-07-11 22:06:13'),
(22, 'Marvel & DC', NULL, '2019-07-13 02:47:52', '2019-07-13 02:47:52'),
(23, 'Anime & Manga', NULL, '2019-07-13 22:29:04', '2019-07-13 22:29:04'),
(24, 'Politics ', NULL, '2019-07-13 23:01:59', '2019-07-13 23:01:59'),
(25, 'Music', NULL, '2019-07-14 14:46:44', '2019-07-14 14:46:44'),
(26, 'Science & Tech', NULL, '2019-07-14 23:52:42', '2019-07-14 23:52:42'),
(27, 'School', NULL, '2019-07-14 23:52:42', '2019-07-14 23:52:42'),
(28, 'Drawing, DIY & Crafts', NULL, '2019-07-16 00:45:06', '2019-07-16 00:45:06'),
(29, 'Pok??mon', NULL, '2019-07-18 09:14:33', '2019-07-18 09:14:33'),
(30, 'Wallpaper', NULL, '2019-07-19 02:32:38', '2019-07-19 02:32:38'),
(31, 'Home & Living', NULL, '2019-07-19 23:36:18', '2019-07-19 23:36:18'),
(32, 'Timely', NULL, '2019-07-20 20:43:24', '2019-07-20 20:43:24'),
(33, 'History', NULL, '2019-07-30 06:49:30', '2019-07-30 06:49:30'),
(34, 'Football', NULL, '2019-08-14 05:02:29', '2019-08-14 05:02:29'),
(35, 'Back to School', NULL, '2019-08-26 20:18:53', '2019-08-26 20:18:53'),
(36, 'Game of Thrones ??????', NULL, '2019-09-04 00:18:20', '2019-09-04 00:18:20'),
(37, 'League of Legends', NULL, '2019-09-11 02:39:13', '2019-09-11 02:39:13'),
(38, 'Countryballs', NULL, '2019-09-14 01:15:54', '2019-09-14 01:15:54'),
(39, 'LEGO', NULL, '2019-09-23 07:19:26', '2019-09-23 07:19:26'),
(40, 'Brazil ????????', NULL, '2019-09-27 23:03:00', '2019-09-27 23:03:00'),
(41, 'Wholesome????', NULL, '2019-10-23 19:02:51', '2019-10-23 19:02:51'),
(42, 'Latest News', NULL, '2019-10-23 22:20:07', '2019-10-23 22:20:07'),
(43, 'Spooktober????', NULL, '2019-10-24 13:49:54', '2019-10-24 13:49:54'),
(44, 'Chile ????????', NULL, '2019-10-25 18:58:41', '2019-10-25 18:58:41'),
(45, 'K-Pop', NULL, '2019-10-26 16:00:53', '2019-10-26 16:00:53'),
(46, 'South Korea ????????', NULL, '2019-10-28 16:03:32', '2019-10-28 16:03:32'),
(47, 'Teens Can Relate', NULL, '2019-10-29 17:13:06', '2019-10-29 17:13:06'),
(48, 'Cozy & Comfy', NULL, '2019-10-31 16:45:59', '2019-10-31 16:45:59'),
(49, 'Netherlands ????????', NULL, '2019-11-01 16:47:11', '2019-11-01 16:47:11'),
(50, 'Girl Celebrity', NULL, '2019-12-20 03:27:00', '2019-12-20 03:27:00'),
(51, 'Girl', NULL, '2019-12-24 21:08:30', '2019-12-24 21:08:30'),
(52, 'Xmas & New Year', NULL, '2019-12-24 23:04:55', '2019-12-24 23:04:55'),
(53, 'NSFW', NULL, '2020-01-22 16:08:37', '2020-01-22 16:08:37'),
(54, 'Valentine\'s Day', NULL, '2020-02-11 12:50:15', '2020-02-11 12:50:15');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
