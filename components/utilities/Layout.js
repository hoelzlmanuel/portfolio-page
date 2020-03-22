import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = props => (
  <div className="max-w-screen-xl m-auto">
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout