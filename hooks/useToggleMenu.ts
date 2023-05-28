import { create } from 'zustand'

type ToggleMenuState = {
  isOpen: boolean
}

interface ToggleMenuAction {
  toggle: (value?: boolean) => void
}

export const useToggleMenu = create<ToggleMenuState & ToggleMenuAction>(
  (set) => ({
    isOpen: false,
    toggle: (value) => set((state) => ({ isOpen: value ?? !state.isOpen })),
  }),
)
