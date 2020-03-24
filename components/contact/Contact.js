import UseAnimations from 'react-useanimations'

const Contact = (props) => (
  <div id={props.id} className="p-8">
    <div className="h-8 mb-4">
      <h1 className="text-4xl font-extrabold w-screen max-w-full border-b-2 border-black leading-1">
        <span className="bg-white pr-4">
          contact
      </span>
      </h1>
    </div>
    <div>
      <div className="text-3xl font-extrabold">
        want to reach out? feel free to contact me right here.
      </div>
      <UseAnimations className="block mx-auto my-8" animationKey="arrowDown" size={56} />
      <a href="mailto:manuel@hoelzl.dev">
        <button className="block my-8 mx-auto marked text-3xl focus:outline-none px-4 font-bold shadow-strong">
          <span className="link link-white link-b-035-rem">
            send e-mail
        </span>
        </button>
      </a>
    </div>
  </div>
)

export default Contact