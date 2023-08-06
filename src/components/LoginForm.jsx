import * as React from 'react'
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material"
import { Lock as LockIcon } from '@mui/icons-material'
import { useAtom } from 'jotai'
import { authAtom } from '../auth'


const demoEmail = "melodi@bayraktar.com"

const demoPassword = "123456"

export const LoginForm = ({onLogin}) => {
    const [ auth, setAuth ] = useAtom( authAtom )
    const initialAuthState = { email: '', password: '', isAuthenticated: false };
    const [formData, setFormData] = React.useState(initialAuthState);


    const onSubmit = () => {
        if (formData.email !== demoEmail || formData.password !== demoPassword) {
            return console.log('Hatalı e-posta veya şifre');
          }
          setAuth({ ...formData, isAuthenticated: true });
          onLogin();

    }
    return (
        <Container maxWidth='sm' sx={ { pt: 10 } }>
            <Stack spacing={ 3 } alignItems={ 'center' }>
                <Box>
                    <Box sx={ { width: 80, height: 80, bgcolor: 'rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%' } }>
                        <LockIcon />
                    </Box>
                    <Typography sx={ { textAlign: 'center', mt: 1 } } variant='h6'>Login</Typography>
                </Box>


                <TextField value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} fullWidth label='E-mail' helperText={`Demo Email: ${demoEmail}`} />
        <TextField value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} fullWidth label='Password' helperText={`Demo Password : ${demoPassword}`} />
        <Button onClick={onSubmit} fullWidth variant="contained" disabled={!formData.email || !formData.password}>Giriş Yap</Button>
            </Stack>

        </Container>
    )


}