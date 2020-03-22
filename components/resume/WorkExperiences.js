import WorkExperience from "./WorkExperience";

const WorkExperiences = () => (
  <div>
    <h2 className="text-3xl font-extrabold">work experience</h2>
    <WorkExperience 
      employer="sec consult"
      jobTitle="associate security consultant (internship)"
      description="i worked"
      time="july 2019 - august 2019"
    />
    <WorkExperience 
      employer="greentube"
      jobTitle="internship it"
      time="august 2018 - august 2018"
    />
    <WorkExperience 
      employer="stadtgemeinde groß gerungs"
      jobTitle="internship"
      time="july 2017 - july 2017 (TODO: not sure)"
    />
  </div>
)

export default WorkExperiences