import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageByline from "@/components/PageByline";

/** Shared layout for policy pages (privacy, terms). */
const LegalLayout = ({ title, intro, children }: { title: string; intro: string; children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-4 lg:px-8 pt-32 pb-20 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>
      <PageByline className="mt-3" />
      <div className="mt-10 space-y-8 text-[15px] leading-7 text-muted-foreground [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-red-600 [&_a]:underline">
        {children}
      </div>
    </main>
    <Footer />
  </div>
);

export default LegalLayout;
