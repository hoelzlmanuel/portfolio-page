const MenuItems = () => (
  <div className="w-full block relative flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-lg lg:flex-grow lg:absolute lg:right-0">
      <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 lg:hover:text-middle mr-16">
        projects
      </a>
      <a href="#resume" className="block mt-4 lg:inline-block lg:mt-0 lg:hover:text-middle mr-16">
        résumé
      </a>
      <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 lg:hover:text-middle mr-16">
        about
      </a>
      <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 lg:hover:text-middle mr-16">
        contact
      </a>
    </div>
  </div>
)

export default MenuItems