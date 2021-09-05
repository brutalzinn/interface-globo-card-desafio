import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'

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
        marginTop:theme.spacing(1),
        width:"36vh",
        height:"auto",
        borderRadius:10,
        textAlign: 'center',
    },
    gridMore:{
        color:"#666666",
        textAlign:"center"
    },
    tagName:{
        color:"#ED4D77",
        borderColor:"rgba(237, 77, 119, 24%)",
        borderStyle:"solid",
        borderRadius:4
    }
}));


const Card = ({text, tags}) =>{
    const classes = useStyles();


    const ArrayTags = () =>{
        return (
            <Box
            display="flex" flexDirection="row"
            >
            {tags.map((c,index)=>{
                return(
                    <Box
                    key={index}
                    style={{margin:"auto",marginTop:"15px"}}
                    >
                    <Typography className={classes.tagName}>
                    {c.name.toUpperCase()}
                    </Typography>
                    </Box>)
                })}
                </Box>)
            }

            return(
                <Paper className={classes.paper}>
                <Typography>
                {text}
                </Typography>
                <ArrayTags/>
                </Paper>)
            }

            export default Card