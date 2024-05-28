// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Youtube from "./YouToBe/Youtube";
// import ScrollableSidebar from "./YouToBe/ScrollableSidebar";
// import NavigationButton from "./components/NavigationButton";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-4 bg-light">
//                   <NavigationButton />
//                 </div>
//                 <div className="col-md-8">
//                   <Home />
//                 </div>
//               </div>
//             </div>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-4 bg-light">
//                   <NavigationButton />
//                 </div>
//                 <div className="col-md-8">
//                   <About />
//                 </div>
//               </div>
//             </div>
//           }
//         />
//         <Route
//           path="/youtube"
//           element={
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-md-4 bg-light">
//                   <NavigationButton />
//                   <ScrollableSidebar />
//                 </div>
//                 <div className="col-md-8">
//                   <Youtube />
//                 </div>
//               </div>
//             </div>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Youtube from "./YouToBe/Youtube";
import ScrollableSidebar from "./YouToBe/ScrollableSidebar";
import NavigationButton from "./components/NavigationButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/youtube" element={<Youtube />} />
      </Routes>
    </Router>
  );
};

export default App;
