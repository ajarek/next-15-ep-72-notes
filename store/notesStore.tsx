import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export type Item = {
  id: number
  title: string
  text: string
  color: string
  date: string
}

type ItemState = {
  items: Item[]
  addItemToNote: (item: Item) => void
  removeItemFromNote: (id: number) => void
  removeAllFromNote: () => void
}

export const useNoteStore = create<ItemState>()(
  persist(
    (set) => ({
      items: [],

      addItemToNote: (item: Item) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromNote: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      removeAllFromNote: () => set({ items: [] }),
    }),

    { name: "NoteStore", storage: createJSONStorage(() => localStorage) }
  )
)
