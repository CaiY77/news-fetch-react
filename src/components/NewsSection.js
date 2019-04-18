import React, {Component} from 'react';
import InfoSection from './InfoSection'
import ImgSection from './ImgSection'
import './NewsSection.css'
class NewsSection extends Component {
//{(img)? <img src={img}/> : <p>Image Unavaliable</p>}
  render() {
    const {author, content, title, img,link} = this.props;
    return (<div className="my-sections">
      <ImgSection img={img}/>

      <InfoSection author={author} content={content} link={link} title={title}/>

    </div>);
  }

}

export default NewsSection;
