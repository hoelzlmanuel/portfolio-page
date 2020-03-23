import Certificate from "./Certificate";

const Certificates = () => (
  <div>
    <h2 className="text-3xl font-extrabold mb-8">certificates</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 col-gap-4 row-gap-8">
      <Certificate
        name="bec vantage c1"
        institute="cambridge assessment english"
        date="july 2019"
        expiration="no expiration"
      />
      <Certificate
        name="lpi linux essentials"
        institute="linux professional institute"
        date="june 2019"
        expiration="no expiration"
      />
    </div>
  </div>
)

export default Certificates