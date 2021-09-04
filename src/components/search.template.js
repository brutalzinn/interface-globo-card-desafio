
import HeaderEditor from '../components/Layout/headers/header.editor'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCardsAction, searchCardAction} from '../store/card/card.action'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#F4F4F4"
    },
    defaultIcon:{
        width:"24px",
        height:"24px"
    },
    buttonSearch:{
        backgroundColor:"#ED4D77",
        color:"#FFFFFF",
        marginRight:"10px",
        width:"200px",
        height:"30px",
        '&:hover': {
            backgroundColor: "rgba(237,77,119,50%)",
        },
    },
    textBox:{
        fontSize:"14px",
        width:"100%",
        height:"56px",
    },
}));



const SearchBar = () => {

    const classes = useStyles();
    const dispatch = useDispatch()

    // const fillCards = () =>{
    //     dispatch(getAllCardsAction())
    // }
    const [searchTerm, setSearchTerm] = React.useState("")

    const clearSearch = () =>{
        setSearchTerm("")
        dispatch(getAllCardsAction(true))

    }
    const buttonSearch = () =>{
        dispatch(searchCardAction({key:searchTerm}))
    }

    const handleSearch = (event) =>{
        const {name, value} = event.target
        setSearchTerm(value)
    }

    return (
        <TextField
            name="tags"
            placeholder="Pesquise por termos ou categorias…"
            onChange={handleSearch}
            className={classes.textBox}
            value={searchTerm || ""}
            InputProps={{
                endAdornment:(
                    <>
                    <IconButton onClick={clearSearch}>
                    <CloseIcon className={classes.defaultIcon}/>
                    </IconButton>
                    <Button onClick={buttonSearch} className={classes.buttonSearch}>Pesquisar
                    <SearchIcon  className={classes.defaultIcon}/>
                    </Button>

                    </>
                    )
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
                />
        )
    }

    export default SearchBar
