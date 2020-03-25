const Project = props => (
  <div className="flex flex-col p-4 relative border-black rounded-xl text-lg shadow-project">
    <div>{props.category} &bull; {props.year}</div>
    <h2 className="font-extrabold text-3xl">{props.title}</h2>
    <div className="h-full">{props.description}</div>
    <div className="flex justify-between">
      {
        (props.links !== undefined) &&
        <div className="my-2">
          <embed className="mr-1 inline align-middle mb-1" src="images/external-link.svg" />
          {
            props.links.map((entry, i) => (
              <span key={`${props.title}Link${i}`}><a className="font-bold link link-black" href={entry.link} target="_blank">{entry.name}</a> {i < props.links.length - 1 ? "| " : null}</span>
            )
            )
          }
        </div>
      }
    </div>
    <div className="flex justify-between">
      <div className="inline">
        {
          props.technologies.map((technology, i) => <span key={`${props.title}Technology${i}`}><span className="font-bold">{technology} </span> {i < props.technologies.length - 1 ? "| " : null}</span>)
        }
      </div>
    </div>
  </div>
)

export default Project