const Project = props => (
  <div className="p-4 relative border-2 border-black rounded-xl text-lg">
    <div>{props.category} &bull; {props.year}</div>
    <h2 className="font-extrabold text-3xl">{props.title}</h2>
    <div>{props.description}</div>
    <div className="flex justify-between">
      <div className="inline">
        {
          props.technologies.map((technology, i) => <span key={`${props.title}${i}`}><span className="font-bold">{technology} </span> {i < props.technologies.length - 1 ? "| " : null}</span>)
        }
      </div>
      <div className="inline w-16 h-0"></div>
    </div>

    <embed className="absolute w-16 right-0 bottom-0 mr-2 mb-2"
        src={`images/${props.image}`}
      />
  </div>
)

export default Project