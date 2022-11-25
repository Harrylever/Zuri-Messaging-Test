import { Helmet } from "react-helmet"
import generatePageTitle from "../../utils/generatePageTitle"

import styled from "styled-components"

const Threads = () => {
  return (
    <>
      <Helmet>
        <title>{generatePageTitle("threads")}</title>
      </Helmet>
      <div>
        <h1>This is the threads page</h1>
      </div>
    </>
  )
}

export default Threads
