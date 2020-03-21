import Layout from '../components/Layout'
import Trivia from '../components/Trivia'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import About from '../components/About'
import Contact from '../components/Contact'

export default () => (
  <Layout>
    <Trivia
      strings={[
        'Some <i>strings</i> <br>are\n slanted',
        'Some <strong>strings</strong> are bold',
        'HTML characters &times; &copy;'
      ]}
    />
    <Projects />
    <Resume />
    <About />
    <Contact />
  </Layout>
)