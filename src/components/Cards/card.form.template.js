import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#F4F4F4"
    },
    gridChild:{
        margin:"10px"
    },
    paper: {
        padding: theme.spacing(3),
        margin:"10px",
        borderRadius:10,
        textAlign: 'center',
    },
    textBox:{
        width:"100%",
        height:"256px"
    }
}));


const CardFormTemplate = () =>{
    const classes = useStyles();



    return(
        <Paper className={classes.paper}>

        <TextField
        label="INSIGHT"
        multiline
        className={classes.textBox}
        rows={10}
        defaultValue=""
        variant="standard"
        />
        <Typography style={{color:"rgba(0,0,0,40%)", fontSize:"12px",marginLeft:"55%"}}>limite de caracteres:400</Typography>



        </Paper>)
    }

    export default CardFormTemplate