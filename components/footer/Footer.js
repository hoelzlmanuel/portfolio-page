import UseAnimations from 'react-useanimations'
import TextLoop from 'react-text-loop'
import Link from 'next/link'

const Footer = () => (
  <div className="p-8 block border-t-2 border-black mx-8 grid grid-cols-1 lg:grid-cols-3 gap-4">

    <div className="flex justify-center items-center lg:justify-start">
      <a className="inline" href="https://github.com/hoelzlmanuel">
        <UseAnimations className="mr-2" animationKey="github" />
      </a>
      <a className="inline" href="https://www.linkedin.com/in/hoelzlmanuel/">
        <UseAnimations className="ml-2" animationKey="linkedin" />
      </a>
    </div>

    <div className="text-center flex justify-center items-center">
      <div className="block self-center">
        website built with {
        <UseAnimations className="inline-block" size={16} animationKey="heart" />} by me &bull;
        <Link href="/imprint"><span className="font-bold inline-block link link-black link-b-3-px ml-1 cursor-pointer">imprint</span></Link>
      </div>
    </div>

    <div className="text-center">
      icons made by
      {" "}<TextLoop>
        <span>prettycons</span>
        <span>good ware</span>
      </TextLoop>{" "}
      from <a href="www.flaticon.com">flaticon.com</a>
    </div>
  </div >
)

export default Footer