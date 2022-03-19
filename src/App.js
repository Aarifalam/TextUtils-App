import logo from './logo.svg';
import './App.css';
import Navbar from './Comonents/Navbar';
import TextForm from './Comonents/TextForm';

function App() {
  return (
    <>

      <Navbar title="TextUtils12" aboutText="About TextUtils" />
      {/* <Navbar />   // if i will commnet upper one and use this without passing any props then it will use default props which we passed in defferent fils of components of file. */}

      <div className="container my-3">
        <TextForm heading="Enter your text below" />
      </div>
    </>
  );
}

export default App;
