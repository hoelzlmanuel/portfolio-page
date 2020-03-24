import TypeIt from 'typeit-react'

const p = 1500

const Trivia = (props) => (
  <div className={`container flex mx-auto mt-8 text-2-5xl sm:text-3xl ${props.className}`}>
    <div className="container sm: mx-8 md:mx-12">
      <TypeIt
        options={{
          breakLines: false,
          speed: 60,
          deleteSpeed: 10,
          lifeLike: false,
        }}
        getBeforeInit={instance => {
          instance
            .pause(750)
            .type("i'm an <span class=marked>18 year old</span> student.")
            .pause(p)
            .delete()
            .type("i attend the <span class=marked>informatics</span> department of the <span class=marked>htl st. pölten</span> in <span class=marked>austria</span>.")
            .pause(p)
            .delete()
            .type("i like to <span class=marked>program with java</span>")
            .pause(1000)
            .type(", but i like to <span class=marked>program with kotlin</span> even more.")
            .pause(p)
            .delete()
            .type("i don't eat any <span class=marked>refined sugar</span>.")
            .pause(p)
            .delete()
            .type("i love <span class=marked>minimalistic</span> designs.")
            .pause(p)
            .delete()
            .type("i like to play the <span class=marked>piano</span>.")
            .pause(500)
            .type(" ever heard of <span class=marked>roberto cacciapaglia</span>?")
            .pause(750)
            .type(" he's <span class=marked>awesome</span>.")
            .pause(p)
            .delete()
            .type("i think we should be friends on <span class=marked>linkedin</span>.")
            .pause(p)
            .delete()
            .type("i prefer <span class=marked>cold over heat</span> and <span class=marked>snow over sun</span>.")
            .pause(p)
            .delete()
            .type("i prefer <span class=marked>lower-case</span> letters.")
            .pause(p)
            .delete()
            .type("i think that <span class=marked>factfulness</span> by <span class=marked>hans rosling</span> makes for an interesting read.")
            .pause(p)
            .delete()
            .type("am i crazy for using my mouse on the <span class=marked>left side</span> of my keyboard?")
            .pause(1000)
            .type(" i should add that i'm <span class=marked>right-handed</span>.")
            .pause(p)
            .delete()
            .type("this website does not use any <span class=marked>cookies</span>.")
            .pause(500)
            .type(" it's nice not having to accept any, huh?")
            .pause(p)
            .delete()
            .type("wow, you made it this far?")
            .pause(1000)
            .type(" you should check out my <span class=marked>projects</span> and <span class=marked>résumé</span>.") 
          return instance
        }}
      />
    </div>
  </div>
)


export default Trivia