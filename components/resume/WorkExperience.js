const WorkExperience = (props) => (
  <div className="text-lg my-8">
    <div className="font-bold text-xl mb-2"><a target="_blank" href={`${props.link}`} className="link link-black">{props.employer}</a><embed className="ml-1 inline align-text-bottom mb-1" src="images/external-link.svg" /></div>
    <div className="mb-2">{props.jobTitle}</div>
    {
      props.description !== undefined && <div className="mb-2">{props.description}</div>
    }
    <div className="italic text-base">{props.time}</div>
  </div>
)

export default WorkExperience