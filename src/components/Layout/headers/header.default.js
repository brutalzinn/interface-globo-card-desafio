import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import imageBackgound from '../../../image/background.svg'
import insightImage from '../../../image/insights.svg'
import profileImage from '../../../image/profile.jpg'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import { Typography } from '@material-ui/core'
import { navigate } from "@reach/router"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridContainer:{
        height:"200px",
        backgroundImage: `url(${imageBackgound})`,

    },
    gridChild:{
        margin:"auto",
    },
    arrowSize:{
        height: '24px',
        width: '24px',
        color: "#ED4D77"
    },
    gridBox:{
        justifyContent: "center",
        color:"#FFFFFF",
        alignItems: "center"
    },
    avatarChild:{
        height: '56px',
        width: '56px'
    }


}));

const HeaderHead = () =>{
    const classes = useStyles();
    const moreButton = () =>{
        navigate('/form')
    }
    return(
        <>
        <Grid container direction="row" justifyContent="center"
        >
        <Grid className={classes.gridChild} item xs={3}>
        <img width="50px" height="32px" src={insightImage} />
        </Grid>
        <Grid className={classes.gridChild} item xs={3}>
        <Avatar alt="Roberto Paes" className={classes.avatarChild}  src={profileImage} />
        </Grid>
        <Grid className={classes.gridChild} item >
        <IconButton onClick={moreButton}>
        <AddIcon className={classes.arrowSize}/>
        </IconButton>
        </Grid>
        </Grid>
        </>
        )
    }

    export default function Layout(){
        const classes = useStyles();

        return (

            <div className={classes.root}>
            <Grid container spacing={3} className={classes.gridContainer} direction="column">

            <Grid item >
            <HeaderHead/>
            </Grid>


            <Grid container className={classes.gridBox} direction="column">

            <Grid item>
            <Typography>Olá, Roberto!</Typography>
            </Grid>

            <Grid item>
            <Typography style={{color:"rgba(255, 255, 255, 24%)"}}>roberto.exemplo@g.globo</Typography>
            </Grid>

            <Grid item >
            <Typography style={{color:"#ED4D77", fontSize:"20px"}}>Feed de Insights</Typography>
            </Grid>



            </Grid>
            </Grid>
            </div>

            );

        }