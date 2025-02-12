/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { css } from '@emotion/react';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'author', headerName: 'Author', width: 150 },
    { field: 'date', headerName: 'Date', width: 110 },
];

const containerStyle = css`
    height: 400px;
    width: 100%;
    margin-top: 20px;
`;

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
        <div css={containerStyle}>
            <DataGrid
                rows={rows}
                columns={columns}
                hideFooterPagination
            />
        </div>
    );
}