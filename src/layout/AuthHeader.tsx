
import { AppBar, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import Logo from './Logo';

export default function AuthHeader() {

  return (
    <AppBar position="fixed">
      <Toolbar className="items-center justify-between">
        <Box>
          <Logo />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
