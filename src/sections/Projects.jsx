import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Kongban",
    description:
      "Inspirasinya dari soal testing sebagai frontend developer yang tugasnya buat aplikasi kanban board, tapi hanya halaman kanban boardnya saja. Aku coba inisiatif buat coba kembangin dari mulai buat desain UI-nya terus implementasi jadi aplikasi penuh. Oh iyah, aku buatnya pake Typescript, React terus dikombinasikan dengan TailwindCSS.",
    image: "/projects/kongban.png",
    tags: [
      "Figma",
      "UI Design",
      "ReactJS",
      "TypeScript",
      "TailwindCSS",
      "Frontend",
    ],
    link: "https://www.figma.com/design/kpKMiI5JrF8UB4iD7r0J2I/MY-KANBAN?m=auto&t=DjibQ9jcXZ2m3YzJ-6",
  },
  {
    title: "DilanRentCar website",
    description:
      "Aku ditugasin buat website katalog rental mobil, dalam proyek ini aku tuh di ingkari janji. Giliran belum jadi di suruh cepet, begitu udah jadi malahan nggak ada respek atau apresiasi apapun. Udah gitu janjinya mau dibayar tapi sampe sekarang nggak ada berita sama sekali (orangnya ilang malahan wkwkwk). Tapi nggak apa - apa, jadiin pelajaran aja supaya lebih profesional dan teliti lagi buat ambil proyekan",
    image: "/projects/project3.jpg",
    tags: ["JavaScript", "CSS", "Frontend"],
    link: "#",
  },
  {
    title: "Behind Rail Studio",
    description:
      "Aku bantu temen, btw temenku tuh ngerintis buka jasa develop produk digital. Biar gampang dikenal sama orang lain beliau berencana untuk membangun website Company Profile. Aku menawarkan seorang diri untuk mencoba ngembangin websitenya, itung - itung belajar biar jadi profesional hehe :)",
    image: "/projects/brskompro.png",
    tags: ["Figma", "UI Design", "Frontend", "TypeScript", "TailwindCSS", "Company Profile", "Website UI"],
    link: "https://www.figma.com/design/71a0ZD4jkxs7h6Q7iyqmP5/brs?node-id=42-272&t=JK81fr19hSKm57Go-1",
  },
  {
    title: "Urbansolv Creative Company Profile",
    description:
      "Salah satu tugas aku waktu magang diperintahin buat Desain UI Company Profile untuk devisi kreatif dari Urbansolv. Urbansolv bukan cuman tentang geospatial aja loh, tapi juga merintis jasa kreatif juga. Beberapa jasa yang ditawarkannya adalah pembuatan website, event organizer, pembuatan grafis desain, editing video, copy writer dan pembuatan UI/UX Desain juga.",
    image: "/projects/urbansolvcreative.png",
    tags: ["Figma", "UI Design", "Company Profile", "Monitoring"],
    link: "https://www.figma.com/design/fjujXWDZP1LUaBzehZy0Qd/NOMOR1?node-id=32-227&t=XXDvdf6O8JkLykza-1",
  },
  {
    title: "Cover Laporan Keuangan Konsolidasian PGN Solution",
    description:
      "Bantuin sodara buat design cover buku laporan keuangan dari PGN Solution, sebenernya ini tuh sayembara dikantornya (ada yang lomba poster, cover buku, bahkan buat design bannernya juga). Biasa lah yah kalo lomba kan ada hadiahnya siapa yang menang dan bagus, tapi sayangnya aku gak dapet wkwkwk. Tapi masih sukur sih designnya juga ke pake akhirnya",
    image: "/projects/pgncover.png",
    tags: ["Figma", "Cover Design"],
    link: "https://www.figma.com/design/JD2FtXLzw6LTDSIeNhIpUa/Cover-1?node-id=0-1&t=Y1gkzRevxZqlDyel-1",
  },
  {
    title: "CENA Bandung",
    description:
      "Proyek ini adalah aplikasi sistem informasi data Geospatial berbasis website guna untuk memonitoring suatu keadaan distrik atau kota. Kurang lebih data yang didapat adalah persentase mobilitas suatu distrik, infrastuktur publik, dan transportasi. Aplikasi internal milik Urbansolv",
    image: "/projects/cenabandung.png",
    tags: ["Figma", "UI Design" , "Website UI", "Monitoring"],
    link: "#",
  },
  {
    title: "iGet",
    description:
      "Proyek ini adalah aplikasi pencari data Geospatial yang berbasis prompting AI yang nantinya pengguna akan mendapatkan kumpulan data geologi berbagai daerah bahkan pulau.",
    image: "/projects/iget.png",
    tags: ["Figma", "UI Design" , "Website UI"],
    link: "https://www.figma.com/design/QMVVYTyIR3VC0u2VPI7mKZ/iget?node-id=62-19&t=vuzdZJUm7AUfxraW-1",
  },
  {
    title: "SCCIC Startup Competition",
    description:
      "SCCIC pernah ngadain kompetisi startup yang bergerak dibidang Smart City yang berkolaborasi dengan ICESCO berbasis Internasional.",
    image: "/projects/sccicstartup.png",
    tags: ["Figma", "UI Design", "Landing Page" , "Website UI"],
    link: "https://www.figma.com/design/B5Je3U6imQZbaphtuYm3xX/SCCIC-STARTUP-COMPETITION-2024--ICESCO-?node-id=24-431&t=bwJuc8eiH35hXwpF-1",
  },
  {
    title: "Teritorial Monitoring",
    description:
      "Aplikasi internal milik Urbansolv untuk melakukan monitoring suatu keadaan keamanan dalam kota, meliputi jalan raya serta area publik terbuka.",
    image: "/projects/teritorialmonitoring.png",
    tags: ["Figma", "UI Design", "Monitoring" , "Website UI"],
    link: "https://www.figma.com/design/4DrONidevQKPjWMoIS7hPf/Teritorial-Monitoring?node-id=40-960&t=zAmp0c8gVKiseghk-1",
  },
  {
    title: "Cena Space Pos",
    description:
      "Urbansolv punya aplikasi monitoring yang disebut CENA. Dalam proyek ini bekerja sama dengan aset pos, guna memonitoring aset bangunan gedung yang dimiliki oleh pos.",
    image: "/projects/cenaspacepos.png",
    tags: ["Figma", "UI Design", "Monitoring" , "Website UI"],
    link: "https://www.figma.com/design/4nULAcEUJfD5QybjTFtGgU/pos?node-id=0-1&t=TnDWyGzpw0VQik12-1",
  },
  {
    title: "Smart Building Dashboard",
    description:
      "Aplikasi internal milik Urbansolv untuk memonitoring suatu smart building ini guna mendapatkan informasi seputar ketersediaan dalam gedung. Diantaranya ketersediaan listrik, kualitas air, kelembapan ruangan pada gedung, human tracking.",
    image: "/projects/dashboardsmartbuilding.png",
    tags: ["Figma", "UI Design", "Dashboard", , "Website UI"],
    link: "#",
  },
  {
    title: "Smart Building Water Monitoring",
    description:
      "Aplikasi internal Urbansolv ini guna untuk memonitoring khusus tentang kualitas kelayakan air yang ada di gedung. Masih terkait dengan CENA juga yang hanya khusus digunakan ruang lingkup Urbansolv saja. ",
    image: "/projects/smartbuildingwater.png",
    tags: ["Figma", "UI Design" , "Website UI"],
    link: "#",
  },
  {
    title: "WP0 Dashboard",
    description:
      "Aku ditugasin buat dashboard dari WP0. Jadi ini tuh dashboard 'core' dari semua proyek startup yang ada dibawah naungan SCCIC ITB, salah satunya yaitu 'WP3' termasuk dalam produk digitalnya. Aplikasi ini tidak publik atau hanya digunakan oleh ruang lingkup Urbansolv saja.",
    image: "/projects/wp0dashboard.png",
    tags: ["Figma", "UI Design" , "Website UI"],
    link: "https://www.figma.com/design/P1LhCPQJDeN3eoO1OUn7sw/Untitled?node-id=1-2&t=57oUQKSb5SKG37lx-1",
  },
  {
    title: "NTU Landing Page",
    description:
      "Landing page ini di buat untuk website tentang proyek apa saya yang terkandung dalam WP, termasuk 4 startup milik SCCIC ITB yang bergerak di bidang yang berbeda. Salah satunya adalah WP3 yang meneliti tentang kualitas kelauyakan air siap pakai untuk penggunaan kamar bandi dan air konsumsi.",
    image: "/projects/ntulanding.png",
    tags: ["Figma", "UI Design" , "Website UI", , "Landing Page"],
    link: "https://www.figma.com/design/UZ3oNJgqVTHBmP72u2P7QV/wp?node-id=1008-1491&t=41CrShR6ZTFAWCMY-1",
  },
  {
    title: "WP3",
    description:
      "Proyek ini dibuat guna untuk memonitoring kualitas ketersediaan air untuk Institut Teknologi Bandung Jatinangor. Urbansolv juga membuat jasa digital twin 3D untuk alat pengukur kualitas air berbasis web, serta dashboard untuk memonitoring ketersediaan. Web ini dibuat untuk para peneliti mahasiswa S3nya di ITB.",
    image: "/projects/wp3.png",
    tags: ["Figma", "UI Design", "Website UI"],
    link: "https://www.figma.com/design/UZ3oNJgqVTHBmP72u2P7QV/wp?node-id=1008-1491&t=41CrShR6ZTFAWCMY-1",
  },
  {
    title: "Urbansolv Geospatial Company Profile",
    description:
      "Hari pertama waktu magang di Urbansolv, aku dikasih tugas untuk bangun UI Desain Company Profile tentang website Geospatial milik Urbansolv. Jadi Urbansolv itu startup rintisan yang bergerak di bidang geospatial, yang salah satu jasanya membangun digital twin.",
    image: "/projects/urbansolvkompro.png",
    tags: ["Figma", "UI Design", "Website UI"],
    link: "https://www.figma.com/design/XbPgUWNvr1FgfxuGuVmgtA/Untitled?node-id=0-1&t=6zMTO6Aw0pK0nkFU-1",
  },
  {
    title: "Wisata Sekeliling",
    description:
      "Design ini dibuat untuk kebutuhan sidang semester 7 yang mana ditugaskan untuk pengembangkan dan penelitian aplikasi wisata. Secara singkatnya proyek design ini diperuntukan mencari destinasi wisata, akomodasi yang tersedia untuk berwisata, travelling, pembelian tiket dan makanan, hingga pemesanan hotel.",
    image: "/projects/wisatamobile.png",
    tags: ["Figma", "UI Design", "Mobile Apps"],
    link: "#",
  },
  {
    title: "Kolecer Media Kreatif Company Profile",
    description:
      "Hasil Desain yang dibuat kali ini untuk CV. Kolecer Media Kreatif, waktu aku menjalani program magang dari kampus tepat sewaktu semester 6 di perkuliahan. Kebetulan banget aku di pilih jadi seorang UI/UX Design, waktu itu kasusnya perusahaan ini belum punya Website Company Profile.",
    image: "/projects/kolecermediakreatif.png",
    tags: ["Figma", "UI Design", "Website UI"],
    link: "https://www.figma.com/design/eucciD5EwhiXsuz4uDDgN2/KolecerMediaKreatif?node-id=0-1&t=de0oiZoVrpSizFzl-1",
  },
  {
    title: "Sokes",
    description:
      "Design ini ditujukan hanya untuk lomba konsep UI/UX Hackathon, bertemakan kesehatan posyandu di suatu daerah perkampungan. Penyelenggara lomba ini dari kampus UGM yang bekerjasama dengan Hackathon.",
    image: "/projects/sokes.png",
    tags: ["Figma", "UI Design", "Website UI"],
    link: "#",
  },
  {
    title: "DenMin Sender",
    description:
      "UI Design untuk aplikasi mobile Android dan iOS yang dibuild menggunakan flutter yang diperuntukan tugas kuliah research method, kebetulan dapet undian aplikasi tracking untuk pengiriman barang dan paket dari dosen.",
    image: "/projects/denminsender.png",
    tags: ["Figma", "UI Design", "Mobile Apps"],
    link: "#",
  },
  {
    title: "TIKomDik Disdik Jabar Company Profile",
    description:
      "Pertama kali aku coba buat Desain UI untuk web Company Profilenya TIKomDik Disdik Jabar. Salah satu temenku tuh seorang fullstack webdev dan waktu itu aku belum pernah coba buat desain UI untuk website, sebagai pembelajaran ini kali pertamanya aku belajar gimana caranya untuk buat desain untuk web.",
    image: "/projects/tikomdikweb.png",
    tags: ["Figma", "UI Design", "Redesign", "Website UI"],
    link: "https://www.figma.com/design/G1QC0nicQV3V2IWvLZGprX/v1?node-id=1-5&t=9nBfHREopdV0wu3w-1",
  },
  {
    title: "Presensi Absen TIKomDik Disdik Jabar",
    description:
      "Ini pertama kali aku buat Desain UI untuk mobile apps, sebelumnya aku belum pernah belajar atau coba buat desain UI. Tapi salah satu temen smp ngasih kepercayaan bahwa aku tuh bisa ngerjainnya, dari sini aku mulai menerapkan 'learn by doing' dengan seiring berjalan waktu. Aplikasi ini udah di update beberapa kali oleh internal, jadi aku putuskan buat ulang desainnya. Btw versi asli desainnya di buat dengan Adobe XD, jadi aku kembangin lagi desainnya dengan versi akhir dari aplikasinya. ",
    image: "/projects/presensitikomdik.png",
    tags: ["Figma", "UI Design", "Mobile Apps UI"],
    link: "https://www.figma.com/design/i5BjSQ8NHuA3e9k08QT81x/PRESENSIABSEN?node-id=12-274&t=mILST6JZ3vmRGtUm-1",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg */}
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3cl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Yang Pernah Aku Kerjain
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foregroundfore">
            Proyek yang
            <span className="font-serif italic font-normal text-primary">
              {" "}
              ngebuat jadi belajar.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Beberapa proyek pilihan yang sudah aku kerjain, bermodalkan{" "}
            <i>learn by doing</i>
          </p>
        </div>
        {/* project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title + "YNAG UDAH DI KERJAIN"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" />
                {/* overlay link */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="_blank"
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
