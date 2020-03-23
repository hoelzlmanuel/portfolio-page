const Volunteering = (props) => (
  <div className="text-lg">
    <div className="font-bold text-xl mb-2">{props.name}</div>
    <div className="mb-2">{props.role}</div>
    <div className="italic text-base">{props.time}</div>
  </div>
)

export default Volunteering