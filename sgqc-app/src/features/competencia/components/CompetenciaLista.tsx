import { Box, Button, Paper, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import DataTable from "../../../components/DataTable/DataTable";
import { getCompetenciasQuery } from "../api/getCompetencias";
import { UpdateCompetencia } from "./UpdateCompetencia";

export const CompetenciaLista = () => {

    const competenciasQuery = getCompetenciasQuery();

    const navigate = useNavigate();
    const handleClick = () => navigate('/competencias/cadastrar');

    if (competenciasQuery.isLoading) {
        return (
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!competenciasQuery.data) return null;

    return (
        <Paper
            variant="elevation"
            elevation={1}
        >
            <Box sx={{
                marginTop: 8,
            }}>
                <Typography variant="h4" component="h3" align="center" >Consultar Competência</Typography>
                <Box display="flex" flexDirection="row" justifyContent="center" p={1} m={1} bgcolor="background.paper">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                    >
                        Criar Competencia
                    </Button>
                    <DataTable data={competenciasQuery.data}></DataTable>
                </Box >
            </Box >
        </Paper>
    );
}

