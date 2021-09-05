import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import {insertCardAction , getOneCardAction, editCardAction, deleteCardAction} from '../../store/card/card.action'
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
        width:"150px",
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
const CardFormTemplate = ({mode, id}) =>{
    const classes = useStyles();
    const dispatch = useDispatch()

    const maxChar = 400
    const [message, setMessage] = React.useState("");

    const [dialogOpt, setDialogOpt] = React.useState(0);
    const [deleteMode, setDeleteMode] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const success = useSelector((state) => state.cards.success)

    const error = useSelector((state) => state.cards.error)
    const [charsCount, setCharsCount] = useState(maxChar)

    const [form, setForm] = useState({
        texto:"",
        tags:""
    })
    const selected = useSelector((state) => state.cards.selected)

    useEffect(()=>{
        console.log('mode',mode)
        if(mode == 1){
            dispatch(getOneCardAction(id))
        }
    },[mode])


    useEffect(()=>{
        setOpen(error.length > 0)
        setOpen(success)

    },[error,success])
    useEffect(()=>{
        if(mode == 1){

            let tagsString = ''
            let lastChar = selected.tags.length - 1
            let n = 0
            selected.tags.map((item)=>{
                if(n < lastChar){
                    tagsString += item.name + ','
                }else{
                    tagsString += item.name
                }
                n++

            })

            setForm({...form,texto:selected.texto,tags:tagsString })

        }
    },[selected])

    const handleInput = (event) =>{
        const {name, value} = event.target
        switch(name){
            case "texto":
            let diffAsc = value.length - form.texto.length
            let diffDesc = form.texto.length - value.length

            if(value.length > form.texto.length){
                setCharsCount(charsCount - diffAsc)
            }else if(value.length < form.texto.length){
                setCharsCount(charsCount + diffDesc)
            }
            if(value.length == 0){
                setCharsCount(maxChar)
            }
            setForm({...form,texto:value})

            break
            case "tags":
            setForm({...form,tags:value})
            break
        }

    }
    const validateForm = () =>{
        if(form.texto.length == 0){
            return true
        }
    }
    const submitForm = () =>{
        if(mode == 0){
            let generateTags = form.tags.split(",")
            dispatch(insertCardAction({...form,tags:generateTags}))
            setMessage("Card criado com sucesso.")


        }else if(mode == 1){
            let generateTags = form.tags.split(",")
            dispatch(editCardAction({...form,tags:generateTags},id))
            setMessage("Card atualizado com sucesso.")

        }
    }
    useEffect(()=>{
        if(dialogOpt == 1){
            dispatch(deleteCardAction(id))

        }
    },[dialogOpt])
    const deleteCard = () =>{
        mode = 2
        setMessage("Você tem certeza que deseja deletar esse card?")

        setDeleteMode(true)
        setOpen(true)

    }

    return(
        <Paper className={classes.paper}>
        <Box
        display="flex" flexDirection="column"
        >
        <DialogModal open={open} setOpen={setOpen} options={deleteMode} setDialogOpt={setDialogOpt} title="" dialogOpt={dialogOpt} message={message}/>
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
        value={form.tags || ''}
        placeholder="Adicione uma categoria (opcional)…"
        onChange={handleInput}
        className={classes.textBox}
        InputLabelProps={{
            shrink: true,
        }}
        variant="standard"
        />




        <Button disabled={validateForm()} className={classes.buttonSubmit} onClick={submitForm}>{mode == 0? "Publicar" : "Editar"}</Button>
        <Button className={classes.buttonDelete} onClick={deleteCard}>Deletar</Button>
        </Box>
        </Paper>)
    }

    export default CardFormTemplate