import React from 'react'
const axios = require('axios')

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: ''
        }
    }

    componentDidMount(){
        axios.get('http://www.colr.org/json/color/random').then(response => {
            this.setState({
                color: response.data.new_color
            })
        })
    }

    render() {

        const color = {
            backgroundColor: '#' + this.state.color,
            height: '300px',
            width: '500px',
            fontFamily: 'sans-serif',
            fontSize: '70px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            
        }
        return (
            <div style={color}>
                Color Component
            </div>
        )
    }
}
export default App