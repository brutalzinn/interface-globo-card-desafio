import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import {insertCardAction} from '../../store/card/card.action'
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DialogModal from '../Modals/dialog.modal'

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
        width:"250px",
        height:"56px",
        '&:disabled': {
            backgroundColor: "rgba(237,77,119,50%)",
            color:"#FFFFFF"
        },
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
    const [hasError,setHasError] = useState(true)
    const [open, setOpen] = React.useState(false);
    const [message,setMessage] = useState("")

    const success = useSelector((state) => state.cards.success)

    const error = useSelector((state) => state.cards.error)
    const [charsCount, setCharsCount] = useState(maxChar)
    const [form, setForm] = useState({
        texto:"",
        tags:""
    })
    useEffect(()=>{
        setOpen(error.length > 0)
    },[error])
    useEffect(()=>{
        setOpen(success)
        console.log("deu certo?", success)
    },[success])
    const handleInput = (event) =>{
        const {name, value} = event.target
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
    const validateForm = () =>{
        if(form.texto.length == 0){
            return true
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
        <DialogModal open={open} setOpen={setOpen} message={success ? "Card inserido com sucesso." : "Ocorreu um erro ao inserir o card."}/>
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




        <Button disabled={validateForm()} className={classes.buttonSubmit} onClick={submitForm}>Publicar</Button>
        {/* <Button className={classes.buttonDelete} onClick={submitForm}>Deletar</Button> */}
        </Box>
        </Paper>)
    }

    export default CardFormTemplate