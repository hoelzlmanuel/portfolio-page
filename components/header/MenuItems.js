const MenuItems = () => (
  <div className="w-full block relative flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="lg:flex-grow lg:absolute lg:right-0">
      <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 mr-16">
        <span className="inline-block link link-white lg:link-black">about</span>
      </a>
      <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 mr-16">
        <span className="inline-block link link-white lg:link-black">projects</span>
      </a>
      <a href="#resume" className="block mt-4 lg:inline-block lg:mt-0 mr-16">
        <span className="inline-block link link-white lg:link-black">résumé</span>
      </a>
      <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 mr-16">
        <span className="inline-block link link-white lg:link-black">contact</span>
      </a>
    </div>
  </div>
)

export default MenuItems