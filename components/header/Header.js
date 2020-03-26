import MenuItems from './MenuItems'
import withWindowDimensions from '../utilities/withWindowsDimensions'
import Headscroll from 'react-headscroll'

class Header extends React.Component {
  state = {
    showMenu: false
  }

  toggleMenuVisibility = () => {
    this.setState((prevState) => {
      const prevScrollTop = document.documentElement.scrollTop
      if (prevState.showMenu) {

        console.log(prevState.scrollTop)
        document.documentElement.scrollTop = document.body.scrollTop = prevState.scrollTop
        document.body.style.overflow = "visible"
      } else {
        document.documentElement.scrollTop = 0
        document.body.style.overflow = "hidden"
      }
      return {
        showMenu: !prevState.showMenu,
        scrollTop: prevScrollTop
      }
    })
  }

  render() {
    if (this.props.screenNotLarge) {
      return (
        <div>
          <Headscroll
            fixed={true}
            offsettop={-100}
            upTolerance={2}
            downTolerance={2}
            position="top"
          >
            <div className="shadow-project bg-white">
              <nav className={`py-4 px-6 text-black ${this.state.showMenu && "bg-black text-white h-screen overflow-y-hidden"}`}>
                <div className="flex flex-shrink-0">
                  <div className="w-8 h-8 mr-2" onClick={this.toggleMenuVisibility}>
                    <img src={this.state.showMenu ? "images/logo-white.svg" : "images/logo.svg"} />
                  </div>
                  <span className="font-semibold text-2xl">manuel@hoelzl.dev</span>
                </div>
                <div className="text-2xl" onClick={this.toggleMenuVisibility}>
                  {this.state.showMenu && <MenuItems />}
                </div>
              </nav>
            </div>
          </Headscroll>
        </div>
      )
    } else {
      return (
        <div className="text-black">
          <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 mr-6">
              <embed className="w-8 h-8 inline align-middle mr-2 mb-1" src="images/logo.svg" />
              <span className="font-semibold text-xl">manuel@hoelzl.dev</span>
            </div>
            <MenuItems />
          </nav>
        </div>
      )
    }
  }
}

/*

          <div className="block hidden lg:hidden" onClick={this.toggleMenuVisibility}>
            <button className={`flex items-center px-3 py-2 border-2 rounded-full focus:outline-none shadow-lg ${this.state.showMenu ? "border-white" : "border-black hover:border-medium"}`}>
              <UseAnimations animationKey="menu4" />
            </button>
          </div>
          */

export default withWindowDimensions(Header)
