const App = () => {
  return (
    <>
      <h1>Simple REST API</h1>
      <p>
        This REST service calculates the type of triangle on the basis of its
        interior angles
      </p>
      <p>
        To test angles, please amend a, b and c values of the url in order to
        validate the type of triangle it may be.
      </p>

      <p>
        https://techtestrestapp-production.up.railway.app/triangle?a={}&b={}&c=
        {}
      </p>
    </>
  )
}

export default App
