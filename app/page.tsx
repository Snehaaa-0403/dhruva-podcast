import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PodcastOfWeek from "@/components/PodcastOfWeek";
import PodcastCard from "@/components/PodcastCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <PodcastOfWeek />

      <div className="grid grid-cols-2 gap-10 px-10 pb-20">
        <PodcastCard index="01." image="/images/mic-1.jpg" />
        <PodcastCard index="02." image="/images/mic-2.jpg" />
        <PodcastCard index="03." image="/images/mic-1.jpg" />
        <PodcastCard index="04." image="/images/mic-2.jpg" />
      </div>

      <Footer />
    </div>
  );
}



