import React from "react";
import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useCookie = create(
  devtools(
    persist(
      (set) => ({
        accept: false,
        setAccept: (accept) => set((state) => ({ ...state, accept })),
      }),
      {
        name: "cookieStore",
        getStorage: () => sessionStorage,
      }
    )
  )
);

export const useThemeColor = create(
  devtools(
    persist(
      (set) => ({
        themeColor: null,
        setThemeColor: (themeColor) =>
          set((state) => ({ ...state, themeColor })),
      }),
      {
        name: "selectColor",
        getStorage: () => sessionStorage,
      }
    )
  )
);
export const useLeftBoxColor = create(
  devtools(
    persist(
      (set) => ({
        leftBoxColor: null,
        setLeftBoxColor: (leftBoxColor) =>
          set((state) => ({ ...state, leftBoxColor })),
      }),
      {
        name: "selectLeftBoxColor",
        getStorage: () => sessionStorage,
      }
    )
  )
);

export const useTopBoxColor = create(
  devtools(
    persist(
      (set) => ({
        topBoxColor: null,
        setTopBoxColor: (topBoxColor) =>
          set((state) => ({ ...state, topBoxColor })),
      }),
      {
        name: "selectTopBoxColor",
        getStorage: () => sessionStorage,
      }
    )
  )
);

export const useActiveBox = create(
  devtools(
    persist(
      (set) => ({
        activeBox: null,
        setActiveBox: (activeBox) => set((state) => ({ ...state, activeBox })),
      }),
      {
        name: "selectActiveBoxColor",
        getStorage: () => sessionStorage,
      }
    )
  )
);
export const usePassiveBox = create(
  devtools(
    persist(
      (set) => ({
        passiveBox: null,
        setPassiveBox: (passiveBox) =>
          set((state) => ({ ...state, passiveBox })),
      }),
      {
        name: "selectPassiveBoxColor",
        getStorage: () => sessionStorage,
      }
    )
  )
);
export const useFontColor = create(
  devtools(
    persist(
      (set) => ({
        fontColor: null,
        setFontColor: (fontColor) => set((state) => ({ ...state, fontColor })),
      }),
      {
        name: "selectFontColor",
        getStorage: () => sessionStorage,
      }
    )
  )
);
export const isActive = create(
  devtools(
    persist(
      (set) => ({
        active: false,
        setActive: (active) => set((state) => ({ ...state, active })),
      }),
      {
        name: "isActive",
        getStorage: () => sessionStorage,
      }
    )
  )
);
export const useCreateHabit = create(
  devtools(
    persist(
      (set) => ({
        createHabit: [],
        setCreateHabit: (createHabit) =>
          set((state) => ({ ...state, createHabit })),
      }),
      {
        name: "createHabit",
        getStorage: () => sessionStorage,
      }
    )
  )
);
