-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th9 21, 2023 lúc 03:55 PM
-- Phiên bản máy phục vụ: 8.0.30
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `swshop`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `authority`
--

CREATE TABLE `authority` (
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `authority`
--

INSERT INTO `authority` (`name`) VALUES
('ROLE_ADMIN'),
('ROLE_USER');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blog`
--

CREATE TABLE `blog` (
  `id` bigint NOT NULL,
  `content` mediumtext COLLATE utf8mb4_general_ci,
  `created_date` date DEFAULT NULL,
  `description` mediumtext COLLATE utf8mb4_general_ci,
  `image_banner` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(5000) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `blog`
--

INSERT INTO `blog` (`id`, `content`, `created_date`, `description`, `image_banner`, `title`) VALUES
(2, '<p>kkkkk</p>', '2023-04-20', 'okeee', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1681953259/fb7fjttqhzfmghxu2y6c.jpg', 'Gốm sứ hiện nay'),
(3, '<h1 class=\"detail-title\">SEA Games 32: Cờ tướng Việt Nam gi&agrave;nh đủ bộ huy chương</h1>\n<div class=\"action-link\">\n<div class=\"date\"><span class=\"txt\">Thứ Bảy, 13/05/2023 17:27</span>&nbsp;|&nbsp;\n<h4 class=\"cate\"><a title=\"Thể thao\" href=\"https://baotintuc.vn/the-thao-273ct0.htm\"><strong>Thể thao</strong></a></h4>\n</div>\n<div class=\"link\">\n<div class=\"likeshare\">\n<div class=\"fb-like fb_iframe_widget\" data-href=\"https://baotintuc.vn/the-thao/sea-games-32-co-tuong-viet-nam-gianh-du-bo-huy-chuong-20230513172628530.htm\" data-width=\"\" data-layout=\"button_count\" data-action=\"like\" data-size=\"small\" data-share=\"true\"><iframe class=\"\" title=\"fb:like Facebook Social Plugin\" src=\"https://www.facebook.com/v8.0/plugins/like.php?action=like&amp;app_id=156434197838325&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df258b05458c89b%26domain%3Dbaotintuc.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbaotintuc.vn%252Ff1640e37ae81814%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fbaotintuc.vn%2Fthe-thao%2Fsea-games-32-co-tuong-viet-nam-gianh-du-bo-huy-chuong-20230513172628530.htm&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;size=small&amp;width=\" name=\"f26b61d0e24827\" width=\"1000px\" height=\"1000px\" frameborder=\"0\" scrolling=\"no\" allow=\"encrypted-media\" allowfullscreen=\"allowfullscreen\" data-testid=\"fb:like Facebook Social Plugin\"></iframe></div>\n</div>\n</div>\n</div>\n<div class=\"content\">\n<h2 class=\"sapo\">Với việc gi&agrave;nh th&ecirc;m 1 HCV ở m&ocirc;n cờ tướng v&agrave; 1 HCV ở m&ocirc;n judo, tổng số HCV của Đo&agrave;n Thể thao Việt Nam trong ng&agrave;y thi đấu 13/5 đ&atilde; tăng l&ecirc;n 9.</h2>\n<ul id=\"plhMain_NewsDetail1_divRelation\" class=\"list-concern\">\n<li class=\"item\">\n<h4><a title=\"SEA Games 32: C&acirc;u chuyện cảm động sau tấm HCV của VĐV Philippines\" href=\"https://baotintuc.vn/chuyen-the-thao/sea-games-32-cau-chuyen-cam-dong-sau-tam-hcv-cua-vdv-philippines-20230513132452233.htm\">SEA Games 32: C&acirc;u chuyện cảm động sau tấm HCV của VĐV Philippines</a></h4>\n</li>\n<li class=\"item\">\n<h4><a title=\"SEA Games 32: Việt Nam đặt mục ti&ecirc;u gi&agrave;nh 30 - 40 HCV trong những ng&agrave;y thi đấu cuối\" href=\"https://baotintuc.vn/the-thao/sea-games-32-viet-nam-dat-muc-tieu-gianh-30-40-hcv-trong-nhung-ngay-thi-dau-cuoi-20230513131620439.htm\">SEA Games 32: Việt Nam đặt mục ti&ecirc;u gi&agrave;nh 30 - 40 HCV trong những ng&agrave;y thi đấu cuối</a></h4>\n</li>\n</ul>\n<div class=\"content_wrapper\">\n<div id=\"plhMain_NewsDetail1_divSharelink\" class=\"share share-sticky\"></div>\n<div class=\"boxdetail\">\n<div class=\"contents\">\n<div id=\"divfirst\">\n<div>\n<figure class=\"image\"><img src=\"https://cdnmedia.baotintuc.vn/Upload/a7srThwxbojBCucvUWgnxA/files/2023/05/13/huy-chuong-13052023.jpg\" alt=\"Ch&uacute; th&iacute;ch ảnh\">\n<figcaption>Kỳ thủ Lại L&yacute; Huynh xuất sắc gi&agrave;nh HCV m&ocirc;n Cờ tướng. Ảnh: TTXVN</figcaption>\n</figure>\n</div>\n<p>Sau một ng&agrave;y tranh t&agrave;i s&ocirc;i nổi, cờ tướng Việt Nam đ&atilde; th&agrave;nh c&ocirc;ng khi Lại L&yacute; Huynh, Nguyễn Th&agrave;nh Bảo, L&ecirc; Thị Kim Loan lần lượt gi&agrave;nh HCV c&aacute; nh&acirc;n nam, HCĐ c&aacute; nh&acirc;n nam v&agrave; HCB c&aacute; nh&acirc;n nữ cờ ti&ecirc;u chuẩn. Kết th&uacute;c nội dung c&aacute; nh&acirc;n nam cờ ti&ecirc;u chuẩn, Lại L&yacute; Huynh được 8 điểm gi&agrave;nh HCV, Nguyễn Th&agrave;nh Bảo được 7 điểm đoạt HCĐ. Ở nội dung cờ ti&ecirc;u chuẩn c&aacute; nh&acirc;n nữ, kỳ thủ L&ecirc; Thị Kim Loan gi&agrave;nh HCB với 7 điểm.</p>\n</div>\n<div id=\"divend\">\n<p>Ở m&ocirc;n judo, v&otilde; sĩ Tạ Đức Huy v&agrave; Nguyễn Cường Thịnh gi&agrave;nh HCV ở nội dung b&agrave;i quyền tự vệ (Kime No Kata). Trong khi đ&oacute;, đ&ocirc;i VĐV Nguyễn Bảo Ngọc v&agrave; Trần L&ecirc; Phương Nga gi&agrave;nh HCB ở nội dung Ju No Kata.</p>\n</div>\n</div>\n<div class=\"author\"><strong>Trần Quy&ecirc;n</strong><em>&nbsp;(TTXVN)</em></div>\n<div class=\"widget\"><a class=\"widget_thumb\" title=\"B&aacute;n kết b&oacute;ng đ&aacute; nam SEA Games 32 giữa Việt Nam - Indonesia: Trận đấu của những duy&ecirc;n nợ\" href=\"https://baotintuc.vn/bong-da/ban-ket-bong-da-nam-sea-games-32-giua-viet-nam-indonesia-tran-dau-cua-nhung-duyen-no-20230513151952166.htm\"><img src=\"https://cdnthumb.baotintuc.vn/ha_w/260/https@@$$media.baotintuc.vn/Upload/EqV5H9rWgvy9oNikwkHLXA/files/13052023U22VN.jpg\" alt=\"B&aacute;n kết b&oacute;ng đ&aacute; nam SEA Games 32 giữa Việt Nam - Indonesia: Trận đấu của những duy&ecirc;n nợ\"></a>\n<div class=\"widget_info\"><a class=\"info-title\" href=\"https://baotintuc.vn/bong-da/ban-ket-bong-da-nam-sea-games-32-giua-viet-nam-indonesia-tran-dau-cua-nhung-duyen-no-20230513151952166.htm\">B&aacute;n kết b&oacute;ng đ&aacute; nam SEA Games 32 giữa Việt Nam - Indonesia: Trận đấu của những duy&ecirc;n nợ</a>\n<p class=\"des\">Chiều 13/5, tuyển U22 Việt Nam v&agrave; U22 Indonesia sẽ tranh t&agrave;i tại b&aacute;n kết SEA Games 32. Đội b&oacute;ng Xứ vạn đảo l&agrave; đối thủ rất mạnh nhưng thầy tr&ograve; HLV Troussier cũng đ&atilde; sẵn s&agrave;ng trước trận đấu quan trọng. Đ&acirc;y được dự đo&aacute;n l&agrave; trận đấu rất hấp dẫn giữa hai đội b&oacute;ng c&oacute; nhiều duy&ecirc;n nợ trong v&agrave;i năm qua.</p>\n</div>\n</div>\n</div>\n</div>\n</div>', '2023-04-27', 'Chiều 27/4, Đoàn Đại biểu Quốc hội TP Đà Nẵng tổ chức hội nghị tiếp xúc cử tri chuẩn bị kỳ họp thứ năm, Quốc hội khóa XV. Dự hội nghị có Chủ tịch nước Võ Văn Thưởng.  Cử tri Đà Nẵng bày tỏ sự quan tâm đến nhiều vấn đề lớn như phục hồi kinh tế, phòng chống tham nhũng, sửa đổi Luật Đất đai, cải cách giáo dục, tình trạng thiếu thuốc và vật tư y tế.', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682608667/wenh8pa8nkk7iwuyp1sh.jpg', 'Chủ tịch nước: Tiếp tục đẩy mạnh, xử lý nghiêm cán bộ tham nhũng'),
(4, '<p>ferferfe</p>', '2023-09-13', 'fgerferfe', NULL, 'gẻgerger');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Đồ sơ chế updae'),
(2, 'Hàng khô'),
(5, 'Rau an toàn'),
(6, 'Rau củ hữu cơ'),
(7, 'Thịt cá dân dã'),
(8, 'Thực phẩm khác'),
(9, 'Trái cây theo mùa'),
(11, 'Hải sản vùng miền');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` bigint NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `content`, `created_date`, `product_id`, `user_id`) VALUES
(2, 'heheh', '2023-04-26', 5, 8);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` bigint NOT NULL,
  `content` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `replay` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `da_xem` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `contact`
--

INSERT INTO `contact` (`id`, `content`, `created_date`, `email`, `replay`, `da_xem`) VALUES
(1, 'tôi đã nhận được sản phẩm của bạn', '2023-04-26', 'hantinh311002102000@gmail.com', NULL, 1),
(2, 'oke oke', '2023-04-26', '09127832423', NULL, 1),
(3, 'heh hehe', '2023-04-26', '0932443543', NULL, 1),
(4, 'tôi muốn mua hàng', '2023-04-27', '093647234', NULL, 1),
(5, 'cascasfewfwe', '2023-04-27', 'hantinh311002102000@gmail.com', NULL, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detail_invoice`
--

CREATE TABLE `detail_invoice` (
  `id` bigint NOT NULL,
  `price` double DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `invoice_id` bigint DEFAULT NULL,
  `product_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `detail_invoice`
--

INSERT INTO `detail_invoice` (`id`, `price`, `quantity`, `total_amount`, `invoice_id`, `product_id`) VALUES
(10, 4500000, 1, 4500000, 8, 5),
(11, 4500000, 1, 4500000, 9, 5),
(12, 2200000, 1, 2200000, 9, 11),
(13, 2200000, 1, 2200000, 10, 11),
(14, 3000000, 1, 3000000, 10, 9),
(15, 3000000, 1, 3000000, 11, 9),
(16, 3500000, 1, 3500000, 11, 6),
(17, 2300000, 1, 2300000, 12, 7),
(18, 3000000, 1, 3000000, 12, 9),
(19, 295000, 1, 295000, 13, 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `history_pay`
--

CREATE TABLE `history_pay` (
  `id` bigint NOT NULL,
  `created_date` date DEFAULT NULL,
  `order_id` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `request_id` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `invoice_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `history_pay`
--

INSERT INTO `history_pay` (`id`, `created_date`, `order_id`, `request_id`, `total_amount`, `invoice_id`) VALUES
(4, '2023-04-28', '1682650827608', '1682650827608', 5200000, 10),
(5, '2023-09-07', '1694099153079', '1694099153079', 5300000, 12),
(6, '2023-09-13', '1694618510537', '1694618510537', 295000, 13);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `image_product`
--

CREATE TABLE `image_product` (
  `id` bigint NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `product_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `image_product`
--

INSERT INTO `image_product` (`id`, `link`, `product_id`) VALUES
(7, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1681954792/rb8wnriwmjrkzib2vban.jpg', 5),
(8, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1681954794/ls1d3rirnlac62xil8ra.jpg', 5),
(9, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041653/vlxaggf6pcc15at92mtw.jpg', 6),
(10, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041655/awsnhxsplstv911ly6yc.jpg', 6),
(11, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041742/s9zgqcimsd2rpl0den6w.jpg', 7),
(12, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041743/rhpz06hikyxzknizrcog.jpg', 7),
(13, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041831/r64aubsqc5r2wgag1kbx.jpg', 8),
(14, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041832/pccwsbet0ojqc9ioqptd.jpg', 8),
(15, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042217/bbu8xqyns3gk53ca8gsn.jpg', 9),
(16, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042218/n6eeoxymgidkm9ck9cer.jpg', 9),
(17, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042331/vnqatcok1w8u3mtwem2l.jpg', 10),
(18, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042333/gaiomfizvzlqwbkmjiji.jpg', 10),
(19, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042392/uykskzsmzzoni0u0azmz.jpg', 11),
(20, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042393/mw86hechkg98wq4rxxia.jpg', 11),
(21, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042478/eva7yre29qwhuamlazir.jpg', 12),
(22, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042480/uplq9onzpvx5zhwgalvk.jpg', 12),
(23, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042539/ulke9xxqeww9xcxzgcwm.jpg', 13),
(24, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042541/whtg0qt9iopbqepbhb8m.jpg', 13),
(25, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682581995/rhjc01mbt5jyyzqchqlj.jpg', 14),
(26, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682581996/p4y6u38fdex4hlqmo55c.jpg', 14),
(27, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582057/wdp4gi8fuuug0r0qieo9.jpg', 15),
(28, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582059/ky1ffux1pznr5htgtuwv.jpg', 15),
(29, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582156/q7w7yxwp3rtrdam9b66q.jpg', 16),
(30, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582158/kl86dhxffruo3hvtui6f.jpg', 16),
(31, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582236/ky81bvodex1tctt91ucf.jpg', 17),
(32, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582238/gyis6fnarshbpavm8g4l.jpg', 17),
(33, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582338/vb7alfc1sfndsgi2m9pf.jpg', 18),
(34, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582340/kuninuy4g0umaq11bvso.jpg', 18),
(35, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582421/b3g3rg3nkmi5ohkpfnpo.jpg', 19),
(36, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582422/oeyj3rgslss6x4sewhth.jpg', 19),
(37, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582498/zre1pkiqkdtagcuk6vny.jpg', 20),
(38, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582585/hae7ytzl7seicymdi0ep.jpg', 21),
(39, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582675/xsq6uw3mshueyiimxva2.jpg', 22),
(40, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582777/i3tsplut8grgbigfec4y.jpg', 23),
(41, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582822/yhnl1kiaiazbmtdafvpj.jpg', 24),
(42, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582870/dvnfy51nqyo9owubx0he.jpg', 25),
(43, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582942/wxilbrndllq0czsoit17.jpg', 26),
(44, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583002/qba52tu1qqxzk1dldqqa.jpg', 27),
(45, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583057/c4rrulzfwjx5s7w6t8mu.jpg', 28),
(46, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583112/usnpvz9nltovczgdwj7d.jpg', 29),
(47, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583171/vjfwzse0j5nkdm49d3vh.jpg', 30),
(48, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583248/cedagb6ucih4webtxgak.jpg', 31),
(49, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583249/y6scqqootefwrpfgjtad.jpg', 31),
(50, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1686831273/v88bvw5uuatnxbempjvs.png', 32),
(51, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1686831275/kzfx9jvbyzyje2fldlnn.jpg', 32),
(52, 'http://res.cloudinary.com/dxccmy7an/image/upload/v1694618665/qexnatyfljhbztdx2xju.jpg', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `import_order`
--

CREATE TABLE `import_order` (
  `id` bigint NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `distributor` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `import_price` double DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `product` bigint DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `import_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `import_order`
--

INSERT INTO `import_order` (`id`, `address`, `distributor`, `import_price`, `phone`, `quantity`, `product`, `created_date`, `import_date`) VALUES
(3, 'hà nội', 'Hoàng hải nam', 3600000, '0932684233', 500, 5, '2023-04-20', '2023-04-20'),
(5, 'TP. Hồ Chí Minh', 'Khánh Linh', 4000000, '0921734824', 145, 5, '2023-04-20', '2023-04-13'),
(6, 'Hà nội', 'Hoàng minh anh', 7200000, '093264723', 55, 9, '2023-04-25', '2023-04-24'),
(7, 'Hà nội', 'Hoàng minh nghĩa', 2100000, '0934283423', 200, 10, '2023-04-27', '2023-04-26'),
(8, 'Đà nẵng', 'Hoàng Mạnh Hải', 2000000, '0923748234', 150, 11, '2023-04-27', '2023-04-23'),
(9, 'đà nẵng', 'hùng minh', 7000000, '09216478234', 160, 12, '2023-04-27', '2023-04-27'),
(10, 'hà nam', 'hoàng minh', 6000000, '0923748233', 800, 13, '2023-04-27', '2023-04-26'),
(11, 'hà nội', 'hoàng minh', 3100000, '0921363423', 140, 6, '2023-04-27', '2023-04-26'),
(12, 'hà nội', 'hùng hoàng', 2000000, '0927482343', 400, 7, '2023-04-27', '2023-04-26'),
(13, 'hà nội', 'hùng hoàng', 4200000, '0932784234', 150, 8, '2023-04-27', '2023-04-24'),
(14, 'hà nội', 'hoàng minh', 4000000, '093274823', 300, 14, '2023-04-27', '2023-04-26'),
(15, 'hà nội', 'hoàng hải', 700000, '0823482334', 150, 15, '2023-04-27', '2023-04-27'),
(16, 'hà nội', 'hoàng hải', 8000000, '093654345', 170, 16, '2023-04-27', '2023-04-26'),
(17, 'hai bà trung, hà nội', 'hoàng hải', 1000000, '093483345', 440, 17, '2023-04-27', '2023-04-14'),
(18, 'hà nội', 'hoàng hải', 600000, '0934535343', 1200, 18, '2023-04-27', '2023-04-26'),
(19, 'hà nội', 'hoàng minh', 1000000, '0983347283', 120, 19, '2023-04-27', '2023-04-26'),
(20, 'đà nẵng', 'hải minh', 1700000, '0932647234', 300, 20, '2023-04-27', '2023-04-14'),
(21, 'hà nọi', 'hải minh', 5200000, '0892613721', 400, 21, '2023-04-27', '2023-04-19'),
(22, 'hà nọi', 'hải minh', 9000000, '093478234', 200, 22, '2023-04-27', '2023-04-20'),
(23, 'hà nội', 'hải minh', 3000000, '0923684233', 60, 23, '2023-04-27', '2023-04-20'),
(24, 'hà nội', 'hải minh', 1200000, '092364233', 500, 24, '2023-04-27', '2023-04-20'),
(25, 'hà nội', 'hải minh', 3000000, '0926472343', 170, 25, '2023-04-27', '2023-04-21'),
(26, 'hà nội', 'hải minh', 4000000, '0932748234', 300, 26, '2023-04-27', '2023-04-21'),
(27, 'hà nội', 'hải minh', 3000000, '092374823', 100, 27, '2023-04-27', '2023-04-20'),
(28, 'hà nội', 'hải minh', 1100000, '0932748327', 200, 28, '2023-04-27', '2023-04-22'),
(29, 'hà nội', 'hải minh', 3000000, '0937843435', 150, 29, '2023-04-27', '2023-04-18'),
(30, 'đà nẵng', 'hải minh', 1600000, '0937284234', 160, 30, '2023-04-27', '2023-04-20'),
(31, 'hà nội', 'hải minh', 1200000, '09673242323', 300, 31, '2023-04-27', '2023-04-21'),
(32, 'hà nội', 'hoàng minh hùng', 3000000, '0937482343', 130, 10, '2023-04-27', '2023-04-26'),
(33, 'hà nội', 'hhsd', 60000, '087415474', 500, 32, '2023-06-15', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoice`
--

CREATE TABLE `invoice` (
  `id` bigint NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `num_of_product` int DEFAULT NULL,
  `pay_type` int DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `status_in_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `note_admin` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ngay_nhan` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `invoice`
--

INSERT INTO `invoice` (`id`, `address`, `created_date`, `fullname`, `note`, `num_of_product`, `pay_type`, `phone`, `total_amount`, `status_in_id`, `user_id`, `note_admin`, `ngay_nhan`) VALUES
(8, 'Cầu giấy, Hà Nội', '2023-04-27', 'Trần Văn Hùng', '', 1, 0, '0832784233', 4500000, 4, 8, NULL, '2023-04-27'),
(9, 'Cầu giấy, Hà Nội', '2023-04-27', 'Trần Văn Hùng', 'ss', 2, 0, '0832784233', 6700000, 5, 8, NULL, NULL),
(10, 'Cầu giấy, Hà Nội', '2023-04-28', 'Trần Văn Hùng', 'oke', 2, 1, '0832784233', 5200000, 1, 8, NULL, NULL),
(11, 'Tp. Hcm', '2023-06-15', 'Trần tùng nam', 'nhận tối', 2, 0, '096485415', 6500000, 2, 10, NULL, NULL),
(12, 'Cầu giấy, Hà Nội', '2023-09-07', 'Trần Văn Hùng', 'heheh', 2, 1, '0832784233', 5300000, 1, 8, NULL, NULL),
(13, 'Cầu giấy, Hà Nội', '2023-09-13', 'Trần Văn Hùng', 'nhận tối', 1, 1, '0832784233', 295000, 1, 8, NULL, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` bigint NOT NULL,
  `created_date` date DEFAULT NULL,
  `deleted` int DEFAULT NULL,
  `description` mediumtext COLLATE utf8mb4_general_ci,
  `image_banner` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `num_view` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  `trademark_id` bigint DEFAULT NULL,
  `remain_quantity` int DEFAULT NULL,
  `import_price` double DEFAULT NULL,
  `kich_thuoc` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mau_sac` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `thiet_ke` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `created_date`, `deleted`, `description`, `image_banner`, `name`, `num_view`, `price`, `quantity`, `category_id`, `trademark_id`, `remain_quantity`, `import_price`, `kich_thuoc`, `mau_sac`, `thiet_ke`) VALUES
(5, '2023-04-20', 0, '<ul>\n<li style=\"font-weight: bold; font-style: italic;\"><em><strong>NGUỒN GỐC V&Agrave; TH&Agrave;NH PHẦN LỢN QUẾ</strong></em></li>\n</ul>\n<p>Ngược về khu vực S&oacute;c Sơn, H&agrave; Nội. Nơi đ&acirc;y đang dần được biết đến với những trang trại nu&ocirc;i lợn quế với quy m&ocirc; từ v&agrave;i chục đến h&agrave;ng ng&agrave;n con.&nbsp;Để c&oacute; được một con lợn quế xuất chuồng phải trải qua c&ocirc;ng đoạn nu&ocirc;i giun rất cầu kỳ, sau đ&oacute;&nbsp;giun quế được đem đi nghiền n&aacute;t, nấu ch&iacute;n rồi trộn c&ugrave;ng với b&atilde; bia, c&aacute;m ng&ocirc;, rau dại, c&acirc;y thảo dược,&hellip; theo tỷ lệ 10-15% giun quế c&ograve;n lại l&agrave; c&aacute;m l&agrave;m thức ăn cho lợn.</p>\n<p>Như vậy sau 6 th&aacute;ng chăn nu&ocirc;i dưới sự gi&aacute;m s&aacute;t nghi&ecirc;m ngặt để đảm bảo 3 ti&ecirc;u chuẩn:</p>\n<p>&ndash; L&yacute; học: kh&ocirc;ng lẫn th&agrave;nh phần n&agrave;o trong thịt</p>\n<p>&ndash; H&oacute;a học: kh&ocirc;ng c&oacute; chất tồn dư h&oacute;a học</p>\n<p>&ndash; Sinh học: kh&ocirc;ng c&oacute; k&yacute; sinh tr&ugrave;ng, vi khuẩn g&acirc;y hại</p>\n<p>Đồng thời kết hợp với giống lợn &ldquo;bố&rdquo; Duroc v&agrave; giống lợn &ldquo;mẹ&rdquo; Landrace để tạo ra lợn quế đạt ti&ecirc;u chuẩn v&agrave; r&otilde; nguồn gốc.</p>\n<p>Thịt lợn quế l&agrave; loại thịt được nu&ocirc;i bằng giun quế với h&agrave;ng lượng protein rất lớn, l&ecirc;n tới 70% hạm lượng cơ thể, th&ecirc;m v&agrave;o đ&oacute; l&agrave; giun quế c&ograve;n chứa đủ 12 loại axit amin để bổ sung dinh dưỡng cho vật nu&ocirc;i. Ch&iacute;nh v&igrave; vậy, x&eacute;t về độ tươi ngon th&igrave; thịt lợn quế hữu cơ c&oacute;&nbsp;vị ngon, chắc thịt, thơm thịt, hơn bất k&igrave; loại thịt n&agrave;o kh&aacute;c, h&agrave;m lượng dinh dưỡng cao, gi&agrave;u protein v&agrave; c&aacute;c nguy&ecirc;n tố vi lượng.</p>\n<p>GI&Ograve; QUẾ</p>\n<p>Gi&ograve; quế được l&agrave;m từ những phần thịt nạc ngon nhất của lợn quế.</p>\n<p>Gi&ograve; quế ăn c&oacute; vị ngọt của thịt, thơm của ti&ecirc;u c&ugrave;ng c&aacute;c gia vị</p>\n<p>Gi&ograve; quế d&ugrave;ng ăn trực tiếp hoặc c&oacute; thể r&aacute;n, x&agrave;o, d&ugrave;ng để l&agrave;m nộm, d&ugrave;ng ăn k&egrave;m c&aacute;c m&oacute;n cuốn</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1694618609/fyemrfzfazmrp672rnhl.webp', 'Giò thịt lợn quế', 53, 295000, 643, 1, 1, NULL, NULL, 'Cao 35 cm', 'xanh lam vẽ vàng', 'Nhị cảnh thuận buồm xuôi gió, chữ Lộc'),
(6, '2023-04-21', 0, '<p>B&igrave;nh t&agrave;i lộc x&eacute;t về h&igrave;nh d&aacute;ng miệng loe rộng, giữa cổ thắt lại th&acirc;n dưới ph&igrave;nh to đến cực đại v&agrave; điểm cuối thu nhỏ lại dần đặt l&ecirc;n tr&ecirc;n kệ gỗ rất ph&ugrave; hợp.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041651/tseduuzmlzooqyp40jmy.jpg', 'BÌNH HÚT LỘC CÔNG DANH PHÚ QUÝ VẼ VÀNG 30CM', 2, 3500000, 139, 2, 1, 0, NULL, 'Cao 30 cm', 'sứ xanh', 'Chim công, hoa đào, phù dung'),
(7, '2023-04-21', 0, '', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041740/s8ecad0aohuixqfsakuc.jpg', 'BÌNH HÚT LỘC CHIM CÔNG HOA ĐÀO NỀN VÀNG 35CM', 3, 2300000, 399, 2, 1, NULL, NULL, 'Cao 35 cm', 'Phối màu, nền vàng', 'Chim công, hoa đào, phù dung'),
(8, '2023-04-21', 0, '<p>B&igrave;nh t&agrave;i lộc x&eacute;t về h&igrave;nh d&aacute;ng miệng loe rộng, giữa cổ thắt lại th&acirc;n dưới ph&igrave;nh to đến cực đại v&agrave; điểm cuối thu nhỏ lại dần đặt l&ecirc;n tr&ecirc;n kệ gỗ rất ph&ugrave; hợp.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682041829/bdqr2wz32q5rqpzthtqz.jpg', 'BÌNH HÚT LỘC NHỊ CẢNH BÁCH NHI BÁCH PHÚC 35CM', 0, 4800000, 150, 2, 1, NULL, NULL, 'Cao 35 cm', 'Phối màu', 'Bách nhi đồ, bách nhi bách phúc'),
(9, '2023-04-21', 0, '', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042215/w8cw1aekak73tlt9stnk.jpg', 'BÌNH GỐM KHẮC HOA CAO CẤP 35CM', 9, 3000000, 52, 5, 1, NULL, NULL, 'Cao 35 cm', 'Vàng da lươn, vàng đất', 'Khắc hoa dây nổi'),
(10, '2023-04-21', 0, '<p>Lọ sơn m&agrave;i B&aacute;t Tr&agrave;ng được l&agrave;m bằng phương ph&aacute;p thủ c&ocirc;ng truyền thống, kiểu d&aacute;ng hiện đại kết hợp hoa văn vẽ cảnh đồng qu&ecirc; thuần Việt tạo n&eacute;t độc đ&aacute;o cho sản phẩm.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042330/mhf2nn3j5mf8qj5laeu3.jpg', 'TỎI CẢNH QUÊ SƠN MÀI THỦ CÔNG CAO 66CM', 17, 2300000, 330, 1, 1, 0, NULL, 'Cao 66cm, đường kính 45cm', 'Sơn mài', 'Vẽ cảnh quê'),
(11, '2023-04-21', 0, '<p>Đ&oacute;a hoa Ph&ugrave; Dung được rất nhiều người y&ecirc;u th&iacute;ch bởi vẻ đẹp tinh tế, đ&aacute;ng y&ecirc;u của n&oacute;. Buổi s&aacute;ng hoa Ph&ugrave; Dung nở ra c&oacute; m&agrave;u thanh khiết, đến trưa từ từ chuyển sang hồng rồi hồng đậm&hellip;&nbsp;</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042390/g8f8mdghc254tb8ridcu.jpg', 'LỌ TỎI SƠN MÀI HOA PHÙ DUNG', 2, 2200000, 149, 1, 1, 0, NULL, 'Cao 53 cm', 'Sơn mài', 'Hoa Sen khảm bạc'),
(12, '2023-04-21', 0, '<p>Trứng phong thủy vẽ nhị cảnh b&aacute;ch nhi cao 45cm l&agrave; d&ograve;ng sản phẩm cao cấp của B&aacute;t Tr&agrave;ng.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042477/b2qzebpal5gb9n1xgqx1.jpg', 'TRỨNG PHONG THỦY VẼ NHỊ CẢNH BÁCH NHI CAO 45CM', 2, 7200000, 160, 6, 1, 0, NULL, 'Cao 45 cm', 'Men phối màu', 'Nhị cảnh bách nhi đồ'),
(13, '2023-04-21', 0, '<p>Trứng phong thuỷ c&oacute; thể trưng b&agrave;y ph&ograve;ng kh&aacute;ch, ph&ograve;ng l&agrave;m việc để mang lại may mắn, sự ph&aacute;t triển, sinh s&ocirc;i nảy nở của c&ocirc;ng danh, sự nghiệp cũng nhưng thuận lợi trong kinh doanh, bu&ocirc;n b&aacute;n.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682042538/jipb175fukf4ujflxbmq.jpg', 'TRỨNG BÁCH HOA PHÚ QUÝ GỐM SỨ BÁT TRÀNG 45CM', 1, 6800000, 800, 1, 1, 0, NULL, 'Cao 45 cm', 'Ph', 'Bách hoa phú quý'),
(14, '2023-04-27', 0, '<p>Trưng b&agrave;y ph&ograve;ng kh&aacute;ch, phong thủy,&hellip;</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682581993/sxtbvi0tee2uhoapgn6q.jpg', 'BÌNH HÚT LỘC BÁT TRÀNG BÁCH NHI ĐỒ CAO 30CM', 0, 4300000, 300, 2, 2, 0, NULL, 'Cao 30 cm', 'Men bóng', 'Bách nhi đồ, bách nhi bách phúc'),
(15, '2023-04-27', 0, '<p>Đĩa sứ vẽ Kim k&ecirc; độc lập giả cổ &nbsp;rất nhiều gi&aacute; trị nghệ thuật v&agrave; &yacute; nghĩa phong thủy. G&agrave; l&agrave; một trong 12 con gi&aacute;p, l&agrave; một dấu t&iacute;ch của nền văn minh v&agrave; văn h&oacute;a n&ocirc;ng nghiệp&nbsp;</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582055/y95wyggjkpfcgeuqtryo.jpg', 'ĐĨA SỨ VẼ KIM KÊ ĐỘC LẬP GIẢ CỔ 35 CM', 1, 900000, 150, 1, 1, NULL, NULL, 'Đường kính 35cm', 'Men rạn cổ', 'Kim kê độc lập'),
(16, '2023-04-27', 0, '<p>Đĩa cảnh sứ m&atilde; đ&aacute;o mang nhiều &yacute; nghĩa về th&agrave;nh c&ocirc;ng trong kinh doanh, thắng lợi trong chiến trận với h&igrave;nh ảnh m&atilde; đ&aacute;o l&agrave; ngựa quay về. Đĩa cảnh m&atilde; đ&aacute;o th&agrave;nh c&ocirc;ng l&agrave; tranh vẽ về một bầy ngựa thường gồm t&aacute;m con ngựa đang phi nước đại tiến về một hướng</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582154/ytsvzmrrdylok7uhpxxf.jpg', 'ĐĨA CẢNH SỨ MÃ ĐÁO THÀNH CÔNG PHI 35 CM', 0, 9000000, 170, 1, 2, 0, NULL, 'Đường kính 35 cm', 'Men giả cổ', 'Mã đáo thành công'),
(17, '2023-04-27', 0, '<p>Đĩa cảnh T&ugrave;ng Lộc men Lam phi 35 cm mang nhiều gi&aacute; trị nghệ thuật v&agrave; &yacute; nghĩa phong thủy. Người ta trưng b&agrave;y đĩa cảnh T&ugrave;ng lộc trong nh&agrave; sẽ đem lại nhiều may mắn t&agrave;i lộc.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582235/pkoqsx9ixvokygf8fwtr.jpg', 'ĐĨA CẢNH TÙNG LỘC MEN LAM PHI 35 CM', 0, 1350000, 440, 1, 1, 0, NULL, 'Đường kính 35 cm', 'Men Lam', 'Tùng Lộc'),
(18, '2023-04-27', 0, '<p>Đĩa sứ vẽ cảnh trẻ thơ vui đ&ugrave;a phi 30</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582337/tluhrfjd2pyinugb4v8l.jpg', 'ĐĨA SỨ VẼ CẢNH TRẺ THƠ VUI ĐÙA PHI 30 CM', 0, 900000, 1200, 1, 1, 0, NULL, 'Phi 30', 'Men lam', 'Vẽ cảnh trẻ thơ vui đùa'),
(19, '2023-04-27', 0, '<p>Khổng minh Gia C&aacute;t lượng l&agrave; một vị qu&acirc;n sư nổi tiế...</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582418/mcf07vsqi0btrhvyok8x.jpg', 'TƯỢNG KHỔNG MINH MEN RẠN CAO 40 CM', 0, 1250000, 120, 9, 2, 0, NULL, 'Cao 40 cm', 'Men rạn', 'Khổng Minh, Gia Cát Lượng'),
(20, '2023-04-27', 0, '<p>Tượng ph&uacute;c lộc thọ tứ linh &ndash; cao 86cm</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582497/inxd3tbcutfev4kvsvnb.jpg', 'TƯỢNG PHÚC LỘC THỌ TỨ LINH – CAO 86CM', 0, 2000000, 300, 9, 2, 0, NULL, 'Cao 86 cm', 'Men rạn cổ', 'Tượng Phúc Lộc Thọ, Tam đa'),
(21, '2023-04-27', 0, '<p>Tượng ngh&ecirc; gốm sứ B&aacute;t Tr&agrave;ng cao 35 cm</p>\n<p>&nbsp;</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582584/antpnzfkxqzbsdvxfmap.jpg', 'TƯỢNG NGHÊ GỐM SỨ BÁT TRÀNG CAO 35 CM', 6, 6000000, 400, 9, 1, 0, NULL, 'Cao 35 cm', 'Men xanh ngọc', 'Nghê sứ'),
(22, '2023-04-27', 0, '<p>Ba &ocirc;ng Ph&uacute;c, Lộc,Thọ đ&atilde; nhắn nhủ người đời rằng hạ...</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582673/q7vcibgjpvwdhu4viaml.jpg', 'TƯỢNG TAM ĐA CAO 100 CM – HÀNG KỸ', 1, 10800000, 200, 9, 1, NULL, NULL, 'Cao 100 cm', 'Men rạn cổ', 'Tượng Phúc Lộc Thọ, Tam đa'),
(23, '2023-04-27', 0, '<p>Tranh ốp tường gốm b&aacute;t tr&agrave;ng vẽ cảnh chợ qu&ecirc; gốm b&aacute;t tr&agrave;ng</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582775/etgntahftgrvuw1azjhf.jpg', 'TRANH ỐP TƯỜNG GỐM BÁT TRÀNG VẼ CẢNH CHỢ QUÊ', 0, 3900000, 60, 11, 1, 0, NULL, 'Tuỳ chỉnh', 'Phối màu', 'Phong cảnh chợ quê'),
(24, '2023-04-27', 0, '<p>Tranh phong thủy Cửu ngư quần hội men Lam</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582820/erifgusomgzvaxe26aat.jpg', 'TRANH PHONG THỦY CỬU NGƯ QUẦN HỘI MEN LAM', 0, 1860000, 500, 11, 1, 0, NULL, '64 cm x 98 cm', 'Men Lam ', 'Vẽ Cửu ngư quần hội'),
(25, '2023-04-27', 0, '<p>K&iacute;ch thước chi tiết &nbsp;52 cm x 120 cm t&iacute;nh cả khung.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582869/lm10is3zmdcmdzpdeh4k.jpg', 'TRANH TỨ QUÝ TÙNG CÚC TRÚC MAI NỔI 0,5×1 M', 0, 3800000, 170, 1, 1, 0, NULL, '50 cm x 98 cm', 'Men bóng, phối màu', 'Vẽ cảnh Tứ Quý '),
(26, '2023-04-27', 0, '<p>Tranh Tứ qu&yacute; thuộc loại tranh bốn bức vẽ cảnh bốn m&ugrave;a l&agrave; xu&acirc;n, hạ, thu, đ&ocirc;ng. Mọi người treo tranh tứ qu&yacute; kh&ocirc;ng chỉ l&agrave; để trang tr&iacute; m&agrave; c&ograve;n mang nhiều &yacute; nghĩa mong cầu may mắn, ph&uacute; qu&yacute;, sung t&uacute;c v&agrave; mang cả những yếu tố phong thủy trong đ&oacute;.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682582940/tqku9kzvhn1twnz17p9m.jpg', 'TRANH TỨ CẢNH ĐẮP NỔI KỸ MEN CHÀM 45×90 CM', 2, 4800000, 300, 11, 2, 0, NULL, '45 cm x 90 cm', 'Men chàm cổ', 'Đắp nổi Tùng cúc trúc mai'),
(27, '2023-04-27', 0, '<p>Tranh bộ l&yacute; ngư vọng nguyệt gốm sứ 50&times;1 m&nbsp;</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583000/crj80zrfmhnf4urxidoz.jpg', 'TRANH BỘ LÝ NGƯ VỌNG NGUYỆT GỐM SỨ 50×1 M', 2, 3600000, 100, 11, 2, 0, NULL, '50 cm x 1 m', 'Phối màu', 'Cá chép, lý ngư vọng nguyệt'),
(28, '2023-04-27', 0, '<p>Đ&egrave;n ngủ gốm sứ vẽ hoa thi&ecirc;n điểu, h&agrave;ng thủ c&ocirc;ng củ...</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583055/sqg4tdjdafspaxmazqp5.jpg', 'ĐÈN NGỦ GỐM SỨ VẼ HOA THIÊN ĐIỂU', 4, 1650000, 200, 8, 1, 0, NULL, 'Cao 60 cm', 'Phối màu', 'Hoa thiên điểu'),
(29, '2023-04-27', 0, '<p>Đ&egrave;n b&agrave;n trang tr&iacute; gốm sứ cao cấp, sản phẩm hanmade của l&agrave;ng nghề B&aacute;t Tr&agrave;ng. Chiếc đ&egrave;n ngủ gốm sứ n&agrave;y vừa c&oacute; thể sử dụng thắp s&aacute;ng vừa l&agrave;m vật trang tr&iacute; đẹp mắt cho ph&ograve;ng kh&aacute;ch, ph&ograve;ng ngủ nh&agrave; bạn</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583111/qf6ip15iutgealwpczk2.jpg', 'ĐÈN BÀN TRANG TRÍ GỐM SỨ CAO CẤP', 2, 3900000, 150, 8, 2, 0, NULL, 'Cao 55 cm', 'Xanh lam', 'Hoa Dây'),
(30, '2023-04-27', 0, '<p>Đ&egrave;n ngủ gốm sơn m&agrave;i khảm hoa sen</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583169/vwoe321zwrxxelbvidwu.jpg', 'ĐÈN NGỦ GỐM SƠN MÀI KHẢM HOA SEN', 4, 2200000, 160, 8, 1, 0, NULL, 'Cao 55 cm', 'Vàng', 'Hoa sen'),
(31, '2023-04-27', 0, '<p>B&igrave;nh hồ l&ocirc; sơn thuỷ d&ugrave;ng để trưng b&agrave;y theo phong thuỷ mang lại sức khỏe v&agrave; sự b&igrave;nh y&ecirc;n cho gia chủ. Hồ l&ocirc; phong thuỷ c&oacute; h&igrave;nh tr&aacute;i bầu v&agrave; lu&ocirc;n gắn liền với h&igrave;nh ảnh buộc tr&ecirc;n chiếc gậy của &ocirc;ng Thọ, đ&acirc;y ch&iacute;nh l&agrave; biểu tượng của niềm vui, sức khoẻ v&agrave; an l&agrave;nh.</p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1682583246/awlk0stvjxwjzw8leapt.jpg', 'BÌNH HỒ LÔ GỐM SỨ VẼ SƠN THUỶ 80 CM', 4, 2200000, 300, 7, 2, 0, NULL, 'Cao 80 cm', 'Men rạn', 'Sơn thuỷ hữu tình'),
(32, '2023-06-15', 1, '<p>oke</p>\n<p><em><strong>fwegfewfew</strong></em></p>', 'http://res.cloudinary.com/dxccmy7an/image/upload/v1686831270/i8d26dl25wu9jmdotqbn.jpg', 'hhh', 0, 90000, 500, 5, 2, 0, NULL, 'cao 1m2', 'sứ xanh', 'cổ điển');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_view`
--

CREATE TABLE `product_view` (
  `id` bigint NOT NULL,
  `num_view` int DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `random_key` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ngay_search` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `product_view`
--

INSERT INTO `product_view` (`id`, `num_view`, `product_id`, `user_id`, `random_key`, `ngay_search`) VALUES
(11, 1, 13, NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(12, 4, 10, NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(13, 1, 26, NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(14, 1, 21, NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(15, 1, 27, NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(16, 1, 26, NULL, 'QKSrHSmZva3sE', '2023-04-27'),
(17, 1, 27, NULL, 'QKSrHSmZva3sE', '2023-04-27'),
(18, 1, 30, NULL, 'wetro2vFWuLad', '2023-04-28'),
(19, 1, 30, NULL, 'ES2VbgVy91Hdl', '2023-04-28'),
(20, 2, 11, NULL, '8XKNNZhbdJRw0', '2023-04-28'),
(21, 7, 9, NULL, '8XKNNZhbdJRw0', '2023-09-07'),
(22, 1, 29, NULL, 'PJiUZPm8XVld7', '2023-05-19'),
(23, 1, 28, NULL, 'PJiUZPm8XVld7', '2023-05-19'),
(24, 1, 29, NULL, 'YPtUfytDG6g0N', '2023-05-25'),
(25, 2, 6, NULL, 'YPtUfytDG6g0N', '2023-06-15'),
(26, 2, 9, NULL, '4HRPc4si9c1rd', '2023-06-15'),
(27, 2, 7, NULL, 'X2NND2cQn2RQ7', '2023-09-07'),
(28, 1, 31, NULL, 'PpwJbvOojVThR', '2023-09-07'),
(29, 5, 5, NULL, 's4AuTSI7hw6iw', '2023-09-13'),
(30, 1, 30, NULL, 'ITBP9DlDaziPg', '2023-09-20'),
(31, 1, 31, NULL, 'yyeXmoSkXKcuz', '2023-09-21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status_in`
--

CREATE TABLE `status_in` (
  `id` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `status_in`
--

INSERT INTO `status_in` (`id`, `name`) VALUES
(1, 'Đang chờ duyệt'),
(2, 'Đã duyệt đơn hàng'),
(3, 'Đơn hàng đã được gửi đi'),
(4, 'Đã nhận đơn hàng'),
(5, 'Đơn hàng đã bị hủy'),
(6, 'Khách không nhận hàng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trade_mark`
--

CREATE TABLE `trade_mark` (
  `id` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `trade_mark`
--

INSERT INTO `trade_mark` (`id`, `name`, `address`) VALUES
(1, 'Việt nam', ''),
(2, 'Trung quốc', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint NOT NULL,
  `activation_key` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `actived` int DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `dia_chi` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fullname` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `random_key` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `activation_key`, `actived`, `created_date`, `dia_chi`, `email`, `fullname`, `password`, `phone`, `username`, `random_key`) VALUES
(1, NULL, 1, NULL, NULL, NULL, NULL, '$2a$10$IFIzYaHyLLURlokKgiYJlOejexfXCE4awRciA.ByP4RyUrg1Mr7Be', NULL, 'admin', NULL),
(8, NULL, 1, '2023-04-26 21:14:15', 'Quận 10, TP.HCM', 'hantinh311002102000@gmail.com', 'NGUYỄN VĂN A', '$2a$10$CflBGfYc3eXFIzSVt965DOmnISXAoWyiwoDn2uJP/3tFJekuNJSPW', '0832784233', 'hantinh311002102000@gmail.com', '8XKNNZhbdJRw0'),
(9, NULL, 1, '2023-04-26 21:16:10', 'Quận 10, TP.HCM', 'khang.pham271200@hcmut.edu.vn', 'NGUYỄN VĂN B', '$2a$10$OG9IqYTq3Q6yZS6U0mr8n.4/Tsn36arXJFHMV9OALXLZk0LhfmcbS', '0932648234', 'khang.pham271200@hcmut.edu.vn', 'QKSrHSmZva3sE'),
(10, NULL, 1, '2023-06-15 19:14:25', 'Quận 10, TP.HCM', 'dev002102@gmail.com', 'NGUYỄN VĂN C', '$2a$10$aw6zwdVi4oQAAvDw6T3y7ePD6yVRZN3IqJ7Q6mMycPX/R5GQd.Z/6', '096485415', 'dev002102@gmail.com', '4HRPc4si9c1rd');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_authority`
--

CREATE TABLE `user_authority` (
  `user_id` bigint NOT NULL,
  `authority_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_authority`
--

INSERT INTO `user_authority` (`user_id`, `authority_name`) VALUES
(1, 'ROLE_ADMIN'),
(8, 'ROLE_USER'),
(9, 'ROLE_USER'),
(10, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_search`
--

CREATE TABLE `user_search` (
  `id` bigint NOT NULL,
  `anonymus_code` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `search` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `random_key` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ngay_search` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_search`
--

INSERT INTO `user_search` (`id`, `anonymus_code`, `search`, `user_id`, `random_key`, `ngay_search`) VALUES
(6, NULL, 'tượng', NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(8, NULL, 'đèn ngủ', NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(9, NULL, 'tượng', NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(10, NULL, 'trứng', NULL, '8XKNNZhbdJRw0', '2023-04-27'),
(11, NULL, 'đền ngủ', NULL, 'QKSrHSmZva3sE', '2023-04-27'),
(12, NULL, 'đèn gốm', NULL, 'QKSrHSmZva3sE', '2023-04-27'),
(13, NULL, 'đèn', NULL, 'QKSrHSmZva3sE', '2023-04-27');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `authority`
--
ALTER TABLE `authority`
  ADD PRIMARY KEY (`name`);

--
-- Chỉ mục cho bảng `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKm1rmnfcvq5mk26li4lit88pc5` (`product_id`),
  ADD KEY `FK8kcum44fvpupyw6f5baccx25c` (`user_id`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `detail_invoice`
--
ALTER TABLE `detail_invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKmt3tg7l0sp2hj0hyrglrmlbxr` (`invoice_id`),
  ADD KEY `FKkbo9acylcqjtmct3xwdhhvwws` (`product_id`);

--
-- Chỉ mục cho bảng `history_pay`
--
ALTER TABLE `history_pay`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3uqapx8urdm829chr0p30d0y2` (`invoice_id`);

--
-- Chỉ mục cho bảng `image_product`
--
ALTER TABLE `image_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKml4177k7ufupebm7e4wgmvpnj` (`product_id`);

--
-- Chỉ mục cho bảng `import_order`
--
ALTER TABLE `import_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrk6camethxctbi1n3nwng37wg` (`product`);

--
-- Chỉ mục cho bảng `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK565gfwe9qo89ii7rfhmox8jtb` (`status_in_id`),
  ADD KEY `FKjunvl5maki3unqdvljk31kns3` (`user_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`),
  ADD KEY `FKkvo9x5wjqpf8i48bksqoqujue` (`trademark_id`);

--
-- Chỉ mục cho bảng `product_view`
--
ALTER TABLE `product_view`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKikotonb2is7lx3p2b2f40bkqv` (`product_id`),
  ADD KEY `FK6ucxs616bqif3n7orevcsj0fd` (`user_id`);

--
-- Chỉ mục cho bảng `status_in`
--
ALTER TABLE `status_in`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `trade_mark`
--
ALTER TABLE `trade_mark`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_authority`
--
ALTER TABLE `user_authority`
  ADD PRIMARY KEY (`user_id`,`authority_name`),
  ADD KEY `FK6ktglpl5mjosa283rvken2py5` (`authority_name`);

--
-- Chỉ mục cho bảng `user_search`
--
ALTER TABLE `user_search`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4mqd8u72pdurfird828bmmp7v` (`user_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `blog`
--
ALTER TABLE `blog`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `detail_invoice`
--
ALTER TABLE `detail_invoice`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `history_pay`
--
ALTER TABLE `history_pay`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `image_product`
--
ALTER TABLE `image_product`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT cho bảng `import_order`
--
ALTER TABLE `import_order`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `invoice`
--
ALTER TABLE `invoice`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `product_view`
--
ALTER TABLE `product_view`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `status_in`
--
ALTER TABLE `status_in`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `trade_mark`
--
ALTER TABLE `trade_mark`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `user_search`
--
ALTER TABLE `user_search`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `FK8kcum44fvpupyw6f5baccx25c` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKm1rmnfcvq5mk26li4lit88pc5` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `detail_invoice`
--
ALTER TABLE `detail_invoice`
  ADD CONSTRAINT `FKkbo9acylcqjtmct3xwdhhvwws` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FKmt3tg7l0sp2hj0hyrglrmlbxr` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`);

--
-- Các ràng buộc cho bảng `history_pay`
--
ALTER TABLE `history_pay`
  ADD CONSTRAINT `FK3uqapx8urdm829chr0p30d0y2` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`);

--
-- Các ràng buộc cho bảng `image_product`
--
ALTER TABLE `image_product`
  ADD CONSTRAINT `FKml4177k7ufupebm7e4wgmvpnj` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `import_order`
--
ALTER TABLE `import_order`
  ADD CONSTRAINT `FKrk6camethxctbi1n3nwng37wg` FOREIGN KEY (`product`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `invoice`
--
ALTER TABLE `invoice`
  ADD CONSTRAINT `FK565gfwe9qo89ii7rfhmox8jtb` FOREIGN KEY (`status_in_id`) REFERENCES `status_in` (`id`),
  ADD CONSTRAINT `FKjunvl5maki3unqdvljk31kns3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `FKkvo9x5wjqpf8i48bksqoqujue` FOREIGN KEY (`trademark_id`) REFERENCES `trade_mark` (`id`);

--
-- Các ràng buộc cho bảng `product_view`
--
ALTER TABLE `product_view`
  ADD CONSTRAINT `FK6ucxs616bqif3n7orevcsj0fd` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKikotonb2is7lx3p2b2f40bkqv` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `user_authority`
--
ALTER TABLE `user_authority`
  ADD CONSTRAINT `FK6ktglpl5mjosa283rvken2py5` FOREIGN KEY (`authority_name`) REFERENCES `authority` (`name`),
  ADD CONSTRAINT `FKpqlsjpkybgos9w2svcri7j8xy` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `user_search`
--
ALTER TABLE `user_search`
  ADD CONSTRAINT `FK4mqd8u72pdurfird828bmmp7v` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
