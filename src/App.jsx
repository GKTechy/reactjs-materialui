import React, {useState,useEffect} from 'react';
import { Typography, AppBar,Card,CardActions,CardContent,CardMedia, CssBaseline,Grid, Toolbar,Container} from '@material-ui/core'
import MuseumIcon from '@material-ui/icons/Museum';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import useStyles from './styles'

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import data from './data.json';




const App=()=>{
    const cards=data;
    const classes=useStyles();
    const [module,setModule]=useState("frontend");
    const [activeButton, setActiveButton] = useState('frontend');
    
    useEffect( ()=>{

    },[module,activeButton]);

    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#009688'
          },
          secondary: {
            main: '#E33E7F'
          }
        }
      });

   
      
    return(
        <>
        <MuiThemeProvider theme={theme} className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MuseumIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>GK Techy</Typography>
                    
                    {/* <Button color="inherit">Front End</Button> 
                    <Button color="inherit">Back End</Button> 
                    <Button color="inherit">Others</Button>  */}

                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container className={classes.container} maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Tech Videos
                        </Typography>
                        {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                This is All youtube videos made by GK
                        </Typography> */}
                        <div>
                            <Grid container spacing={1} justify="center">
                                {/* <Grid item>
                                    <Button variant="contained" color="primary" onClick={ () => setModule("all")}>
                                        All
                                    </Button>
                                </Grid> */}
                                <Grid item>
                                    <Button variant= {module==="frontend"  ? 'contained' : 'outlined'} color="primary" name="frontend" onClick={ () => setModule("frontend")}>
                                        Front End
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant= {module==="backend"  ? 'contained' : 'outlined'} color="primary" name="backend"  onClick={ () => setModule("backend")}>
                                        Back End
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant= {module==="others"  ? 'contained' : 'outlined'} color="primary"  name="others"  onClick={ () => setModule("others")}>
                                        Others
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>

                    <Container maxWidth="md" className={classes.cardGrid}>
                        <Grid container spacing={2}>
                            {cards.map( ( card)=>{

                                    if(card.module === module){
                                        return  <Grid item xs={12} sm={6} md={4}>
                                                <Card className={classes.card}>
                                                    <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title">

                                                    </CardMedia>
                                                    <CardContent className={classes.cardCotent}>
                                                        <Typography gutterBottom variant="h5">
                                                            {card.heading}
                                                        </Typography>
                                                        <Typography> {card.title}</Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button size="small" color="primary" target="_blank" href={card.link}> Watch Video</Button>
                                                        {/* <Button size="small" color="primary"> Subscribe</Button> */}
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                    }
                                
                                })
                            }
                            
                        </Grid>
                    </Container>
                </div>
                
            </main>
            <footer className={classes.footer}>
                   <Typography variant="h6" align="center" gutterBottom>
                            Create by GK Techy
                    </Typography>  
                    <Typography variant="subtitle1" align="center" gutterBottom>
                            copyright @2021
                    </Typography>             
            </footer>

        </MuiThemeProvider>

        </>
    )
}

export default App;
