# Debugging @chat/server via VS Code

1. `npm run debug:server`
2. `F5` or `Run -> Start debugging`
3. Select the node process that's started with the `--inspect` flag.

# Почему так?

Nodemon — удобно.
https://github.com/Microsoft/vscode-recipes/tree/master/nodemon

# Ещё:

Если запустить `npm run start:server`, сервер просто запустится (не будет создано ничего в `packages/server/dist`!).

Если запустить `npm run watch:server`, сервер запустится и будет перезапускаться при изменении файлов.