-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Agu 2020 pada 16.55
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aqualux`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `branch`
--

CREATE TABLE `branch` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `alamat` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `branch`
--

INSERT INTO `branch` (`id`, `nama`, `alamat`, `created_at`, `updated_at`) VALUES
(1, 'semarang', 'semarang kota no 100', '2020-08-19 14:45:40', '2020-08-19 14:45:40'),
(2, 'semarang', 'semarang kota no 100', '2020-08-19 14:45:43', '2020-08-19 14:45:43'),
(3, 'demak', 'jl raya demak - semarang', '2020-08-19 14:46:04', '2020-08-19 14:46:04'),
(4, 'demak', 'jl raya demak - semarang', '2020-08-19 14:46:07', '2020-08-19 14:46:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `telepon` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `alamat` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `customer`
--

INSERT INTO `customer` (`id`, `nama`, `telepon`, `email`, `alamat`, `created_at`, `updated_at`) VALUES
(1, 'rico', '081228729651', 'edylistiyan0@gmail.com', 'demak', '2020-08-19 14:40:40', '2020-08-19 14:40:40'),
(2, 'edy', '081228729651', 'edylistiyan0@gmail.com', 'demak', '2020-08-19 14:41:46', '2020-08-19 14:41:46'),
(3, 'edy', '081228729651', 'edylistiyan0@gmail.com', 'demak', '2020-08-19 14:41:59', '2020-08-19 14:41:59'),
(4, 'rico', '081333444555', 'rico@gmail.com', 'kudus', '2020-08-19 14:42:26', '2020-08-19 14:42:26'),
(5, 'rico', '081333444555', 'rico@gmail.com', 'kudus', '2020-08-19 14:42:29', '2020-08-19 14:42:29'),
(6, 'restu', '089123456756', 'restu@gmail.com', 'pemalang', '2020-08-19 14:42:57', '2020-08-19 14:42:57'),
(7, 'restu', '089123456756', 'restu@gmail.com', 'pemalang', '2020-08-19 14:43:00', '2020-08-19 14:43:00'),
(8, 'saipul', '098765456356', 'saipul@gmail.com', 'semarang', '2020-08-19 14:43:23', '2020-08-19 14:43:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `package_id` int(11) NOT NULL,
  `kode` varchar(20) NOT NULL,
  `jenis_marketing` varchar(10) NOT NULL,
  `jenis_pembayaran` varchar(10) NOT NULL,
  `tanggal` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `order`
--

INSERT INTO `order` (`id`, `customer_id`, `branch_id`, `user_id`, `package_id`, `kode`, `jenis_marketing`, `jenis_pembayaran`, `tanggal`, `created_at`, `updated_at`) VALUES
(1, 4, 3, 2, 1, 'PK001', 'online', 'cash', '0000-00-00', '2020-08-19 14:52:19', '2020-08-19 14:52:19'),
(2, 3, 2, 1, 1, 'PK120', 'online', 'cash', '2020-08-20', '2020-08-19 14:53:25', '2020-08-19 14:53:25'),
(3, 2, 2, 2, 3, 'PK310', 'online', 'cash', '2020-08-20', '2020-08-19 14:54:40', '2020-08-19 14:54:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `package`
--

CREATE TABLE `package` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `harga` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `package`
--

INSERT INTO `package` (`id`, `nama`, `harga`, `created_at`, `updated_at`) VALUES
(1, 'PAKET 1', 15000000, '2020-08-19 14:49:38', '2020-08-19 14:49:38'),
(2, 'PAKET 2', 20000000, '2020-08-19 14:49:59', '2020-08-19 14:49:59'),
(3, 'PAKET 3', 25000000, '2020-08-19 14:50:15', '2020-08-19 14:50:15'),
(4, 'PAKET 4', 17000000, '2020-08-19 14:50:36', '2020-08-19 14:50:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `jabatan` varchar(50) NOT NULL,
  `telepon` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `alamat` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `nama`, `jabatan`, `telepon`, `email`, `alamat`, `created_at`, `updated_at`) VALUES
(1, 'duspha', 'marketing', '081223456432', 'dushpha@gmail.com', 'kudus', '2020-08-19 14:47:24', '2020-08-19 14:47:24'),
(2, 'duspha', 'marketing', '081223456432', 'dushpha@gmail.com', 'kudus', '2020-08-19 14:47:26', '2020-08-19 14:47:26'),
(3, 'marsel', 'marketing', '089657267452', 'marsel@gmail.com', 'semarang', '2020-08-19 14:48:25', '2020-08-19 14:48:25'),
(4, 'marsel', 'marketing', '089657267452', 'marsel@gmail.com', 'semarang', '2020-08-19 14:48:28', '2020-08-19 14:48:28');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `branch`
--
ALTER TABLE `branch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `package`
--
ALTER TABLE `package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
