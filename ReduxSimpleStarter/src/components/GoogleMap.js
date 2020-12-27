import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
    width: '250px',
    height: '250px'
};

export class GoogleMap extends Component {
    render() {
        return (
            <div className="map">
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    center={
                        {
                            lat: this.props.lat,
                            lng: this.props.lon
                        }
                    }
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs'
})(GoogleMap);
