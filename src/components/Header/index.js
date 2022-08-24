import React from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import LoggedOutOptions from "./LoggedOutOptions";
import LoggedInOptions from "./LoggedInOptions";
import globalUseStyles from "../../GlobalStyle";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: "#1b28a8",
    },
    left: {
        flexGrow: 1,
    },
    title: {
        fontFamily: "Lekton",
        fontSize: theme.spacing(6),
        fontWeight: 500,
        color: "white",
    },
    appBarBtn: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderRadius: 40,
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const globalClasses = globalUseStyles();

    const { isLoggedIn } = useSelector((state) => state.auth);

    const renderRightHeaderOptions = () => {
        if (isLoggedIn) {
            // loggedIn
            return <LoggedInOptions />;
        } else {
            return <LoggedOutOptions />;
        }
    };
    return (
        <div>
            <AppBar className={classes.root} elevation={0}>
                <Toolbar className={globalClasses.toolbarMargin}>
                    <div className={classes.left}>
                        <Typography variant="h4" className={classes.title}>
                            link.
                        </Typography>
                    </div>
                    {renderRightHeaderOptions()}
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;
