import UseAnimations from 'react-useanimations'
import TextLoop from 'react-text-loop'
import Link from 'next/link'

const Footer = () => (
  <div className="p-8 block border-t-2 border-black mx-8 grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="flex justify-center items-center md:justify-start">
      <a className="inline" href="https://github.com/hoelzlmanuel">
        <UseAnimations className="mr-2" animationKey="github" />
      </a>
      <a className="inline" href="https://www.linkedin.com/in/hoelzlmanuel/">
        <UseAnimations className="ml-2" animationKey="linkedin" />
      </a>
      <a className="inline" href="https://codepen.io/hoelzlmanuel">
        <UseAnimations className="ml-2" animationKey="codepen" />
      </a>
    </div>

    <div className="text-center flex justify-center items-center md:justify-end">
      <div className="block self-center">
        website
        {" "}<TextLoop>
          <span>built</span>
          <span>designed</span>
          <span>created</span>
        </TextLoop>{" "}
        with
        {" "}{
          <UseAnimations className="inline-block" size={16} animationKey="heart" />
        }{" "}
        by me &bull;
        <Link href="/imprint"><span className="font-semibold link link-black ml-1 cursor-pointer">imprint</span></Link>
      </div>
    </div>

  </div >
)

export default Footer