const defaultUrl = '117.78.31.191:10240'
const defaultAgentPath = './resources/AgoraWebAgent/AgoraWebAgent.exe'

const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const execFile = require('child_process').execFile
const dialog = require('electron').dialog

const videoPlugin = execFile(defaultAgentPath, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
});

videoPlugin.on('exit', (code, singal) => {
  dialog.showErrorBox('视频插件退出', '无法视频通话,请重启程序');
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1600, height: 1000, webPreferences: {
      nodeIntegration: false // 禁用node
    }
  })

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: defaultUrl,
    protocol: 'http:',
    slashes: true
  }))

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.