import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles( (theme)=>({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    container:{
        backgroundColor:theme.palette.background.paper,
        padding: theme.spacing(8,0,2),
        marginTop: '20px'
    },icons:{
        marginRight: '20px'
    },cardGrid:{
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },cardMedia:{
        paddingTop:'56.25%' //16:9
    },cardCotent:{
        flexGrow:1,
    } ,footer:{
        backgroundColor:theme.palette.background.paper,
        padding:'50px 0'
    } 

}));

export default useStyles;
