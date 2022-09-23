// 参考: TypeScript で window 直下にいろいろ生やしたりグローバル変数を定義する
// https://dev.classmethod.jp/articles/typings-of-window-object/

interface Versions {
  node: () => string;
  chrome: () => string;
  electron: () => string;
}

// interfaceを拡張し、既存のWindowにプロパティを増やす
interface Window {
  versions: Versions;
}
