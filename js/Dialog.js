/**
 * Dialog(id, options)
 * @param {string} id - data-dialog / open/close 트리거에 쓰는 식별자
 * @param {boolean|object} options - 기존처럼 boolean이면 modal 여부만, 객체면 상세 옵션
 *   - modal: boolean = false
 *   - closeOnBackdrop: boolean = false
 */
export const Dialog = (id, options = {}) => {
  const normalized = typeof options === 'boolean' ? { modal: options } : options;

  const config = {
    selector: id,
    modal: false,
    closeOnBackdrop: false,
    ...normalized,
  };

  const { selector, modal, closeOnBackdrop } = config;

  const btnOpen = document.querySelector(`[data-dialog-open="${selector}"]`);
  const btnClose = document.querySelector(`[data-dialog-close="${selector}"]`);
  const dialog = document.querySelector(`[data-dialog="${selector}"]`);

  if (!btnOpen || !btnClose || !dialog) return;

  // 열기/닫기
  const showDialog = () => (modal ? dialog.showModal() : dialog.show());
  const hideDialog = () => dialog.close();

  btnOpen.addEventListener('click', showDialog);
  btnClose.addEventListener('click', hideDialog);

  // 백드랍 클릭 시 닫기 (옵션)
  if (closeOnBackdrop) {
    let isBackdropDown = false;

    dialog.addEventListener('pointerdown', (e) => {
      isBackdropDown = e.target === dialog;
    });

    dialog.addEventListener('pointerup', (e) => {
      if (isBackdropDown && e.target === dialog) {
        dialog.close();
      }
      isBackdropDown = false;
    });
  }

  return { show: showDialog, hide: hideDialog };
};
