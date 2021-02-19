import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ marginBottom: "2rem" }}>
            <Toolbar>
                <Typography variant="h5" className={classes.title}>
                    Google Books
                </Typography>
                <Typography variant="h6">
                    <Link to="/" style={{ marginRight: "1rem" }}>
                        Search Books
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/saved">Saved Books</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
