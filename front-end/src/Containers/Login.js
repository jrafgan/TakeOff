import React, {Component} from 'react';
import {loginUser} from "../Store/Actions/UserActions";
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

const useStyles = theme => ({
    root: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(1),
            width: 200,
            display: 'block',
            margin: 'auto'
        },
    },
});


class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.loginUser({...this.state});
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.root} id="submit" noValidate autoComplete="off" onSubmit={this.submitFormHandler}>
                <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Login to backoffice</h2>

                <TextField
                    name="username"
                    error={this.props.error}
                    id="outlined-error-helper-text"
                    label="Username"
                    helperText={this.props.error}
                    variant="outlined"
                    onChange={this.inputChangeHandler}
                />
                <TextField
                    name="password"
                    error={this.props.error}
                    id="outlined-error-helper"
                    label="Password"
                    helperText={this.props.error}
                    variant="outlined"
                    onChange={this.inputChangeHandler}
                    type='password'
                />
                <Button type="submit" form="submit" style={{marginTop: '20px'}}>LOGIN</Button>

            </form>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.loginError
});

const mapDispatchToProps = dispatch => ({
    loginUser: userData => dispatch(loginUser(userData))
});

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(Login));