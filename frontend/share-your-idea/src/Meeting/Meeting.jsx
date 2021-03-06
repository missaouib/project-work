import React, {useState} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 5,
    }
}));

const Meeting = () => {
    const classes = useStyles();
    let userEntity = JSON.parse(localStorage.getItem('userEntity'));

    return (
        <div className={classes.root}>
            <h1>Meeting</h1>
            {userEntity &&
                <div>Sie sind angemeldet, daher können Sie diesen Inhalt sehen!

                </div>
            }
            {!userEntity && <div>Sie sind nicht angemeldet, daher können Sie keinen Inhalt sehen!</div>}
        </div>
    );
}

export default Meeting;
