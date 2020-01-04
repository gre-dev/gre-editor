# GRE Editor (JS)

![](https://raw.githubusercontent.com/gre-dev/gre-editor/master/header.jpg)

<br><br>

  

## Description

It's a rich text editor built in Javascript with a lot of features you may need.

  

<br>

  

## Features

  

- Support all browsers and devices.

- SEO-Friendly.

- Responsive.

- Very simple to setup and configure (no dependencies).

- Multiple languages.

- Full control of options & sizes.

- Lightweight (110 KB).

  

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
autoPlay:  true
});

});

````
Note: the "textarea" should contain a unique "name" attribute.

🎉 Now the text editor is ready to run on your page!

  

<br>

  

## Options

You can use the following options as you need:

  
|Option| Type | Default Value | Descreption
|--|--|--|--|
| width | Integer | 550 | The width of the editor (in pixels).
| height | Integer | 300 | The height of the editor (in pixels).
| features | Array | ['bold',  'italic',  'underline',  'textcolor','strikethrough'] | The features of editor.<br>You can use the available features in the list below.
| forceAlt | Boolean | false | Force users to write an "alt" for the inserted images.
| forceLinkTitle | Boolean | false | Force users to write a "title" for the inserted link.
| lang | String | 'en' | The language of editor (Check the language section below).
| iconsPath | String | 'icons.png' | The path of icons image.
| onLoad | Function | null | A function will be implemented after loading the editor completely. 

<br>

## Features
You can add the following features to the "features" array:
- bold
- italic
- underline
- heading
- strikeThrough
- list
- numberlist
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
- textBackColor
- textColor
- emoji
- table
- pageSource
- justify
- hr

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