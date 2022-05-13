import create from "zustand";

type SideBarStore = { sidebarToggle: any; toggleSidebar: () => void };

export const useSideBarStore = create<SideBarStore>((set) => ({
  sidebarToggle: false,
  toggleSidebar: () =>
    set((state) => ({ sidebarToggle: !state.sidebarToggle })),
}));
