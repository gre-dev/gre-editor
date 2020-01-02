(function ($) {
    var thedocument = $(document);
    var status = true;

    $.fn.greEditor = function (options) {

        var settings = $.extend({
            width: 550,
            height: 300,
            features: ['bold', 'italic', 'underline', 'textcolor','strikethrough'],
            forceAlt: false,
            forceLinkTitle: false,
            onLoad: null
        }, options);


        return this.each(() => {
            var emojies = ['😀', '😆', '😅', '😂', '🤣', '😊', '😇', '😍', '🥰', '😉', '😘', '😚', '😋', '🤓', '🧐', '😎', '😏', '😒', '😞', '😔', '🥺', '😩', '😣', '😢', '😭', '😤', '😡', '🤬', '🤯', '🤲', '👐', '🙌', '👏', '🤑', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤟', '🤘', '👌', '🤏', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🤚', '🖐️', '🖖', '👋', '🤙', '💪', '🖕', '✍️', '🙏', '🦶', '🦵', '💋', '👩‍💻', '👨‍💻', '🙋‍♂️', '🙋', '🤦', '🤦‍♂️', '🤷‍♀️', '🤷‍♂️', '🚶‍♂️', '🏃', '💐', '🌷', '🌹', '🥀', '🌺', '🌸', '💥', '🔥', '🌟', '🐵', '🙈', '🙉', '🙊', '🐒', '🐵', '🐸', '🍒', '🍑', '🥝', '🍌', '🍋', '🍳', '🥉', '🏅', '🎖️', '🥈', '🥇', '🚗', '🚕', '🚙', '🌠', '💊', '💉', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤎', '🤍', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️', '⏲️', '⏰', '🕰️', '⌛', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️', '🧯', '🛢️', '💸', '💵', '💴', '💶', '💷', '💰', '🔞', '❗', '❕', '❓', '❔', '⚠️', '🔰', '✅', '🚫', '📛', '⛔', '❌', '💯', '⚪', '⚫', '🔴', '🔵', '🟤', '🟣', '🟢', '🟡', '🔺', '🟠', '🎵', '🎶', '➕', '➖', '➗', '✖️', '♾️', '💲', '💱', '🌐', '♻️'];

            if ($(this).attr('name') == '' || $(this).attr('name') == 'undefined' || $(this).attr('name') == null || $(this).attr('name') == undefined) {
                console.error('You have to set "name" to the textarea.');
                status = false;
            }

            if (settings.features.length < 5) {
                console.error('You have to set at least 5 features to run this plugin.');
                status = false;
            }

            if (status) {
                $('<div id="main-gre-editor"><div id="lab"></div><textarea id="maincode" name="' + $(this).attr('name') + '"></textarea></div>').insertBefore($(this));
                $(this).remove();

                $('#main-gre-editor').css('position', 'relative');
                $('#main-gre-editor').css('box-sizing', 'border-box');
                $('#main-gre-editor').css('-webkit-box-sizing', 'border-box');

                $('#main-gre-editor').prepend('<div id="gre-editor-toolbar"></div>');

                if (settings.features.includes('heading')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" title="Heading" id="headingbtn"></a><div id="headingdropdown" style="display:none;"><a href="javascript:void(0)" id="htext">Text</a><hr/><a href="javascript:void(0)" id="hone">Heading 1</a><a href="javascript:void(0)" id="htwo">Heading 2</a><a href="javascript:void(0)" id="hthree">Heading 3</a><a href="javascript:void(0)" id="hfour">Heading 4</a><a href="javascript:void(0)" id="hfive">Heading 5</a><a href="javascript:void(0)" id="hsix">Heading 6</a></div>');
                }
                if (settings.features.includes('bold')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="boldbtn" title="Bold"></a>');
                }
                if (settings.features.includes('italic')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="italicbtn" title="Italic"></a>');
                }
                if (settings.features.includes('underline')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="underlinebtn" title="Underline"></a>');
                }
                if (settings.features.includes('strikeThrough')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="strikethroughbtn" title="Strike Through"></a>');
                }
                if (settings.features.includes('alignLeft')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="alignleftbtn" title="Align Left"></a>');
                }
                if (settings.features.includes('alignCenter')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="aligncenterbtn" title="Align Center"></a>');
                }
                if (settings.features.includes('alignRight')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="alignrightbtn" title="Align Right"></a>');
                }
                if (settings.features.includes('justify')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="justifybtn" title="Justify"></a>');
                }
                if (settings.features.includes('increaseFontSize')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="increaseFontSizebtn" title="Font Size +"></a>');
                }
                if (settings.features.includes('decreaseFontSize')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="decreaseFontSizebtn" title="Font Size -"></a>');
                }
                if (settings.features.includes('textBackColor')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="textbackcolorbtn" title="Text Background Color"><div id="backgroundcolordropdown"></div></a>');
                }
                if (settings.features.includes('textColor')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="textcolorbtn" title="Text Color"><div id="textcolordropdown"></div></a>');
                }
                if (settings.features.includes('list')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="listbtn" title="Unordered List"></a>');
                }
                if (settings.features.includes('numberlist')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="numberlistbtn" title="Ordered List"></a>');
                }
                if (settings.features.includes('link')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="linkbtn" title="Create Link"></a>');
                }
                if (settings.features.includes('unlink')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="unlinkbtn" title="Destroy Link"></a>');
                }
                if (settings.features.includes('table')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="tablebtn" title="Insert Table"><div id="tabledropdown"></div></a>');
                }
                if (settings.features.includes('insertimage')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="insertimagebtn" title="Insert Image"></a>');
                }
                if (settings.features.includes('insertvideo')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="insertvideobtn" title="Insert Video"></a>');
                }
                if (settings.features.includes('quote')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="quotebtn" title="Quote"></a>');
                }
                if (settings.features.includes('code')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="codebtn" title="Insert Code"></a>');
                }
                if (settings.features.includes('emoji')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="emojibtn" title="Insert Emoji"><div id="emojidropdown"></div></a>');
                }
                if (settings.features.includes('hr')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="hrbtn" title="Insert Horizontal Line"></a>');
                }
                if (settings.features.includes('pageSource')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="htmlbtn" title="View Page Source"></a>');
                }
                if (settings.features.includes('fullscreen')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="fullscreenbtn" title="Fullscreen Mode"></a>');
                }
                $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="infobtn" title="About"></a>');





                $('#main-gre-editor').css('border', '1px solid #ccc');
                $('#main-gre-editor').css('border-radius', '2px');
                $('#main-gre-editor').css('min-width', '550px');
                $('#main-gre-editor').css('min-height', '300px');
                $('#main-gre-editor').css('width', settings.width);
                $('#main-gre-editor').css('height', settings.height);
                $('#main-gre-editor').css('-webkit-user-select', 'none');
                $('#main-gre-editor').css('-moz-user-select', 'none');
                $('#main-gre-editor').css('-ms-user-select', 'none');
                $('#main-gre-editor').css('-o-user-select', 'none');
                $('#main-gre-editor').css('user-select', 'none');

                $('#main-gre-editor').children('#gre-editor-toolbar').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('top', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('left', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('z-index', '1');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('padding', '10px 10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('width', '100%');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('a').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('a').css('position', 'relative');

                $('#main-gre-editor').css('width', settings.width);
                $('#main-gre-editor').css('height', settings.height);


                $('#main-gre-editor').children('#gre-editor-toolbar').children('a').css('width', '17px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('a').css('height', '17px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('a').css('cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('a').css('margin', '5px 10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('div:first-child').css('margin-left', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('div:last-child').css('margin-right', '0');




                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('top', '31px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('left', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('width', '150px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('height', 'auto');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('text-align', 'center');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('border-radius', '0 0 3px 3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('padding', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a').css('text-decoration', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a').css('color', '#333');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a').css('font-family', 'sans-serif');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a').css('margin', '5px 0');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a').css('display', 'block');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('hr').css('display', 'block');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('hr').css('height', '1.5px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('hr').css('border', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('hr').css('border-top', '1px solid #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('hr').css('margin', '1em 0');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('hr').css('padding', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a:nth-child(1)').css('font-size', '1.2em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a:nth-child(2)').css('font-size', '2em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a:nth-child(3)').css('font-size', '1.5em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a:nth-child(4)').css('font-size', '1.17em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a:nth-child(5)').css('font-size', '1em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a:nth-child(6)').css('font-size', '.83em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a:last-child').css('font-size', '.67em');


                $('#main-gre-editor').find('#headingbtn').css('background', 'url("css_sprites.png") -3px -3px');
                $('#main-gre-editor').find('#boldbtn').css('background', 'url("css_sprites.png") -26px -3px');
                $('#main-gre-editor').find('#italicbtn').css('background', 'url("css_sprites.png") -3px -26px');
                $('#main-gre-editor').find('#underlinebtn').css('background', 'url("css_sprites.png") -26px -26px');
                $('#main-gre-editor').find('#strikethroughbtn').css('background', 'url("css_sprites.png") -49px -3px');
                $('#main-gre-editor').find('#alignleftbtn').css('background', 'url("css_sprites.png") -49px -26px');
                $('#main-gre-editor').find('#aligncenterbtn').css('background', 'url("css_sprites.png") -3px -49px');
                $('#main-gre-editor').find('#alignrightbtn').css('background', 'url("css_sprites.png") -26px -49px');
                $('#main-gre-editor').find('#justifybtn').css('background', 'url("css_sprites.png") -49px -49px');
                $('#main-gre-editor').find('#increaseFontSizebtn').css('background', 'url("css_sprites.png") -72px -3px');
                $('#main-gre-editor').find('#decreaseFontSizebtn').css('background', 'url("css_sprites.png") -72px -26px');
                $('#main-gre-editor').find('#textbackcolorbtn').css('background', 'url("css_sprites.png") -72px -49px');
                $('#main-gre-editor').find('#textcolorbtn').css('background', 'url("css_sprites.png") -3px -72px');
                $('#main-gre-editor').find('#listbtn').css('background', 'url("css_sprites.png") -26px -72px');
                $('#main-gre-editor').find('#numberlistbtn').css('background', 'url("css_sprites.png") -49px -72px');
                $('#main-gre-editor').find('#linkbtn').css('background', 'url("css_sprites.png") -72px -72px');
                $('#main-gre-editor').find('#unlinkbtn').css('background', 'url("css_sprites.png") -95px -3px');
                $('#main-gre-editor').find('#tablebtn').css('background', 'url("css_sprites.png") -95px -26px');
                $('#main-gre-editor').find('#tablebtn').css('position', 'relative');
                $('#main-gre-editor').find('#insertimagebtn').css('background', 'url("css_sprites.png") -95px -49px');
                $('#main-gre-editor').find('#insertvideobtn').css('background', 'url("css_sprites.png") -95px -72px');
                $('#main-gre-editor').find('#quotebtn').css('background', 'url("css_sprites.png") -3px -95px');
                $('#main-gre-editor').find('#codebtn').css('background', 'url("css_sprites.png") -26px -95px');
                $('#main-gre-editor').find('#emojibtn').css('background', 'url("css_sprites.png") -49px -95px');
                $('#main-gre-editor').find('#hrbtn').css('background', 'url("css_sprites.png") -72px -95px');
                $('#main-gre-editor').find('#htmlbtn').css('background', 'url("css_sprites.png") -95px -95px');
                $('#main-gre-editor').find('#fullscreenbtn').css('background', 'url("css_sprites.png") -118px -3px');
                $('#main-gre-editor').find('#infobtn').css('background', 'url("css_sprites.png") -118px -49px');


                $('#main-gre-editor').append('<div id="gre-blur"></div>');
                $('#main-gre-editor').children('#gre-blur').css('display', 'none');
                $('#main-gre-editor').children('#gre-blur').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-blur').css('top', '0');
                $('#main-gre-editor').children('#gre-blur').css('top', '0');
                $('#main-gre-editor').children('#gre-blur').css('left', '0');
                $('#main-gre-editor').children('#gre-blur').css('width', '100%');
                $('#main-gre-editor').children('#gre-blur').css('height', '100%');
                $('#main-gre-editor').children('#gre-blur').css('background-color', '#FFF');
                $('#main-gre-editor').children('#gre-blur').css('opacity', '.7');
                $('#main-gre-editor').children('#gre-blur').css('z-index', '2');




                // About pup-up window
                $('#main-gre-editor').append('<div id="main-gre-info"></div>');
                $('#main-gre-editor').children('#main-gre-info').css('display', 'none');
                $('#main-gre-editor').children('#main-gre-info').css('width', 400);
                $('#main-gre-editor').children('#main-gre-info').css('z-index', '3');
                $('#main-gre-editor').children('#main-gre-info').css('border-radius', '3px');
                $('#main-gre-editor').children('#main-gre-info').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#main-gre-info').css('position', 'absolute');
                $('#main-gre-editor').children('#main-gre-info').css('top', '50%');
                $('#main-gre-editor').children('#main-gre-info').css('left', '50%');
                $('#main-gre-editor').children('#main-gre-info').css('transform', 'translate(-50%, -50%)');
                $('#main-gre-editor').children('#main-gre-info').css('-webkit-transform', 'translate(-50%, -50%)');
                $('#main-gre-editor').children('#main-gre-info').css('background-color', '#f2f2f2');
                $('#main-gre-editor').children('#main-gre-info').css('padding', '20px');
                $('#main-gre-editor').children('#main-gre-info').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#main-gre-info').css('-webkit-box-sizing', 'border-box');
                $('#main-gre-editor').children('#main-gre-info').append('<div style="color:#333;font-size:25px;font-family:sans-serif;font-weight:bold;text-align:center;">GRE Editor</div>');
                $('#main-gre-editor').children('#main-gre-info').append('<div style="color:#333;font-size:15px;margin-top:10px;font-family:sans-serif;">A jQuery plugin made by <a href="https://www.gredev.net/en" style="text-decoration:none;color:#e92f42;" target="_BLANK">GRE Development</a> for helping web developers to make the Rich Text Editor feature easy and quick.</div><br>');
                $('#main-gre-editor').children('#main-gre-info').append('<div style="color:#333;font-size:15px;margin-top:10px;font-family:sans-serif;">This is an open source project with <a href="https://choosealicense.com/licenses/mit/" style="text-decoration:none;color:#e92f42;" target="_BLANK">MIT License<a> published on <a href="https://github.com/gre-dev/gre-editor" style="text-decoration:none;color:#e92f42;" target="_BLANK">Github</a>.</div>');




                // Insert image pup-up window
                $('#main-gre-editor').append('<div id="main-gre-insert-image"></div>');
                $('#main-gre-editor').children('#main-gre-insert-image').css('display', 'none');
                $('#main-gre-editor').children('#main-gre-insert-image').css('width', 400);
                $('#main-gre-editor').children('#main-gre-insert-image').css('z-index', '3');
                $('#main-gre-editor').children('#main-gre-insert-image').css('border-radius', '3px');
                $('#main-gre-editor').children('#main-gre-insert-image').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#main-gre-insert-image').css('position', 'absolute');
                $('#main-gre-editor').children('#main-gre-insert-image').css('top', '50%');
                $('#main-gre-editor').children('#main-gre-insert-image').css('left', '50%');
                $('#main-gre-editor').children('#main-gre-insert-image').css('transform', 'translate(-50%, -50%)');
                $('#main-gre-editor').children('#main-gre-insert-image').css('-webkit-transform', 'translate(-50%, -50%)');
                $('#main-gre-editor').children('#main-gre-insert-image').css('background-color', '#f2f2f2');
                $('#main-gre-editor').children('#main-gre-insert-image').css('padding', '20px');
                $('#main-gre-editor').children('#main-gre-insert-image').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#main-gre-insert-image').css('-webkit-box-sizing', 'border-box');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<div style="color:#333;font-size:25px;font-family:sans-serif;">Insert Image</div>');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="text" id="insert-image-url" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;" placeholder="Image URL">');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="text" id="insert-image-alt" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;" placeholder="Describe the image">');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="number" min="0" id="insert-image-width" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:5px;" placeholder="Width">');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="number" min="0" id="insert-image-height" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;" placeholder="Height">');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<label style="font-family:sans-serif;"><input checked="checked" type="checkbox" style="color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;">Set image dimension automatically.</label>');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<br><button name="insert" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">Insert</button>');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<button name="cancel" style="display:inline-block;color:#333;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;font-size:17px;font-family:sans-serif;padding:5px 15px;border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">Cancel</button>');





                // Insert link pup-up window
                $('#main-gre-editor').append('<div id="main-gre-insert-link"></div>');
                $('#main-gre-editor').children('#main-gre-insert-link').css('display', 'none');
                $('#main-gre-editor').children('#main-gre-insert-link').css('width', 400);
                $('#main-gre-editor').children('#main-gre-insert-link').css('z-index', '3');
                $('#main-gre-editor').children('#main-gre-insert-link').css('border-radius', '3px');
                $('#main-gre-editor').children('#main-gre-insert-link').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#main-gre-insert-link').css('position', 'absolute');
                $('#main-gre-editor').children('#main-gre-insert-link').css('top', '50%');
                $('#main-gre-editor').children('#main-gre-insert-link').css('left', '50%');
                $('#main-gre-editor').children('#main-gre-insert-link').css('transform', 'translate(-50%, -50%)');
                $('#main-gre-editor').children('#main-gre-insert-link').css('-webkit-transform', 'translate(-50%, -50%)');
                $('#main-gre-editor').children('#main-gre-insert-link').css('background-color', '#f2f2f2');
                $('#main-gre-editor').children('#main-gre-insert-link').css('padding', '20px');
                $('#main-gre-editor').children('#main-gre-insert-link').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#main-gre-insert-link').css('-webkit-box-sizing', 'border-box');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<div style="color:#333;font-size:25px;font-family:sans-serif;">Create Link</div>');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<input type="text" id="insert-url-url" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;" placeholder="URL">');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<input type="text" id="insert-url-title" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;" placeholder="Title">');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<label style="font-family:sans-serif;"><input checked="checked" type="checkbox" style="color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;">Open in a new wendow.</label>');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<br><button name="create" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">Insert</button>');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<button name="cancel" style="display:inline-block;color:#333;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;font-size:17px;font-family:sans-serif;padding:5px 15px;border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">Cancel</button>');










                // Insert video pup-up window
                $('#main-gre-editor').append('<div id="main-gre-insert-video"></div>');
                $('#main-gre-editor').children('#main-gre-insert-video').css('display', 'none');
                $('#main-gre-editor').children('#main-gre-insert-video').css('width', 400);
                $('#main-gre-editor').children('#main-gre-insert-video').css('z-index', '3');
                $('#main-gre-editor').children('#main-gre-insert-video').css('border-radius', '3px');
                $('#main-gre-editor').children('#main-gre-insert-video').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#main-gre-insert-video').css('position', 'absolute');
                $('#main-gre-editor').children('#main-gre-insert-video').css('top', '50%');
                $('#main-gre-editor').children('#main-gre-insert-video').css('left', '50%');
                $('#main-gre-editor').children('#main-gre-insert-video').css('transform', 'translate(-50%, -50%)');
                $('#main-gre-editor').children('#main-gre-insert-video').css('-webkit-transform', 'translate(-50%, -50%)');
                $('#main-gre-editor').children('#main-gre-insert-video').css('background-color', '#f2f2f2');
                $('#main-gre-editor').children('#main-gre-insert-video').css('padding', '20px');
                $('#main-gre-editor').children('#main-gre-insert-video').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#main-gre-insert-video').css('-webkit-box-sizing', 'border-box');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<div style="color:#333;font-size:25px;font-family:sans-serif;">Insert Video</div>');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<input type="text" id="insert-video-url" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;" placeholder="Youtube URL">');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<input type="number" min="0" id="insert-video-width" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:5px;" placeholder="Width">');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<input type="number" min="0" id="insert-video-height" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;" placeholder="Height">');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<label style="font-family:sans-serif;"><input checked="checked" type="checkbox" style="color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;border:1px solid #aaa;margin-top:10px;">Open in a new wendow.</label>');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<br><button name="insert" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">Insert</button>');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<button name="cancel" style="display:inline-block;color:#333;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;font-size:17px;font-family:sans-serif;padding:5px 15px;border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">Cancel</button>');




                $('#main-gre-editor').children('textarea').css('position', 'absolute');
                $('#main-gre-editor').children('textarea').css('top', ($('#gre-editor-toolbar').height() + 32) + 'px');
                $('#main-gre-editor').children('textarea').css('left', '0');
                $('#main-gre-editor').children('textarea').css('width', '100%');
                $('#main-gre-editor').children('textarea').css('height', 'calc(100% - ' + ($('#gre-editor-toolbar').height() + 32) + 'px)');
                $('#main-gre-editor').children('textarea').css('resize', 'none');
                $('#main-gre-editor').children('textarea').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('textarea').css('-webkit-box-sizing', 'border-box');
                $('#main-gre-editor').children('textarea').css('font-family', 'sans-serif');
                $('#main-gre-editor').children('textarea').css('font-size', '16px');
                $('#main-gre-editor').children('textarea').css('outline', 'none');
                $('#main-gre-editor').children('textarea').css('padding', '5px');
                $('#main-gre-editor').children('textarea').css('border', 'unset');
                $('#main-gre-editor').children('textarea').css('display', 'none');

                $('#main-gre-editor').children('#lab').css('display', 'block');
                $('#main-gre-editor').children('#lab').css('position', 'absolute');
                $('#main-gre-editor').children('#lab').css('top', ($('#gre-editor-toolbar').height() + 22) + 'px');
                $('#main-gre-editor').children('#lab').css('left', '0');
                $('#main-gre-editor').children('#lab').css('width', '100%');
                $('#main-gre-editor').children('#lab').css('height', 'calc(100% - ' + ($('#gre-editor-toolbar').height() + 22) + 'px)');
                $('#main-gre-editor').children('#lab').css('outline', 'none');
                $('#main-gre-editor').children('#lab').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#lab').css('-webkit-box-sizing', 'border-box');
                $('#main-gre-editor').children('#lab').css('font-family', 'sans-serif');
                $('#main-gre-editor').children('#lab').css('padding', '15px');
                $('#main-gre-editor').children('#lab').css('overflow-y', 'auto');
                $('#main-gre-editor').children('#lab').attr('contentEditable', true);
                $('#main-gre-editor').children('#lab').focus();



                $('#main-gre-editor').find('#boldbtn').click(() => {
                    format('bold');
                });

                $('#main-gre-editor').find('#unlinkbtn').click(() => {
                    format('unlink');
                });

                $('#main-gre-editor').find('#hrbtn').click(() => {
                    document.execCommand('insertHTML', false, '<hr/>');
                });

                $('#main-gre-editor').find('#tablebtn').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').slideToggle(100);
                    hideAllMenues('tabledropdown');
                });

                $('#main-gre-editor').find('#emojibtn').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').slideToggle(100);
                    hideAllMenues('emojidropdown');
                });

                $('#main-gre-editor').find('#textcolorbtn').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').slideToggle(100);
                    hideAllMenues('textcolordropdown');
                });

                $('#main-gre-editor').find('#textbackcolorbtn').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').slideToggle(100);
                    hideAllMenues('backgroundcolordropdown');
                });

                $('#main-gre-editor').find('#italicbtn').click(() => {
                    format('italic');
                });

                $('#main-gre-editor').find('#underlinebtn').click(() => {
                    format('underline');
                });

                $('#main-gre-editor').find('#strikethroughbtn').click(() => {
                    format('strikethrough');
                });

                $('#main-gre-editor').find('#alignleftbtn').click(() => {
                    format('justifyLeft');
                });

                $('#main-gre-editor').find('#aligncenterbtn').click(() => {
                    format('justifyCenter');
                });

                $('#main-gre-editor').find('#alignrightbtn').click(() => {
                    format('justifyRight');
                });

                $('#main-gre-editor').find('#justifybtn').click(() => {
                    format('justifyFull');
                });

                $('#main-gre-editor').find('#listbtn').click(() => {
                    format('insertunorderedlist');
                });

                $('#main-gre-editor').find('#numberlistbtn').click(() => {
                    format('insertOrderedList');
                });

                $('#main-gre-editor').find('#hone').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                    format('formatBlock', '<h1>');
                });

                $('#main-gre-editor').find('#htext').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                    var range = window.getSelection().getRangeAt(0);
                    var node = $(range.commonAncestorContainer)
                    if (node.parent().is('h1') || node.parent().is('h2') || node.parent().is('h3') || node.parent().is('h4') || node.parent().is('h5') || node.parent().is('h6')) {
                        node.unwrap();
                    }
                });

                $('#main-gre-editor').find('#htwo').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                    format('formatBlock', '<h2>');
                });

                $('#main-gre-editor').find('#hthree').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                    format('formatBlock', '<h3>');
                });

                $('#main-gre-editor').find('#hfour').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                    format('formatBlock', '<h4>');
                });

                $('#main-gre-editor').find('#hfive').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                    format('formatBlock', '<h5>');
                });

                $('#main-gre-editor').find('#hsix').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                    format('formatBlock', '<h6>');
                });

                $('#main-gre-editor').find('#htmlbtn').click(() => {
                    if ($('#main-gre-editor').children('#lab').css('display') == 'none') {
                        $('#main-gre-editor').children('#lab').show(1);
                        $('#main-gre-editor').children('textarea').hide(1);
                    } else {
                        $('#main-gre-editor').children('#lab').hide(1);
                        $('#main-gre-editor').children('textarea').show(1);
                    }
                });

                $('#main-gre-editor').find('#increaseFontSizebtn').click(() => {
                    const selection = window.getSelection();
                    if (selection) {
                        var size = window.getComputedStyle(selection.anchorNode.parentElement, null).getPropertyValue('font-size').replace('px', '');
                    }
                    if (size == 10) {
                        format('fontSize', 2);
                    } else if (size == 13) {
                        format('fontSize', 3);
                    } else if (size == 16) {
                        format('fontSize', 4);
                    } else if (size == 18) {
                        format('fontSize', 5);
                    } else if (size == 24) {
                        format('fontSize', 6);
                    } else {
                        format('fontSize', 7);
                    }
                });

                $('#main-gre-editor').find('#decreaseFontSizebtn').click(() => {
                    const selection = window.getSelection();
                    if (selection) {
                        var size = window.getComputedStyle(selection.anchorNode.parentElement, null).getPropertyValue('font-size').replace('px', '');
                    }
                    if (size == 48) {
                        format('fontSize', 6);
                    } else if (size == 32) {
                        format('fontSize', 5);
                    } else if (size == 24) {
                        format('fontSize', 4);
                    } else if (size == 18) {
                        format('fontSize', 3);
                    } else if (size == 16) {
                        format('fontSize', 2);
                    } else if (size == 13) {
                        format('fontSize', 1);
                    }
                });

                $('#main-gre-editor').find('#quotebtn').click(() => {
                    var range = window.getSelection().getRangeAt(0);
                    var node = $(range.commonAncestorContainer)
                    if (node.parent().is('blockquote')) {
                        node.unwrap();
                    } else {
                        format('formatBlock', 'blockquote');
                        $('#main-gre-editor').find('blockquote').css('border-left', '2px solid #aaa');
                        $('#main-gre-editor').find('blockquote').css('padding-left', '10px');
                    }
                });

                $('#main-gre-editor').find('#codebtn').click(() => {
                    var sel = document.getSelection().anchorNode.nodeValue;
                    var range = document.getSelection().getRangeAt(0);
                    var node = $(range.commonAncestorContainer);
                    console.log(sel);
                    if (node.parent().is('code')) {
                        node.unwrap();
                    } else {
                        document.execCommand('insertHTML', '<code>' + sel + '</code>');
                        $('#main-gre-editor').find('code').css('background-color', '#aaa');
                        $('#main-gre-editor').find('code').css('border-radius', '3px');
                        $('#main-gre-editor').find('code').css('-webkit-border-radius', '3px');
                    }
                });

                $('#main-gre-editor').find('#fullscreenbtn').click(() => {
                    if ($('#main-gre-editor').css('position') != 'fixed') {
                        $('#main-gre-editor').css('position', 'fixed');
                        $('#main-gre-editor').css('top', '0');
                        $('#main-gre-editor').css('left', '0');
                        $('#main-gre-editor').css('width', '100%');
                        $('#main-gre-editor').css('height', '100%');
                        $('#main-gre-editor').css('border', 'unset');
                        $('#main-gre-editor').css('border-radius', 'unset');
                        $('#main-gre-editor').css('z-index', '999999999999999999');
                        $('#main-gre-editor').find('#fullscreenbtn').css('background', 'url("css_sprites.png") -118px -26px');
                    } else {
                        $('#main-gre-editor').css('position', 'relative');
                        $('#main-gre-editor').css('min-width', '550px');
                        $('#main-gre-editor').css('min-height', '300px');
                        $('#main-gre-editor').css('width', settings.width);
                        $('#main-gre-editor').css('height', settings.height);
                        $('#main-gre-editor').css('border', '1px solid #ccc');
                        $('#main-gre-editor').css('border-radius', '2px');
                        $('#main-gre-editor').css('z-index', '1');
                        $('#main-gre-editor').find('#fullscreenbtn').css('background', 'url("css_sprites.png") -118px -3px');
                    }
                });



                $('#main-gre-editor').find('#headingbtn').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').slideToggle(150);
                    hideAllMenues('headingdropdown');
                });

                var lastImgCursor;
                $('#main-gre-editor').find('#insertimagebtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-insert-image').slideToggle(150);
                    var rand = Math.floor(Math.random() * 1001);
                    document.execCommand('insertHTML', false, '<span id="image-place-' + rand + '"></span>');
                    lastImgCursor = rand;
                });

                var lastVideoCursor;
                $('#main-gre-editor').find('#insertvideobtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-insert-video').slideToggle(150);
                    var rand = Math.floor(Math.random() * 1001);
                    document.execCommand('insertHTML', false, '<span id="video-place-' + rand + '"></span>');
                    lastVideoCursor = rand;
                });

                var lastLinkNode;
                var lastSelectedText;
                $('#main-gre-editor').find('#linkbtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-insert-link').slideToggle(150);
                    lastSelectedText = (document.getSelection().anchorNode.nodeValue && document.getSelection().anchorNode.nodeValue != null) ? document.getSelection().anchorNode.nodeValue : '';
                    var rand = Math.floor(Math.random() * 1001);
                    document.execCommand('insertHTML', false, '<span id="link-place-' + rand + '">' + lastSelectedText + '</span>');
                    lastLinkNode = rand;
                });

                $('#main-gre-editor').find('#infobtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-info').slideToggle(150);
                });

                var lastTableNode;
                $('#main-gre-editor').find('#linkbtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-insert-Table').slideToggle(150);
                    lastSelectedText = (document.getSelection().anchorNode.nodeValue && document.getSelection().anchorNode.nodeValue != null) ? document.getSelection().anchorNode.nodeValue : '';
                    var rand = Math.floor(Math.random() * 1001);
                    document.execCommand('insertHTML', false, '<span id="table-place-' + rand + '">' + lastSelectedText + '</span>');
                    lastLinkNode = rand;
                });


                $('#main-gre-editor').children('#lab').click(() => {
                    hideAllMenues();
                });


                $('#main-gre-editor').children('#lab').bind("DOMSubtreeModified", function () {
                    var myTextArea = document.getElementById('maincode');
                    myTextArea.innerHTML = $('#main-gre-editor').children('#lab').html();
                });


                $('#main-gre-editor').children('#main-gre-insert-image').find('input[type="checkbox"]').change((e) => {
                    if ($('#main-gre-editor').children('#main-gre-insert-image').find('input[type="checkbox"]').is(':checked')) {
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').attr('disabled', 'disabled');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').attr('disabled', 'disabled');
                    } else {
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').removeAttr('disabled');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').removeAttr('disabled');
                    }
                });


                $('#main-gre-editor').children('#main-gre-insert-video').find('input[type="checkbox"]').change((e) => {
                    if ($('#main-gre-editor').children('#main-gre-insert-video').find('input[type="checkbox"]').is(':checked')) {
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').attr('disabled', 'disabled');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').attr('disabled', 'disabled');
                    } else {
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').removeAttr('disabled');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').removeAttr('disabled');
                    }
                });

                var insertImageStatus = true;
                $('#main-gre-editor').children('#main-gre-insert-image').find('button[name="insert"]').click((e) => {
                    var url = $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').val();
                    var alt = $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').val();
                    var width = $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').val();
                    var height = $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').val();
                    var checkBox = $('#main-gre-editor').children('#main-gre-insert-image').find('input[type="checkbox"]');

                    $('#main-gre-editor').children('#lab').focus();

                    if (insertImageStatus) {
                        if (url.length < 1) {
                            $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').css('border', '1px solid red');
                            insertImageStatus = false;
                        }
                    }

                    if (insertImageStatus) {
                        if (!isURL(url)) {
                            $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').css('border', '1px solid red');
                            insertImageStatus = false;
                        }
                    }

                    if (insertImageStatus) {
                        if (alt.length < 1 && settings.forceAlt) {
                            $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').css('border', '1px solid red');
                            insertImageStatus = false;
                        }
                    }

                    if (insertImageStatus) {
                        if (!checkBox.is(':checked') && width.match('/^[1-9]+$/i')) {
                            $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').css('border', '1px solid red');
                            insertImageStatus = false;
                        }
                    }

                    if (insertImageStatus) {
                        if (!checkBox.is(':checked') && height.match('/^[1-9]+$/i')) {
                            $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').css('border', '1px solid red');
                            insertImageStatus = false;
                        }
                    }


                    if (insertImageStatus) {
                        var newImg = document.createElement('img');
                        newImg.src = url;
                        newImg.alt = alt;
                        if (!checkBox.is(':checked')) {
                            newImg.width = width;
                            newImg.height = height;
                        }
                        document.getElementById('image-place-' + lastImgCursor).parentNode.replaceChild(newImg, document.getElementById('image-place-' + lastImgCursor));
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').prop("disabled", true);
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').prop("disabled", true);
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[type="checkbox"]').prop("checked", true);
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-image').slideToggle(150);
                        $('#main-gre-editor').children('#gre-blur').hide(1);
                    }
                });

                $('#main-gre-editor').children('#main-gre-insert-image').find('button[name="cancel"]').click((e) => {
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').prop("disabled", true);
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').prop("disabled", true);
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[type="checkbox"]').prop("checked", true);
                    $('#main-gre-editor').children('#main-gre-insert-image').slideToggle(150);
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#gre-blur').hide(1);
                });






                // Text color pup-up window
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').attr('title', '');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('overflow', 'auto');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('top', '25px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('left', '50%');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('width', '187px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('height', '140px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('padding', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('cursor', 'default');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#FFF" style="background-color:#FFF;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#000" style="background-color:#000;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#333" style="background-color:#333;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#555" style="background-color:#555;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#777" style="background-color:#777;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#ccc" style="background-color:#ccc;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#2ee058" style="background-color:#2ee058;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#53f718" style="background-color:#53f718;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#e0dd2e" style="background-color:#e0dd2e;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#2e31e0" style="background-color:#2e31e0;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#2e99e0" style="background-color:#2e99e0;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#2ee0cb" style="background-color:#2ee0cb;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#30f8c6" style="background-color:#30f8c6;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#8a2ee0" style="background-color:#8a2ee0;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#a130f8" style="background-color:#a130f8;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#e02ec5" style="background-color:#e02ec5;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#f830c6" style="background-color:#f830c6;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#e02e2e" style="background-color:#e02e2e;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#e02e58" style="background-color:#e02e58;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#f83030" style="background-color:#f83030;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#d45454" style="background-color:#d45454;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#a04b1c" style="background-color:#a04b1c;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#b8683d" style="background-color:#b8683d;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#d46325" style="background-color:#d46325;"></a>');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('width', '23.7px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('height', '23.7px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('border', '1px solid #ccc');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('margin', '2.6px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('border-radius', '200px');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a#percolor').click((e) => {
                    var code = $(e.currentTarget).attr('data-code');
                    document.execCommand('foreColor', false, code);
                });






                // Text background color pup-up window
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').attr('title', '');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('overflow', 'auto');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('top', '25px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('left', '50%');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('width', '187px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('height', '140px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('padding', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('cursor', 'default');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#FFF" style="background-color:#FFF;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#000" style="background-color:#000;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#333" style="background-color:#333;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#555" style="background-color:#555;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#777" style="background-color:#777;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#ccc" style="background-color:#ccc;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#2ee058" style="background-color:#2ee058;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#53f718" style="background-color:#53f718;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#e0dd2e" style="background-color:#e0dd2e;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#2e31e0" style="background-color:#2e31e0;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#2e99e0" style="background-color:#2e99e0;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#2ee0cb" style="background-color:#2ee0cb;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#30f8c6" style="background-color:#30f8c6;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#8a2ee0" style="background-color:#8a2ee0;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#a130f8" style="background-color:#a130f8;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#e02ec5" style="background-color:#e02ec5;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#f830c6" style="background-color:#f830c6;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#e02e2e" style="background-color:#e02e2e;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#e02e58" style="background-color:#e02e58;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#f83030" style="background-color:#f83030;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#d45454" style="background-color:#d45454;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#a04b1c" style="background-color:#a04b1c;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#b8683d" style="background-color:#b8683d;"></a>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('<a id="percolor" href="javascript:void(0)" data-code="#d46325" style="background-color:#d46325;"></a>');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('width', '23.7px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('height', '23.7px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('border', '1px solid #ccc');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('margin', '2.6px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('border-radius', '200px');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a#percolor').click((e) => {
                    var code = $(e.currentTarget).attr('data-code');
                    document.execCommand('backColor', false, code);
                });






                // Insert emoji pup-up window
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').append('');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').attr('title', '');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('overflow', 'auto');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('top', '25px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('left', '50%');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('-webkit-transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('width', '270px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('height', '200px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('padding', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').append('<table></table>');

                for (var i = 0; i <= (emojies.length / 7); i++) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('table').append('<tr></tr>');
                }

                var emojicountment = 1;
                emojies.forEach(peremoji => {
                    if ($('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('tr:nth-child(' + emojicountment + ')').find('td').length == 7) {
                        emojicountment++;
                    }
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('tr:nth-child(' + emojicountment + ')').append('<td><a href="javascript:void(0)" data-code="' + peremoji + '">' + peremoji + '</a></td>');
                });

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('font-size', '20px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('margin', '2px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('text-decoration', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('color', '#333');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').click((e) => {
                    var code = $(e.currentTarget).attr('data-code');
                    document.execCommand('insertHTML', false, code);
                });






                // Insert table pup-up window
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').append('<table><thead><tr><th class=""></th><th class=""></th><th class=""></th><th class=""></th><th class=""></th><th class=""></th></tr></thead><tbody><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr></tbody></table>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').attr('title', '');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('top', '25px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('left', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('width', '114px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('height', '98px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('padding', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('background-color', 'rgb(245, 245, 245)');


                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('border', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('border-collapse', 'collapse');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('border-spacing', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('table-layout', 'fixed');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('thead').css('display', 'none');


                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('padding', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('width', '17px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('height', '17px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('border', '1px solid #ccc');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('background', '#f3f3f3');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('margin', '1px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('box-sizing', 'border-box');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').on('mouseenter', (e) => {
                    var $td, $tr, $trs, $table, num;
                    $table = $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table');
                    $table.find('td').removeClass('selected');
                    $td = $(e.currentTarget);
                    $tr = $td.parent();
                    num = $tr.find('td').index($td) + 1;
                    $trs = $tr.prevAll('tr').addBack();
                    if ($tr.parent().is('tbody')) {
                        $trs = $trs.add($table.find('thead tr'));
                    }
                    $trs.find("td:lt(" + num + "), th:lt(" + num + ")").addClass('selected');
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('.selected').css('background', '#ddd');
                });

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').on('mouseleave', (e) => {
                    $(e.currentTarget).removeClass('selected');
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td:not(.selected)').css('background', '#f3f3f3');
                });

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').on('mouseleave', (e) => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').removeClass('selected');
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td:not(.selected)').css('background', '#f3f3f3');
                });

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').on('mousedown', (e) => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').slideToggle(100);
                    var $td, $tr, colNum, rowNum;
                    $td = $(e.currentTarget);
                    $tr = $td.parent();
                    colNum = $tr.find('td').index($td) + 1;
                    rowNum = $tr.prevAll('tr').length + 1;
                    var $table, $tbody, $td, $thead, $tr, c, k, l, r, ref, ref1;
                    $table = document.createElement('table');
                    $thead = document.createElement('thead');
                    $tbody = document.createElement('tbody');
                    $table.appendChild($thead);
                    $table.appendChild($tbody);
                    for (r = k = 0, ref = rowNum; 0 <= ref ? k < ref : k > ref; r = 0 <= ref ? ++k : --k) {
                        $tr = document.createElement('tr');
                        if (r === 0) {
                            $thead.appendChild($tr);
                        } else {
                            $tbody.appendChild($tr);
                        }
                        for (c = l = 0, ref1 = colNum; 0 <= ref1 ? l < ref1 : l > ref1; c = 0 <= ref1 ? ++l : --l) {
                            if (r === 0) {
                                $th = document.createElement('th');
                                $tr.appendChild($th);
                            } else {
                                $td = document.createElement('td');
                                $tr.appendChild($td);
                            }
                        }
                    }
                    var wrap = document.createElement('div');
                    wrap.appendChild($table.cloneNode(true));
                    document.execCommand('insertHTML', false, wrap.innerHTML);
                    wrap.remove();

                    // Styling inserted table
                    $('#main-gre-editor').children('#lab').find('table').css('width', '100%');
                    $('#main-gre-editor').children('#lab').find('table').css('border-spacing', '0');
                    $('#main-gre-editor').children('#lab').find('table').css('border', '1px solid #eee');
                    $('#main-gre-editor').children('#lab').find('table').find('thead').css('background-color', '#eee');
                    $('#main-gre-editor').children('#lab').find('table').find('thead').find('tr').find('th').css('padding', '8px');
                    $('#main-gre-editor').children('#lab').find('table').find('thead').find('tr').find('th').css('border', '1px solid #FFF');
                    $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td').css('padding', '8px');
                    $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td').css('border-right', '1px solid #eee');
                    $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td').css('border-bottom', '1px solid #eee');
                    $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td:last-child').css('border-right', 'unset');
                    $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr:last-child').find('td').css('border-bottom', 'unset');


                });



                var insertLinkStatus = true;
                $('#main-gre-editor').children('#main-gre-insert-link').find('button[name="create"]').click((e) => {
                    var url = $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').val();
                    var title = $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').val();
                    var checkBox = $('#main-gre-editor').children('#main-gre-insert-link').find('input[type="checkbox"]');

                    $('#main-gre-editor').children('#lab').focus();

                    if (insertLinkStatus) {
                        if (url.length < 1) {
                            $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').css('border', '1px solid red');
                            insertLinkStatus = false;
                        }
                    }

                    if (insertLinkStatus) {
                        if (!isURL(url)) {
                            $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').css('border', '1px solid red');
                            insertLinkStatus = false;
                        }
                    }

                    if (insertLinkStatus) {
                        if (title.length < 1 && settings.forceLinkTitle) {
                            $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').css('border', '1px solid red');
                            insertLinkStatus = false;
                        }
                    }

                    if (insertLinkStatus) {
                        var newLink = document.createElement('a');
                        newLink.href = url;
                        newLink.title = title;
                        newLink.innerText = lastSelectedText;
                        if (checkBox.is(':checked')) {
                            newLink.setAttribute('target', '_blank');
                        }
                        document.getElementById('link-place-' + lastLinkNode).parentNode.replaceChild(newLink, document.getElementById('link-place-' + lastLinkNode));
                        $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-link').find('input[type="checkbox"]').prop("checked", true);
                        $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-link').slideToggle(150);
                        $('#main-gre-editor').children('#gre-blur').hide(1);
                    }
                });

                $('#main-gre-editor').children('#main-gre-insert-link').find('button[name="cancel"]').click((e) => {
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[type="checkbox"]').prop("checked", true);
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-link').slideToggle(150);
                    $('#main-gre-editor').children('#gre-blur').hide(1);
                });








                var insertVideoStatus = true;
                $('#main-gre-editor').children('#main-gre-insert-video').find('button[name="insert"]').click((e) => {
                    var url = $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').val();
                    var width = $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').val();
                    var height = $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').val();
                    var checkBox = $('#main-gre-editor').children('#main-gre-insert-video').find('input[type="checkbox"]');

                    $('#main-gre-editor').children('#lab').focus();

                    if (insertVideoStatus) {
                        if (url.length < 1) {
                            $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').css('border', '1px solid red');
                            insertVideoStatus = false;
                        }
                    }

                    if (insertVideoStatus) {
                        if (!validateYouTubeUrl(url)) {
                            $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').css('border', '1px solid red');
                            insertVideoStatus = false;
                        }
                    }

                    if (insertVideoStatus) {
                        if (!checkBox.is(':checked') && width.match('/^[1-9]+$/i')) {
                            $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').css('border', '1px solid red');
                            insertVideoStatus = false;
                        }
                    }

                    if (insertVideoStatus) {
                        if (!checkBox.is(':checked') && height.match('/^[1-9]+$/i')) {
                            $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').css('border', '1px solid red');
                            insertVideoStatus = false;
                        }
                    }

                    var video_id = url.split('v=')[1];
                    var ampersandPosition = video_id.indexOf('&');
                    if (ampersandPosition != -1) {
                        video_id = video_id.substring(0, ampersandPosition);
                    }

                    if (insertVideoStatus) {
                        var newVideo = document.createElement('iframe');
                        newVideo.src = 'https://www.youtube.com/embed/' + video_id;
                        newVideo.setAttribute('frameborder', '0');
                        newVideo.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
                        newVideo.setAttribute('allowfullscreen', 'true');
                        if (!checkBox.is(':checked')) {
                            newVideo.width = width;
                            newVideo.height = height;
                        }
                        document.getElementById('video-place-' + lastVideoCursor).parentNode.replaceChild(newVideo, document.getElementById('video-place-' + lastVideoCursor));
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[type="checkbox"]').prop("checked", true);
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-video').slideToggle(150);
                        $('#main-gre-editor').children('#gre-blur').hide(1);
                    }
                });

                $('#main-gre-editor').children('#main-gre-insert-video').find('button[name="cancel"]').click((e) => {
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[type="checkbox"]').prop("checked", true);
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-video').slideToggle(150);
                    $('#main-gre-editor').children('#gre-blur').hide(1);
                });







                $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').css('border', '1px solid #aaa');
                    insertImageStatus = true;
                });

                $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').css('border', '1px solid #aaa');
                    insertImageStatus = true;
                });

                $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').css('border', '1px solid #aaa');
                    insertImageStatus = true;
                });

                $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').css('border', '1px solid #aaa');
                    insertImageStatus = true;
                });

                $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').css('border', '1px solid #aaa');
                    insertLinkStatus = true;
                });

                $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').css('border', '1px solid #aaa');
                    insertLinkStatus = true;
                });

                $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').css('border', '1px solid #aaa');
                    insertVideoStatus = true;
                });

                $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').css('border', '1px solid #aaa');
                    insertVideoStatus = true;
                });

                $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').change(() => {
                    $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').css('border', '1px solid #aaa');
                    insertVideoStatus = true;
                });









                // Some functions
                function isURL(url) {
                    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                    return pattern.test(url);
                }

                function format(command, value) {
                    document.execCommand(command, false, value);
                }

                function validateYouTubeUrl(url) {
                    if (url != undefined || url != '') {
                        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                        var match = url.match(regExp);
                        if (match && match[2].length == 11) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }

                function hideAllMenues(str) {
                    if (str == 'headingdropdown') {
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').hide(1);
                    } else if (str == 'tabledropdown') {
                        $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').hide(1);
                    } else if (str == 'emojidropdown') {
                        $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').hide(1);
                    } else if (str == 'textcolordropdown') {
                        $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').hide(1);
                    } else if (str == 'backgroundcolordropdown') {
                        $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').hide(1);
                    } else {
                        $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').hide(1);
                        $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').hide(1);
                    }

                }







            }

        });

    };



}(jQuery));