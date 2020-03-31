import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


import MenuIcon from '@material-ui/icons/Menu';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import CastIcon from '@material-ui/icons/Cast';




// calendar menu modules
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    sectionDesktopLinks: {
      fontWeight: 500,
      letterSpacing: 0.4,
      //lineHeight: theme.typography.pxToRem(32),
      '& a:nth-of-type(1)': {
        marginLeft: theme.spacing(6)
      }
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    topbarLinks: {
      position: 'relative',
      overflow: 'hidden',
      marginLeft: theme.spacing(2),
      display: 'inline-flex',
      padding: '20px 8px',
      maxHeight: 64,

      '&:hover': {
        textDecoration: 'none',
        //borderBottom: '4px solid red'
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        background: theme.palette.secondary.main,
        bottom: 0,
        left: '0',
        right: '0',
        height: '3px',
        transform: 'translateX(-100%)',
        opacity: 0,
        transition: 'transform .2s linear,opacity .2s linear,-webkit-transform .2s linear'
      },
      '&:hover:before': {
        transform: 'translateX(0)',
        opacity: 1
      }
      
    }

  })
);

 


export default function Topbar(props: any) {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();


  //
  //  Webinar Popup
  //
  const [webinarAnchorEl, setWebinarAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleWebinarClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setWebinarAnchorEl(event.currentTarget);
  };

  const handleWebinarClose = () => {
    setWebinarAnchorEl(null);
  };

  const openWebinarPopover = Boolean(webinarAnchorEl);
  const webinarPopoverId = openWebinarPopover ? 'webinar-popover' : undefined;



  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h5" noWrap color='secondary'>
            <span style={{fontWeight: 500}}>Nodalview</span>
          </Typography>

          <Hidden smDown>
            <Typography className={classes.sectionDesktopLinks}>
              <Link href="#" onClick={props.toggleDrawer('left', true)} color="inherit" className={classes.topbarLinks}>
                Solutions
              </Link>
              <Link href="#" onClick={preventDefault} color="inherit" className={classes.topbarLinks}>
                Link 2
              </Link>
              <Link href="#" onClick={preventDefault} color="inherit" className={classes.topbarLinks}>
                Link 3
            </Link>
            </Typography>
          </Hidden>


          <div className={classes.grow} />

          {
            // 
            // Calendar Icon -> Upcoming Webinars Popup
            //
          }
          <IconButton
            aria-describedby={webinarPopoverId}
            onClick={handleWebinarClick}
            color="inherit"
          >
            <Badge badgeContent={2} color="secondary">
              <CalendarIcon />
            </Badge>
          </IconButton>
          <Popover
            id={webinarPopoverId}
            open={openWebinarPopover}
            anchorEl={webinarAnchorEl}
            onClose={handleWebinarClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <List aria-label="upcoming webinars">
              <ListItem>
                <ListItemIcon>
                  <CastIcon />
                </ListItemIcon>
                <ListItemText>
                  Webinar starting in 1d 4h 45m
                </ListItemText>

                <Box m={1} />

                <Button variant="contained" color="secondary">
                  Sign up
              </Button>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <CastIcon />
                </ListItemIcon>
                <ListItemText>
                  Webinar starting in 4d 17h 59m
                </ListItemText>

                <Box m={1} />

                <Button variant="contained" color="secondary">
                  Sign up
              </Button>
              </ListItem>
            </List>
          </Popover>


          {
            // 
            // Hamburger Icon - Mobile only
            //
          }
          <Hidden mdUp>
            <IconButton
              edge="end"
              color="inherit"
              onClick={props.toggleDrawer('top', true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>


          {
            // 
            // Get started Button - Desktop only
            //
          }
          <Hidden smDown>
            <Box m={1} />
            <Button
              variant="contained"
              color="secondary"
            >
              Get Started
            </Button>
          </Hidden>






        </Toolbar>
      </Container>
    </AppBar>
  )
}
