const path = require('path');
const { app, BrowserWindow } = require('electron');

function createMainWindow() {
    const mainWindow = new BrowserWindow(
        {
            title: 'Music Player',
            width: 1360,
            height: 760
        }
    );
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setResizable(false);

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
