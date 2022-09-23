/*
 * Inter-Process Communication(ICP)通信のために、プリロードスクリプトを設定する
 * 参考:Electron（v.15.0.0 現在）の IPC 通信入門 - よりセキュアな方法への変遷
 *  https://qiita.com/hibara/items/c59fb6924610fc22a9db
 * 参考: Vue CLI Plugin Electron Builder + TypeScriptでpreloadを設定するとき
 *  https://qiita.com/tekunikaruza_jp/items/fea65f1c3bb8c8389f60
 */
import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 関数だけでなく、変数も公開できます
});
