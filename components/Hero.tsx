import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center px-10 pt-32"
      style={{ backgroundImage: "url('/images/stars-bg.jpg')" }}
    >
      <h1 className="text-7xl font-extrabold tracking-widest mb-10">
        PODC<span className="inline-block align-middle">🌕</span>ASTS
      </h1>

      <div className="space-y-8">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/mic-1.jpg"
            alt="Podcast mic"
            width={1200}
            height={500}
            className="object-cover h-[400px] w-full"
            priority
          />
        </div>

        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/images/mic-1.jpg"
            alt="Podcast mic"
            width={1200}
            height={500}
            className="object-cover h-[400px] w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

