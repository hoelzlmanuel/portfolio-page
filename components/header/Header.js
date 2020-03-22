import MenuItems from './MenuItems'
import withWindowDimensions from '../utilities/withWindowsDimensions'

class Header extends React.Component {
  state = {
    showMenu: false
  }

  toggleMenuVisibility = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className={`${this.state.showMenu && this.props.screenNotLarge ? "text-white" : "text-black"}`}>
        <nav className={`flex items-center justify-between flex-wrap py-6 pl-6 ${this.props.screenNotLarge && this.state.showMenu && "bg-black"} ${this.props.screenNotLarge && "pr-6"}`}>
          <div className="flex items-center flex-shrink-0 mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span className="font-semibold text-xl tracking-tight">manuel@hoelzl.dev</span>
          </div>
          <div className="block lg:hidden" onClick={this.toggleMenuVisibility}>
            <button className={`flex items-center px-3 py-2 border rounded-full focus:outline-none ${this.state.showMenu ? "border-white" : "border-black hover:border-medium"}`}>
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>
          {this.state.showMenu && <MenuItems />}
          {/*TODO: find a pretty solution for this*/}
          {!this.props.screenNotLarge && !this.state.showMenu && this.toggleMenuVisibility()}
        </nav>
      </div>
    )
  }
}

export default withWindowDimensions(Header)
