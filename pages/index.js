import Layout from '../components/utilities/Layout'
import Trivia from '../components/trivia/Trivia'
import Projects from '../components/projects/Projects'
import Resume from '../components/resume/Resume'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'
import Headscroll from 'react-headscroll'
import Helmet from 'react-helmet'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>manuel hölzl</title>
      <link rel="shortcut icon" type="image/svg+xml" href="images/logo.svg"></link>
    </Helmet>
    <div className="max-h-screen h-screen flex flex-col">
      <Header />
      <Trivia id="trivia" />

      <div className="w-full h-full min-h-0 flex justify-end p-8">
        <img className="rounded-xl h-max-full w-max-full h-full w-auto shadow-strong object-cover" src="images/manuel-hoelzl-portrait.jpg" />
      </div>
    </div>
    <About id="about" />
    <Projects id="projects" />
    <Resume id="resume" />
    <Contact id="contact" />
  </Layout>
)