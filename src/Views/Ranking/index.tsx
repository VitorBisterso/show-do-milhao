import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetScoresQuery } from 'Services';

const columns: GridColDef[] = [
   {
      field: 'user',
      headerName: 'Usuário',
      flex: 1,
      minWidth: 100,
   },
   {
      field: 'category',
      headerName: 'Categoria',
      flex: 1,
      minWidth: 100,
   },
   {
      field: 'score',
      headerName: 'Score',
      flex: 1,
      minWidth: 100,
   },
];

export default function Ranking() {
   const { data: scores, isLoading } = useGetScoresQuery(null);

   if (isLoading)
      return (
         <div style={{ display: 'grid', placeItems: 'center' }}>
            <CircularProgress size={64} />
         </div>
      );

   if (scores && scores.length <= 0)
      return (
         <div style={{ display: 'grid', placeItems: 'center' }}>
            <Typography variant="h6">Nenhuma pontuação encontrada</Typography>
         </div>
      );

   const formatData = () => {
      if (!scores) return [] as GridColDef[];

      return scores.map(score => {
         const { id, score: scoreValue, user, category } = score;
         return {
            id,
            score: scoreValue,
            user: `${user.name} - ${user.email}`,
            category: category.name,
         };
      });
   };

   return (
      <Box sx={{ height: 711, width: '100%' }}>
         <DataGrid
            columns={columns}
            rows={formatData()}
            rowHeight={60}
            pageSize={10}
            rowsPerPageOptions={[10]}
         />
      </Box>
   );
}
