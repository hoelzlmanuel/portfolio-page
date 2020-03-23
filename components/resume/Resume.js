import WorkExperiences from './WorkExperiences'
import Educations from './Educations'
import Skills from './Skills'
import Tools from './Tools'
import Certificates from './Certificates'
import Volunteerings from './Volunteerings'

const Resume = () => (
  <div className="p-8">
    <div className="h-8 mb-4">
      <h1 id="projects" className="text-4xl font-extrabold w-screen max-w-full border-b-2 border-black leading-1">
        <span className="bg-white pr-4">
          résumé
      </span>
      </h1>
    </div>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <WorkExperiences />
      <Educations />
      <Skills />
      <Certificates />
      <Tools />
      <Volunteerings />
    </div>
  </div>
)

export default Resume