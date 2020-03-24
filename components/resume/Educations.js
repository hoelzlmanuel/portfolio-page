import Education from "./Education";

const Educations = () => (
  <div>
    <h2 className="text-3xl font-extrabold">education</h2>
    <Education 
      institute="htl st. pölten"
      major="informatics - focus on java, network engineering, relational database design, project management, business economics and cyber security"
      graduation="matura"
      time="2016 - 2021"
      link="https://www.htlstp.ac.at/"
    />
    <Education 
      institute="hauptschule groß gerungs"
      major="career orientation and english as working language "
      time="2012 - 2016"
      link="http://nmsgerungs.ac.at/"
    />
  </div>
)

export default Educations