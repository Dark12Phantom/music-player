const path = require('path');
const { app, BrowserWindow } = require('electron');

const isDev = process.env.NODE_ENV !== 'development';
const isWin = process.platform === 'win32';

function createMainWindow() {
    const mainWindow = new BrowserWindow(
        {
            title: 'Music Player',
            width: 1360,
            height: 760
        }
    );
    mainWindow.setMenuBarVisibility(false)

    // if (isDev) {
    //     mainWindow.webContents.openDevTools();
    // }

    mainWindow.loadFile(path.join(__dirname, './src/index.html'));
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
        }
    });
});

app.on('window-all-closed', () => {
    if (!isWin) {
        app.quit()
    }
})
