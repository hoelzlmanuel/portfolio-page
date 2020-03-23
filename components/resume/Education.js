const Education = (props) => (
  <div className="text-lg my-8">
    <div className="font-bold text-xl mb-2">{props.institute}</div>
    <div className="mb-2">{props.major} {props.graduation !== undefined && <span>&bull;</span>} {props.graduation !== undefined && `${props.graduation}`}</div>
    <div className="italic text-base">{props.time}</div>
  </div>
)

export default Education