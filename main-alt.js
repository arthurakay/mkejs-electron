var electron = require('electron');
var app = electron.app;  // Module to control application life.
var BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;


//create an express server because I can
var express    = require('express'),
    expressApp = express(),
    path       = require('path');

//set the server WWW root to "html" folder
expressApp.use(express.static(path.join(__dirname, 'html')));

var server = require('http').Server(expressApp);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    app.quit();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {


    server.listen(3000, function () {
        mainWindow = new BrowserWindow({
            width  : 800,
            height : 600
        });

        // and load the index.html of the app.
        mainWindow.loadURL('http://localhost:3000/index-alt.html');

        mainWindow.on('closed', function () {
            mainWindow = null;
        });
    });
});