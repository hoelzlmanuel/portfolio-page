import Project from './Project'

const Projects = (props) => (
  <div id={props.id} className="p-8">
    <div className="h-8 mb-4">
      <h1 className="text-4xl font-extrabold w-screen max-w-full border-b-2 border-black leading-1">
        <span className="bg-white pr-4">
          projects
      </span>
      </h1>
    </div>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <Project
        title='portfolio page'
        category='web development'
        year='2020'
        description='this is the description'
        image='curriculum.svg'
        technologies={['react', 'next.js', 'tailwindcss']}
      />
      <Project
        title='ecer competition'
        category='competition'
        year='2019'
        description='this is the description'
        image='robot.svg'
        technologies={['python', 'opencv', 'research']}
      />
    </div>
  </div>
)

export default Projects