import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'date', headerName: 'Date', width: 110 },
];

const fetchData = (setRows: React.Dispatch<React.SetStateAction<any[]>>) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const data = response.data.map((post: any) => ({
                id: post.id,
                title: post.title,
                author: `Author ${post.userId}`,
                date: new Date().toISOString().split('T')[0], // 현재 날짜를 사용
            }));
            setRows(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
};

export default function DataTable() {
    const [rows, setRows] = useState<any[]>([]);

    useEffect(() => {
        fetchData(setRows);
    }, []);

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