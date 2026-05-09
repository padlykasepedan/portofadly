import { Wrench, Users, PaintRoller, Unplug, } from "lucide-react";

const highlights = [
  {
    icon: Wrench,
    title: "Gaya aku bekerja",
    description:
      "Kebiasaan sering bawa buku tulis, buat nulisin apa aja yang udah di dapet dan apa yang akan dikerjain. soalnya aku pelupa",
  },
  {
    icon: Users,
    title: "Cara aku dapet ide",
    description:
      "Sering dapet ide dari opini temen sendiri di jadiin keyword riset dan juga sering dapet ide dari hasil karya orang lain. Tapi aku gak mau egois, aku bakal ngajuin banding juga ke temen setimku"
  },
  {
    icon: Unplug,
    title: "Bagaimana jika stuck",
    description:
      "Kalo stuck aku suka rehat dulu sejenak buat makan, main gitar atau catur, naikin mood dengan minum kopi, bahkan aku suka tinggal dulu buat tidur sebentar",
  },
  {
    icon: PaintRoller,
    title: "Warna kesukaan",
    description:
      "Soal warna kesukaan (yang bakalan digunain jadi warna utama produk desain) gimana dari komposisi suatu produknya atau ngikutin dari tema produk. Tapi kalo ditanya buat pribadi sih aku lebih suka warna pink 💕",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className=" space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Tentang aku
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
              Nggak kenal,
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                makannya kenalan.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Aku lulusan Teknik Informatika yang seneng banget ngerjain
                desain UI/UX. Dari teman masa sekolah dan kuliah banyak dapet
                review positif sampai-sampai memesan untuk desain UI produk
                digitalnya, sangat mendukung dan dapat kepercayaan untuk kasus
                pengembangan desain.
              </p>
              <p>
                Pertama kali tertarik dengan desain dari kelas 1 SMP, sempat ada
                lomba disekolah dengan pengalaman hasil yang buruk sampai
                dibully habis-habisan oleh teman sekelas. Dari kejadian itu
                sempat berpikir fungsi besar dari desain selain dilihat itu apa
                ? Dengan rasa ingin tahu yang besar, dari hasil banyak belajar
                tentang pembangunan dan pengembangan software berbasis web
                maupun mobile akhirnya terjawab apa fungsi dari suatu desain
                selain untuk dilihat.
              </p>
              <p>
                Pendekatan aku dengan desain yaitu menggabungkan fungsi suatu
                komponen dengan hasil riset dan diskusi terhadap desain dan
                pengalaman pengguna. Walaupun aku mengerjakan desain, aku nggak
                akan berhenti buat belajar dan coba untuk develop suatu produk
                digital dengan ngoding.
              </p>
              <p>
                Punya rasa kalo desain bagus itu nggak harus ribet. Sama karya
                lain, contohnya musik rock n roll juga begitu. Straight to the
                point, tapi punya karakter dan vibe yang kerasa.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 animate-fade-in animate-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>
          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
