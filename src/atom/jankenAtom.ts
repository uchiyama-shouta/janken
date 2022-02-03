import { atom } from "jotai";
import type { Action } from "type/Action";
import type { Result } from "type/Result";

export const opponentJankenAtom = atom<Action | undefined>(undefined);

export const myJankenAtom = atom<Action | undefined>(undefined);
export const resultAtom = atom<Result | undefined>(undefined);
