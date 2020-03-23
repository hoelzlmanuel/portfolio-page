import UseAnimations from 'react-useanimations'

const Footer = () => (
  <div className="p-8 block border-t-2 border-black mx-8">
    <div className="h-10">
      <div>
        <div className="float-left flex">
          <UseAnimations className="mr-2" animationKey="github" />
          <UseAnimations className="ml-2" animationKey="linkedin" />
        </div>
      </div>
      <div className="float-right font-xs">
        website built with &#9829; by me &bull; <a>imprint</a>
      </div>
    </div>
    <div className="flex justify-center align-center">
      <div className="inline-block mx-auto w-auto">
        icons made by <span className="italic">prettycons</span> and <span className="italic">good ware</span> from <a href="www.flaticon.com">flaticon.com</a>
      </div>
    </div>
  </div >
)

export default Footer