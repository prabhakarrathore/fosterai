
import { Collapse, Divider, IconButton, Toolbar } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { CSSObject, Theme, styled } from '@mui/material/styles';
import { Fragment, useState } from 'react';
import { HiMiniChevronDoubleLeft, HiOutlineBars3BottomLeft, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import CustomLink from '../controls/CustomLink';
import { COMPANY_DETAILS, DASHBOARD, MASTERS, MMJC_MASTER } from '../util/string';
import Header from './Header';

type MenuItem = {
  name: string;
  path: string;
  icon: string;
  submenu?: MenuItem[];
};

type MenuItems = MenuItem[];

const listItems: MenuItems = [
  {
    name: DASHBOARD,
    path: '/',
    icon: 'HiOutlineSquares2X2'
  },
  {
    name: MASTERS,
    path: '#',
    icon: 'HiOutlineSquare3Stack3D',
    submenu: [{
      name: MMJC_MASTER,
      path: '#',
      icon: ''
    },
    {
      name: COMPANY_DETAILS,
      path: '#',
      icon: ''
    }]
  }
]


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: '#EDECEC',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#EDECEC',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setOpenSubmenus({});
  };

  const handleSubmenuToggle = (name: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <>
      <AppBar position="fixed" open={open} color='default'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 4,
              ...(open && { display: 'none' }),
            }}
          >
            <HiOutlineBars3BottomLeft />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <HiMiniChevronDoubleLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className='!p-0'>
          {listItems.map((item) => (
            <Fragment key={item.name}>
              <ListItem className='!p-0' onClick={item.submenu ? () => handleSubmenuToggle(item.name) : undefined}>
                <ListItemButton to={item.path} open={open} name={item.name} iconName={item.icon} component={CustomLink}>
                  <ListItemText hidden={!open} primary={item.name} className='m-0 hover:text-primary' />
                  {open && item.submenu && (
                    <>
                      {openSubmenus[item.name] ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
                    </>
                  )}
                </ListItemButton>
              </ListItem>
              {item.submenu && (
                <Collapse in={openSubmenus[item.name]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding className='bg-white'>
                    {item.submenu.map((menu) => (
                      <ListItem key={menu.name} className='!p-0 border-b border-[#ddd] last:border-0'>
                        <ListItemButton to={menu.path} open={openSubmenus[item.name]} name={menu.name} component={CustomLink} isSubmenu>
                          <ListItemText hidden={!open} primary={menu.name} className='m-0 hover:text-primary' />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </Fragment>
          ))}
        </List>

      </Drawer>
    </>
  );
};

export default Sidebar;

