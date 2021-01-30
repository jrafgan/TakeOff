import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function ContactsPagination({contactsPerPage, totalContacts}) {

    const classes = useStyles();
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={classes.root}>
            <Pagination count={pageNumbers.length} color="primary" />
        </div>
    );
}

export default ContactsPagination;