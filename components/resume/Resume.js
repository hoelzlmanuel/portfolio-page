import WorkExperiences from './WorkExperiences'
import Educations from './Educations'
import Skills from './Skills'
import Tools from './Tools'
import Certificates from './Certificates'
import Volunteerings from './Volunteerings'

const Resume = (props) => (
  <div id={props.id} className="px-8 pb-8">
    <h1 className="heading text-4xl font-extrabold w-screen max-w-full mb-4">
      résumé
    </h1>
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