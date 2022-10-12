import React from 'react';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { mockRanking } from 'mocks';
import { Box } from '@mui/material';

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
   const mockedData = mockRanking(25);

   return (
      <Box sx={{ height: 711, width: '100%' }}>
         <DataGrid
            columns={columns}
            rows={mockedData}
            rowHeight={60}
            pageSize={10}
            rowsPerPageOptions={[10]}
         />
      </Box>
   );
}
