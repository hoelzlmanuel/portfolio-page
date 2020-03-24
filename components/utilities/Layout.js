import Footer from '../footer/Footer'

const Layout = props => (
  <div className={`max-w-screen-xl m-auto ${props.className}`}>
    {props.children}
    <Footer />
  </div>
)

export default Layout