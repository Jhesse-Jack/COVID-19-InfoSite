import React from 'react';
//import { Dropdown } from 'semantic-ui-react';
import Dropdown from "react-dropdown";
import "../bootstrap.min.css";

class DropdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
        this.getCountries = this.getCountries.bind(this);
    }

    componentDidMount() {
        this.getCountries()
    }

    getCountries() {
        fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search')
            .then(res => res.json())
            .then((mydata) => {
                this.setState({countries:mydata.data.rows});
            });
    }

    render() {
        console.log(this.state.countries)
        const { countries } = this.state;
        return (
            <div>
              <label className="">
                Choose a country from this list: 
                <input list="countries" name="myBrowser" className="input-group-text" />
              </label>
              <datalist id="countries" className="custom-select">
                {countries.map(country => 
                  <option value={country.country} key={country.country_abbreviation}/>
                )}
              </datalist>
            </div>
        );
    }
}

export default DropdownComponent;
