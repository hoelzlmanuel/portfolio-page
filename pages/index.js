import Layout from '../components/utilities/Layout'
import Trivia from '../components/trivia/Trivia'
import Projects from '../components/projects/Projects'
import Resume from '../components/resume/Resume'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'

export default () => (
  <Layout>
    <Trivia />
    <Projects />
    <Resume />
    <About />
    <Contact />
  </Layout>
)