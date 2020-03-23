import Skill from './Skill'

const Skills = () => (
  <div>
    <h2 className="text-3xl font-extrabold mb-8">skills</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 col-gap-4 row-gap-8 mb-8">
      <Skill
        name="programming"
        skills={["java", "kotlin", "c", "python", "android"]}
      />
      <Skill 
        name="web development"
        skills={["react", "html5", "css3", "tailwindcss"]}
      />
      <Skill
        name="databases"
        skills={["sql", "microsoft sql server", "postgresql"]}
      />
    </div>
  </div>
)

export default Skills