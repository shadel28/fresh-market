import React from 'react'
import { FormControl, FormLabel, TextField, Button, Divider, Typography } from '@mui/material'
import './customer.css'

function Login() {
  return (
    <section className='login'>
        <div className='column'>
            <h1>Bienvenido de vuelta</h1>
            <FormControl className='form'>
                <FormLabel sx={{fontWeight: '700',  color: '#000', margin:' 2rem 0 .4rem 0'}}>Email</FormLabel>
                <TextField type="text" variant='outlined' defaultValue="Introduzca su email" />
                <FormLabel sx={{fontWeight: '700', color: '#000', margin:' 2rem 0 .4rem 0'}}>Contraseña</FormLabel>
                <TextField type="text" variant='outlined' defaultValue="Introduzca su contraseña" />
                <Button sx={{color: '#fff', backgroundColor: '#198754', marginTop: '2rem'}}>Iniciar Sesión</Button>
                <Divider/>
                <div className='no-account'>
                  <Typography sx={{fontSize: '.9rem'}}>¿No tiene una cuenta?</Typography>
                  <Button sx={{ color: '#000', fontWeight: '600', color: '#198754', fontSize: '.6rem', ':hover': {color: '#fff', backgroundColor: '#198754'}}}>Registrarse</Button>
                </div>
               
            </FormControl>
        </div>
        <div className='column'>
        </div>
    </section>
  )
}

export default Login