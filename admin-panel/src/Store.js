import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const inventorySelectedBookAtom = atom(null);

export const sessionAtom = atomWithStorage(
    "session",
    localStorage.getItem("session")
        ? JSON.parse(localStorage.getItem("session"))
        : undefined
);
