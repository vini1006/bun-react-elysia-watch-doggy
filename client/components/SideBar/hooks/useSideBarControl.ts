import { useRef, useState, useEffect } from 'react';

export const useSideBarControl = () => {
  const sideBarRef = useRef<HTMLDialogElement>(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  useEffect(() => {
    if (!sideBarRef?.current) {
      return;
    }

    sideBarRef.current.onanimationend = (e) => {
      if (e.animationName === 'slideOut') {
        sideBarRef.current?.classList.remove('hide');
        sideBarRef.current?.close();
      }
    };

    if (isSideBarOpen) {
      sideBarRef.current.classList.remove('hide');
      sideBarRef.current.show();
    } else {
      sideBarRef.current.classList.add('hide');
    }
  }, [isSideBarOpen, sideBarRef]);

  return {
    sideBarRef,
    isSideBarOpen,
    toggleSideBar: () => setIsSideBarOpen((prev) => !prev),
    // closeSideBar: () => setIsSideBarOpen(false),
    // openSideBar: () => setIsSideBarOpen(true),
  };
};
