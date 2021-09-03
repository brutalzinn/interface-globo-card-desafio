import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import {insertCardAction} from '../../store/card/card.action'
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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
    buttonDelete:{
        backgroundColor:"#ED4D77",
        color:"#FFFFFF",
        margin:"auto",
        width:"250px",
        height:"56px",
        marginTop:"5px",
        '&:hover': {
            backgroundColor: "rgba(237,77,119,50%)",
        },
    },
    buttonSubmit:{
        backgroundColor:"#ED4D77",
        color:"#FFFFFF",
        margin:"auto",
        width:"382px",
        height:"56px",
        '&:hover': {
            backgroundColor: "rgba(237,77,119,50%)",
        },
    },
    textBox:{
        width:"100%",
        height:"auto",
        margin:"10px"
    }
}));

//mode 1 - Edit mode
//mode 0 - Insert mode
const CardFormTemplate = ({mode}) =>{
    const classes = useStyles();
    const dispatch = useDispatch()

    const maxChar = 400
    const [charsCount, setCharsCount] = useState(maxChar)
    const [form, setForm] = useState({
        texto:"",
        tags:""
    })

    const handleInput = (event) =>{
        const {name, value} = event.target
        console.log(name,value)
        switch(name){
            case "texto":
            if(value.length > form.texto.length){
                setCharsCount(charsCount - 1)
            }else if(value.length < form.texto.length){
                setCharsCount(charsCount + 1)
            }
            if(value.length == 0){
                setCharsCount(maxChar)
            }
            setForm({...form,texto:value})

            break
            case "tags":
            setForm({...form,tags:[value]})
            break
        }

    }
    const submitForm = () =>{
        dispatch(insertCardAction(form))

    }


    return(
        <Paper className={classes.paper}>
        <Box
        display="flex" flexDirection="column"
        >
        <TextField
        label="Insight"
        multiline
        name="texto"
        value={form.texto || ''}
        onChange={handleInput}
        inputProps={{maxLength: maxChar}}
        className={classes.textBox}
        InputLabelProps={{
            shrink: true,
        }}
        rows={10}
        variant="standard"
        />
        <Typography style={{color:"rgba(0,0,0,40%)", fontSize:"12px",marginLeft:"55%"}}>caracteres restantes: {charsCount}</Typography>

        <TextField
        name="tags"
        label="Categoria"
        placeholder="Adicione uma categoria (opcional)…"
        onChange={handleInput}
        className={classes.textBox}
        InputLabelProps={{
            shrink: true,
        }}
        variant="standard"
        />




        <Button className={classes.buttonSubmit} onClick={submitForm}>Publicar</Button>
        {/* <Button className={classes.buttonDelete} onClick={submitForm}>Deletar</Button> */}
        </Box>
        </Paper>)
    }

    export default CardFormTemplate