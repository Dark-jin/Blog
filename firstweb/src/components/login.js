import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
    const [values1, setValues] = React.useState({
        amount: '',
        password: '',
        showPassword: false,
      });
      const [values2, setValues2] = React.useState ({
        amount: '',
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values1, [prop]: event.target.value });
      };
      const handleChange2 = (prop2) => (event2) => {
        setValues2({...values2, [prop2]: event2.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values1,
          showPassword: !values1.showPassword
        });
      };
      const handleClickShowPassword2 = () => {
        setValues2({
            ...values2,
            showPassword: !values2.showPassword
          });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const handleMouseDownPassword2 = (event2) => {
        event2.preventDefault();
      };
    
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                label="ID"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">id</InputAdornment>,
                }}
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">1차 번호</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={values1.showPassword ? 'text' : 'password'}
                    value={values1.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values1.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
                <FormControl sx={{ m: 1, width:'30ch'}}>
                <InputLabel htmlFor="outlined-adornment-amount">E-mail</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values1.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">@</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
            </div>
            <div>
                <TextField //id
                label="ID"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">id</InputAdornment>,
                }}
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">2차 번호</InputLabel>
                <OutlinedInput
                    id="password"
                    type={values2.showPassword ? 'text' : 'password'}
                    value={values2.password}
                    onChange={handleChange2('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end"
                        >
                        {values2.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
                <FormControl sx={{ m: 1, width:'30ch'}}>
                <InputLabel htmlFor="outlined-adornment-amount">E-mail</InputLabel>
                <OutlinedInput
                    id="amount"
                    value={values2.amount}
                    onChange={handleChange2('amount')}
                    startAdornment={<InputAdornment position="start">@</InputAdornment>}
                    label="Amount"
                />
                </FormControl>
            </div>
        </Box>
    );
}