import { create } from 'zustand';

interface SidebarState {
  isOpened: boolean;
  actions: {
    setIsOpened: (isOpened: boolean) => void;
  };
}

const useSidebarStore = create<SidebarState>((set) => {
  return {
    isOpened: false,
    actions: {
      setIsOpened: (isOpened: boolean) => set(() => ({ isOpened })),
    },
  };
});

export const useIsSidebarOpened = () =>
  useSidebarStore((store) => store.isOpened);

export const useSidebarActions = () =>
  useSidebarStore((store) => store.actions);
