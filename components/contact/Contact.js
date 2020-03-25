import UseAnimations from 'react-useanimations'

const Contact = (props) => (
  <div id={props.id} className="px-8 pb-8">
    <h1 className="heading text-4xl font-extrabold w-screen max-w-full mb-4">
      contact
    </h1>
    <div>
      <div className="text-3xl font-extrabold">
        want to reach out? feel free to contact me right here.
      </div>
      <UseAnimations className="block mx-auto my-8" animationKey="arrowDown" size={56} />
      <a href="mailto:manuel@hoelzl.dev">
        <button className="block my-8 mx-auto marked text-3xl focus:outline-none px-4 font-bold shadow-project">
          <span className="link link-white">
            send e-mail
        </span>
        </button>
      </a>
    </div>
  </div>
)

export default Contact