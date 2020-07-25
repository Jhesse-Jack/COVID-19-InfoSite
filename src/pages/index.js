import React from "react";
import MyContent from "../components/mycontent";
//import DropdownComponent from "../components/sampledropdown";
import MyHeader from "../components/myheader";
import MyFooter from "../components/myfooter";
import SEO from "../components/seo";
import MyBackgroundImage from "../components/mybackgroundimage";

const IndexPage = () => (
  <div>
    <div>
      <MyBackgroundImage />
        <SEO title="COVID-19"/>
        <MyHeader />
        <MyContent />
        <MyFooter />
    </div>
  </div>
)

export default IndexPage


// import React, { Component } from "react";
// //import Dropdown from "react-dropdown";
// //const { Component } = require("react");

// const title_URL = "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search";
// //const title_URL = "https://covid19-api.org/api/countries";

// //let keys = Object.keys(country)

// class Functions extends Component {
//     constructor(props) {
//         super (props);

//         this.state = {
//             countries: [],
//             countriestwo: [],
//             isLoading: false,
//             error: null,
//             country: {},
//             rows: {},
//         };
//     }

//     componentDidMount() {
//         fetch(title_URL)
//         .then(Response => {
//           return Response.json()
//         })
//         .then((json => {
//             for(let i = 0; i < json.length; i++){
//                 this.setState({
//                   countries: json.data.rows[i]
//                 });
//             }
//             console.log(this.setState.countries)
//           }))
//     }

//     render(){
//       const { countries, isLoading } = this.state;

//       if (isLoading) {
//         return <p> Loading...</p>
//       }
//       return (
//         <div>
//           <ul>
//             {countries.map(country => 
//               <li key={country.country_abbreviation}>
//                 <p> {country.country} </p>
//               </li>)}
//           </ul>
//         </div>
//       )
//     }
// }

// export default Functions;

// .then(response => response.json())
// .then(json => {
//   this.setState ({
//     isLoading: true,
//     countries: json.data.rows
//   })
// });
// console.log(this.state.countries);

// .then(response => {
//   return response.json()
// })
// .then(json => {
// this.setState({
//   isLoading: true,
//   countries: json.countries
// })
// });

// import React, {useEffect} from "react";
// import { getCountries } from "./page-2";

// const [countries, setCountries] = React.useState([]);

// useEffect (() => {
//   getCountries().then((response) => {
//     console.log(response);
//     if (response.success === true) {
//       setCountries(response.data)
//     }
//   });
// }, []);

// console.log(countries);
// .then((mydata => {
//   this.setState ({
//     countries: mydata.map( countries => ({
//       countries: countries.data.rows.country
//     }))
//   })
//   console.log(mydata);
// }))

// .then(countries => {
//   this.setState({
//     countries: countries.data.rows.keys, isLoading: false
// })
// });
// console.log(this.state.countries)

//
