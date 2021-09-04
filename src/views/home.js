
import Header from '../components/Layout/header.default'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CardTemplate from '../components/Cards/card.template'
import Paper from '@material-ui/core/Paper'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCardsAction , searchCardAction} from '../store/card/card.action'
//dialog importers
import DialogModal from '../components/dialog.modal'
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#F4F4F4"
    },
    gridChild:{
        margin:"10px"
    },
    searchIcon:{
        width:"24px",
        height:"24px"
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
    textBox:{
        width:"100%",
        height:"56px",
    }
}));



const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);

    const error = useSelector((state) => state.cards.error)
    const loading = useSelector((state) => state.cards.loading)
    const cards = useSelector((state) => state.cards.all)

    useEffect(() => {
        dispatch(getAllCardsAction())
    },[]);

    // useEffect(() => {
    //     if(loading){
    //         setOpen(true)
    //     }
    // },[loading]);

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

    const moreCards = () =>{
        dispatch(getAllCardsAction())
    }
    const handleSearch = (event) =>{
        const {name, value} = event.target
        setTimeout(() => {
            dispatch(searchCardAction({key:value}))
        }, 500);


    }
    const FeederCard = () =>{
        if (cards == undefined || cards.length == 0) {
            return <></>
        }
        return cards.map((item ,index)=>{
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
            <DialogModal open={open} setOpen={setOpen} loading={loading} />
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
            <TextField
            name="tags"
            placeholder="Pesquise por termos ou categorias…"
            onChange={handleSearch}
            className={classes.textBox}
            InputProps={{
                endAdornment:(
                    <SearchIcon  className={classes.searchIcon}/>
                    )
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                />


                </Grid>
                </>
                )
            }

            export default Home
