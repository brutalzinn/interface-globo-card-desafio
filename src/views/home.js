
import Header from '../components/Layout/header.default'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import CardTemplate from '../components/Cards/card.template'
import Paper from '@material-ui/core/Paper'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCardsAction} from '../store/card/card.action'
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
    const dispatch = useDispatch()
    // const fillCards = () =>{
    //     dispatch(getAllCardsAction())
    // }
    const loading = useSelector((state) => state.cards.loading)
    const cards = useSelector((state) => state.cards.all)

    useEffect(() => {
        dispatch(getAllCardsAction())
    },[]);

    const FeederCard = () =>{
        if (cards == undefined || cards.length == 0) {
            return <></>
        }
        return cards.map((item ,index)=>{
            console.log('#####',item)
            return (
                <Grid item xs={12} key={index}>
                <CardTemplate text={item.texto} tags={item.tags}/>
                </Grid>
                )
            })

        }
        return (
            <>
            <Header/>

            <Grid container
            direction="column" className={classes.root}
            justifyContent="center"
            alignItems="center">

            <FeederCard/>




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
