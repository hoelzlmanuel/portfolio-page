import Layout from '../components/utilities/Layout'
import Trivia from '../components/trivia/Trivia'
import Projects from '../components/projects/Projects'
import Resume from '../components/resume/Resume'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Header from '../components/header/Header'
import Headscroll from 'react-headscroll'

export default () => (
  <Layout>
    <div className="max-h-screen h-screen flex flex-col">
      <Header />
      <Trivia id="trivia" className="h-50-p md:h-30-p lg:h-20-p" />
      <div className="flex h-50-p md:h-70-p lg:h-80-p flex p-8 md:p-12 w-full">
        <div className="flex justify-end h-full w-full">
          <img className="rounded-xl w-auto h-full shadow-strong object-cover" src="images/manuel-hoelzl-portrait.jpg" />
        </div>
      </div>
    </div>
    <About id="about" />
    <Projects id="projects" />
    <Resume id="resume" />
    <Contact id="contact" />
  </Layout>
)