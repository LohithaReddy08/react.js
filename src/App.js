// import React from "react";
// function App() {
//   let username = "lohitha";
//   return (
//     // <div className="App">
//     //   <h1 style={{color:"red"}}>one hour is wasted in clearing your errors</h1>
      
//     // </div>
//     <div>
//     <h1>{username}</h1>
//     <p>{100+100}</p>
//     </div>
    
//   );
// }
// export default App;

// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar/>
//       <Main/>
//       <div className='sidebar'>
//         <Sidebar1/>
//         <Sidebar2/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }
// export default App

// !props
// import React, { Component } from 'react'
//  import FBCPropEx from "./propsex/FBCPropEx";

//  export default class App extends Component {
//   render() {
//    return (
//      <div>
//        <CBCPropEx
//         username="Lohitha"
//         age={20}
//         hobby={["playing","eating"]}
//         address={{city:"ongole",area:"gandhinagar"}}
//         sendFun={function(){alert("hi i am Lohitha")}}
//         />  

//         <FBCPropEx
//         username="saisree"
//         ismarried={true}
//         hobby={["playing","eating","sleeping"]}
//         />
        
//      </div>
//    )
//   }
// }
import React from 'react'
import CBCStateEx from './stateexample/CBCStateEx'
import FBCStateEx from './stateexample/FBCStateEx'

const App = () => {
  return (
    <div>
      <CBCStateEx/>
      <FBCStateEx/>
    </div>
  )
}
export default App

