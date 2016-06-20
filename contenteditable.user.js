// ==UserScript==
// @name        UserScriptsForLocationArea_1
// @namespace   https://joker314.github.io/
// @description Makes location section on Scratch profile content editable.
// @include     *://scratch.mit.edu/user/*
// @version     0.1
// ==/UserScript==
document.getElementsByClassName("location")[0].contentEditable = true;
