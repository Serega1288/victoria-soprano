import * as React from "react"
import { Link } from "gatsby"

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main>
      <h1>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link className="btn style-1" to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
