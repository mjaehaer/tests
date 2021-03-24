import React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';

const rows: GridRowsProp = [
    {
        "id": 1,
        "col1": "Test User",
        "col2": "test_user_1@example.com",
        "col3": "Hello, world!",
        "col4": 10,
    },
    {
        "id": 3,
        "col1": "Test User 2",
        "col2": "test_user_2@example.com",
        "col3": "Hello from user 2!",
        "col4": 0,
    },
    {
        "id": 4,
        "col1": "Test User 3",
        "col2": "test_user_3@example.com",
        "col3": "Hello from user 3!",
        "col4": 0,
    }
 ];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Username', width: 200 },
  { field: 'col2', headerName: 'email', width: 230 },
  { field: 'col3', headerName: 'text', width: 400 },
  { field: 'col4', headerName: 'status', width: 100 }
];

export default function App() {
  return (
    <div 
      style={{ height: 300, width: '75%', marginLeft: 'auto', marginRight: 'auto'}}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}