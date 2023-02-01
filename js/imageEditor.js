
const container = document.getElementById("image-editor");
const config = {
  source: "../assets/img/template/00.png",
};
const ImageEditor = new window.FilerobotImageEditor(container, config);

// 탬플릿 설정할 때마다 페이지 리로딩, 테마 재설정
function template(img) {
  let image = document.createElement("IMG");
  image.src = img.src;
  console.log(img.src);
  const config = {
    source: image.src
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
    Text: {
      text : '텍스트를 입력해보세요!',
      fonts: [  // 여기서 텍스트 입력칸에서 폰트 추가 적용 가능
        { label: 'Arial', value: 'Arial' },
        'Sans-serif',
        'pretendard',
        { label: 'Comic Sans', value: 'Comic-sans' },
      ]
    },
    // 테마 설정. 원래 기본은 흰색 바탕임.
    theme: {
      palette: {
        "bg-primary-active": "#e4faa9",
      "bg-primary": "#000000",
      "bg-secondary": "#2B2929",
      "bg-primary-hover": "#e4faa9",
      "bg-primary-0-5-opacity" : "#7022ee",

      'txt-primary': "#9cc7e0",
      'txt-secondary': "#9cc7e0", // 버튼 txt
      "active-secondary-hover": "#df8807",
      "accent-primary-hover": "#df8807",
      "accent-primary-active": "#000000",
      "icons-primary": "#9cc7e0",
      "icons-secondary": "#d851a2",
  
      },
      typography: {
        fontFamily: "Atlas Grotesk,Roboto, Arial"
      }
    }
  });
}





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
  Text: {
    text : '텍스트를 입력해보세요!',
    fonts: [  // 여기서 텍스트 입력칸에서 폰트 추가 적용 가능
      { label: 'Arial', value: 'Arial' },
      'Sans-serif',
      'pretendard',
      { label: 'Comic Sans', value: 'Comic-sans' },
    ]
  },
  theme: {
    palette: {
      "bg-primary-active": "#e4faa9",
      "bg-primary": "#000000",
      "bg-secondary": "#2B2929",
      "bg-primary-hover": "#e4faa9",
      "bg-primary-0-5-opacity" : "#7022ee",

      'txt-primary': "#9cc7e0",
      'txt-secondary': "#9cc7e0", // 버튼 txt
      "active-secondary-hover": "#df8807",
      "accent-primary-hover": "#df8807",
      "accent-primary-active": "#000000",
      "icons-primary": "#9cc7e0",
      "icons-secondary": "#d851a2",
    },
    typography: {
      fontFamily: "Atlas Grotesk,Roboto, Arial"
    }
  }
});
