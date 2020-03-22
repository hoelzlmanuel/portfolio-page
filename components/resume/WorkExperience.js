const WorkExperience = (props) => (
  <div className="text-lg my-8">
    <div className="font-bold text-xl mb-2">{props.employer}</div>
    <div className="mb-2">{props.jobTitle}</div>
    {
      props.description !== undefined && <div className="mb-2">{props.description}</div>
    }
    <div className="italic text-base">{props.time}</div>
  </div>
)

export default WorkExperience