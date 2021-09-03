import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect, useState } from 'react';

import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

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
    buttonBox:{
        backgroundColor:"#ED4D77",
        color:"#FFFFFF",
        width:"382px",
        marginTop:"25%",
        height:"56px",
        '&:hover': {
            backgroundColor: "rgba(237,77,119,50%)",
          },

    },
    textBox:{
        width:"100%",
        height:"auto"
    }
}));


const CardFormTemplate = () =>{
    const classes = useStyles();
    const maxChar = 5
    const [charsCount, setCharsCount] = useState(maxChar)
    const [form, setForm] = useState({
        insight:"",
        tags:""
    })

    const handleInput = (event) =>{
        const {name, value} = event.target
        console.log(name,value)
        switch(name){
            case "insight":
            if(value.length > form.insight.length){
                setCharsCount(charsCount - 1)
            }else if(value.length < form.insight.length){
                setCharsCount(charsCount + 1)

            }
            setForm({...form,insight:value})

            break
        }
        console.log(JSON.stringify(form))

    }



    return(
        <Paper className={classes.paper}>

        <TextField
        label="INSIGHT"
        multiline
        name="insight"
        value={form.insight || ''}
        onChange={handleInput}
        inputProps={{maxLength: maxChar}}
        className={classes.textBox}
        rows={10}
        variant="standard"
        />
        <Typography style={{color:"rgba(0,0,0,40%)", fontSize:"12px",marginLeft:"55%"}}>limite de caracteres:{charsCount}</Typography>

        <TextField
        name="tags"
        label="Tags"
        placeholder="Adicione uma categoria (opcional)…"
        onChange={handleInput}
        className={classes.textBox}
        InputLabelProps={{
            shrink: true,
          }}
        variant="standard"
        />
        <Button className={classes.buttonBox}>Publicar</Button>

        </Paper>)
    }

    export default CardFormTemplate