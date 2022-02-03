import type { Action } from "type/Action";
import type { Result } from "type/Result";

export const outputResult = (myAction: Action, action: Action): Result => {
  if (myAction === action) {
    return "あいこ！";
  } else {
    switch (myAction) {
      case "gu-":
        if (action === "choki") {
          return "勝ち！";
        } else {
          return "負け...";
        }
      case "choki":
        if (action === "pa-") {
          return "勝ち！";
        } else {
          return "負け...";
        }
      case "pa-":
        if (action === "gu-") {
          return "勝ち！";
        } else {
          return "負け...";
        }
      default:
        throw Error;
    }
  }
};
