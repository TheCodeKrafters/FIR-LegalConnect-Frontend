
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

function EmergencyHelpline() {
  const rows = [
    { id: 1, department: 'National Emergency Number', helpline: '112', webpage: '' },
    { id: 2, department: 'Police', helpline: '100 or 112', webpage: '' },
    { id: 3, department: 'Fire', helpline: '101', webpage: '' },
    { id: 4, department: 'Ambulance', helpline: '102', webpage: '' },
    { id: 5, department: 'Disaster Management Services', helpline: '108', webpage: '' },
    { id: 6, department: 'Women Helpline', helpline: '1091', webpage: '' },
    { id: 7, department: 'Women Helpline (Domestic Abuse)', helpline: '181', webpage: '' },
    { id: 8, department: 'Air Ambulance', helpline: '9540161344', webpage: '' },
    { id: 9, department: 'Aids Helpline', helpline: '1097', webpage: '' },
    { id: 10, department: 'Anti Poison (New Delhi)', helpline: '1066 or 011-1066', webpage: '' },
    // Add more rows as needed
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Emergency Helpline Numbers
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: 'linear-gradient(45deg, #0063a1, #009dd6)' }}>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Serial No</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Department</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Helpline No</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Department Webpage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{
                  background: index % 2 === 0
                    ? 'linear-gradient(45deg, #006488, #2fc4fa)'
                    : 'linear-gradient(45deg, #0096cd, #5ad0fb)',
                  '&:hover': {
                    backgroundColor: '#000000 !important',
                    color: '#ffffff',
                  },
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.helpline}</TableCell>
                <TableCell>{row.webpage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default EmergencyHelpline;
