import logo from './logo.svg';
import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import{useState,useEffect} from 'react';

function App() {
  
  const [rowData,setRowData]=useState([
    {make:'ford',model:'focus',price:'35,000'},
    {make:'ford',model:'focus',price:'35,000'},
    {make:'ford',model:'focus',price:'35,000'},
    
  ]);
  
  const [columnDefs,setColumDefs]=useState([
    {
      headerName:'result',
      children:[
        {field:'make',sortable:true,filter:true},
        {field:'model',sortable:true,filter:true},
        {field:'price',sortable:true,filter:true},
        // {field:'blockNumber'},
        // {field:'Timestamp'},
        // {field:'From'},``
        // {field:'gas price'},
        // {field:'gas used'},
        // {field:'Gas paid (eth)'}
      ]
    }
  ]);
  
  useEffect(()=>{
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    // fetch('https://api.etherscan.com/api?module=account&action=txlist&address=0xeAc4387d84ABEedC6987888bF4b2D09C24013f41&startblock=0&endblock=99999999&sort=desc&apikey=S58AX7RGE8H35RT8QXD4RQ2A427RQF7B1M')
    .then(result=>result.json())
    .then(rowData=>setRowData(rowData))
  },[]);
  
  return (
    <div className='ag-theme-alpine' style={{height: 700}}>
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}/>
    </div>
  );
}

export default App;
