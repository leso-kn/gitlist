const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

var ace = require('ace-builds/src-min-noconflict/ace');
require('ace-builds/src-min-noconflict/theme-' + editor_theme);
require('ace-builds/src-min-noconflict/theme-' + editor_theme_dark);
require('ace-builds/webpack-resolver');

window.addEventListener('load', function () {
  var editor = document.getElementById('ace-editor');

  if (!editor) {
    return;
  }

  editor = ace.edit(editor, {
    mode: 'ace/mode/' + editor.dataset.mode,
    maxLines: 50,
    minLines: 10,
    fontSize: 16,
    showPrintMargin: false,
    theme: 'ace/theme/' + (darkModePreference.matches ? editor_theme_dark : editor_theme),
  });

  darkModePreference.addEventListener("change", e => {
    editor.setTheme('ace/theme/' + (e.matches ? editor_theme_dark : editor_theme))
  });
});
