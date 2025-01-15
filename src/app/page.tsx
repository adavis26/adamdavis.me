
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-gray-800">Adam Davis</a>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-gray-800">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="py-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">

          </p>
        </section>

        <section id="projects" className="py-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="bg-white shadow rounded p-4">
              <h3 className="text-lg font-bold mb-2">Project 1</h3>
              <p className="text-gray-700">Description of project 1.</p>
            </li>
            <li className="bg-white shadow rounded p-4">
              <h3 className="text-lg font-bold mb-2">Project 2</h3>
              <p className="text-gray-700">Description of project 2.</p>
            </li>
          </ul>
        </section>

        <section id="contact" >
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">Feel free to reach out to me at adam@example.com.</p>
        </section>
      </main>

      {/* <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2022 Adam Davis. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}
