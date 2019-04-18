import React, {Component} from 'react';
import axios from 'axios';
const api_key = process.env.REACT_APP_NEWS;

class SourceSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: []
    };
  }

  componentDidMount() {
    let url = `https://newsapi.org/v2/sources?apiKey=${api_key}`
    axios.get(url).then(response => {
      return response.data.sources;
    }).then(src => {
      this.setState({sources: src})
    })
  }
  printOptions = () => {
    let options = this.state.sources.map(who => {
      return (<option key={who.id} value={who.id}>{who.name}</option>)
    })
    return options
  }

  render() {
    return (<div>
      <form onSubmit={this.props.startFetch}>
        <label>
          Select Your News Source
          <br/>
          <select onChange={this.props.handleSource}>
            {this.printOptions()}
          </select>
        </label>
        <input type="submit" value="Select"/>
      </form>
    </div>);
  }

}

export default SourceSelect;
