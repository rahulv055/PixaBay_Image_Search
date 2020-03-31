import React, { Component } from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton, Dialog, DialogTitle, DialogActions, DialogContent, Button } from "@material-ui/core";
import { ZoomIn } from "@material-ui/icons";
import PropTypes from 'prop-types'

class ImageResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            currentImg: '',
            curImgTitle: ''
        }
    }

    handleOpen = (img, title) => {
        this.setState({ open: true, currentImg: img, curImgTitle: title });
    }

    handleClose = () => {
        this.setState({ open: false });
    }
    render() {
        let imageListContent;
        const { images } = this.props;
        console.log(images);
        if (images) {
            imageListContent = (
                <GridList cols={3} spacing={10}>
                    {
                        images.map(image => (
                            <GridListTile key={image.id}>
                                <img src={image.largeImageURL} alt="" />
                                <GridListTileBar
                                    title={image.tags}
                                    subtitle={
                                        <span>
                                            by:<strong>{image.user}</strong>
                                        </span>
                                    }
                                    actionIcon={
                                        <IconButton onClick={() => this.handleOpen(image.largeImageURL,image.tags)}>
                                            <ZoomIn color="inherit" />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))
                    }

                </GridList>
            )

        } else {
            imageListContent = null;
        }
        return (
            <div>
                {imageListContent}
                <Dialog open={this.state.open}>
                    <DialogTitle id="image-dialog-title">{this.state.curImgTitle}</DialogTitle>
                    <DialogContent>
                        <img src={this.state.currentImg} alt="" style={{width:'100%'}} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageResults;