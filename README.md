# chatpilot

## 開発者へ
このアプリケーションは、[Electron](https://www.electronjs.org/)によって作成されています<br>
[参考](https://ics.media/entry/7298/) 最新版で学ぶElectron入門

以下のコマンドを実行して、アプリケーションの実行、デバッグが出来ます<br>
`npx electron ./src`

以下のコマンドを実行してビルドします
* Windows<br>
`npx electron-packager src ChatPilot --platform=win32 --arch=x64 --overwrite`
* macOS(darwin)<br>
`npx electron-packager src ChatPilot --platform=darwin --arch=x64 --overwrite`