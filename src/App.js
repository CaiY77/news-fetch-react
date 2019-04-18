import React, {Component} from 'react';
import SourceSelect from './components/SourceSelect'
import NewsSection from './components/NewsSection'
import axios from 'axios'
import './App.css';
const api_key = process.env.REACT_APP_NEWS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'abc-news',
      allNews: []
    };
    this.fetchNews = this.fetchNews.bind(this)
    this.handleSourceSelect = this.handleSourceSelect.bind(this);
  }

  handleSourceSelect(event) {
    this.setState({selected: event.target.value})
  }

  fetchNews(event) {
    event.preventDefault();

    //const link = `https://newsapi.org/v2/everything?sources=${this.state.selected}&apiKey=${api_key}`

    const link = `https://newsapi.org/v2/top-headlines?sources=${this.state.selected}&apiKey=${api_key}`
    axios.get(link)
    .then(response => response.data)
    .then(data => {
      this.setState({allNews: data.articles})
    })

  }
  makeNewsSections() {
    let sections = this.state.allNews.map(news => {
      return (<NewsSection
        className="news-sec"
        author={news.author}
        content={news.content}
        title={news.title}
        img={news.urlToImage}
        link={news.url}
              />)
    })
    return sections
  }

  render() {
    const {selected, allNews} = this.state;
    return (<div>
      <header>
        <SourceSelect startFetch={this.fetchNews} handleSource={this.handleSourceSelect}/>
      </header>
      <main className="news-sections">
        {this.makeNewsSections()}
      </main>
    </div>);
  }
}

export default App;
