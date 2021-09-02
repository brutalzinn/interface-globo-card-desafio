import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import imageBackgound from '../image/background.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid:{
        height:300,
        width:"100%",
        backgroundImage: `url(${imageBackgound})`
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
}));


export default function Layout(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container>


        <Grid item xs={12} className={classes.grid}>
        </Grid>

        <Grid item xs={12}>
        <Paper className={classes.paper}> mensagem </Paper>
        </Grid>



        </Grid>
        </div>
        );

    }