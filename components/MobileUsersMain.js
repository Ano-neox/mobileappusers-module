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
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" gap={1}>
                  <IconUser />
                  <Typography variant="h6">Total Users</Typography>
                </Box>
                <Typography variant="h4" color="primary">{users.length}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" gap={1}>
                  <IconDeviceMobile />
                  <Typography variant="h6">Active Users</Typography>
                </Box>
                <Typography variant="h4" color="success.main">
                  {users.filter(u => u.status === 'Active').length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Android Users</Typography>
                <Typography variant="h4" color="info.main">
                  {users.filter(u => u.device === 'Android').length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">iOS Users</Typography>
                <Typography variant="h4" color="warning.main">
                  {users.filter(u => u.device === 'iOS').length}
                </Typography>
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