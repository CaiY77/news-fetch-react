import React, {Component} from 'react';
import './InfoSection.css'

class InfoSection extends Component {

  render() {
    const {author, content, title, link} = this.props;
    return (<div className='info-sec'>
      <a href={link} className="title-style">
        <h1>{title}</h1>
      </a>
      <h3 className="author-style">
        By: {author}</h3>
      <p className="content-style">{content}</p>
    </div>);
  }

}

export default InfoSection;
