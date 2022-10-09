import logo from './logo.svg';
import './App.css';
import {AgGridReact} from 'ag-grid-react';



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
    {field:'Gas paid (eth)'}
  ];
  
  return (
    <div>
    <AgGridReact
      rowData={rowData}
      columnDefs={columnDefs}/>
    </div>
  );
}

export default App;
