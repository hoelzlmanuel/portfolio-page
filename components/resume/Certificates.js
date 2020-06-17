import Certificate from "./Certificate";

const Certificates = () => (
  <div>
    <h2 className="text-3xl font-extrabold mb-8">certificates</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 col-gap-4 row-gap-8 mb-8">
      <Certificate
        name="bec vantage c1"
        institute="cambridge assessment english"
        date="july 2019"
        expiration="no expiration"
        link="https://www.cambridgeenglish.org/exams-and-tests/business-higher/"
      />
      <Certificate
        name="pm basic"
        institute="pma - projekt management austria"
        date="march 2020"
        expiration="no expiration"
        link="https://www.pma.at/en/certification/project-management/pm-basic"
      />
      <Certificate
        name="lpi linux essentials"
        institute="linux professional institute"
        date="june 2019"
        expiration="no expiration"
        link="https://www.lpi.org/our-certifications/linux-essentials-overview"
      />
    </div>
  </div>
)

export default Certificates