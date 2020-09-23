import React, { useState } from 'react';
import { Link } from '@reach/router';

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Tooltip,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Home from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import ShuffleIcon from '@material-ui/icons/Shuffle';

import Emoji from '../Emoji';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textTransform: 'none',
  },
  emoji: {
    marginRight: theme.spacing(1),
  },
  icons: {},
}));

const links = [
  {
    title: 'Home',
    icon: Home,
    to: '/',
  },
];

const IconButtons = ({ data }) => {
  const { title, icon, to } = data;
  const Icon = icon;
  return (
    <Tooltip title={title}>
      <IconButton color='inherit' component={Link} to={to}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
};

const Navbar = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialog = (action) => {
    if (action === 'open') {
      setDialogOpen(true);
    } else {
      setDialogOpen(false);
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Box className={classes.toolbar}>
            <Box>
              <Tooltip title='Home'>
                <Button color='inherit' component={Link} to='/'>
                  <Typography variant='h5' className={classes.title}>
                    <Emoji
                      symbol={'🎞️'}
                      label='movie frames'
                      className={classes.emoji}
                    />
                    Flix!
                  </Typography>
                </Button>
              </Tooltip>
            </Box>
            <Box className={classes.icons}>
              {links.map((link) => (
                <IconButtons key={link.title} data={link} />
              ))}
              <Tooltip title='Random Movie'>
                <IconButton
                  color='inherit'
                  onClick={() => handleDialog('open')}
                >
                  <ShuffleIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Source Code'>
                <IconButton
                  color='inherit'
                  onClick={() => handleDialog('open')}
                >
                  <CodeIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Dialog
        onClose={() => handleDialog('close')}
        aria-labelledby='dialog-title'
        open={dialogOpen}
      >
        <DialogTitle
          style={{
            padding: '14px',
          }}
        >
          <Emoji symbol={'😅'} label='oops' />
          Try again later
        </DialogTitle>
        <DialogContent
          style={{
            padding: '14px',
          }}
        >
          This button doesn't work yet, please try again later.
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
