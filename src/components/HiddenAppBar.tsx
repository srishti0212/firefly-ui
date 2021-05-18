import React from 'react';
import { IconButton, Hidden, makeStyles, Box } from '@material-ui/core';
import MenuIcon from 'mdi-react/MenuIcon';
import { ReactComponent as LogoIconSVG } from '../svg/ff-logo-symbol-white.svg';

type Props = {
  navigationOpen: boolean;
  setNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const HiddenAppBar: React.FC<Props> = ({
  navigationOpen,
  setNavigationOpen,
}) => {
  const classes = useStyles();

  return (
    <Hidden implementation="css" mdUp>
      <Box className={classes.container}>
        <div className={classes.item}>
          <IconButton
            className={classes.navIcon}
            size="small"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <MenuIcon />
          </IconButton>
          <LogoIconSVG className={classes.logo} />
        </div>
      </Box>
    </Hidden>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 3),
    height: theme.mixins.toolbar.height,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
  },
  navIcon: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(1),
  },
  logo: {
    width: 49,
    height: 50,
  },
}));
