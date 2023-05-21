import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import Contact from "./components/Contact";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from './components/Header';

// có 2 cách để tạo component
// cách 1: function component (recommender)
// function App() {
//     return (
//         <>
//             <div className="container">
//                 <h1 className="display-1 bg-danger text-white rounded">
//                     <i className="fa fa-phone text-warning"></i>
//                     Hello anh em C0422
//                 </h1>
//                 <h3>Learing ReactJS</h3>
//                 <input type={"text"} />
//                 <input type="checkbox" /> agree?
//             </div>
//             <Contact />
//         </>
//     )
// }

// cách 2: class component
// class App extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <h1 className="display-1 bg-danger text-white rounded">
//                     <i className="fa fa-phone text-warning"></i>
//                     Hello anh em C0422
//                 </h1>
//                 <h3>Learing ReactJS</h3>
//                 <input type={"text"} />
//                 <input type="checkbox" /> agree?
//             </div>
//         )
//     }
// }

function App(){
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);