const Education = (props) => (
  <div className="text-lg my-8">
    <div className="font-bold text-xl mb-2"><a target="_blank" href={`${props.link}`} className="inline-block link link-black link-b-3-px">{props.institute} </a><embed className="ml-1 inline align-text-bottom mb-1" src="images/external-link.svg" /></div>
    <div className="mb-2">{props.major} {props.graduation !== undefined && <span>&bull;</span>} {props.graduation !== undefined && `${props.graduation}`}</div>
    <div className="italic text-base">{props.time}</div>
  </div>
)

export default Education