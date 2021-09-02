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

}));


export default function Layout(){
    const classes = useStyles();

    return (
        <div className={classes.root}>


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


        </div>
        );

    }