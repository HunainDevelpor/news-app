import React from 'react'
const  Navbar =()=> {
  
    return (

      <div>
        <nav className="navbar  fixed-top navbar-expand-lg  bg-danger text-light">
  <div className="container-fluid text-light">
    
    <a className="navbar-brand  text-light" href="/"><strong>NEWS APP</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light " aria-current="page" href="/">Home</a>
        </li>
        
        <li className="nav-item"> <a className="nav-link text-light mx-2" href="/">General</a> </li>
        <li className="nav-item"><a className="nav-link text-light mx-2" href="/science">Science</a> </li>
        <li className="nav-item"><a className="nav-link text-light mx-2" href="/entertainment">Entertainment</a> </li>
        <li className="nav-item"> <a className="nav-link text-light mx-2" href="/health">Health</a> </li>
        <li className="nav-item"> <a className="nav-link text-light mx-2" href="/sports">Sports</a></li>
        <li className="nav-item"><a className="nav-link text-light mx-2"  href="/business">Business</a> </li>
          <li className="nav-item"> <a className="nav-link text-light mx-2" href="/technology">Technology</a> </li>
         
        
       
       
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  
}

export default Navbar

























// ================CLASED BASED COMPONENT========================
// import React, { Component } from 'react'
// export class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg  bg-danger text-light">
//   <div className="container-fluid text-light">
    
//     <a className="navbar-brand  text-light" href="/"><strong>NEWS APP</strong></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse " id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active text-light " aria-current="page" href="/">Home</a>
//         </li>
        
//         <li className="nav-item"> <a className="nav-link text-light mx-2" href="/">General</a> </li>
//         <li className="nav-item"><a className="nav-link text-light mx-2" href="/science">Science</a> </li>
//         <li className="nav-item"><a className="nav-link text-light mx-2" href="/entertainment">Entertainment</a> </li>
//         <li className="nav-item"> <a className="nav-link text-light mx-2" href="/health">Health</a> </li>
//         <li className="nav-item"> <a className="nav-link text-light mx-2" href="/sports">Sports</a></li>
//         <li className="nav-item"><a className="nav-link text-light mx-2"  href="/business">Business</a> </li>
//           <li className="nav-item"> <a className="nav-link text-light mx-2" href="/technology">Technology</a> </li>
         
        
       
       
//       </ul>
     
//     </div>
//   </div>
// </nav>
//       </div>
//     )
//   }
// }

// export default Navbar