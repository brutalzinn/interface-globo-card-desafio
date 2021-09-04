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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography } from '@material-ui/core'
import { navigate } from "@reach/router"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height:"55px",
        backgroundImage: `url(${imageBackgound})`
    },
    gridChild:{
        margin:"auto"
    },
    arrowSize:{
        height: '24px',
        width: '24px',
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

const HeaderHead = ({mode}) =>{
    const classes = useStyles();
    const returnButton = () =>{
        navigate('/')
    }
    return(
        <>
        <Box
        display="flex" height="55px" alignItems="center" flexDirection="row"
        >
        <IconButton onClick={returnButton} style={{color: "#ED4D77" }}>
        <ArrowBackIcon className={classes.arrowSize} />
        </IconButton>
        <Typography style={{margin:"auto",color:"#ED4D77", fontSize:"20px"}}>{mode == 0 ? "Criar Insight" : "Editar Insight"}</Typography>
        </Box>
        </>
        )
    }

    export default function Header({mode}){
        const classes = useStyles();
        return (
            <div className={classes.root}>
            <HeaderHead mode={mode}/>
            </div>

            );

        }