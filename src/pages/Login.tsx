import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'
import Typography from '@mui/material/Typography'
import api from '../api'
import { User } from '../api/DTO/User'
import { useNavigate } from 'react-router-dom'
import { authStatusContext } from '../routes/AuthStatus/AuthStatusProvider'
import classNames from 'classnames'
import './Login.scss'
import * as EmailValidator from 'email-validator'
// React.useContext()

const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        IADC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const SignInSide = () => {
  const authStatus = React.useContext(authStatusContext)
  const navigate = useNavigate()
  const [signInOpen, setsignInOpen] = React.useState<boolean>(true)
  const [signUpOpen, setsignUpOpen] = React.useState<boolean>(false)
  const [verifyOpen, setverifyOpen] = React.useState<boolean>(false)
  const [registerEmail, setregisterEmail] = React.useState<string>('')
  const [isEmailValid, setisEmailValid] = React.useState<boolean>(false)
  const [emailHelperText, setemailHelperText] = React.useState<string>('')

  React.useEffect(() => {
    localStorage.removeItem('token')
  }, [])

  React.useEffect(() => {
    if (registerEmail.length === 0) {
      setemailHelperText('')
      console.log('aaaaaaaaaaaaa')
    }
  }, [registerEmail])

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (data.get('password') !== null && data.get('email') !== null) {
      const response = await api.auth.authenticateUser(
        new User({
          email: data.get('email') as string,
          password: data.get('password') as string
        })
      )
      if (response.status === 200) {
        const content = await response.json()
        localStorage.setItem('token', content.token)
        await authStatus.authenticateToken(content.token)
        navigate('/', { replace: true })
      }
    }
  }

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log(data)
    // data.get('email') !== null && data.get('email') !== null && data.get('email') !== null && data.get('email') !== null
    if (data) {
      // const response = await api.user.registerUser(
      //   new RegisterUser({
      //     email: data.get('email') as string,
      //     username: data.get('username') as string,
      //     password: data.get('password') as string,
      //     phoneNumber: data.get('phonenumber') as string
      //   })
      // ) response.status === 200
      if (data) {
        // const content = await response.json()
        // console.log(content)
        setverifyOpen(true)
        setsignUpOpen(false)
      }
    }
  }

  const handleContinueSignIn = async () => {
    setverifyOpen(false)
    setsignInOpen(true)
  }

  const handleSignUpOpen = () => {
    setsignInOpen(prev => !prev)
    setsignUpOpen(prev => !prev)
  }

  const handleRegisterEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setregisterEmail(event.target.value)
  }

  const handleValidateEmail = () => {
    const isEmailValid = EmailValidator.validate(registerEmail)
    setisEmailValid(isEmailValid)
    if (isEmailValid || registerEmail.length === 0) {
      setemailHelperText('')
    } else {
      setemailHelperText('email格式不正確')
    }
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }} className='login-page'>
      <CssBaseline />

      <Grid item xs={false} sm={4} md={7}
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1607432750402-48f85c94f63a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

        {/* 登入頁面 */}
        <Box
          sx={{
            my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}
          className={
            classNames({ 'sign-in': true }, { hide: !signInOpen })
          }
        >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" noValidate onSubmit={handleSignIn} sx={{ mt: 1 }}>
            <TextField
              margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus
            />
            <TextField
              margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
            />
            <Button
              type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {'Forgot password?'}
                </Link>
              </Grid>
              <Grid item>
                <p onClick={handleSignUpOpen}>
                  {"Don't have an account? Sign Up"}
                </p>
              </Grid>
            </Grid>

            <Copyright sx={{ mt: 5 }} />

          </Box>
        </Box>

        {/* 註冊頁面 */}
        <Box
          sx={{
            my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}
          className={
            classNames({ 'sign-up': true }, { hide: !signUpOpen })
          }
        >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HowToRegOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSignUp} sx={{ mt: 1 }}>

            <TextField
              margin="normal" required fullWidth id="email" label="Email Address"
              name="email" autoComplete="email" autoFocus value={registerEmail}
              onChange={handleRegisterEmailChange} onBlur={handleValidateEmail}
              error={!isEmailValid && registerEmail.length !== 0}
              helperText={emailHelperText}
            />

            <TextField
              margin="normal" required fullWidth id="username" label="Username" name="username" autoComplete="username" autoFocus
            />

            <TextField
              margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
            />

            <TextField
              margin="normal" required fullWidth name="confirm-password" label="Confirm password" type="password" id="confirm-password" autoComplete="current-password"
            />

            <TextField
              margin="normal" required fullWidth name="phonenumber" label="Phone number" type="phonenumber" id="phonenumber" autoComplete="phonenumber"
            />

            <Button
              type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>

            <Grid container>
              <Grid item>
                <a onClick={handleSignUpOpen}>
                  {'Already have an account? Sign In'}
                </a>
              </Grid>
            </Grid>

            <Copyright sx={{ mt: 5 }} />

          </Box>
        </Box>

        {/* 驗證信頁面 */}
        <Box
          sx={{
            my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}
          className={
            classNames({ 'verify-email': true }, { hide: !verifyOpen })
          }
        >

          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HowToRegOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Verification mail sent!
          </Typography>

          <Box component="form" noValidate onSubmit={handleContinueSignIn} sx={{ mt: 1 }}>

            <Button
              type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}
            >
              Log In!
            </Button>

            <Copyright sx={{ mt: 5 }} />

          </Box>
        </Box>

      </Grid>

    </Grid>
  )
}

export default SignInSide
