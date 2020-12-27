import React from 'react'
import {connect} from 'react-redux'
import {Sparklines, SparklinesLine} from "react-sparklines";
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends React.Component {
    renderWeather(cityData) {
        console.log('{cityData.city.name}', cityData.city.name);
        const name = cityData.city.name;
        const temps = cityData.list.map(cityData => cityData.main.temp)
        console.log(temps);
        const pressure = cityData.list.map(cityData => cityData.main.pressure)
        console.log('pressure-------',pressure)
        const humidity = cityData.list.map(cityData => cityData.main.humidity)
        console.log('humidity-------',humidity)
        const lon=cityData.city.coord.lon;
        const lat=cityData.city.coord.lat;
        console.log('lon-------',lon,'lat',lat)

        return (
            <tr key={name}>
                <td> {name} </td>
                <td> <GoogleMap lon={lon} lat={lat}/> </td>
                <td>
                    <Chart height={180} width={180} data={temps} color='blue' units="C"/>
                </td>
                <td>
                    <Chart height={180} width={180} data={pressure} color='orange' units="hPa"/>
                </td>
                <td>
                    <Chart height={180} width={180} data={humidity} color='green' units="%"/>
                </td>
            </tr>
        );
    }

    render() {

        console.log('Weather List Length -> ', this.props.weather.length)


        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th> City:</th>
                    <th> Google Map:</th>
                    <th> Temperature:</th>
                    <th> Pressure:</th>
                    <th> Humidity:</th>
                </tr>
                </thead>
                {this.props.weather.map(this.renderWeather)}
                <tbody>

                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList);
