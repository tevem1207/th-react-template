import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function SignUpForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="name"
            required
            fullWidth
            id="name"
            label="이름"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="address"
            label="주소"
            type="address"
            id="address"
            autoComplete="address"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            name="rrnFirst"
            label="주소"
            type="number"
            id="rrnFirst"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            name="rrnLast"
            label="주소"
            type="number"
            id="rrnLast"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link component={RouterLink} to="/signin" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}