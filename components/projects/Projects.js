import Project from './Project'

const Projects = (props) => (
  <div id={props.id} className="px-8 pb-8">
    <h1 className="heading text-4xl font-extrabold w-screen max-w-full mb-4">
      projects
    </h1>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <Project
        title='portfolio page'
        category='web development'
        year='2020'
        description='this website was built with next.js (a framework for react) and tailwindcss. my goal was to design a very minimalistic yet expressive portfolio page.'
        technologies={['react', 'next.js', 'tailwindcss']}
        links={[{
          name: 'source code',
          link: 'https://github.com/hoelzlmanuel/portfolio-page'
        }]}
      />
      <Project 
        title='ecer com&shy;pe&shy;ti&shy;tion'
        category='competition'
        year='2020'
        description='together with my team from the htl st. pölten i am currently preparing for the european conference on educational robotics that will be held in bratislava this year. we are using python to autonomously fulfil tasks with our robot.'
        technologies={['python', 'robotics','research']}
        links={[{
          name: 'pria',
          link: 'https://pria.at/en/ecer/'
        }
        ]}
      />
      <Project 
        title='collectIT'
        category='web development'
        year='2019'
        description='together with a team of 5 other students of the htl st. pölten we developed a web app for our schools&#39;s open day where guests could collect points and prizes. i was responsible for the backend.'
        technologies={['express']}
      />
      <Project
        title='ecer com&shy;pe&shy;ti&shy;tion'
        category='competition'
        year='2019'
        description='together with my team from atria i participated at the european conference on educational robotics where we completed tasks autonomously with a drone. i was also responsible for our research project on disaster relief.'
        technologies={['python', 'opencv', 'research']}
        links={[{
          name: 'pria',
          link: 'https://pria.at/en/ecer/ecer-2019/'
        },
        {
          name: 'atria',
          link: 'https://atria.or.at/'
        },
        {
          name: 'research project',
          link: 'http://webspace.pria.at/ecer2019/papers/Paper_19-0262.pdf'
        }
        ]}
      />
    </div>
  </div>
)

export default Projects