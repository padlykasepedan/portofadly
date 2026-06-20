import { Button } from "@/components/Button";
import {
  ArrowDown,
  ArrowRight,
  AtSign,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

const tools = [
  "HTML",
  "React",
  "Tailwindcss",
  "Figma",
  "Photoshop",
  "JavaScript",
];

import { AnimatedBorderButton } from "../components/AnimatedButton";

export const Hero = () => {
  return (
    <section className="realtive min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0"></div>
      </div>
      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                UI/UX Designer
              </span>
            </div>
            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Nggak <span className="font-serif italic font-normal text-primary">Ribet</span>
                <br />
                Nggak{" "}
                <span className="font-serif italic font-normal text-primary">
                  Nyebelin.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Desainer UI/UX yang seneng banget reset dan diskusi bareng kamu. Aku
                percaya kalo desain bukan cuma bagus doang, tapi soal fungsinya
                yang kepake. Aku janji, bakalan fokusin hasil yang simpel dan
                nggak buat user berhenti cuma buat mikir "ini harus diapain?".
              </p>
            </div>
            {/* cta */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Karya aku <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton />
            </div>
            {/* sosmed */}
            <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
              <span className="text-sm text-muted-foreground">
                Sosmed aku:{" "}
              </span>
              {[
                { icon: Github, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: AtSign, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right column */}
          <div className="relative animate-fade-in animate-delay-300">
            {/* profile pic */}
            <div className="relative max-w-md mx-auto">
              <div className="relative glass rounded-3xl p-2">
                <img
                  src={`${import.meta.env.BASE_URL}/profile-photo.jpg`}
                  alt="POTO AING"
                  className="w-full aspec-[4/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        {/* skill section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Alat yang biasa dipake :
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...tools, ...tools].map((tools, idx) => (
                <div key={idx} className="flex-shirnk-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {tools}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
