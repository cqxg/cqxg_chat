import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../Styles/MainStyle.css'


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const SendMessageForm = ({ changeName, user = 'user', sendMessage }) => {
    const [text, changeTextMess] = React.useState('');
    const classes = useStyles();

    const sendMessageHandler = () => {
        if (!text) return;
        const message = {
            from: `${user}`,
            message: `${text}`,
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
        <div className='fieldWrapper'>
            <TextField id="standard-name" margin="normal"
                onChange={changeUserName}
                value={user}
                label="Name"
            />
            <TextField id="standard-name" margin="normal"
                onChange={ (e) => changeTextMess(e.target.value) }
                value={text}
                label='Write a message...'
            />
            <div>
                <Button color="primary" className={classes.button} type="submit"
                    variant="contained"
                    onClick={sendMessageHandler}
                > SEND </Button>
            </div>
        </div>
    );
};

SendMessageForm.propTypes = {
    user: PropTypes.string,
    changeName: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
};

export default SendMessageForm;
