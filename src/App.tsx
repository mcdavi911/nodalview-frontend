import React from 'react';
import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import Topbar from './components/Topbar'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
//import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';
import Link from '@material-ui/core/Link';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import CastIcon from '@material-ui/icons/Cast';

import Alert from '@material-ui/lab/Alert';

import /*SvgIcon,*/ { SvgIconProps } from '@material-ui/core/SvgIcon';

import './App.scss';
import { useMediaQuery } from '@material-ui/core';

import logo2 from './assets/nodalview-CesaretBrutus-businesscard.png'
import logo4 from './assets/nodalview-nexthome-bussiness-card.png'
import logo6 from './assets/nodalview-trevi-group.png'


import logo1 from './assets/nodalvie-riani-immobilier-business-card-logo.png'

import logo3 from './assets/nodalview-colwell-banker-business-card-logo.png'



import logo7 from './assets/nodalview-citisoft-logo.png'
import logo8 from './assets/nodalview-danielperou-business-card-logo.png'
import logo9 from './assets/nodalview-sequoia-immobilier-business-card-url.png'
import logo10 from './assets/nodalview-solvimmo-vitrolles-businesscard.png'
import logo11 from './assets/nodalview-lodstransaction-business-card-logo.png'
import logo12 from './assets/nodalview-imro-businesscard.png'


import logo5 from './assets/nodalview-ocbo-businesscard-logo.png'


import lg1 from './assets/md/treviGroup.png'
import lg2 from './assets/md/capiFrance.png'
import lg3 from './assets/md/cesarBrutus.png'
import lg4 from './assets/md/citisoftware.png'
import lg5 from './assets/md/coldwellBanker.png'
import lg6 from './assets/md/imro.png'
import lg7 from './assets/md/lodsTransaction.png'
import lg8 from './assets/md/nextHome.png'
import lg9 from './assets/md/ocestBeau.png'
import lg10 from './assets/md/riani.png'
import lg11 from './assets/md/sequoia.png'
import lg12 from './assets/md/solvimo.png'




const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    drawerContent: {
      minWidth: 768,
      padding: theme.spacing(4)
    },
    listItemText: {
      fontSize: theme.typography.pxToRem(24), // revise
      fontWeight: 500, // revise
      lineHeight: 1.7 // creates 64px height, same as topbar
    },
    alert: {
      borderRadius: 12,
      background: '#f2f2f2',
      marginBottom: '2vh',
      marginTop: '2vh',
      [theme.breakpoints.up('sm')]: {
        marginBottom: '3vh',
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: '4vh',
      }
    },
    chipTest: {
      height: 18
    },
    chipLabel: {
      paddingLeft: 6,
      paddingRight: 6,
      fontWeight: 500
    },
    textFieldLabel: {
      transform: 'translate(16px, 34px) scale(1)',
      fontSize: theme.typography.pxToRem(18),
      fontWeight: 600,
    },
    signUpWrapper: {

      [theme.breakpoints.up('md')]: {
        display: 'flex',
        maxWidth: '80%'
      }
    },
    sectionTitle: {
      fontWeight: 600,
      marginBottom: '1vh',
      lineHeight: 1.25,

      [theme.breakpoints.up('xs')]: {
        fontSize: 'calc(1.25vw + 32px)',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 'calc(2.28571vw + 25.37143px)',
        marginBottom: '1.5vh',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 'calc(1.77384vw + 30.43902px)',
        marginBottom: '2vh',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 'calc(1.66667vw + 31.98333px)',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: theme.typography.pxToRem(64),
      },

    },
    sectionSubtitle: {
      color: '#292929',
      lineHeight: 1.25,
      marginBottom: '1vh',
      fontSize: theme.typography.pxToRem(20),
      [theme.breakpoints.up('xs')]: {
        fontSize: theme.typography.pxToRem(20),
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 'calc(.57143vw + 16.34286px)',
        marginBottom: '1.5vh'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 'calc(.44346vw + 17.60976px)',
        marginBottom: '2vh'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: theme.typography.pxToRem(24),
      },
    },
    sectionContainer: {
      padding: theme.spacing(6),

      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(8)
      },
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(12)
      },
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing(16)
      },
    },
    introSignUp: {
      display: 'flex',
      alignItems: 'center',
    },
    inputEmail: {
      height: theme.spacing(11),
      fontSize: theme.typography.pxToRem(18),
      fontWeight: 500,
      width: '100%',
      flexGrow: 1,
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(1)
      }
    },
    btnSignUp: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: 500,
      flexShrink: 0,
      //lineHeight: 32,
      letterSpacing: .5,
      backgroundImage: 'linear-gradient(90deg,red,#ff3e98 50%,#6a1180)',
      color: '#fff',
      padding: theme.spacing(3, 6), // `${theme.spacing(2)}px ${theme.spacing(6)}px`
      height: theme.spacing(11),
      width: '100%',

      [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
      }
    },
    playVideoImage: {
      cursor: 'pointer',
      height: '100%',
      width: '100%',
      minHeight: '30vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '&:hover $btnCirclePlayVideo': {
        transform: 'scale(1.1)',
      }
    },
    btnCirclePlayVideo: {
      position: 'absolute',
      top: 'auto',
      left: 'auto',
      //marginLeft: '20%', 
      //marginTop: '20%', 

      background: '#000',
      borderRadius: '100%',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      fontWeight: 500,
      transform: 'scale(1)',
      transition: 'transform .4s cubic-bezier(.25,.8,.25,1)',
      width: 96,
      height: 96,
      textAlign: 'center',
      padding: theme.spacing(1),

      [theme.breakpoints.up('md')]: {
        //marginLeft: '18%',
        //marginTop: '10%',
        width: 160,
        height: 160,
      },
    },
    playIcon: {
      display: 'block',
      width: 40,
      height: 40,
      marginLeft: 26,
      marginBottom: 8,
    },
    introFlexbox: {
      height: 'calc(100vh - 64px)',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      },
      [theme.breakpoints.up('sm')]: {
        alignItems: 'center'
      }
    },
    logosWrapper: {
      background: '#FAF1EA',
      filter: 'grayscale(100%)',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignItems: 'center',
      padding: theme.spacing(4),

      [theme.breakpoints.up('lg')]: {
        //flexWrap: 'nowrap'
      },
      [theme.breakpoints.down('sm')]: {
        //transform: 'scale(0.5)'
      },
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8)
      },
    },
    logoBox: {
      //minHeight: '100%',
      //width: 200
      display: 'flex',
      //flex: '1 1 50%',
      justifyContent: 'center',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        //flex: '1 1 33%',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      [theme.breakpoints.up('lg')]: {
        //flex: '0 0 15%'
      },
    },
    logoImg: {
      maxWidth: '100%',
      height: 'auto'
    },
    logoBox2: {
      padding: 16,
      marginBottom: 16,
    },
    cardsWrapper: {
      backgroundImage: `linear-gradient(180deg,#fafafa 50%,${grey[300]})`,
      paddingBottom: theme.spacing(6)
    },
    textGradient: {
      backgroundClip: 'text',
      color: theme.palette.secondary.main,
      backgroundImage: 'linear-gradient(90deg,red,#ff3e98 50%,#6a1180)'
    },
    gridItemCard: {
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(3),

      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2)
      }
    },
    BigNumber: {
      fontSize: theme.typography.pxToRem(32),
      fontWeight: 800,
      //backgroundImage: 'linear-gradient(90deg,red,#ff3e98 50%,#6a1180)',
      //backgroundClip: 'text',
      //WebkitTextFillColor: 'transparent',
      marginBottom: '.25vh',
      textAlign: 'center',
      display: 'block',

      [theme.breakpoints.up('xs')]: {
        fontSize: 'calc(1.25vw + 32px)'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 'calc(16vw - 62.4px)',
        marginBottom: '.375vh',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 'calc(7.09534vw + 25.7561px)',
        marginBottom: '.5vh'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: theme.typography.pxToRem(128),
      },
    },
    BigNumberSubText: {
      padding: 0,
      fontSize: theme.typography.pxToRem(22),
      lineHeight: 1.25,
      marginBottom: 8,
      //color: '#fff',
      maxWidth: 768,
      fontWeight: 700,
      textAlign: 'center',
      margin: '0 auto',
      [theme.breakpoints.up('sm')]: {
        marginBottom: 'calc(.41667vw + 5.33333px)',
        fontSize: 'calc(.49938vw + 18.804px)'
      },
      [theme.breakpoints.up('md')]: {

      },
      [theme.breakpoints.up('lg')]: {
        fontSize: theme.typography.pxToRem(26)
      },
      signUpWrapperSmall: {
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        }
      },
    },
    btnSubscribe: {
      backgroundImage: 'linear-gradient(90deg,red,#ff3e98 50%,#6a1180)',
      color: '#fff',
      padding: theme.spacing(1, 4), // `${theme.spacing(2)}px ${theme.spacing(6)}px`
      //height: theme.spacing(2),

      [theme.breakpoints.down('sm')]: {
        marginTop: 8,
        width: '100%'
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
      }
    },
    flexSmUp: {

      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },





    toolbar: theme.mixins.toolbar
  })
);

const PlayIcon = (props: SvgIconProps) => (
  <svg {...props}>
    <polygon points="0,0 40,20 0,40" fill="white" />
  </svg>
)

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12">
    <g fill="none" fill-rule="evenodd" transform="translate(-4 -6)">
      <path fill="currentColor" fill-rule="nonzero" transform="rotate(180 12 12.007)" d="M10.6854828,7.71610678 C11.0760071,7.32558249 11.0760071,6.69241751 10.6854828,6.30189322 C10.2949585,5.91136893 9.6617935,5.91136893 9.27126921,6.30189322 L4.29289322,11.2961498 C3.90236893,11.6866741 3.90236893,12.3198391 4.29289322,12.7103634 L8.74562299,17.7123528 C9.13614728,18.1028771 9.76931226,18.1028771 10.1598365,17.7123528 C10.5503608,17.3218285 10.5503608,16.6886635 10.1598365,16.2981392 L7.41421356,13.0032566 L19,13.0032566 C19.5522847,13.0032566 20,12.5555413 20,12.0032566 C20,11.4509718 19.5522847,11.0032566 19,11.0032566 L7.41421356,11.0032566 L10.6854828,7.71610678 Z"></path> </g>
  </svg>
)



function App() {
  const classes = useStyles();
  const theme = useTheme();


  //
  //  Drawer *revise with example
  //
  //type Anchor = 'top' | 'left';

  // Drawer from top in mobile view, otherwise left
  const anchor = useMediaQuery(theme.breakpoints.down('sm')) ? 'top' : 'left';

  // change to set toggle with prevstate. simple boolean
  const [isDrawerToggle, setIsDrawerToggle] = React.useState(false);

  const toggleDrawer = () => (
    event: React.SyntheticEvent
  ) => {
    event.preventDefault();

    setIsDrawerToggle((prevstate: boolean) => !prevstate)
  };


  //
  //  Drawer Content
  //
  const drawerContent = () => {

    return (
      <List
        className={classes.drawerContent}
        component="nav"
        aria-labelledby="nested-list-subheader"
        /*subheader={
          <ListSubheader>
            Subheader
          </ListSubheader>
        }*/
        style={{ width: '100%', maxWidth: 360, backgroundColor: 'white' }}
      >
        <ListItem button>
          <ListItemText classes={{ primary: classes.listItemText }}>
            Solutions
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText classes={{ primary: classes.listItemText }}>
            Link 2
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText classes={{ primary: classes.listItemText }}>
            Link 3
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText classes={{ primary: classes.listItemText }}>
            Link 4
          </ListItemText>
        </ListItem>
      </List>
    )
  }


  return (
    <div className="App">

      <Topbar toggleDrawer={toggleDrawer} />

      <Drawer
        anchor={anchor}
        open={isDrawerToggle}
        onClose={toggleDrawer()}
        variant='temporary'
      >
        <div className={classes.toolbar}></div>

        {drawerContent()}
      </Drawer>

      <main>
        <div className={classes.toolbar}></div>

        {
          /*
            Intro - Sign Up / Play Video
          */
        }
        <section>
          <Container>
            <Box display="flex" className={classes.introFlexbox} >
              <Grid container >
                <Grid item xs={12} md={6}>

                  <Alert className={classes.alert} icon={<Hidden smDown><Chip classes={{ root: classes.chipTest, label: classes.chipLabel }} label="NEW" color="secondary" /></Hidden>} >We're stepping up to help during this unprecedented time. *COVID-19 CUSTOMER CARE PROGRAM*</Alert>

                  <Typography variant="h2" classes={{ root: classes.sectionTitle }}>
                    Nodalview turns <span style={{ whiteSpace: 'nowrap' }}>real estate</span> viewings into <span className={`textGradient ${classes.textGradient}`} style={{}}>extraordinary experiences</span>
                  </Typography>


                  {/*className={classes.introSignUp}*/}
                  <Box className={classes.signUpWrapper}>

                    <FormControl fullWidth variant="filled" >
                      <InputLabel htmlFor="component-filled" color="secondary" classes={{ root: classes.textFieldLabel }}>Email</InputLabel>
                      <FilledInput id="component-filled" color="secondary" classes={{ root: classes.inputEmail }} />
                    </FormControl>

                    <Button variant="contained" classes={{ root: classes.btnSignUp }}>
                      Sign Up Free
                    </Button>

                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  Check goPro social media icons reactions
                  <div className={classes.playVideoImage}>
                    <div className={classes.btnCirclePlayVideo}>
                      <span>
                        <Hidden smDown>
                          <PlayIcon width={42} height={42} className={classes.playIcon} />
                        </Hidden>
                  Play video
                </span>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>

        {
          /*
            3 Cards
          */
        }
        <section>
          <Box className={classes.cardsWrapper}>
            <Container>
              <Grid container>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItemCard}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        style={{ background: grey[200], position: 'relative', width: '100%', paddingTop: '56.25%' }} // 16:9 ratio
                        image=""
                        title="Corona Client Program"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Client Offer During COVID-19
                    </Typography>
                      </CardContent>

                    </CardActionArea>
                    <CardActions>
                      <Button color="secondary" style={{ fontSize: '1rem' }}>
                        Learn More
                      <span style={{ marginLeft: theme.spacing(1) }}>
                          <ArrowIcon />
                        </span>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItemCard}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        style={{ background: grey[200], position: 'relative', width: '100%', paddingTop: '56.25%' }} // 16:9 ratio
                        image=""
                        title="Corona Client Program"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Webinar
                    </Typography>
                      </CardContent>

                    </CardActionArea>
                    <CardActions>
                      <Button color="secondary" style={{ fontSize: '1rem' }}>
                        Learn More
                      <span style={{ marginLeft: theme.spacing(1) }}>
                          <ArrowIcon />
                        </span>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.gridItemCard}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        style={{ background: grey[200], position: 'relative', width: '100%', paddingTop: '56.25%' }} // 16:9 ratio
                        image=""
                        title="Corona Client Program"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Blog
                    </Typography>
                      </CardContent>

                    </CardActionArea>
                    <CardActions>
                      <Button color="secondary" style={{ fontSize: '1rem' }}>
                        Learn More
                      <span style={{ marginLeft: theme.spacing(1) }}>
                          <ArrowIcon />
                        </span>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </section>

        {
          /*
            Logos
          */
        }






        <section>
          <Grid container className={classes.logosWrapper}>
            <Grid item xs={6} md={2}>
              <Box p={1} className={classes.logoBox}>
                <img className={classes.logoImg} src={lg1} alt="logo-riani-immobilier" />
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box p={1} className={classes.logoBox}>
                <img className={classes.logoImg} src={lg2} alt="logo-riani-immobilier" />
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box p={1} className={classes.logoBox}>
                <img style={{ filter: 'invert(1)' }} className={classes.logoImg} src={lg3} alt="logo-riani-immobilier" />
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box p={1} className={classes.logoBox}>
                <img className={classes.logoImg} src={lg4} alt="logo-riani-immobilier" />
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box p={1} className={classes.logoBox}>
                <img className={classes.logoImg} src={lg5} alt="logo-riani-immobilier" />
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box p={1} className={classes.logoBox}>
                <img className={classes.logoImg} src={lg8} alt="logo-riani-immobilier" />
              </Box>
            </Grid>
          </Grid>
        </section>









        <section>
          <Container className={classes.sectionContainer}>
            <Grid container style={{ minHeight: 400 }}>
              <Grid item xs={12} sm={6}>
                <h2 className={classes.sectionTitle}>Step up your <span style={{ whiteSpace: 'nowrap' }} className={`textGradient ${classes.textGradient}`}>Click<Hidden xsDown>-Through</Hidden>-Rate</span></h2>

                <Button color="secondary" style={{ fontSize: '1rem' }}>
                  See How
                  <span style={{ marginLeft: theme.spacing(1) }}>
                    <ArrowIcon />
                  </span>
                </Button>

              </Grid>
              <Grid item xs={12} sm={6}>

              </Grid>
            </Grid>
          </Container>
        </section>

        <section style={{ background: '#f2f2f2' }}>
          <Container className={classes.sectionContainer}>
            <Grid container style={{ minHeight: 400 }}>
              <Grid item xs={12} sm={6}>

              </Grid>
              <Grid item xs={12} sm={6}>

                <h2 className={classes.sectionTitle}>Harness the power of <span className={`textGradient ${classes.textGradient}`}>HDR photos</span></h2>

                <Button color="secondary" >
                  Explore HDR images
                    <span style={{ marginLeft: theme.spacing(1) }}>
                    <ArrowIcon />
                  </span>
                </Button>

              </Grid>
            </Grid>
          </Container>
        </section>


        <section style={{ background: '#f2f2f2' }}>
          <Container className={classes.sectionContainer}>
            <Grid container style={{ minHeight: 400 }}>
              <Grid item xs={12} sm={6}>

              </Grid>
              <Grid item xs={12} sm={6}>
                <h2 className={classes.sectionTitle}>Enhance your visibility with <span className={`textGradient ${classes.textGradient}`}>360° Panoramas</span></h2>
                <Button color="secondary">
                  See How
                    <span style={{ marginLeft: theme.spacing(1) }}>
                    <ArrowIcon />
                  </span>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </section>


        <section style={{ background: '#f2f2f2' }}>
          <Container className={classes.sectionContainer}>
            <Grid container style={{ minHeight: 400 }}>
              <Grid item xs={12} sm={6}>

              </Grid>
              <Grid item xs={12} sm={6}>
                <h2 className={classes.sectionTitle}>Monitor <span style={{ whiteSpace: 'nowrap' }}>click-rate</span> <span className={`textGradient ${classes.textGradient}`}>improvement over time</span></h2>

                <Typography className={classes.sectionSubtitle}>
                  Track, measure, and celebrate higher click rates and business impact
                </Typography>
                <Button color="secondary">
                  See How
                    <span style={{ marginLeft: theme.spacing(1) }}>
                    <ArrowIcon />
                  </span>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </section>


        <section>
          <Container className={classes.sectionContainer}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignContent="center" >
              <h2 className={classes.BigNumber}>
                12.000
              </h2>
              <p className={classes.BigNumberSubText}>
                Customer photos each day are turned into extraordinary experiences with Nodalview equipment and intelligent cloud
              </p>
            </Box>

          </Container>
        </section>


        <section style={{ background: '#f2f2f2' }}>
          <Container className={classes.sectionContainer}>
            <Box p={6}>
              <Typography variant="h2" className={classes.sectionTitle} >
                "Nodalview recommendation quote"
              </Typography>
            </Box>

            <div className={classes.flexSmUp}>
              <Hidden mdDown>
                <Grid item sm={12} lg={4}>
                  <Typography variant="h3" classes={{ root: classes.sectionTitle }}>
                    Let's get started
                  </Typography>
                </Grid>
              </Hidden>

              <Box display="flex" p={2}>
                <CastIcon style={{ transform: 'scale(2)' }} />
                <span className={classes.BigNumberSubText} style={{ marginLeft: theme.spacing(3), marginBottom: 0 }}>Watch a Webinar</span>
              </Box>

              <Box className={classes.signUpWrapper}>

                <FormControl fullWidth variant="filled">
                  <InputLabel htmlFor="component-filled" color="secondary">Email</InputLabel>
                  <FilledInput id="component-filled" color="secondary" />
                </FormControl>

                <Button className={classes.btnSubscribe}>
                  Subscribe
                </Button>
              </Box>
            </div>
          </Container>
        </section>



        <footer>
          <Container className={classes.sectionContainer}>
            <Grid container style={{ minHeight: 400 }}>
              <Grid item xs={12} sm={6} md={3}>
                Overview
                <List>
                  <ListItem>
                    Home
                  </ListItem>
                  <ListItem>
                    Prices
                  </ListItem>
                  <ListItem>
                    Examples
                  </ListItem>
                  <ListItem>
                    Shop
                  </ListItem>
                  <ListItem>
                    Blog
                  </ListItem>
                  <ListItem>
                    FAQ
                  </ListItem>
                  <ListItem>
                    Terms
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                Support
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                Careers
                <List>
                  <ListItem>
                    Overview
                  </ListItem>
                  <ListItem>
                    Jobs
                  </ListItem>
                  <ListItem>
                    FAQ
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                Company
                <List>
                  <ListItem>
                    About Nodalview
                  </ListItem>
                  <ListItem>
                    Press
                  </ListItem>
                  <ListItem>
                    Training
                  </ListItem>
                  <ListItem>
                    Contact
                  </ListItem>
                </List>
              </Grid>
            </Grid>

          </Container>
        </footer>

      </main>


    </div >
  );
}

export default App;
