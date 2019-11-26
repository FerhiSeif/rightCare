import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import MenuSide from './utilities/sidemenu/Menu';
import Header from './utilities/sidemenu/Header';

const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: 'auto',
  },
});

const DrawerLayout = (props) => {
  const {
    t,
    toggleDrawer,
    left,
    containerWidth,
  } = props;

  const classes = useStyles();
  const sideList = (side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Header containerWidth={containerWidth} />
      <Divider />
      <div className="menu-container">
        <MenuSide t={t} />
      </div>
    </div>
  );

  return (
    <div>
      <Drawer open={left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
};

export default DrawerLayout;
