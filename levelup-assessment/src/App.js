import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import logo from './Logo.png';

function App() {
  const [form, setForm] = useState({
    businessName: '',
    pointOfContact: '',
    date: '',
    rep: '',
    numUsers: '',
    m365: false,
    mfa: false,
    passwordManager: false,
    laps: false,
    bitlocker: false,
    backups: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)', pb: 8 }}>
      {/* Header with full-width logo on white */}
      <Box sx={{ width: '100%', background: '#fff', py: 3, mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 12px 0 rgba(33, 150, 243, 0.08)' }}>
        <img src={logo} alt="LevelUP Technology Logo" style={{ width: '340px', maxWidth: '95vw', height: 'auto', filter: 'drop-shadow(0 2px 12px #0ea5e9cc)' }} />
      </Box>
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        <Paper elevation={6} sx={{ p: { xs: 2, sm: 3 }, borderRadius: 5, background: '#fff', boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.15)' }}>
          <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 2, color: '#1976d2', letterSpacing: 0.5, fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>
            LevelUP Assessment
          </Typography>
          {/* Removed subheadline */}
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <TextField label="Business Name" name="businessName" value={form.businessName} onChange={handleChange} fullWidth required sx={{ background: '#f8fafc', borderRadius: 2 }} />
            <TextField label="Point of Contact" name="pointOfContact" value={form.pointOfContact} onChange={handleChange} fullWidth required sx={{ background: '#f8fafc', borderRadius: 2 }} />
            <TextField label="Date" name="date" type="date" value={form.date} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} required sx={{ background: '#f8fafc', borderRadius: 2 }} />
            <FormControl fullWidth required sx={{ background: '#f8fafc', borderRadius: 2 }}>
              <InputLabel id="rep-label">LevelUp Rep</InputLabel>
              <Select labelId="rep-label" label="LevelUp Rep" name="rep" value={form.rep} onChange={handleChange}>
                <MenuItem value="Michael Wilson">Michael Wilson</MenuItem>
                <MenuItem value="Nick Moad">Nick Moad</MenuItem>
              </Select>
            </FormControl>
            <Divider sx={{ my: 1.5, borderColor: '#1976d2', opacity: 0.1 }} />
            <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 600, fontFamily: 'Montserrat, Roboto, Arial, sans-serif', mb: 0.5 }}>LevelUp List</Typography>
            <TextField label="Number of Users" name="numUsers" type="number" value={form.numUsers} onChange={handleChange} fullWidth required inputProps={{ min: 1 }} sx={{ background: '#f8fafc', borderRadius: 2 }} />
            <FormGroup sx={{ pl: 1 }}>
              <FormControlLabel control={<Checkbox checked={form.m365} onChange={handleChange} name="m365" sx={{ color: '#1976d2' }} />} label={<span style={{ color: '#1976d2', fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>Microsoft 365</span>} />
              <FormControlLabel control={<Checkbox checked={form.mfa} onChange={handleChange} name="mfa" sx={{ color: '#1976d2' }} />} label={<span style={{ color: '#1976d2', fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>MFA Configured</span>} />
              <FormControlLabel control={<Checkbox checked={form.passwordManager} onChange={handleChange} name="passwordManager" sx={{ color: '#1976d2' }} />} label={<span style={{ color: '#1976d2', fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>Password Manager</span>} />
              <FormControlLabel control={<Checkbox checked={form.laps} onChange={handleChange} name="laps" sx={{ color: '#1976d2' }} />} label={<span style={{ color: '#1976d2', fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>LAPS Configured</span>} />
              <FormControlLabel control={<Checkbox checked={form.bitlocker} onChange={handleChange} name="bitlocker" sx={{ color: '#1976d2' }} />} label={<span style={{ color: '#1976d2', fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>Bitlocker Configured</span>} />
              <FormControlLabel control={<Checkbox checked={form.backups} onChange={handleChange} name="backups" sx={{ color: '#1976d2' }} />} label={<span style={{ color: '#1976d2', fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>Backups Tested</span>} />
            </FormGroup>
            <Divider sx={{ my: 1.5, borderColor: '#1976d2', opacity: 0.1 }} />
            <Box className="estimate-section" textAlign="center" mt={1.5}>
              <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 600, fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>LevelUP Estimate</Typography>
              <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 700, fontFamily: 'Montserrat, Roboto, Arial, sans-serif' }}>$2,500</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
