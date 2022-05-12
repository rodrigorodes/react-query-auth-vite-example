import { Edit } from '@mui/icons-material';
import { Box, FormControlLabel, IconButton, useTheme } from '@mui/material';
import {
  blue
} from '@mui/material/colors';
import { DataGrid, GridColDef, GridColumnHeaderParams, GridToolbar, ptBR } from '@mui/x-data-grid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Competencia } from '../../features/competencia/types';


const EditTable = ({ id }) => {
  const navigate = useNavigate();

  return <FormControlLabel
    control={
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        onClick={() => { navigate(`/app/competencias/detalhe/${id}`); }} >
        <Edit style={{ color: blue[500] }} />
      </IconButton>
    }
  />;
};

const columns: GridColDef[] = [

  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'name', headerName: 'Nome', width: 200 },
  { field: 'description', headerName: 'Descrição', width: 180 },
  { field: 'dateCreate', type: 'date', headerName: 'Date Criação', width: 150 },
  {
    field: 'Opção',
    width: 250,
    renderCell: (params: GridColumnHeaderParams) => {
      return (
        <EditTable id={params.row.competenciaId}></EditTable>
      );
    }
  }
];

export default function DataTable({ data }: Competencia) {

  const [pageSize, setPageSize] = useState(25);
  const theme = useTheme();

  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ height: 400 , bgcolor: 'background.paper' }}>

        <DataGrid
          getRowId={(row) => row.id}
          components={{ Toolbar: GridToolbar }}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          pagination
          rows={data}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPage) => setPageSize(newPage)}
          {...data}
        />
      </Box>
    </div>
  );
}
