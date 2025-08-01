import { useState } from "react";

const NewsPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  // Data berita dummy yang realistis
  const newsData = [
    {
      id: 1,
      title: "Program Penanaman 10.000 Pohon di Jakarta Selatan Dimulai",
      excerpt:
        "Dinas Pertamanan dan Hutan Kota DKI Jakarta memulai program massal penanaman pohon untuk meningkatkan kualitas udara di ibu kota.",
      content:
        "Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta resmi memulai program penanaman 10.000 pohon di wilayah Jakarta Selatan. Program ini merupakan bagian dari upaya pemerintah provinsi untuk meningkatkan tutupan hijau dan kualitas udara di ibu kota. Pohon yang ditanam meliputi berbagai jenis seperti mahoni, trembesi, dan angsana yang telah terbukti efektif dalam menyerap polutan udara.",
      image:
        "https://i.pinimg.com/1200x/f8/1c/83/f81c839d8e5f53dee398b2cfdb136c47.jpg",
      author: "Tim Redaksi",
      date: "2024-12-20",
      category: "program",
      tags: ["penanaman", "pohon", "lingkungan", "jakarta"],
      readTime: "5 menit",
    },
    {
      id: 2,
      title: "Taman Menteng Raih Penghargaan Taman Terbaik Se-Asia Tenggara",
      excerpt:
        "Taman Menteng berhasil meraih penghargaan sebagai taman kota terbaik se-Asia Tenggara berkat inovasi konsep ramah lingkungan.",
      content:
        "Jakarta - Taman Menteng yang dikelola oleh Dinas Pertamanan dan Hutan Kota DKI Jakarta berhasil meraih penghargaan bergengsi sebagai taman kota terbaik se-Asia Tenggara. Penghargaan ini diberikan atas inovasi konsep taman yang menggabungkan teknologi modern dengan kelestarian lingkungan. Taman ini dilengkapi dengan sistem irigasi otomatis, area rekreasi keluarga, dan fasilitas olahraga yang lengkap.",
      image:
        "https://i.pinimg.com/736x/db/03/ee/db03ee38babbb163567aa0397e0b26a4.jpg",
      author: "Sarah Wijaya",
      date: "2024-12-18",
      category: "prestasi",
      tags: ["penghargaan", "taman", "menteng", "inovasi"],
      readTime: "4 menit",
    },
    {
      id: 3,
      title:
        "Kebijakan Baru: Izin Pemakaman Digital Mulai Berlaku Januari 2025",
      excerpt:
        "Sistem perizinan pemakaman digital akan segera diimplementasikan untuk mempermudah masyarakat dalam mengurus administrasi pemakaman.",
      content:
        "Jakarta - Mulai Januari 2025, Dinas Pertamanan dan Hutan Kota DKI Jakarta akan menerapkan sistem perizinan pemakaman digital. Sistem ini memungkinkan masyarakat untuk mengurus izin pemakaman secara online tanpa perlu datang langsung ke kantor dinas. Fitur-fitur yang tersedia meliputi pengajuan izin, pembayaran retribusi, dan tracking status permohonan secara real-time.",
      image:
        "https://i.pinimg.com/1200x/04/ed/94/04ed94c06441b7316ab76b1cb8a9e77b.jpg",
      author: "Ahmad Rizki",
      date: "2024-12-15",
      category: "kebijakan",
      tags: ["digital", "perizinan", "pemakaman", "online"],
      readTime: "6 menit",
    },
    {
      id: 4,
      title: "Festival Bunga Tahunan Jakarta 2024 Siap Digelar di Monas",
      excerpt:
        "Festival bunga tahunan Jakarta akan menampilkan berbagai jenis bunga langka dan eksotis dari seluruh nusantara.",
      content:
        "Jakarta - Festival Bunga Tahunan Jakarta 2024 akan diselenggarakan di area Monas pada 25-31 Desember 2024. Acara ini menampilkan lebih dari 500 jenis bunga langka dan eksotis dari berbagai daerah di Indonesia. Pengunjung dapat menikmati pameran bunga, workshop berkebun, dan kompetisi fotografi dengan tema 'Keindahan Alam Jakarta'.",
      image:
        "https://i.pinimg.com/1200x/b4/29/ff/b429ff88a01edd815809e9c9012f9744.jpg",
      author: "Lisa Pratiwi",
      date: "2024-12-12",
      category: "acara",
      tags: ["festival", "bunga", "monas", "jakarta"],
      readTime: "3 menit",
    },
    {
      id: 5,
      title:
        "Teknologi AI Digunakan untuk Monitoring Kesehatan Pohon di Jakarta",
      excerpt:
        "Inovasi terbaru menggunakan kecerdasan buatan untuk memantau kondisi kesehatan pohon-pohon di seluruh Jakarta secara real-time.",
      content:
        "Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta mengimplementasikan teknologi Artificial Intelligence (AI) untuk monitoring kesehatan pohon di seluruh wilayah Jakarta. Sistem ini dapat mendeteksi penyakit pohon, tingkat stress, dan prediksi umur pohon dengan akurasi tinggi. Teknologi ini membantu petugas dalam melakukan perawatan preventif dan mengurangi risiko pohon tumbang.",
      image:
        "https://i.pinimg.com/736x/e1/c0/e7/e1c0e7167388a7e6156f9b4193fcefcf.jpg",
      author: "Dr. Bambang Sutrisno",
      date: "2024-12-10",
      category: "teknologi",
      tags: ["AI", "teknologi", "monitoring", "pohon"],
      readTime: "7 menit",
    },
    {
      id: 6,
      title: "Kolaborasi dengan Komunitas untuk Pengelolaan Taman Lingkungan",
      excerpt:
        "Program kemitraan dengan komunitas lokal untuk pengelolaan dan perawatan taman-taman lingkungan di Jakarta.",
      content:
        "Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta meluncurkan program kolaborasi dengan berbagai komunitas lokal untuk pengelolaan taman lingkungan. Program 'Jakarta Hijau Bersama' ini melibatkan 50 komunitas yang tersebar di lima wilayah Jakarta. Setiap komunitas akan bertanggung jawab dalam perawatan, pemeliharaan, dan pengembangan kreativitas di taman-taman sekitar mereka.",
      image:
        "https://i.pinimg.com/1200x/56/02/8e/56028ea8ac3dabc5b744c88669966150.jpg",
      author: "Rina Marlina",
      date: "2024-12-08",
      category: "komunitas",
      tags: ["kolaborasi", "komunitas", "taman", "partisipasi"],
      readTime: "5 menit",
    },
    {
      id: 7,
      title: "Hutan Kota Srengseng Kembali Dibuka untuk Publik",
      excerpt:
        "Setelah renovasi selama 6 bulan, Hutan Kota Srengseng kembali dibuka dengan fasilitas yang lebih lengkap dan modern.",
      content:
        "Jakarta - Hutan Kota Srengseng resmi dibuka kembali untuk publik setelah menjalani renovasi besar-besaran selama 6 bulan. Renovasi ini mencakup perbaikan jalur tracking, penambahan gazebo, area playground anak, dan fasilitas toilet yang lebih bersih. Hutan kota seluas 15 hektar ini juga dilengkapi dengan papan informasi digital dan sistem keamanan CCTV untuk kenyamanan pengunjung.",
      image:
        "https://i.pinimg.com/736x/19/72/8a/19728a39a4361e274f0c3cfe1b38bcb5.jpg",
      author: "Yudi Hermawan",
      date: "2024-12-05",
      category: "fasilitas",
      tags: ["hutan kota", "srengseng", "renovasi", "fasilitas"],
      readTime: "4 menit",
    },
    {
      id: 8,
      title: "Workshop Edukasi Lingkungan untuk Siswa SD se-Jakarta",
      excerpt:
        "Program edukasi lingkungan untuk meningkatkan kesadaran siswa sekolah dasar tentang pentingnya menjaga kelestarian alam.",
      content:
        "Jakarta - Dinas Pertamanan dan Hutan Kota DKI Jakarta menggelar workshop edukasi lingkungan untuk siswa SD se-Jakarta. Program 'Generasi Hijau Jakarta' ini bertujuan mengenalkan pentingnya kelestarian lingkungan sejak dini. Materi workshop meliputi cara menanam, merawat tanaman, pengelolaan sampah, dan pemahaman ekosistem. Hingga saat ini, lebih dari 10.000 siswa telah mengikuti program ini.",
      image:
        "https://i.pinimg.com/736x/62/21/15/622115c29ee38c690bd897f4e85d230f.jpg",
      author: "Sari Indrawati",
      date: "2024-12-03",
      category: "edukasi",
      tags: ["workshop", "edukasi", "siswa", "lingkungan"],
      readTime: "5 menit",
    },
  ];

  const categories = [
    { id: "all", name: "Semua Berita", count: newsData.length },
    {
      id: "program",
      name: "Program Dinas",
      count: newsData.filter((n) => n.category === "program").length,
    },
    {
      id: "prestasi",
      name: "Prestasi",
      count: newsData.filter((n) => n.category === "prestasi").length,
    },
    {
      id: "kebijakan",
      name: "Kebijakan",
      count: newsData.filter((n) => n.category === "kebijakan").length,
    },
    {
      id: "acara",
      name: "Acara",
      count: newsData.filter((n) => n.category === "acara").length,
    },
    {
      id: "teknologi",
      name: "Teknologi",
      count: newsData.filter((n) => n.category === "teknologi").length,
    },
    {
      id: "komunitas",
      name: "Komunitas",
      count: newsData.filter((n) => n.category === "komunitas").length,
    },
    {
      id: "fasilitas",
      name: "Fasilitas",
      count: newsData.filter((n) => n.category === "fasilitas").length,
    },
    {
      id: "edukasi",
      name: "Edukasi",
      count: newsData.filter((n) => n.category === "edukasi").length,
    },
  ];

  // Filter berita berdasarkan kategori dan pencarian
  const filteredNews = newsData.filter((news) => {
    const matchesCategory =
      selectedCategory === "all" || news.category === selectedCategory;
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="Cari berita, tag, atau kata kunci..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-200"
                }`}
              >
                {category.name}
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Trending News Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🔥 Berita Terkini
            </h2>
            <div className="relative">
              <div
                className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
                id="trending-container"
                style={{ scrollBehavior: "smooth" }}
              >
                {filteredNews.slice(0, 6).map((news) => (
                  <div
                    key={news.id}
                    className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    onClick={() => onNavigate(`/news-detail/${news.id}`)}
                  >
                    <div className="relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          TRENDING
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {news.readTime}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{news.author}</span>
                        <span>
                          {new Date(news.date).toLocaleDateString("id-ID")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll indicators */}
              <button
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10"
                onClick={() => {
                  const container =
                    document.getElementById("trending-container");
                  container.scrollLeft -= 320;
                }}
              >
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer z-10"
                onClick={() => {
                  const container =
                    document.getElementById("trending-container");
                  container.scrollLeft += 320;
                }}
              >
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* All News Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📰 Semua Berita
          </h2>
        </div>

        {/* News Grid */}
        {currentNews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentNews.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {categories.find((cat) => cat.id === news.category)
                          ?.name || news.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{formatDate(news.date)}</span>
                      <span className="mx-2">•</span>
                      <span>{news.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{news.author}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {news.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate(`/news-detail/${news.id}`)}
                      className="text-green-600 hover:text-green-800 font-medium flex items-center transition-colors"
                    >
                      Baca Selengkapnya
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Sebelumnya
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-2 text-sm rounded-md ${
                      currentPage === index + 1
                        ? "bg-green-600 text-white"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Selanjutnya →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <svg
                className="mx-auto h-12 w-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.877 2.172M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Tidak ada berita ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah kata kunci pencarian atau pilih kategori yang berbeda.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
