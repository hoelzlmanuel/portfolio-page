import Header from './Header'

const Layout = props => (
  <div className="max-w-screen-xl m-auto">
    <Header />
    {props.children}
  </div>
)

export default Layout