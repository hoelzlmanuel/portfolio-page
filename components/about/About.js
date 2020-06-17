const About = (props) => (
  <div id={props.id} className="px-8 pb-8">
    <h1 className="heading text-4xl font-extrabold w-screen max-w-full mb-4">
      about me
    </h1>
    <h2 className="text-3xl font-extrabold">who am i?</h2>
    <div className="text-lg my-4">
      my name is <b>manuel hölzl</b>, and i am a student at the informatics department of the <b>htl st. pölten</b> in austria with a focus on java, relational database design, network engineering, business economics and cyber security.
    </div>
    
  </div>
)

export default About

/*
<h2 className="text-3xl font-extrabold">what do i do?</h2>
    <div className="text-lg my-4">
      i like to spend my free time <b>developing</b> &mdash; be it a new webpage (like this one), an autonomous robot for a competition or learning how to make the web more secure. i'm not a tech-only guy, however: i also play the piano and am a board member of a <b>non-profit organization</b> i co-founded in november 2018 called <span className="italic">association for technology, research and innovation austria</span> (or <a className="font-bold link link-black" href="https://atria.or.at/">atria</a>
          <embed className="ml-1 inline align-middle mb-1" src="images/external-link.svg" /> for short). we founded it with the goal of creating an environment where knowledge can be shared and ideas can be realised.
    </div>
    <h2 className="text-3xl font-extrabold">what am i passionate about?</h2>
    <div className="text-lg my-4">
      i am an enthusiast of combining <b>analytical and creative thinking</b>, and as such, <b>coding</b> is a perfect match for me. when i code, i can creatively think about how all the pieces should fit together and then i can analytically work out what those pieces should exactly be.
      <div className="my-4" />
      because i am incredibly passionate about this, i am always looking for ways to <b>share what i've learnt</b> and help others achieve their goals. one way i am doing this is through the association i co-founded &mdash; atria &mdash; where we help each other with our projects, host workshops or participate in various competitions &mdash; together.
    </div>
*/