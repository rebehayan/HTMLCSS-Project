import { removeClass } from "./helper.js";

export const navigation = () => {
  const sidebar = document.querySelector(".sidebar");
  const links = sidebar.querySelectorAll("a");
  const frame = document.querySelector("iframe");

  links.forEach((link) => {
    link.getAttribute("href") === "" && link.parentElement.remove(); // 메뉴 비어있을때 삭제
    link.addEventListener("click", (e) => {
      // if (e.target.getAttribute("href") === "") {
      //   e.preventDefault();
      //   alert("현재 파일이 존재하지 않습니다.");
      // } else {
      removeClass(links);
      e.target.classList.add("active");
      sessionStorage.setItem("src", e.target.getAttribute("href"));
      // }
    });
  });

  const resizeSidebar = () => {
    const width = window.innerWidth;
    if (width < 1280) {
      const height = sidebar.offsetHeight;
      frame.style.setProperty("--height", `${height + 3}px`);
    }
  };

  resizeSidebar();
  window.addEventListener("resize", resizeSidebar);
};
