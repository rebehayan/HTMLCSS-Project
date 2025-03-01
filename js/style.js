const links = document.querySelectorAll(".sidebar a");
const frame = document.querySelector("iframe");
const frameSrc = sessionStorage.getItem("src");

if (frameSrc) {
  frame.setAttribute("src", frameSrc);
  links.forEach((link) => {
    const linkText = link.textContent.toLocaleLowerCase();

    if (frameSrc.includes(linkText)) {
      links.forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
}

links.forEach((link) => {
  link.getAttribute("href") === "" && link.parentElement.remove(); // 메뉴 비어있을때 삭제
  link.addEventListener("click", (e) => {
    if (e.target.getAttribute("href") === "") {
      e.preventDefault();
      alert("현재 파일이 존재하지 않습니다.");
    } else {
      links.forEach((a) => a.classList.remove("active"));
      e.target.classList.add("active");
      sessionStorage.setItem("src", e.target.getAttribute("href"));
    }
  });
});
frame.onload = () => {
  const style = frame.contentWindow.document.createElement("style");
  style.textContent = /* css */ `
    body{ 
      padding:20px;
      &::-webkit-scrollbar {
        width: 10px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        width: 10px;
        border-radius: 1000px;
        background-color: rgba(0, 0, 0, 0.08);
      }
      @media (width < 1280px) {
        padding:0 20px 20px;
      }
      > h2:not([class]) {
        margin-block:40px 20px;
        font-size:20px;
      }
    }
    .colors {
      display:grid;
      grid-template-columns:repeat(auto-fill, minmax(60px, 1fr));
      gap:10px;
      li {
        display:grid;
        gap:5px;
        font-size:16px;
        color:#111827;
      }
      div {
        font-size:14px;
        color:#7c7c7c;
      }
      span {
        width:100%;
        aspect-ratio:16/9;
        border-radius:5px;
      }
    }
    .guide-block {
      border:1px dashed  #7c7c7c;
      padding:10px;
      margin-block:10px;
      &.align[class*="v"] {
        height:80px;
      }
    }
  `;
  frame.contentWindow.document.head.append(style);
};
