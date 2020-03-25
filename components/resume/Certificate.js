const Certificate = (props) => (
  <div className="text-lg">
    <div className="font-bold text-xl mb-2"><a target="_blank" href={`${props.link}`} className="link link-black">{props.name}</a><embed className="ml-1 inline align-text-bottom mb-1" src="images/external-link.svg" /></div>
    <div className="mb-2">{props.institute}</div>
    <div className="italic text-base">{props.date} &bull; {props.expiration}</div>
  </div>
)

export default Certificate