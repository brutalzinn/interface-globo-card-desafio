import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import gifLoading from '../../image/loading.gif'

//THIS DIALOG MODAL IS BASED ON A MATERIAL UI EXAMPLE DOCUMENTATION
//AND CAN BE FOUND AT https://material-ui.com/pt/components/dialogs/#CustomizedDialogs.js
const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
            </IconButton>
            ) : null}
            </MuiDialogTitle>
            );
        });

        const DialogContent = withStyles((theme) => ({
            root: {
                padding: theme.spacing(2),
            },
        }))(MuiDialogContent);

        const DialogActions = withStyles((theme) => ({
            root: {
                margin: 0,
                padding: theme.spacing(1),
            },
        }))(MuiDialogActions);

        export default function CustomizedDialogs({open,setOpen,actionAccept,message,loading,title="",setDialogOpt,options = false}) {

            const LoadingInfo = () =>{
                if(loading){
                    return (
                        <img src={gifLoading} style={{width:"300px",height:"300px"}} ></img>
                        )
                    }else{
                        return <></>
                    }

                }

                const handleClose = () => {
                    setOpen(false);
                    if(actionAccept){
                        actionAccept()
                    }

                };
                const handleOptionsButton = (type) =>{
                    setDialogOpt(type)
                    setOpen(false);

                }
                return (
                    <div>

                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {loading ? "" : title }
                    </DialogTitle>
                    <DialogContent dividers>
                    <LoadingInfo/>
                    <Typography gutterBottom>
                    {loading ? "Carregando insights..." : message}
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                    {options &&
                        <>
                        <Button onClick={handleClose} color="primary">
                        CANCELAR
                        </Button>
                        <Button onClick={()=>handleOptionsButton(1)} color="primary">
                        ACEITAR
                        </Button>
                        </>
                    }
                    {!loading && !options &&
                        <Button autoFocus onClick={handleClose} color="primary">
                        ACEITAR
                        </Button>}
                        </DialogActions>
                        </Dialog>
                        </div>
                        );
                    }