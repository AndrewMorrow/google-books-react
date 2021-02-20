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

const CardContainer = (props) => {
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
                            image={
                                props.book.volumeInfo.imageLinks &&
                                props.book.volumeInfo.imageLinks.thumbnail
                            }
                        />
                    </Grid>
                    <Grid container item xs={3}>
                        <CardContent>
                            <Typography variant="h5">
                                {props.book.volumeInfo.title &&
                                    props.book.volumeInfo.title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                className={classes.typographyStyle}
                            >
                                {props.book.volumeInfo.authors?.length > 1
                                    ? "Authors: "
                                    : "Author: "}
                                {props.book.volumeInfo.authors?.join(", ")}
                            </Typography>
                            <Button
                                href={
                                    props.book.volumeInfo.canonicalVolumeLink &&
                                    props.book.volumeInfo.canonicalVolumeLink
                                }
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
                                onClick={() => props.handleSaveBook(props.book)}
                            >
                                Save
                            </Button>
                        </CardContent>
                    </Grid>

                    <Grid container item xs={7}>
                        <Typography variant="body2">
                            {props.book.volumeInfo.description &&
                                props.book.volumeInfo.description}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CardContainer;
