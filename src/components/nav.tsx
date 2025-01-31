export default function Nav() {
  return <header>
    <nav className="flex items-center justify-between">
      <a href="/" className="md:text-4xl font-bold text-xl">Adam Davis</a>
      <ul className="flex text-sm md:text-base space-x-3">
        <li><a href="#greeting">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
}
