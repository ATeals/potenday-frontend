import { isHangul, splitHangul } from "./utils";

export const hasFinalBatchim = (word: string) => {
  const lastChar = word[word.length - 1];
  if (!isHangul(lastChar)) {
    throw new Error("Input must be a Hangul character.");
  }
  const split = splitHangul(lastChar);
  return split.length === 3;
};

const JOSA_MAP = {
  "이/가": (is: boolean) => (is ? "이" : "가"),
  "을/를": (is: boolean) => (is ? "을" : "를"),
  "은/는": (is: boolean) => (is ? "은" : "는"),
  "으로/로": (is: boolean) => (is ? "으로" : "로"),
  "와/과": (is: boolean) => (is ? "와" : "과"),
  "이나/나": (is: boolean) => (is ? "이나" : "나"),
  "이에/에": (is: boolean) => (is ? "이에" : "에"),
  "이란/란": (is: boolean) => (is ? "이란" : "란"),
  "아/야": (is: boolean) => (is ? "아" : "야"),
  "이랑/랑": (is: boolean) => (is ? "이랑" : "랑"),
  "이에요/예요": (is: boolean) => (is ? "이에요" : "예요"),
  "으로서/로서": (is: boolean) => (is ? "으로서" : "로서"),
  "으로써/로써": (is: boolean) => (is ? "으로써" : "로써"),
  "으로부터/로부터": (is: boolean) => (is ? "으로부터" : "로부터"),
};

export const josa = (hangul: string, type: keyof typeof JOSA_MAP) =>
  `${hangul}${JOSA_MAP[type](hasFinalBatchim(hangul))}`;
