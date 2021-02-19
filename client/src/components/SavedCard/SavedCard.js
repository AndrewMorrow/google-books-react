import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        marginBottom: "2rem",
        marginLeft: "2rem",
        marginRight: "2rem",
    },
    cover: {
        width: 110,
        height: 160,
    },
    content: {
        display: "flex",
    },
    itemSpace: {
        flexBasis: "12%",
    },
    typographyStyle: {
        marginBottom: "10px",
    },
});

const SavedCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid
                        container
                        item
                        justify="center"
                        alignItems="center"
                        xs={2}
                        className={classes.itemSpace}
                    >
                        <CardMedia
                            className={classes.cover}
                            image={props.book.image && props.book.image}
                        />
                    </Grid>
                    <Grid container item xs={3}>
                        <CardContent>
                            <Typography variant="h5">
                                {props.book.title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                className={classes.typographyStyle}
                            >
                                {props.book.authors.length > 1
                                    ? "Authors: "
                                    : "Author: "}
                                {props.book.authors.join(", ")}
                            </Typography>
                            <Button
                                href={props.book.link}
                                target="_blank"
                                style={{ marginRight: "8px" }}
                                variant="contained"
                                color="primary"
                            >
                                View
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() =>
                                    props.handleDeleteBook(props.book._id)
                                }
                            >
                                Delete
                            </Button>
                        </CardContent>
                    </Grid>

                    <Grid container item xs={7}>
                        <Typography variant="body2">
                            {props.book.description}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default SavedCard;
