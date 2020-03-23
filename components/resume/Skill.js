const Skill = (props) => (
  <div className="text-lg">
    <div className="font-bold text-xl mb-2">{props.name}</div>
    <div>
      {
        props.skills.map((skill, i) => <div className="mb-1" key={`${skill}${i}`}>{skill}</div>)
      }
    </div>
  </div>
)

export default Skill