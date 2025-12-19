export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 absolute top-0 w-full z-10 bg-black/40 backdrop-blur-md">

      <div className="font-bold tracking-wider">
        DHRUVA <span className="block text-xs font-light">ASTRONOMY CLUB</span>
      </div>

      <ul className="flex gap-8 text-sm uppercase">
        <li>Home</li>
        <li>Events</li>
        <li>Podcast</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
