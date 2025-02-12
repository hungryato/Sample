import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'date', headerName: 'Date', width: 110 },
];

const rows = [
    { id: 1, title: 'Post 1', author: 'Author 1', date: '2025-02-12' },
    { id: 2, title: 'Post 2', author: 'Author 2', date: '2025-02-13' },
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                paginationModel={{ page: 0, pageSize: 5 }} 
                pagination 
                checkboxSelection 
            />
        </div>
    );
}