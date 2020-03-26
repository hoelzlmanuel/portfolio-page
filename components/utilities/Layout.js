import Footer from '../footer/Footer'

const Layout = props => (
  <div className={`max-w-full xl:max-w-screen-xl m-auto ${props.className !== undefined && `${props.className}`}`}>
    {props.children}
    <Footer />
  </div>
)

export default Layout