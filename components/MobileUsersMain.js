import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Button, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Avatar
} from '@mui/material';
import { IconDeviceMobile, IconUser, IconBell, IconBan } from '@tabler/icons-react';
import PageContainer from '../../../../modernize-dashboard/src/components/container/PageContainer';

const MobileUsersMain = () => {
  const [users] = useState([
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh@example.com', phone: '+91-9876543210', device: 'Android', version: '1.2.3', lastActive: '2024-01-20 10:30', status: 'Active', notifications: true },
    { id: 2, name: 'Priya Sharma', email: 'priya@example.com', phone: '+91-9876543211', device: 'iOS', version: '1.2.3', lastActive: '2024-01-19 15:45', status: 'Active', notifications: true },
    { id: 3, name: 'Amit Singh', email: 'amit@example.com', phone: '+91-9876543212', device: 'Android', version: '1.1.0', lastActive: '2024-01-15 09:15', status: 'Inactive', notifications: false }
  ]);

  const getDeviceIcon = (device) => {
    return device === 'iOS' ? '📱' : '🤖';
  };

  const getStatusColor = (status) => {
    return status === 'Active' ? 'success' : 'default';
  };

  return (
    <PageContainer title="Mobile Users" description="Mobile App User Management">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">Mobile App Users</Typography>
          <Button variant="contained" startIcon={<IconBell />}>
            Send Notification
          </Button>
        </Box>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f8f9ff',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#e8eaff',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#5a67d8' }}>👥</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {users.length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Total Users
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f0fff4',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#c6f6d5',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#38a169' }}>✅</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {users.filter(u => u.status === 'Active').length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Active Users
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#fffbf0',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#fed7aa',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#d69e2e' }}>🤖</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {users.filter(u => u.device === 'Android').length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Android Users
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#fff5f5',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#fed7d7',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#e53e3e' }}>📱</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {users.filter(u => u.device === 'iOS').length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    iOS Users
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardContent>
            <Typography variant="h6" mb={2}>User List</Typography>
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'primary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>User</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Contact</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Device</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>App Version</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Last Active</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Status</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Notifications</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow key={user.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' }, '&:hover': { backgroundColor: 'action.selected' } }}>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={2}>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>{user.name.charAt(0)}</Avatar>
                          <Typography sx={{ fontWeight: 'medium' }}>{user.name}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box>
                          <Typography variant="body2">{user.email}</Typography>
                          <Typography variant="body2" color="text.secondary">{user.phone}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <span>{getDeviceIcon(user.device)}</span>
                          <Typography>{user.device}</Typography>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ fontFamily: 'monospace' }}>{user.version}</TableCell>
                      <TableCell sx={{ color: 'text.secondary' }}>{user.lastActive}</TableCell>
                      <TableCell>
                        <Chip label={user.status} color={getStatusColor(user.status)} size="small" />
                      </TableCell>
                      <TableCell>
                        <Chip 
                          label={user.notifications ? 'Enabled' : 'Disabled'} 
                          color={user.notifications ? 'success' : 'default'} 
                          size="small" 
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </PageContainer>
  );
};

export default MobileUsersMain;