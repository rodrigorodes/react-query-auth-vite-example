import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Competencia } from '@/features/competencia/types';

const columns: GridColDef[] = [

  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Nome', width: 200 },
  { field: 'description', headerName: 'Descrição', width: 180 },
  { field: 'dateCreate', headerName: 'Date Criação', width: 150 },
];

export default function DataTable({ data }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
