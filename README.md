# GRE Editor (JS)
![](https://raw.githubusercontent.com/gre-dev/gre-editor/master/header.jpg)

<br><br>

## Introduction
It's a lightweight and full cusomizable WYSIWYG text editor built in Javascript & jQuery.

<br>

## Features
- Support all browsers and devices.
- SEO-Friendly.
- Responsive.
- Very simple to setup and configure.
- 10 languages
- Full control of options & sizes.
- Lightweight (143 KB).
- Dark & Normal Mode.

<br>

## Requirements
- Jquery

<br>

## Get Started
All you need to install this plugin is to include **Jquery** and **gre-editor.min.js**, before the closing of **body** tag of the page (`</body>`) as shown below:

````html5
<script src="js/jquery.js"></script>
<script src="js/gre-editor.min.js"></script>

````

<br>

Then, let's add this code before the end of the body tag of our page as following:

````javascript
$(document).ready(() => {

$('textarea').greEditor({
width:  700,
height:  400,
features:  ['bold','italic','underline','heading','strikeThrough','unorderedList','orderedList','increaseFontSize','decreaseFontSize','quote','code','fullscreen','insertimage','link','unlink','alignLeft','alignCenter','alignRight','textBackColor','textColor','emoji','table','justify','darkMode']
});

});

````

Note: the "textarea" should contain a unique "name" attribute.
🎉 Now the text editor is ready to run on your page!

<br>

## Options
You can use the following options as you need:

| Option | Type | Default Value | Descreption
|--|--|--|--|
| width | Integer | 550 | The width of the editor (in pixels).
| height | Integer | 300 | The height of the editor (in pixels).
| features | Array | ['bold', 'italic', 'underline', 'textcolor','strikethrough'] | The features of editor.<br>You can use the available features in the list below.
| forceAlt | Boolean | false | Force users to write an "alt" for the inserted images.
| forceLinkTitle | Boolean | false | Force users to write a "title" for the inserted link.
| lang | String | 'en' | The language of editor (Check the language section below).
| iconsPath | String | 'icons.png' | The path of icons image.
| darkIconsPath | String | 'icons-dark.png' | The path of dark icons image.
| complete | Function | null | A function will be implemented after completing the loading process of the editor.
| beforeLoad | Function | null | A function will be implemented before loading the editor.


<br>

## Keyboard Shortcuts
You can use the following shortcuts to do some operations easly:

### Special Shortcuts
| Shortcut | Operation
|--|--|
| Ctrl+B <br> ⌘+B | Bold selected text.
| Ctrl+I <br> ⌘+I | Make the selected text in *Italic* form.
| Ctrl+U <br> ⌘+U | Underline selected text.
| Ctrl+S <br> ⌘+S | Strike Through selected text.
| Ctrl+K <br> ⌘+K | Coverts text into a link.
| Ctrl+P <br> ⌘+P | Insert an image.
| Tab | Indent a list.
| Shift+Tab | Outdent a list.
| Esc | Closes a GRE Editor dialog window or drop-down list. Equivalent to the Cancel button in a dialog window. Or exit Fullscreen Mode.
| Ctrl+Shift+S <br> ⌘+Shift+S | Stores the full editor content.
| Ctrl+Shift+L <br> ⌘+Shift+L | Restores the latest editor content stored.

<br>

### Basic Shortcuts
| Shortcut | Operation
|--|--|
| Ctrl+A <br> ⌘+A | Selects all editor contents.
| Ctrl+C <br> ⌘+C | Copy selected text.
| Ctrl+X <br> ⌘+X <br> Shift+Del | Cut selected text.
| Ctrl+V <br> ⌘+V <br> Shift+Insert | Paste copied/cutted text.
| Ctrl+Z <br> ⌘+Z | Performs the undo operation.
| Ctrl+Shift+Z <br> Ctrl+Y <br> ⌘+Shift+Z <br> ⌘+Y | Performs the redo operation.
| Shift+Arrow | Selects a text fragment by letters.
| Ctrl+Shift+Arrow <br> ⌘+Shift+Arrow | Selects a text fragment by words.
| Shift+Home | Selects a text fragment from the cursor to the beginning of the line.
| Shift+End | Selects a text fragment from the cursor to the end of the line.
| Ctrl+Shift+Home <br> ⌘+Shift+Home | Selects a text fragment from the cursor to the beginning of the document.
| Ctrl+Shift+End <br> ⌘+Shift+End | Selects a text fragment from the cursor to the end of the document.
| Shift+PgDn | Selects a text fragment of approximately the length of the editing area starting from the cursor and going down.
| Shift+PgUp | Selects a text fragment of approximately the length of the editing area starting from the cursor and going up.


<br>

## Features
You can add the following features to the "features" array:

- heading
- bold
- italic
- underline
- strikeThrough
- unorderedList
- orderedList
- increaseFontSize
- decreaseFontSize
- quote
- code
- fullscreen
- insertimage
- link
- unlink
- insertvideo
- alignLeft
- alignCenter
- alignRight
- justify
- textBackColor
- textColor
- emoji
- table
- pageSource
- hr
- insertHTML
- darkMode

<br>

## Languages
You can set the "lang" option to one of the following languages:

- ar
- en
- tr
- de
- fr
- ja
- ko
- ru
- cn
- sv
- fa

## Browsers
GRE Editor has been tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- UC Browser

<br>

## Credits
GRE Slider was made by [Ghadeer R. Majeed](https://github.com/ghadeerraad  "Ghadeer R. Majeed") from [GRE Development](https://www.gredev.net/en  "GRE Development") under [MIT License](https://github.com/gre-dev/gre-slider/blob/master/LICENSE  "MIT License").