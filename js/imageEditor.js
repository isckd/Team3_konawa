const container = document.getElementById("image-editor");
const config = {
  source: "../assets/img/example-card/1.png"
};
const ImageEditor = new window.FilerobotImageEditor(container, config);

ImageEditor.render({
  // additional config provided while rendering
  observePluginContainerSize: true,
  onSave: (imageInfo, designState) => {
    const tmpLink = document.createElement("a");
    tmpLink.download = imageInfo.fullName;
    tmpLink.href = imageInfo.imageBase64;
    tmpLink.style = "position: absolute; z-index: -111; visibility: none;";
    document.body.appendChild(tmpLink);
    tmpLink.click();
    document.body.removeChild(tmpLink);
  },
  annotationsCommon: {
    fill: "black"
  },
  theme: {
    palette: {
      "bg-primary-active": "#e4faa9",
      "bg-primary": "#000000",
      "bg-secondary": "#2B2929",
      "bg-primary-hover": "#e4faa9",
      "bg-primary-0-5-opacity" : "#e4faa9",

      "txt-primary": "#F7F5F2",
      "txt-secondary": "#F7F5F2",
      "active-secondary-hover": "#df8807",
      "accent-primary-hover": "#df8807",
      "accent-primary-active": "#000000",
      "icons-primary": "#d851a2",
      "icons-secondary": "#d851a2",
      "link-hover": "yellow"

    },
    typography: {
      fontFamily: "Atlas Grotesk,Roboto, Arial"
    }
  }
});
