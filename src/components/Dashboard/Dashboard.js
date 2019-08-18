import React, { setValues } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../forms.css'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const SendMessageForm = ({ changeName, userName, sendMessage }) => {
    const [messtext, changeTextMess] = React.useState('');
    const classes = useStyles();

    const sendMessageHandler = () => {
        if (!messtext) return;
        const message = {
            from: `${userName}`,
            message: `${messtext}`,
        };
        sendMessage(message);
        changeTextMess('');
    };

    const changeUserName = (e) => {
        const name = e.target.value.trim();
        if (!name) return;
        changeName(name);
    };

    return (
        <>
            <TextField
                id="standard-name"
                label="Name"
                onChange={changeUserName}
                margin="normal"
            />
            <TextField
                id="standard-name"
                margin="normal"
                value={messtext}
                label='Write a message...'
                onChange={e => changeTextMess(e.target.value)}
            />
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={sendMessageHandler}
                    type="submit"
                > SEND </Button>
            </div>
        </>
    );
};

SendMessageForm.propTypes = {
    userName: PropTypes.string,
    changeName: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
};

SendMessageForm.defaultProps = {
    userName: 'user',
};

export default SendMessageForm;
