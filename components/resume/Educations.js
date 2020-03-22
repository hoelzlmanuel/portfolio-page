import Education from "./Education";

const Educations = () => (
  <div>
    <h2 className="text-3xl font-extrabold">education</h2>
    <Education 
      institute="htl st. pölten"
      major="informatics"
      graduation="matura"
      time="2016 - 2021 (TODO: not sure)"
    />
    <Education 
      institute="hauptschule groß gerungs"
      major="career orientation and english as working language "
      time="2012 - 2016 (TODO: not sure)"
    />
  </div>
)

export default Educations