
import Header from '../components/Layout/headers/header.default'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from "@reach/router"
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import CardTemplate from '../components/Cards/card.template'
import Paper from '@material-ui/core/Paper'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCardsAction , clearErrorAction} from '../store/card/card.action'
import SearchBar from '../components/search.template'
//dialog importers
import DialogModal from '../components/Modals/dialog.modal'
import { navigate } from '@reach/router';

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
    },


}));



const Home = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()


    const [open, setOpen] = React.useState(false);
    const [disablerefresh, setDisableRefresh] = React.useState(false);

    const error = useSelector((state) => state.cards.error)
    const loading = useSelector((state) => state.cards.loading)
    const cards = useSelector((state) => state.cards.all)
    const page = useSelector((state) => state.cards.page)

    const moreCards = () =>{
        dispatch(getAllCardsAction())
    }


    useEffect(() => {
        if(page == 1){
            moreCards()
        }
    },[]);

    // useEffect(() => {
    //     setOpen(error.length > 0)
    // },[error]);

    useEffect(() => {
        if(error.length > 0){
            setOpen(true)
        }else{
            setOpen(false)

        }
        if(loading){
            setOpen(true)
        }
    },[error,loading]);
    const clearErrors = () =>{
        dispatch(clearErrorAction())
    }

    const FeederCard = () =>{
        if (cards == undefined || cards.length == 0) {
            return <></>
        }
        return cards.map((item ,index)=>{
            return (
                <Grid item xs={12} key={index} onClick={()=> navigate(`/form/${item.id}`)}>
                <CardTemplate text={item.texto} tags={item.tags}/>
                </Grid>
                )
            })

        }
        return (
            <>
            <Header/>
            <DialogModal open={open} setOpen={setOpen} actionAccept={clearErrors} options={false} message="Não há mais nenhum insight disponível." title="Ops... Não temos nenhuma novidade :(" loading={loading} />
            <Grid container
            direction="column" className={classes.root}
            justifyContent="center"
            alignItems="center">
            <FeederCard/>
            <IconButton onClick={moreCards}>
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
            <SearchBar/>


            </Grid>
            </>
            )
        }

        export default Home
