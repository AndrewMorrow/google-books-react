import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { SearchIcon } from "@material-ui/icons/Search";

const Form = (props) => {
    return (
        <form
            onSubmit={props.handleFormSubmit}
            style={{ marginBottom: "3rem" }}
        >
            <Grid container justify="center">
                <Grid item>
                    <TextField
                        type="text"
                        label="Search Books"
                        style={{ marginRight: "4px" }}
                        value={props.query}
                        onChange={props.handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <Button
                        style={{ marginTop: ".7rem" }}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Form;
