
import HeaderEditor from '../components/Layout/header.editor'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import CardFormTemplate from '../components/Cards/card.form.template'
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
    // const fillCards = () =>{
    //     dispatch(getAllCardsAction())
    // }



    return (
        <Grid className={classes.root}>
        <HeaderEditor/>

        <CardFormTemplate/>


        </Grid>
        )
    }

    export default Home
