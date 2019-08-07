const {
  app, Menu, Tray, dialog,
} = require('electron');

const { spawn } = require('child_process');
const Store = require('electron-store');
const fixPath = require('fix-path');
const Sentry = require('@sentry/electron');
const fs = require('fs');

const Store = require('electron-store');
const Sentry = require('@sentry/electron');

fixPath();

Sentry.init({ dsn: 'https://18c9943a576d41248b195b5678f2724e@sentry.io/1506479' });
@ -32,12 +34,10 @@ function getLocale() {
  switch (locale) {
    case 'es-419' || 'es':
      return JSON.parse(fs.readFileSync(resolve(__dirname, 'locale/es.json')));
      break;
    case 'pt-BR' || 'pt-PT':
      return JSON.parse(fs.readFileSync(resolve(__dirname, 'locale/pt.json')));
    default: 
    default:
      return JSON.parse(fs.readFileSync(resolve(__dirname, 'locale/en.json')));
      break;
  }
}

@ -106,6 +106,8 @@ function render(tray = mainTray) {
  ]);

  tray.setContextMenu(contextMenu);

  tray.on('click', tray.popUpContextMenu);
}

app.on('ready', () => {
