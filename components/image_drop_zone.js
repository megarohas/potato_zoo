import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const style = {
  frame: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(128,128,128)"
  },
  label: {
    textAlign: "center",
    fontSize: "48px"
  },
  leave: {
    border: "2px solid rgba(255, 238, 0, 1)",
    backgroundColor: "rgb(255,255,255)",
    color: "rgb(128,128,128)",
    borderRadius: "4px"
  },
  enter: {
    border: "2px dashed grey",
    backgroundColor: "rgb(200,200,200)",
    color: "rgb(64,64,64)"
  }
};

class ImageDropZone extends Component {
  static propTypes = {
    anySize: PropTypes.bool,
    showButton: PropTypes.bool,
    showDeleteButton: PropTypes.bool,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number,
    imageIndex: PropTypes.number,
    fontSize: PropTypes.number,
    imageDefault: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    imagePicked: PropTypes.func,
    imageDeleted: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = { image: null, error: "", over: false, deleted: false };
  }

  static getDerivedStateFromProps(props, state) {
    // if deleted the don't reset to image default
    if (state.deleted) {
      return null;
    }

    // set image default
    if (!state.image && props.imageDefault) {
      return { image: props.imageDefault };
    } else {
      return null;
    }
  }

  handleFile = event => {
    const { imagePicked } = this.props;

    let image = URL.createObjectURL(event.target.files[0]);
    let file = event.target.files[0];
    this.setState({ file, image });
    imagePicked({ index: this.props.imageIndex, file, image });
  };

  deleteFile = event => {
    const { imageDeleted, imagePicked } = this.props;

    imagePicked({ index: this.props.imageIndex, file: null, image: null });
    if (imageDeleted) {
      imageDeleted(this.props);
    }

    this.setState({ image: null, deleted: true });
  };

  onDragOver = event => {
    event.preventDefault();
  };

  onDragEnter = event => {
    this.setState({ over: true });
  };

  onDragLeave = event => {
    this.setState({ over: false });
  };

  onDrop = event => {
    event.preventDefault();
    let file = event.dataTransfer.files[0];
    let image = URL.createObjectURL(file);

    this.setState({
      image,
      over: false
    });
    this.props.imagePicked({ index: this.props.imageIndex, file, image });
  };

  onLoad = event => {
    const { naturalWidth, naturalHeight } = event.target;
    const { imageWidth, imageHeight, anySize } = this.props;

    if (
      !anySize &&
      ((imageWidth && imageWidth !== naturalWidth) ||
        (imageHeight && imageHeight !== naturalHeight))
    ) {
      this.setState({
        error: `Wrong image dimensions ${naturalWidth}x${naturalHeight}`,
        image: null
      });
    } else {
      this.setState({ error: "" });
    }
  };

  render() {
    const { image, error, over, deleted } = this.state;
    const {
      width,
      height,
      imageWidth,
      imageHeight,
      imageDefault,
      anySize,
      showButton,
      showDeleteButton,
      fontSize
    } = this.props;

    return (
      <div>
        <div
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDragEnter={this.onDragEnter}
          style={Object.assign(
            {},
            {
              width: `${width}px`,
              height: `${height}px`,
              backgroundImage: `url(${image ? image : ""})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain"
            },
            style.frame,
            over ? style.enter : style.leave
          )}
        >
          {image !== null ? (
            <img
              onLoad={this.onLoad}
              src={image}
              alt={image}
              width={0}
              height={0}
            />
          ) : (
            <div style={{ pointerEvents: "none" }}>
              <div
                style={{
                  ...style.label,
                  fontSize: fontSize ? `${fontSize}px` : "34px"
                }}
              >
                {!anySize ? (
                  <div>
                    {imageWidth} x {imageHeight}
                  </div>
                ) : (
                  "Drop Here"
                )}
                <div>{error}</div>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: "flex" }}>
          {showButton ? (
            <div
              style={{
                width: "204px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
                marginBottom: "12px"
              }}
            >
              <label
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
                  fontWeight: "500",
                  lineHeight: "1.75",
                  borderRadius: "4px",
                  letterSpacing: "0.02857em",
                  textTransform: "uppercase",
                  padding: "6px 16px",
                  fontSize: "0.875rem",
                  color: "rgba(0, 0, 0, 0.87)",
                  backgroundColor: "rgba(255, 238, 0, 1)",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
                }}
              >
                Choose File
                <input
                  style={{ display: "none" }}
                  type="file"
                  value=""
                  onChange={this.handleFile}
                />
              </label>
            </div>
          ) : null}

          {showDeleteButton ? (
            <div className="button-container">
              <label className="button">
                Delete
                <button
                  style={{ display: "none" }}
                  type="button"
                  onClick={this.deleteFile}
                />
              </label>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ImageDropZone;
