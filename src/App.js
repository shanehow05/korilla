import receipt from './components/Receipt';
import {receipt1, receipt2, receipt3,rec} from './components/Records'
import Header from './components/Header';
import Receipt from './components/Receipt';
import {useState} from 'react'
import './App.css';


function App() {
  const [receipts, setReceipts] = useState([receipt1, receipt2, receipt3, ...rec])
  const mappedReceipts = receipts.map((receipt, index)=> {
    return <Receipt receipt = {receipt} key=' '></Receipt>
  })



  return (
    <div className="App">
      <Header />
     {mappedReceipts}


    </div>
  );
}

export default App;
