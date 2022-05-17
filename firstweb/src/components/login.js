import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login() {
    return (
        <div className='login'>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <div>
                    <TextField
                    error
                    id="아이디"
                    label="ID"
                    defaultValue="id를 입력"
                    helperText="Incorrect entry."
                    variant="standard"
                    />
                    <TextField
                    error
                    id="패스워드"
                    label="Password"
                    defaultValue="Password를 입력"
                    helperText="Incorrect entry."
                    variant="standard"
                    />
                </div>
                <div>
                    <TextField
                    error
                    id="2차 패스워드"
                    label="2-Password"
                    defaultValue="2차 패스워드 입력"
                    helperText="Incorrect entry."
                    variant="standard"
                    />
                    <TextField
                    error
                    id="이름"
                    label="Name"
                    defaultValue="이름 입력"
                    helperText="Incorrect entry."
                    variant="standard"
                    />
                </div>
                <div>
                    <TextField
                    error
                    id="이메일"
                    label="E-mail"
                    defaultValue="abc@abc.com"
                    helperText="Incorrect entry."
                    variant="standard"
                    />
                    <TextField
                    error
                    id="닉네임"
                    label="nickname"
                    defaultValue="신박한 닉네임"
                    helperText="Incorrect entry."
                    variant="standard"
                    />
                </div>
            </Box>
      </div>
    );
}