import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const handleClick = (cellValues) => {

  //const navigation = useNavigate();

  console.log(cellValues.row.competenciaId);

    // navigation(
    //   '/competencias', {
    //   state: {
    //     competenciaId: cellValues.row.competenciaId,
    //   }
    // });
}

const columns: GridColDef[] = [

  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Nome', width: 200 },
  { field: 'description', headerName: 'Descrição', width: 180 },
  { field: 'dateCreate', headerName: 'Date Criação', width: 150 },
  {
    field: "Opção",
    width: 250,
    renderCell: (params) => {
      return (

        <Link to={`/competencias/update/${params.row.competenciaId}`}>Alterar</Link>


        // <Button
        //   variant="contained"
        //   color="primary"
        //   onClick={(event) => {
        //     event.stopPropagation();
        //     handleClick(cellValues);
        //   }}
        // >
        //   Alterar
        // </Button>
      );
    }
  }
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
        disableSelectionOnClick {...data}
      />
    </div>
  );
}
