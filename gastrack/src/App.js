import logo from './logo.svg';
import './App.css';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


function App() {
  
  const rowData=[
    {make:'ford',model:'focus',price:'35,000'},
    {make:'ford',model:'focus',price:'35,000'},
    {make:'ford',model:'focus',price:'35,000'},
    
  ];
  
  const columnDefs=[
    {field:'Block #'},
    {field:'Timestamp'},
    {field:'From'},
    {field:'gas price'},
    {field:'gas used'},
    {field:'make'},
    {field:'model'},
    {field:'price'},
    {field:'Gas paid (eth)'}
  ];
  
  return (
    <div className='ag-theme-alpine' style={{height: 500}}>
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}/>
    </div>
  );
}

export default App;
