export const Tab = (id) => {
  const config = {
    tabID: id,
    className: 'active',
  };

  const { className, tabID } = config;

  if (tabID == null) {
    return;
  }
  if (typeof tabID != 'string') {
    return;
  }

  const tabs = document.querySelectorAll(`[data-tab=${tabID}] [data-tab-item]`);
  const tabContents = document.querySelectorAll(`[data-tab-contents=${tabID}] [data-tab-content]`);

  if (tabs.length === 0 || tabContents.length === 0) {
    return;
  }

  // 탭닫기
  const closeTab = () => {
    tabs.forEach((tab) => {
      tab.classList.remove(className);
    });
  };

  // 탭열기
  const openTab = (event) => {
    event.currentTarget.classList.add(className);
  };

  // 탭콘텐츠 열기
  const openContent = (index) => {
    tabContents.forEach((content, contentIndex) => {
      if (index === contentIndex) {
        content.classList.add(className);
      }
    });
  };

  // 탭콘텐츠 닫기
  const closeContent = () => {
    tabContents.forEach((content) => {
      content.classList.remove(className);
    });
  };

  // 초기셋팅
  const init = () => {
    tabs[0].classList.add(className);
    tabContents[0].classList.add(className);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (event) => {
      closeTab();
      openTab(event);
      closeContent();
      openContent(index);
    });
  });

  init();
};
