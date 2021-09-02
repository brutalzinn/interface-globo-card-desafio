import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import imageBackgound from '../../image/background.svg'
import insightImage from '../../image/insights.svg'
import profileImage from '../../image/profile.jpg'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import Avatar from '@material-ui/core/Avatar'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridContainer:{
        height:300,
        width:"100%",
        backgroundImage: `url(${imageBackgound})`
    },
    gridChild:{
        margin:"10px"
    },
    moreButton: {
        padding: theme.spacing(3),
        margin:"10px",
        borderRadius:10,
        backgroundColor:"#F3F3F3",
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(3),
        margin:"10px",
        borderRadius:10,
        textAlign: 'center',
    },
}));


export default function Layout(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container>


        <Grid container xs={12} className={classes.gridContainer}>

        <Grid className={classes.gridChild} item xs={3}>
        <img width="36px" src={insightImage} />
        </Grid>
        <Grid className={classes.gridChild} item xs={3}>
        <Avatar alt="Roberto Paes" src={profileImage} />
        </Grid>
        <Grid className={classes.gridChild} item xs={3}>
        <IconButton aria-label="delete" color="primary">
        <AddIcon/>
      </IconButton>

        </Grid>


        </Grid>

        <Grid item xs={12}>
        <Paper className={classes.paper}> mensagem 1 </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}> mensagem 2</Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}> mensagem 3</Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.moreButton}> Clique para mais mensagens </Paper>
        </Grid>

        </Grid>
        </div>
        );

    }