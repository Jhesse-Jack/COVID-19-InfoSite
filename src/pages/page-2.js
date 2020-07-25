// export const getCountries = async () => {
//   let finalResponse = {
//     success: false,
//     code: 0,
//     msg: "There was a problem processing your request, please try again later.",
//     data: null,
//   }

//   try {
//     const response = await fetch (
//       "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search",
//       {
//         method: "get"
//       }
//     )
//     console.log(response)
//     const data = await response.json()

//     if (response.status === 200) {
//       finalResponse["success"] = true
//       finalResponse["data"] = data
//       return finalResponse
//     }

//     if(response.status === 500) {
//       finalResponse["msg"] = "There was a problem processing your request, please try again later"

//       return finalResponse
//     }
//   }

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
