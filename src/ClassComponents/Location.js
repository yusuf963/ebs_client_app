import React from 'react'
class Location extends React.Component {
  state = { lat: null, error: false }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ error: error.message })
    )
    return (
      <div>
        <p>Hello from Location component</p>
        {
          this.state.lat ? <p>Lat: {this.state.lat}</p> :
            this.state.error ?
              <p>Error: {this.state.error}</p>
              :
              ""
        }

      </div>
    )
  }
}

export default Location