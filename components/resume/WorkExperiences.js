import WorkExperience from "./WorkExperience";

const WorkExperiences = () => (
  <div>
    <h2 className="text-3xl font-extrabold">work experience</h2>
    <WorkExperience 
      employer="sec consult"
      jobTitle="associate security consultant (internship)"
      time="july 2019 - august 2019"
      link="https://sec-consult.com/"
    />
    <WorkExperience 
      employer="greentube"
      jobTitle="internship IT"
      time="august 2018 - august 2018"
      link="https://www.greentube.com/"
    />
    <WorkExperience 
      employer="stadtgemeinde groß gerungs"
      jobTitle="internship"
      time="july 2017 - july 2017"
      link="https://www.gerungs.at/"
    />
  </div>
)

export default WorkExperiences