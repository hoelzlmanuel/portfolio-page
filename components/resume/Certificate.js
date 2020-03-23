const Certificate = (props) => (
  <div className="text-lg">
    <div className="font-bold text-xl mb-2">{props.name}</div>
    <div className="mb-2">{props.institute}</div>
    <div className="italic text-base">{props.date} &bull; {props.expiration}</div>
  </div>
)

export default Certificate