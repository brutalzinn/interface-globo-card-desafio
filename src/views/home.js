
import Header from '../components/Layout/header.default'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';

import Paper from '@material-ui/core/Paper'
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
    gridMore:{
        color:"#666666",
        textAlign:"center"
    }
}));
const Home = () => {
    const classes = useStyles();

    return (
        <>
        <Header/>

        <Grid container
        direction="column" className={classes.root}
        justifyContent="center"
        alignItems="center">

        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography>

        Mesmo com falhas defensivas recorrentes, o
        time de Rogério Ceni conseguiu resolver o jogo
        através das boas atuações de jogadores do
        meio pra frente. Diego, Gerson e Arrascaeta
        fizeram boa partida e Gabigol, mais uma vez,
        converteu uma cobrança de pênalti com
        bastante segurança. Apesar do erro no
        primeiro gol do time Argentino, Arão conseguiu
        marcar e jogar bem


        </Typography>

        <Typography style={{margin:15,color:"#ED4D77",textAlign:"center",borderColor:"rgba(237, 77, 119, 24%)",borderStyle:"solid", borderRadius:4}}>
        TEMPORADA
        </Typography>
        </Paper>
        </Grid>



        <IconButton>
        <Box
        display="flex" flexDirection="column"
        >
        <Box p={1}>
        <MoreHorizIcon/>
        </Box>
        <Box p={1}>
        <Typography >
        Toque para exibir mais insights
        </Typography>
        </Box>

        </Box>
        </IconButton>


        </Grid>


        </>
        )
    }

    export default Home
