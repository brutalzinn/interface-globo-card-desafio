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
import gifLoading from '../image/loading.gif'
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

        export default function CustomizedDialogs({open,setOpen,loading}) {

            const LoadingInfo = () =>{
                if(loading){
                    return (
                        <img src={gifLoading} style={{width:"300px",height:"300px"}} ></img>
                        )
                    }else{
                        return <></>
                    }

                }
                const handleClickOpen = () => {
                    setOpen(true);
                };
                const handleClose = () => {
                    setOpen(false);
                };

                return (
                    <div>

                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        {loading ? "" : "Ops... Não temos nenhuma novidade :(" }
                        </DialogTitle>
                        <DialogContent dividers>
                        <LoadingInfo/>
                        <Typography gutterBottom>
                        {loading ? "Carregando insights..." : "Não há mais nenhum insight disponível." }
                        </Typography>
                        </DialogContent>
                        <DialogActions>
                        {!loading &&
                        <Button autoFocus onClick={handleClose} color="primary">
                        ACEITAR
                        </Button>}
                        </DialogActions>
                        </Dialog>
                        </div>
                        );
                    }