import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let{title,description,imageurl,newsurl,author,date}=this.props;
    return (
      <div className='container my-2'>
<div  className="card" >
  <img src={!imageurl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg":imageurl} className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}...</h5>
    <p  className="card-text">{description}...</p>
    <p class="card-text"><small class=" text-success">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
  
    <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
  </div>
</div>

      </div>
    )
  }
}

export default Newsitems