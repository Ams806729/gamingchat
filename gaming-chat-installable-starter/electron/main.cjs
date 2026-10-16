const { app, BrowserWindow } = require('electron');
const path = require('node:path');
function createWindow(){
 const win = new BrowserWindow({width:1200,height:800,minWidth:360,minHeight:600,backgroundColor:'#0b1220',autoHideMenuBar:true,webPreferences:{contextIsolation:true,nodeIntegration:false}});
 win.loadFile(path.join(__dirname,'..','dist','index.html'));
}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
