
import ReactDOM from 'react-dom/client';
import './index.css';
import Heading1 from './Components/Heading1';
import Heading2 from './Components/Heading2';
import Heading3 from './Components/Heading3';
import Button from './Components/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <h1>I'm heading one...from first component</h1>
      <h2>I'm heading two...from second component</h2>
      <h3>I'm heading three...from third component</h3>
    <button>click Me!!</button>
     <Heading1/>
     <Heading2/>
     <Heading3/>
     <Button/>

    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
