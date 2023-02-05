//Open new tab Resume
const openInNewTab = (url) => {
    window.open(url, "_blank");
  }
  
  const btn = document.getElementById("open-link-button");
  
  btn.addEventListener("click", () => {
    openInNewTab("https://drive.google.com/file/d/1NyRSaYFd95ztnjEr5QCN3Qy-6Tts_oy_/view?usp=sharing");
  });