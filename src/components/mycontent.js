import React from 'react';
import "../bootstrap.min.css";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
const options = [
    'one', 'two', 'three'
];

const defaultOption = options[0];

//const [selected, setSelected] = useState([]);

class DropdownComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        };
        this.getCountries = this.getCountries.bind(this);
    }

    componentDidMount(){
        this.getCountries()
    }

    getCountries(){
        //fetch('https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search')
        fetch('https://corona.lmao.ninja/v2/countries?yesterday=&sort=')
        .then(res => res.json())
        .then((data) => {
            for(let i = 1; i < data.length; i++){
                this.setState({
                    countries: data[i].country //[i]
                });
            }
        });
        
    }
    

    render(){
        console.log(this.state.countries)
        const { countries } = this.state;
        //let countriesholder = countries.map(country => country.country)
        //let countriesholder = countries.map(country => country)
        return (
            <div>
                <div className="container-fluid">
            <br />
            &nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <div className="row">
                <div className="col-sm-2">

                </div>
                <div className="col-sm-7">
                    <h1> COVID-19 Real Time Statistics Checker </h1>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="countriesII">Select a country:</label>
                        <select name="countriesII" id="countriesII">
                            {countries.map(country => (
                                <option>
                                    {country}
                                </option>
                            ))}
                        </select>
                </div>
            </div>
            <br />
            <br />
            <div className="row">
                <div className="col-sm-7">

                </div>
                <div className="col-sm-3">
                    Select a country: 
                </div>
                <div className="col-sm-2">

                </div>
            </div>
            <br/>
            <br />
            <div className="row">
                <div className="col-sm-7">
                </div>
                <div className="col-sm-3">
                </div>
                <div className="col-sm-2">
                    <button type="button" className="btn btn-primary">
                        Send
                    </button>
                </div>

            </div>
        </div>
            </div>
        )
    }
}

export default DropdownComponent;