
import HeaderEditor from '../components/Layout/headers/header.editor'
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



const Home = (props) => {
    const classes = useStyles();
    // const fillCards = () =>{
    //     dispatch(getAllCardsAction())
    // }
    const [mode, setMode] = React.useState(0);


    useEffect(()=>{
        if(props.id){
            setMode(1)
        }
    },[])

    return (
        <Grid className={classes.root}>
        <HeaderEditor mode={mode}/>

        <CardFormTemplate mode={mode} id={props.id}/>


        </Grid>
        )
    }

    export default Home
