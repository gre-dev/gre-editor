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
            lang: 'en',
            onLoad: null
        }, options);


        return this.each(() => {
            var emojies = ['😀', '😆', '😅', '😂', '🤣', '😊', '😇', '😍', '🥰', '😉', '😘', '😚', '😋', '🤓', '🧐', '😎', '😏', '😒', '😞', '😔', '🥺', '😩', '😣', '😢', '😭', '😤', '😡', '🤬', '🤯', '🤲', '👐', '🙌', '👏', '🤑', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤟', '🤘', '👌', '🤏', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🤚', '🖐️', '🖖', '👋', '🤙', '💪', '🖕', '✍️', '🙏', '🦶', '🦵', '💋', '👩‍💻', '👨‍💻', '🙋‍♂️', '🙋', '🤦', '🤦‍♂️', '🤷‍♀️', '🤷‍♂️', '🚶‍♂️', '🏃', '💐', '🌷', '🌹', '🥀', '🌺', '🌸', '💥', '🔥', '🌟', '🐵', '🙈', '🙉', '🙊', '🐒', '🐵', '🐸', '🍒', '🍑', '🥝', '🍌', '🍋', '🍳', '🥉', '🏅', '🎖️', '🥈', '🥇', '🚗', '🚕', '🚙', '🌠', '💊', '💉', '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤎', '🤍', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️', '⏲️', '⏰', '🕰️', '⌛', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️', '🧯', '🛢️', '💸', '💵', '💴', '💶', '💷', '💰', '🔞', '❗', '❕', '❓', '❔', '⚠️', '🔰', '✅', '🚫', '📛', '⛔', '❌', '💯', '⚪', '⚫', '🔴', '🔵', '🟤', '🟣', '🟢', '🟡', '🔺', '🟠', '🎵', '🎶', '➕', '➖', '➗', '✖️', '♾️', '💲', '💱', '🌐', '♻️'];

            const lang = {
                en: {
                    heading: 'Heading',
                    text: 'Normal',
                    h1: 'Heading 1',
                    h2: 'Heading 2',
                    h3: 'Heading 3',
                    h4: 'Heading 4',
                    h5: 'Heading 5',
                    h6: 'Heading 6',
                    bold: 'Bold (Ctrl+B)',
                    italic: 'Italic (Ctrl+I)',
                    underline: 'Underline (Ctrl+U)',
                    strikethrough: 'Strike Through (Ctrl+S)',
                    alignleft: 'Align Left',
                    aligncenter: 'Align Center',
                    alignright: 'Align Right',
                    alignjustify: 'Align Justify',
                    increasefontsize: 'Font Size +',
                    decreasefontsize: 'Font Size -',
                    textbackgroundcolor: 'Text Background Color',
                    textcolor: 'Text Color',
                    unorderedlist: 'Unordered List',
                    orderedlist: 'Ordered List',
                    createlink: 'Create Link (Ctrl+K)',
                    destroylink: 'Destroy Link',
                    inserttable: 'Insert Table',
                    insertimage: 'Insert Image (Ctrl+P)',
                    insertvideo: 'Insert Video',
                    quote: 'Quote',
                    insertcode: 'Insert Code',
                    insertemoji: 'Insert Emoji',
                    inserthr: 'Insert Horizontal Line',
                    viewpagesource: 'View Page Source',
                    fullscreenmode: 'Fullscreen Mode',
                    normalmode: 'Normal Mode',
                    about: 'About',
                    imageurl: 'Image URL',
                    describetheimage: 'Describe the image',
                    width: 'Width',
                    height: 'Height',
                    setimagedauto: 'Set image dimensions automatically.',
                    insert: 'Insert',
                    cancel: 'Cancel',
                    youtubeurl: 'Youtube URL',
                    setvideodauto: 'Set video dimensions automatically.',
                    url: 'URL',
                    title: 'Title',
                    openinanewwindow: 'Open in a new window.'
                },
                ar: {
                    heading: 'عنوان',
                    text: 'نص عادي',
                    h1: 'عنوان أول',
                    h2: 'عنوان ثاني',
                    h3: 'عنوان ثالث',
                    h4: 'عنوان رابع',
                    h5: 'عنوان خامس',
                    h6: 'عنوان سادس',
                    bold: 'خط عريض (Ctrl+B)',
                    italic: 'خط مائل (Ctrl+I)',
                    underline: 'خط تحت الكتابة (Ctrl+U)',
                    strikethrough: 'كتابة مشطوبة (Ctrl+S)',
                    alignleft: 'محاذاة لليسار',
                    aligncenter: 'محاذاة للوسط',
                    alignright: 'محاذاة لليمين',
                    alignjustify: 'محاذاة بالتساوي',
                    increasefontsize: 'زيادة حجم الخط',
                    decreasefontsize: 'تقليل حجم الخط',
                    textbackgroundcolor: 'لون خلفية النص',
                    textcolor: 'لون الخط',
                    unorderedlist: 'تنقيط',
                    orderedlist: 'ترقيم',
                    createlink: 'إنشاء رابط (Ctrl+K)',
                    destroylink: 'إلغاء رابط',
                    inserttable: 'إدراج جدول',
                    insertimage: 'إدراج صورة (Ctrl+P)',
                    insertvideo: 'إدراج فيديو',
                    quote: 'إقتباس',
                    insertcode: 'إدراج كود',
                    insertemoji: 'إدراج ملصق',
                    inserthr: 'إدراج خط فاصل',
                    viewpagesource: 'الكود المصدري',
                    fullscreenmode: 'وضع كامل الشاشة',
                    normalmode: 'الوضع العادي',
                    about: 'معلومات',
                    imageurl: 'رابط الصورة',
                    describetheimage: 'أكتب وصف للصورة',
                    width: 'العرض',
                    height: 'الطول',
                    setimagedauto: 'ضبط أبعاد الصورة تلقائياً.',
                    insert: 'إدراج',
                    cancel: 'إلغاء',
                    youtubeurl: 'رابط اليوتيوب',
                    setvideodauto: 'ضبط أبعاد الفيديو تلقائياً.',
                    url: 'الرابط',
                    title: 'وصف الرابط',
                    openinanewwindow: 'فتح في صفحة جديدة.'
                },
                tr: {
                    heading: 'Başlık',
                    text: 'Normal',
                    h1: 'Başlık 1',
                    h2: 'Başlık 2',
                    h3: 'Başlık 3',
                    h4: 'Başlık 4',
                    h5: 'Başlık 5',
                    h6: 'Başlık 6',
                    bold: 'Kalın (Ctrl+B)',
                    italic: 'İtalik (Ctrl+I)',
                    underline: 'Altı Çizili (Ctrl+U)',
                    strikethrough: 'Üstü Çizili (Ctrl+S)',
                    alignleft: 'Sola Hizala',
                    aligncenter: 'Ortala',
                    alignright: 'Sağa Hizala',
                    alignjustify: 'İki yana yasla',
                    increasefontsize: 'Yazı tipi boyutunu büyüt',
                    decreasefontsize: 'Yazı tipi boyutunu küçültme',
                    textbackgroundcolor: 'Metin Arka Plan Rengi',
                    textcolor: 'Metin Rengi',
                    unorderedlist: 'Sırasız liste',
                    orderedlist: 'Sıralı liste',
                    createlink: 'Bağlantı ekle (Ctrl+K)',
                    destroylink: 'Bağlantıyı kaldır',
                    inserttable: 'Tablo ekle',
                    insertimage: 'Resim ekle (Ctrl+P)',
                    insertvideo: 'Video ekle',
                    quote: 'Alıntı',
                    insertcode: 'Kod ekle',
                    insertemoji: 'İfadeler',
                    inserthr: 'Yatay çizgi ekleme',
                    viewpagesource: 'Kod görünümü',
                    fullscreenmode: 'Tam ekran mod',
                    normalmode: 'Normal mod',
                    about: 'Hakkında',
                    imageurl: 'Resimi bağlantısı',
                    describetheimage: 'Resimi açıklayın',
                    width: 'Genişlik',
                    height: 'Yükseklik',
                    setimagedauto: 'Resimi boyutlarını otomatik olarak ayarlayın.',
                    insert: 'Ekle',
                    cancel: 'İptal',
                    youtubeurl: 'Youtube video bağlantısı',
                    setvideodauto: 'Video boyutlarını otomatik olarak ayarlayın.',
                    url: 'Bağlantı',
                    title: 'Başlık',
                    openinanewwindow: 'Yeni bir pencerede aç.'
                },
                de: {
                    heading: 'formatierung',
                    text: 'Normal',
                    h1: 'Überschrift 1',
                    h2: 'Überschrift 2',
                    h3: 'Überschrift 3',
                    h4: 'Überschrift 4',
                    h5: 'Überschrift 5',
                    h6: 'Überschrift 6',
                    bold: 'Fett (Ctrl+B)',
                    italic: 'Kursiv (Ctrl+I)',
                    underline: 'Unterstrichen (Ctrl+U)',
                    strikethrough: 'Durchgestrichen (Ctrl+S)',
                    alignleft: 'Linksbündig ausrichten',
                    aligncenter: 'Zentriert ausrichten',
                    alignright: 'Rechtsbündig ausrichten',
                    alignjustify: 'Blocksatz',
                    increasefontsize: 'Schriftgröße vergrößern',
                    decreasefontsize: 'Schrift verkleinern',
                    textbackgroundcolor: 'Texthintergrundfarbe',
                    textcolor: 'Textfarbe',
                    unorderedlist: 'Unnummerierte liste',
                    orderedlist: 'Nummerierte liste',
                    createlink: 'Link einfügen (Ctrl+K)',
                    destroylink: 'Link entfernen',
                    inserttable: 'Tabelle einfügen',
                    insertimage: 'Bild einfügen (Ctrl+P)',
                    insertvideo: 'Video einfügen',
                    quote: 'Einzug vergrößern',
                    insertcode: 'Code einfügen',
                    insertemoji: 'Emoticons',
                    inserthr: 'Horizontale Linie einfügen',
                    viewpagesource: 'Code-Ansicht',
                    fullscreenmode: 'Vollbild',
                    normalmode: 'Vollbild',
                    about: 'Über',
                    imageurl: 'Bild-Link',
                    describetheimage: 'Beschreibe das Bild',
                    width: 'Breite',
                    height: 'Höhe',
                    setimagedauto: 'Bildmaße automatisch einstellen.',
                    insert: 'Einfügen',
                    cancel: 'Stornieren',
                    youtubeurl: 'Youtube Link',
                    setvideodauto: 'Stellen Sie die Video Dimensionen automatisch ein.',
                    url: 'Link',
                    title: 'Titel',
                    openinanewwindow: 'In einem neuen Fenster öffnen.'
                },
                fa: {
                    heading: 'قالب',
                    text: 'طبیعی',
                    h1: 'سر‌صفحه 1',
                    h2: 'سر‌صفحه 2',
                    h3: 'سر‌صفحه 3',
                    h4: 'سر‌صفحه 4',
                    h5: 'سر‌صفحه 5',
                    h6: 'سر‌صفحه 6',
                    bold: 'ضخیم (Ctrl+B)',
                    italic: 'خط کج (Ctrl+I)',
                    underline: 'خط زیر (Ctrl+U)',
                    strikethrough: 'خط خورده (Ctrl+S)',
                    alignleft: 'چپ چین',
                    aligncenter: 'وسط چین',
                    alignright: 'راست چین',
                    alignjustify: 'مساوی از طرفین',
                    increasefontsize: 'اندازه قلم را افزایش دهید',
                    decreasefontsize: 'اندازه قلم را کاهش دهید',
                    textbackgroundcolor: 'رنگ پس زمینه متن',
                    textcolor: 'رنگ متن',
                    unorderedlist: 'لیست دایره ای',
                    orderedlist: 'لیست شماره ای',
                    createlink: 'اضافه کردن لینک (Ctrl+K)',
                    destroylink: 'حذف لینک',
                    inserttable: 'اضافه کردن جدول',
                    insertimage: 'اضافه کردن تصویر (Ctrl+P)',
                    insertvideo: 'اضافه کردن فایل تصویری',
                    quote: 'نقل قول',
                    insertcode: 'کد را وارد کنید',
                    insertemoji: 'شکلک ها',
                    inserthr: 'قرار دادن افقی خط',
                    viewpagesource: 'مشاهده کد',
                    fullscreenmode: 'حالت تمام صفحه',
                    normalmode: 'حالت عادی',
                    about: 'در باره',
                    imageurl: 'لینک تصویر',
                    describetheimage: 'تصویر را توصیف کنید',
                    width: 'عرض',
                    height: 'قد',
                    setimagedauto: 'ابعاد تصویر را بطور خودکار تنظیم کنید.',
                    insert: 'درج کنید',
                    cancel: 'لغو',
                    youtubeurl: 'لینک یوتیوب',
                    setvideodauto: 'ابعاد فیلم را بطور خودکار تنظیم کنید.',
                    url: 'لینک',
                    title: 'عنوان',
                    openinanewwindow: 'در یک پنجره جدید باز کنید.'
                },
                fr: {
                    heading: 'Format de paragraphe',
                    text: 'Normal',
                    h1: 'Titre 1',
                    h2: 'Titre 2',
                    h3: 'Titre 3',
                    h4: 'Titre 4',
                    h5: 'Titre 5',
                    h6: 'Titre 6',
                    bold: 'Gras (Ctrl+B)',
                    italic: 'Italique (Ctrl+I)',
                    underline: 'Souligné (Ctrl+U)',
                    strikethrough: 'Barré (Ctrl+S)',
                    alignleft: 'Aligner à gauche',
                    aligncenter: 'Aligner au centre',
                    alignright: 'Aligner à droite',
                    alignjustify: 'Justifier',
                    increasefontsize: 'Taille de police +',
                    decreasefontsize: 'Taille de police -',
                    textbackgroundcolor: 'Couleur d\'arrière-plan du texte',
                    textcolor: 'Couleur du texte',
                    unorderedlist: 'Liste non ordonnée',
                    orderedlist: 'Liste ordonnée',
                    createlink: 'Insérer un lien (Ctrl+K)',
                    destroylink: 'Enlever le lien',
                    inserttable: 'Insérer un tableau',
                    insertimage: 'Insérer une image (Ctrl+P)',
                    insertvideo: 'Insérer une vidéo',
                    quote: 'Citation',
                    insertcode: 'Insérer un code',
                    insertemoji: 'Émoticônes',
                    inserthr: 'Insérer une ligne horizontale',
                    viewpagesource: 'Mode HTML',
                    fullscreenmode: 'Mode plein écran',
                    normalmode: 'Mode normal',
                    about: 'Sur',
                    imageurl: 'Lien d\'image',
                    describetheimage: 'Décrivez l\'image',
                    width: 'Largeur',
                    height: 'La taille',
                    setimagedauto: 'Définissez automatiquement les dimensions de l\'image.',
                    insert: 'Insérer',
                    cancel: 'Annuler',
                    youtubeurl: 'Lien Youtube',
                    setvideodauto: 'Définissez automatiquement les dimensions de la vidéo.',
                    url: 'Lien',
                    title: 'Titre',
                    openinanewwindow: 'Ouvre dans une nouvelle fenêtre.'
                },
                ja: {
                    heading: '段落の書式',
                    text: '標準',
                    h1: 'ヘッダー 1',
                    h2: 'ヘッダー 2',
                    h3: 'ヘッダー 3',
                    h4: 'ヘッダー 4',
                    h5: 'ヘッダー 5',
                    h6: 'ヘッダー 6',
                    bold: '太字 (Ctrl+B)',
                    italic: '斜体 (Ctrl+I)',
                    underline: '下線 (Ctrl+U)',
                    strikethrough: '取り消し線 (Ctrl+S)',
                    alignleft: '左揃え',
                    aligncenter: '中央揃え',
                    alignright: '右揃え',
                    alignjustify: '両端揃え',
                    increasefontsize: 'フォントサイズ +',
                    decreasefontsize: 'フォントサイズ -',
                    textbackgroundcolor: 'テキストの背景色',
                    textcolor: 'テキストの色',
                    unorderedlist: '箇条書き',
                    orderedlist: '段落番号',
                    createlink: 'リンクの挿入 (Ctrl+K)',
                    destroylink: 'リンクの削除',
                    inserttable: '表の挿入',
                    insertimage: '画像の挿入 (Ctrl+P)',
                    insertvideo: '動画の挿入',
                    quote: '引用',
                    insertcode: 'コードを挿入',
                    insertemoji: '絵文字',
                    inserthr: '水平線の挿入',
                    viewpagesource: 'HTMLタグ表示',
                    fullscreenmode: '全画面モード',
                    normalmode: 'ノーマルモード',
                    about: '約',
                    imageurl: '画像リンク',
                    describetheimage: '画像を説明する',
                    width: '幅',
                    height: '高さ',
                    setimagedauto: '画像の寸法を自動的に設定します。',
                    insert: 'インサート',
                    cancel: 'キャンセル',
                    youtubeurl: 'Youtubeリンク',
                    setvideodauto: 'ビデオのサイズを自動的に設定します。',
                    url: 'リンク',
                    title: '題名',
                    openinanewwindow: '新しいウィンドウで開きます。'
                },
                ko: {
                    heading: '단락',
                    text: '표준',
                    h1: '제목 1',
                    h2: '제목 2',
                    h3: '제목 3',
                    h4: '제목 4',
                    h5: '제목 5',
                    h6: '제목 6',
                    bold: '굵게 (Ctrl+B)',
                    italic: '기울임꼴 (Ctrl+I)',
                    underline: '밑줄 (Ctrl+U)',
                    strikethrough: '취소선 (Ctrl+S)',
                    alignleft: '왼쪽정렬',
                    aligncenter: '가운데정렬',
                    alignright: '오른쪽정렬',
                    alignjustify: '양쪽정렬',
                    increasefontsize: '글꼴 크기 늘리기',
                    decreasefontsize: '글꼴 크기 감소',
                    textbackgroundcolor: '텍스트 배경색',
                    textcolor: '글자 색',
                    unorderedlist: '점 리스트',
                    orderedlist: '숫자 리스트',
                    createlink: '링크 삽입 (Ctrl+K)',
                    destroylink: '링크삭제',
                    inserttable: '표 삽입',
                    insertimage: '이미지 삽입 (Ctrl+P)',
                    insertvideo: '동영상 삽입',
                    quote: '인용',
                    insertcode: '암호 삽입',
                    insertemoji: '이모티콘',
                    inserthr: '수평선을 삽입',
                    viewpagesource: '코드보기',
                    fullscreenmode: '전체 화면으로보기',
                    normalmode: '일반 모드',
                    about: '약',
                    imageurl: '이미지 링크',
                    describetheimage: '이미지 설명',
                    width: '폭',
                    height: '신장',
                    setimagedauto: '이미지 크기를 자동으로 설정하십시오.',
                    insert: '끼우다',
                    cancel: '취소',
                    youtubeurl: 'Youtube 링크',
                    setvideodauto: '비디오 크기를 자동으로 설정하십시오.',
                    url: '링크',
                    title: '표제',
                    openinanewwindow: '새 창에서 엽니 다.'
                },
                ru: {
                    heading: 'Формат абзаца',
                    text: 'Нормальный',
                    h1: 'Заголовок 1',
                    h2: 'Заголовок 2',
                    h3: 'Заголовок 3',
                    h4: 'Заголовок 4',
                    h5: 'Заголовок 5',
                    h6: 'Заголовок 6',
                    bold: 'Жирный (Ctrl+B)',
                    italic: 'Курсив (Ctrl+I)',
                    underline: 'Подчеркнутый (Ctrl+U)',
                    strikethrough: 'Зачеркнутый (Ctrl+S)',
                    alignleft: 'По левому краю',
                    aligncenter: 'По центру',
                    alignright: 'По правому краю',
                    alignjustify: 'По ширине',
                    increasefontsize: 'Увеличить размер шрифта',
                    decreasefontsize: 'Уменьшить размер шрифта',
                    textbackgroundcolor: 'Цвет фона текста',
                    textcolor: 'Цвет текста',
                    unorderedlist: 'Маркированный список',
                    orderedlist: 'Нумерованный список',
                    createlink: 'Вставить ссылку (Ctrl+K)',
                    destroylink: 'Удалить ссылку',
                    inserttable: 'Вставить таблицу',
                    insertimage: 'Вставить изображение (Ctrl+P)',
                    insertvideo: 'Вставить видео',
                    quote: 'Цитата',
                    insertcode: 'Код вставки',
                    insertemoji: 'Смайлики',
                    inserthr: 'Вставить горизонтальную линию',
                    viewpagesource: 'Просмотр HTML-кода',
                    fullscreenmode: 'В полноэкранном режиме',
                    normalmode: 'В нормальном режиме',
                    about: 'Информация',
                    imageurl: 'Ссылка на изображение',
                    describetheimage: 'Опишите изображение',
                    width: 'ширина',
                    height: 'Высота',
                    setimagedauto: 'Установите размеры изображения автоматически.',
                    insert: 'Вставить',
                    cancel: 'Отмена',
                    youtubeurl: 'Ссылка на Youtube',
                    setvideodauto: 'Установите размеры видео автоматически.',
                    url: 'Отмена',
                    title: 'заглавие',
                    openinanewwindow: 'Открыть в новом окне.'
                },
                cn: {
                    heading: '段落格式',
                    text: '正文',
                    h1: '标题1',
                    h2: '标题2',
                    h3: '标题3',
                    h4: '标题4',
                    h5: '标题5',
                    h6: '标题6',
                    bold: '粗体 (Ctrl+B)',
                    italic: '斜体 (Ctrl+I)',
                    underline: '下划线 (Ctrl+U)',
                    strikethrough: '删除线 (Ctrl+S)',
                    alignleft: '左对齐',
                    aligncenter: '居中',
                    alignright: '右对齐',
                    alignjustify: '两端对齐',
                    increasefontsize: '增加字體大小',
                    decreasefontsize: '減小字體大小',
                    textbackgroundcolor: '文字背景顏色',
                    textcolor: '文字顏色',
                    unorderedlist: '项目符号',
                    orderedlist: '编号',
                    createlink: '插入超链接 (Ctrl+K)',
                    destroylink: '删除超链接',
                    inserttable: '插入表格',
                    insertimage: '插入图片 (Ctrl+P)',
                    insertvideo: '插入视频',
                    quote: '引用',
                    insertcode: '插入代碼',
                    insertemoji: '表情符号',
                    inserthr: '插入水平线',
                    viewpagesource: 'View Page Source',
                    fullscreenmode: '全屏模式',
                    normalmode: '正常模式',
                    about: '信息',
                    imageurl: '圖片鏈接',
                    describetheimage: '描述圖片',
                    width: '寬度',
                    height: '高度',
                    setimagedauto: '自動設置圖像尺寸。',
                    insert: '插入',
                    cancel: '取消',
                    youtubeurl: 'YouTube鏈接',
                    setvideodauto: '自動設置視頻尺寸。',
                    url: '鏈接',
                    title: '標題',
                    openinanewwindow: '在新窗口中打開。'
                },
                sv: {
                    heading: 'Format',
                    text: 'Normal',
                    h1: 'Rubrik 1',
                    h2: 'Rubrik 2',
                    h3: 'Rubrik 3',
                    h4: 'Rubrik 4',
                    h5: 'Rubrik 5',
                    h6: 'Rubrik 6',
                    bold: 'Fetstil (Ctrl+B)',
                    italic: 'Kursiv stil (Ctrl+I)',
                    underline: 'Understruken (Ctrl+U)',
                    strikethrough: 'Genomstruken (Ctrl+S)',
                    alignleft: 'Vänsterjustera',
                    aligncenter: 'Centrera',
                    alignright: 'Högerjustera',
                    alignjustify: 'Justera',
                    increasefontsize: 'Öka teckenstorleken',
                    decreasefontsize: 'Minska teckenstorleken',
                    textbackgroundcolor: 'Text Bakgrundsfärg',
                    textcolor: 'Text färg',
                    unorderedlist: 'Oordnad lista',
                    orderedlist: 'Ordnad lista',
                    createlink: 'Infoga länk (Ctrl+K)',
                    destroylink: 'Ta bort länk',
                    inserttable: 'Infoga tabell',
                    insertimage: 'Infoga bild (Ctrl+P)',
                    insertvideo: 'Infoga video',
                    quote: 'Citat',
                    insertcode: 'Infoga kod',
                    insertemoji: 'Uttryckssymboler',
                    inserthr: 'Infoga horisontell linje',
                    viewpagesource: 'Kodvy',
                    fullscreenmode: 'Fullskärmsläge',
                    normalmode: 'Normalt läge',
                    about: 'Information',
                    imageurl: 'Bildlänk',
                    describetheimage: 'Beskriv bilden',
                    width: 'Bredd',
                    height: 'Höjd',
                    setimagedauto: 'Ställ in bildmått automatiskt.',
                    insert: 'Föra in',
                    cancel: 'Annullera',
                    youtubeurl: 'Youtube-länk',
                    setvideodauto: 'Ställ in video dimensioner automatiskt.',
                    url: 'Länk',
                    title: 'Titel',
                    openinanewwindow: 'Öppna i ett nytt fönster.'
                }
            }

            if (typeof settings.lang != 'string'){
                console.error('"lang" should be a string.');
                status = false;
            }

            var langCore;
            if (settings.lang == 'en'){
                var langCore = lang.en;
            }else if (settings.lang == 'ar'){
                var langCore = lang.ar;
            }else if (settings.lang == 'tr'){
                var langCore = lang.tr;
            }else if (settings.lang == 'de'){
                var langCore = lang.de;
            }else if (settings.lang == 'fa'){
                var langCore = lang.fa;
            }else if (settings.lang == 'fr'){
                var langCore = lang.fr;
            }else if (settings.lang == 'ja'){
                var langCore = lang.ja;
            }else if (settings.lang == 'ko'){
                var langCore = lang.ko;
            }else if (settings.lang == 'ru'){
                var langCore = lang.ru;
            }else if (settings.lang == 'cn'){
                var langCore = lang.cn;
            }else if (settings.lang == 'sv'){
                var langCore = lang.sv;
            }else{
                console.error('Invalid "lang" option.');
                status = false;
            }


            if (typeof settings.width != 'number'){
                console.error('"width" should be a number (integer).');
                status = false;
            }

            if (typeof settings.height != 'number'){
                console.error('"height" should be a number (integer).');
                status = false;
            }

            if (typeof settings.features != 'object'){
                console.error('"features" should be an array.');
                status = false;
            }

            if (typeof settings.forceAlt != 'boolean'){
                console.error('"forceAlt" should be a boolean value (true or false).');
                status = false;
            }

            if (typeof settings.forceLinkTitle != 'boolean'){
                console.error('"forceLinkTitle" should be a boolean value (true or false).');
                status = false;
            }

            if (typeof settings.onLoad != 'function' && settings.onLoad != null){
                console.error('"onLoad" should be a function.');
                status = false;
            }

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
                if (settings.lang == 'ar' || settings.lang == 'fa'){
                    $('#main-gre-editor').attr('dir', 'rtl');
                }
                $('#main-gre-editor').css('box-sizing', 'border-box');
                $('#main-gre-editor').css('-webkit-box-sizing', 'border-box');

                $('#main-gre-editor').prepend('<div id="gre-editor-toolbar"></div>');

                if (settings.features.includes('heading')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" title="'+langCore.heading+'" id="headingbtn"><div id="headingdropdown" style="display:none;"><a href="javascript:void(0)" id="htext">'+langCore.text+'</a><hr/><a href="javascript:void(0)" id="hone">'+langCore.h1+'</a><a href="javascript:void(0)" id="htwo">'+langCore.h2+'</a><a href="javascript:void(0)" id="hthree">'+langCore.h3+'</a><a href="javascript:void(0)" id="hfour">'+langCore.h4+'</a><a href="javascript:void(0)" id="hfive">'+langCore.h5+'</a><a href="javascript:void(0)" id="hsix">'+langCore.h6+'</a></div></a>');
                }
                if (settings.features.includes('bold')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="boldbtn" title="'+langCore.bold+'"></a>');
                }
                if (settings.features.includes('italic')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="italicbtn" title="'+langCore.italic+'"></a>');
                }
                if (settings.features.includes('underline')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="underlinebtn" title="'+langCore.underline+'"></a>');
                }
                if (settings.features.includes('strikeThrough')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="strikethroughbtn" title="'+langCore.strikethrough+'"></a>');
                }
                if (settings.lang == 'ar' || settings.lang == 'fa'){
                    if (settings.features.includes('alignRight')) {
                        $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="alignrightbtn" title="'+langCore.alignright+'"></a>');
                    }
                    if (settings.features.includes('alignCenter')) {
                        $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="aligncenterbtn" title="'+langCore.aligncenter+'"></a>');
                    }
                    if (settings.features.includes('alignLeft')) {
                        $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="alignleftbtn" title="'+langCore.alignleft+'"></a>');
                    }
                }else{
                    if (settings.features.includes('alignLeft')) {
                        $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="alignleftbtn" title="'+langCore.alignleft+'"></a>');
                    }
                    if (settings.features.includes('alignCenter')) {
                        $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="aligncenterbtn" title="'+langCore.aligncenter+'"></a>');
                    }
                    if (settings.features.includes('alignRight')) {
                        $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="alignrightbtn" title="'+langCore.alignright+'"></a>');
                    }
                }
                if (settings.features.includes('justify')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="justifybtn" title="'+langCore.alignjustify+'"></a>');
                }
                if (settings.features.includes('increaseFontSize')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="increaseFontSizebtn" title="'+langCore.increasefontsize+'"></a>');
                }
                if (settings.features.includes('decreaseFontSize')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="decreaseFontSizebtn" title="'+langCore.decreasefontsize+'"></a>');
                }
                if (settings.features.includes('textBackColor')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="textbackcolorbtn" title="'+langCore.textbackgroundcolor+'"><div id="backgroundcolordropdown"></div></a>');
                }
                if (settings.features.includes('textColor')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="textcolorbtn" title="'+langCore.textcolor+'"><div id="textcolordropdown"></div></a>');
                }
                if (settings.features.includes('list')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="listbtn" title="'+langCore.unorderedlist+'"></a>');
                }
                if (settings.features.includes('numberlist')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="numberlistbtn" title="'+langCore.orderedlist+'"></a>');
                }
                if (settings.features.includes('link')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="linkbtn" title="'+langCore.createlink+'"></a>');
                }
                if (settings.features.includes('unlink')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="unlinkbtn" title="'+langCore.destroylink+'"></a>');
                }
                if (settings.features.includes('table')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="tablebtn" title="'+langCore.inserttable+'"><div id="tabledropdown"></div></a>');
                }
                if (settings.features.includes('insertimage')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="insertimagebtn" title="'+langCore.insertimage+'"></a>');
                }
                if (settings.features.includes('insertvideo')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="insertvideobtn" title="'+langCore.insertvideo+'"></a>');
                }
                if (settings.features.includes('quote')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="quotebtn" title="'+langCore.quote+'"></a>');
                }
                if (settings.features.includes('code')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="codebtn" title="'+langCore.insertcode+'"></a>');
                }
                if (settings.features.includes('emoji')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="emojibtn" title="'+langCore.insertemoji+'"><div id="emojidropdown"></div></a>');
                }
                if (settings.features.includes('hr')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="hrbtn" title="'+langCore.inserthr+'"></a>');
                }
                if (settings.features.includes('pageSource')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="htmlbtn" title="'+langCore.viewpagesource+'"></a>');
                }
                if (settings.features.includes('fullscreen')) {
                    $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="fullscreenbtn" title="'+langCore.fullscreenmode+'"></a>');
                }
                $('#main-gre-editor').children('#gre-editor-toolbar').append('<a href="javascript:void(0)" id="infobtn" title="'+langCore.about+'"></a>');





                $('#main-gre-editor').css('border', '1px solid #ccc');
                $('#main-gre-editor').css('border-radius', '2px');
                $('#main-gre-editor').css('-webkit-border-radius', '2px');
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
                $('#main-gre-editor').children('#gre-editor-toolbar').css('-webkit-background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('padding', '10px 10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('width', '100%');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#gre-editor-toolbar').css('-webkit-box-sizing', 'border-box');
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
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('-webkit-z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('-webkit-background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('top', '31px');
                if (settings.lang == 'ar' || settings.lang == 'fa'){
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('right', '10px');
                }else{
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('left', '10px');
                }
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('width', '150px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('height', 'auto');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('text-align', 'center');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('border-radius', '0 0 3px 3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').css('-webkit-border-radius', '0 0 3px 3px');
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
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#htext').css('font-size', '17px');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#htext').css('font-weight', 'normal');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#htext').css('-webkit-font-weight', 'normal');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#hone').css('font-size', '2em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#htwo').css('font-size', '1.5em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#hthree').css('font-size', '1.17em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#hfour').css('font-size', '1em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#hfive').css('font-size', '.83em');
                $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').children('a#hsix').css('font-size', '.67em');


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
                $('#main-gre-editor').children('#gre-blur').css('-webkit-opacity', '.7');
                $('#main-gre-editor').children('#gre-blur').css('z-index', '2');
                $('#main-gre-editor').children('#gre-blur').css('-webkit-z-index', '2');




                // About pup-up window
                $('#main-gre-editor').append('<div id="main-gre-info"></div>');
                $('#main-gre-editor').children('#main-gre-info').css('display', 'none');
                $('#main-gre-editor').children('#main-gre-info').attr('dir', 'ltr');
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
                $('#main-gre-editor').children('#main-gre-info').append('<div id="closeabout" style="color:#333;font-size:25px;font-family:sans-serif;font-weight:bold;text-align:center;">x</div>');
                $('#main-gre-editor').children('#main-gre-info').find('#closeabout').css('position', 'absolute');
                $('#main-gre-editor').children('#main-gre-info').find('#closeabout').css('top', '10px');
                $('#main-gre-editor').children('#main-gre-info').find('#closeabout').css('left', '15px');
                $('#main-gre-editor').children('#main-gre-info').find('#closeabout').css('cursor', 'pointer');
                $('#main-gre-editor').children('#main-gre-info').find('#closeabout').css('padding', '5px 10px');
                $('#main-gre-editor').children('#main-gre-info').find('#closeabout').css('color', '#888');

                $('#main-gre-editor').children('#main-gre-info').append('<br><div style="color:#333;font-size:25px;font-family:sans-serif;font-weight:bold;text-align:center;">GRE Editor</div>');
                $('#main-gre-editor').children('#main-gre-info').append('<div style="color:#333;font-size:15px;margin-top:10px;font-family:sans-serif;">A jQuery plugin made by <a href="https://www.gredev.net/en" style="text-decoration:none;color:#e92f42;" target="_BLANK">GRE Development</a> for helping web developers to make the Rich Text Editor feature easy and quick.</div><br>');
                $('#main-gre-editor').children('#main-gre-info').append('<div style="color:#333;font-size:15px;margin-top:10px;font-family:sans-serif;">This is an open source project with <a href="https://choosealicense.com/licenses/mit/" style="text-decoration:none;color:#e92f42;" target="_BLANK">MIT License<a> published on <a href="https://github.com/gre-dev/gre-editor" style="text-decoration:none;color:#e92f42;" target="_BLANK">Github</a>.</div>');

                $('#main-gre-editor').find('#closeabout').click(() => {
                    $('#main-gre-editor').find('#main-gre-info').slideToggle(100);
                    $('#main-gre-editor').children('#gre-blur').hide(1);
                });




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
                $('#main-gre-editor').children('#main-gre-insert-image').append('<div style="color:#333;font-size:25px;font-family:sans-serif;">'+langCore.insertimage+'</div>');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="text" id="insert-image-url" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;-webkit-box-sizing:border-box;" placeholder="'+langCore.imageurl+'">');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="text" id="insert-image-alt" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;-webkit-box-sizing:border-box;" placeholder="'+langCore.describetheimage+'">');
                if (settings.lang == 'ar' || settings.lang == 'fa'){
                    $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="number" min="0" id="insert-image-width" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-left:5px;" placeholder="'+langCore.width+'">');
                }else{
                    $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="number" min="0" id="insert-image-width" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:5px;" placeholder="'+langCore.width+'">');
                }
                $('#main-gre-editor').children('#main-gre-insert-image').append('<input type="number" min="0" id="insert-image-height" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;" placeholder="'+langCore.height+'">');
                $('#main-gre-editor').children('#main-gre-insert-image').append('<label style="font-family:sans-serif;"><input checked="checked" type="checkbox" style="color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;">'+langCore.setimagedauto+'</label>');
                if (settings.lang == 'ar' || settings.lang == 'fa'){
                    $('#main-gre-editor').children('#main-gre-insert-image').append('<br><button name="insert" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-left:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.insert+'</button>');
                }else{
                    $('#main-gre-editor').children('#main-gre-insert-image').append('<br><button name="insert" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.insert+'</button>');
                }
                $('#main-gre-editor').children('#main-gre-insert-image').append('<button name="cancel" style="display:inline-block;color:#333;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;font-size:17px;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.cancel+'</button>');





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
                $('#main-gre-editor').children('#main-gre-insert-link').append('<div style="color:#333;font-size:25px;font-family:sans-serif;">'+langCore.createlink+'</div>');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<input type="text" id="insert-url-url" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;-webkit-box-sizing:border-box;" placeholder="'+langCore.url+'">');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<input type="text" id="insert-url-title" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;-webkit-box-sizing:border-box;" placeholder="'+langCore.title+'">');
                $('#main-gre-editor').children('#main-gre-insert-link').append('<label style="font-family:sans-serif;"><input checked="checked" type="checkbox" style="color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;">'+langCore.openinanewwindow+'</label>');
                if (settings.lang == 'ar' || settings.lang == 'fa'){
                    $('#main-gre-editor').children('#main-gre-insert-link').append('<br><button name="create" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-left:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.insert+'</button>');
                }else{
                    $('#main-gre-editor').children('#main-gre-insert-link').append('<br><button name="create" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.insert+'</button>');
                }
                $('#main-gre-editor').children('#main-gre-insert-link').append('<button name="cancel" style="display:inline-block;color:#333;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;font-size:17px;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.cancel+'</button>');










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
                $('#main-gre-editor').children('#main-gre-insert-video').append('<div style="color:#333;font-size:25px;font-family:sans-serif;">'+langCore.insertvideo+'</div>');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<input type="text" id="insert-video-url" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:100%;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;box-sizing:border-box;-webkit-box-sizing:border-box;" placeholder="'+langCore.youtubeurl+'">');
                if (settings.lang == 'ar' || settings.lang == 'fa'){
                    $('#main-gre-editor').children('#main-gre-insert-video').append('<input type="number" min="0" id="insert-video-width" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-left:5px;" placeholder="'+langCore.width+'">');
                }else{
                    $('#main-gre-editor').children('#main-gre-insert-video').append('<input type="number" min="0" id="insert-video-width" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:5px;" placeholder="'+langCore.width+'">');
                }
                $('#main-gre-editor').children('#main-gre-insert-video').append('<input type="number" min="0" id="insert-video-height" disabled="disabled" style="font-family:sans-serif;color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;width:calc(46% - 0.25px);outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;" placeholder="'+langCore.height+'">');
                $('#main-gre-editor').children('#main-gre-insert-video').append('<label style="font-family:sans-serif;"><input checked="checked" type="checkbox" style="color:#333;font-size:17px;font-family:sans-serif;padding:5px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;">'+langCore.openinanewwindow+'</label>');
                if (settings.lang == 'ar' || settings.lang == 'fa'){
                    $('#main-gre-editor').children('#main-gre-insert-video').append('<br><button name="insert" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-left:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.insert+'</button>');
                }else{
                    $('#main-gre-editor').children('#main-gre-insert-video').append('<br><button name="insert" style="color:#333;font-size:17px;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;margin-right:10px;display:inline-block;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.insert+'</button>');
                }
                $('#main-gre-editor').children('#main-gre-insert-video').append('<button name="cancel" style="display:inline-block;color:#333;outline:none;-webkit-outline:none;appearance:none;-webkit-appearance:none;font-size:17px;font-family:sans-serif;padding:5px 15px;border-radius:3px;-webkit-border-radius:3px;border:1px solid #aaa;margin-top:10px;cursor:pointer;">'+langCore.cancel+'</button>');




                $('#main-gre-editor').children('textarea').css('position', 'absolute');
                $('#main-gre-editor').children('textarea').css('top', ($('#gre-editor-toolbar').height() + 32) + 'px');
                $('#main-gre-editor').children('textarea').css('left', '0');
                $('#main-gre-editor').children('textarea').css('width', '100%');
                $('#main-gre-editor').children('textarea').css('height', 'calc(100% - ' + ($('#gre-editor-toolbar').height() + 32) + 'px)');
                $('#main-gre-editor').children('textarea').css('resize', 'none');
                $('#main-gre-editor').children('textarea').css('-webkit-resize', 'none');
                $('#main-gre-editor').children('textarea').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('textarea').css('-webkit-box-sizing', 'border-box');
                $('#main-gre-editor').children('textarea').css('font-family', 'sans-serif');
                $('#main-gre-editor').children('textarea').css('font-size', '16px');
                $('#main-gre-editor').children('textarea').css('outline', 'none');
                $('#main-gre-editor').children('textarea').css('-webkit-outline', 'none');
                $('#main-gre-editor').children('textarea').css('padding', '5px');
                $('#main-gre-editor').children('textarea').css('border', 'unset');
                $('#main-gre-editor').children('textarea').css('-webkit-border', 'unset');
                $('#main-gre-editor').children('textarea').css('display', 'none');

                $('#main-gre-editor').children('#lab').css('display', 'block');
                $('#main-gre-editor').children('#lab').css('position', 'absolute');
                $('#main-gre-editor').children('#lab').css('top', ($('#gre-editor-toolbar').height() + 22) + 'px');
                $('#main-gre-editor').children('#lab').css('left', '0');
                $('#main-gre-editor').children('#lab').css('width', '100%');
                $('#main-gre-editor').children('#lab').css('height', 'calc(100% - ' + ($('#gre-editor-toolbar').height() + 22) + 'px)');
                $('#main-gre-editor').children('#lab').css('outline', 'none');
                $('#main-gre-editor').children('#lab').css('-webkit-outline', 'none');
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
                    if (settings.lang == 'ar' || settings.lang == 'fa'){
                        if ($('#main-gre-editor').width() < 510){
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('left','0');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('transform','unset');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('-webkit-transform','unset');
                        }else{
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('left','50%');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('transform','translate(-50%, 0%)');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('-webkit-transform','translate(-50%, 0%)');
                        }
                    }
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').slideToggle(100);
                    hideAllMenues('emojidropdown');
                });

                $('#main-gre-editor').find('#textcolorbtn').click(() => {
                    if (settings.lang == 'ar' || settings.lang == 'fa'){
                        if ($('#main-gre-editor').width() < 575){
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('left','0');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('transform','unset');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-transform','unset');
                        }else{
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('left','50%');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('transform','translate(-50%, 0%)');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-transform','translate(-50%, 0%)');
                        }
                    }
                    $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').slideToggle(100);
                    hideAllMenues('textcolordropdown');
                });

                $('#main-gre-editor').find('#textbackcolorbtn').click(() => {
                    if (settings.lang == 'ar' || settings.lang == 'fa'){
                        if ($('#main-gre-editor').width() < 543){
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('left','0');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('transform','unset');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-transform','unset');
                        }else{
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('left','50%');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('transform','translate(-50%, 0%)');
                            $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-transform','translate(-50%, 0%)');
                        }
                    }
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
                        if (settings.lang == 'ar' || settings.lang == 'fa'){
                            $('#main-gre-editor').find('blockquote').css('border-right', '2px solid #aaa');
                            $('#main-gre-editor').find('blockquote').css('-webkit-border-right', '2px solid #aaa');
                            $('#main-gre-editor').find('blockquote').css('padding-right', '10px');
                        }else{
                            $('#main-gre-editor').find('blockquote').css('border-left', '2px solid #aaa');
                            $('#main-gre-editor').find('blockquote').css('-webkit-border-left', '2px solid #aaa');
                            $('#main-gre-editor').find('blockquote').css('padding-left', '10px');
                        }
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
                        $('#main-gre-editor').css('-webkit-border-radius', 'unset');
                        $('#main-gre-editor').css('z-index', '999999999999999999');
                        $('#main-gre-editor').css('-webkit-z-index', '999999999999999999');
                        $('#main-gre-editor').find('#fullscreenbtn').css('background', 'url("css_sprites.png") -118px -26px');
                        $('#main-gre-editor').find('#fullscreenbtn').attr('title', langCore.normalmode);
                    } else {
                        $('#main-gre-editor').css('position', 'relative');
                        $('#main-gre-editor').css('min-width', '550px');
                        $('#main-gre-editor').css('min-height', '300px');
                        $('#main-gre-editor').css('width', settings.width);
                        $('#main-gre-editor').css('height', settings.height);
                        $('#main-gre-editor').css('border', '1px solid #ccc');
                        $('#main-gre-editor').css('border-radius', '2px');
                        $('#main-gre-editor').css('-webkit-border-radius', '2px');
                        $('#main-gre-editor').css('z-index', '1');
                        $('#main-gre-editor').css('-webkit-z-index', '1');
                        $('#main-gre-editor').find('#fullscreenbtn').css('background', 'url("css_sprites.png") -118px -3px');
                        $('#main-gre-editor').find('#fullscreenbtn').attr('title', langCore.fullscreenmode);
                    }
                });



                $('#main-gre-editor').find('#headingbtn').click(() => {
                    $('#main-gre-editor').children('#gre-editor-toolbar').children('#headingdropdown').slideToggle(100);
                    hideAllMenues('headingdropdown');
                });

                var lastImgCursor;
                $('#main-gre-editor').find('#insertimagebtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-insert-image').slideToggle(100);
                    var rand = Math.floor(Math.random() * 1001);
                    document.execCommand('insertHTML', false, '<span id="image-place-' + rand + '"></span>');
                    lastImgCursor = rand;
                });

                var lastVideoCursor;
                $('#main-gre-editor').find('#insertvideobtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-insert-video').slideToggle(100);
                    var rand = Math.floor(Math.random() * 1001);
                    document.execCommand('insertHTML', false, '<span id="video-place-' + rand + '"></span>');
                    lastVideoCursor = rand;
                });

                var lastLinkNode;
                var lastSelectedText;
                $('#main-gre-editor').find('#linkbtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-insert-link').slideToggle(100);
                    lastSelectedText = (document.getSelection().anchorNode.nodeValue && document.getSelection().anchorNode.nodeValue != null) ? document.getSelection().anchorNode.nodeValue : '';
                    var rand = Math.floor(Math.random() * 1001);
                    document.execCommand('insertHTML', false, '<span id="link-place-' + rand + '">' + lastSelectedText + '</span>');
                    lastLinkNode = rand;
                });

                $('#main-gre-editor').find('#infobtn').click(() => {
                    $('#main-gre-editor').children('#gre-blur').show(1);
                    $('#main-gre-editor').children('#main-gre-info').slideToggle(100);
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
                        $('#main-gre-editor').children('#main-gre-insert-image').slideToggle(100);
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
                    $('#main-gre-editor').children('#main-gre-insert-image').slideToggle(100);
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-width"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-url"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-alt"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-image').find('input[id="insert-image-height"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#gre-blur').hide(1);
                    var textNode = document.createTextNode('');
                    document.getElementById('image-place-' + lastImgCursor).parentNode.replaceChild(textNode, document.getElementById('image-place-' + lastImgCursor));
                    lastImgCursor = '';
                });






                // Text color pup-up window
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').append('');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').attr('title', '');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('overflow', 'auto');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('top', '25px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('left', '50%');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('width', '187px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('height', '140px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('padding', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('cursor', 'default');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').css('-webkit-cursor', 'default');

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
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('-webkit-cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('width', '23.7px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('height', '23.7px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('border', '1px solid #ccc');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('margin', '2.6px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('border-radius', '200px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a').css('-webkit-border-radius', '200px');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#textcolordropdown').find('a#percolor').click((e) => {
                    var code = $(e.currentTarget).attr('data-code');
                    document.execCommand('foreColor', false, code);
                });






                // Text background color pup-up window
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').append('');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').attr('title', '');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('overflow', 'auto');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('top', '25px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('left', '50%');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('width', '187px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('height', '140px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('padding', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('background-color', 'rgb(245, 245, 245)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('cursor', 'default');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').css('-webkit-cursor', 'default');

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
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('-webkit-cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('width', '23.7px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('height', '23.7px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('border', '1px solid #ccc');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('margin', '2.6px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('border-radius', '200px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a').css('-webkit-border-radius', '200px');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#backgroundcolordropdown').find('a#percolor').click((e) => {
                    var code = $(e.currentTarget).attr('data-code');
                    document.execCommand('backColor', false, code);
                });






                // Insert emoji pup-up window
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').append('');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').attr('title', '');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('-webkit-z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('overflow', 'auto');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('top', '25px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('left', '50%');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('-webkit-transform', 'translate(-50%, 0%)');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').css('-webkit-box-shadow', '0 0 15px #ddd');
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
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('-webkit-cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('font-size', '20px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('margin', '2px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('-webkit-box-sizing', 'border-box');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('text-decoration', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('-webkit-text-decoration', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').css('color', '#333');

                $('#main-gre-editor').children('#gre-editor-toolbar').find('#emojidropdown').find('a').click((e) => {
                    var code = $(e.currentTarget).attr('data-code');
                    document.execCommand('insertHTML', false, code);
                });






                // Insert table pup-up window
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').append('<table><thead><tr><th class=""></th><th class=""></th><th class=""></th><th class=""></th><th class=""></th><th class=""></th></tr></thead><tbody><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr><tr><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td><td class=""></td></tr></tbody></table>');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').attr('title', '');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('display', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').attr('dir', 'ltr');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('z-index', '2');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('position', 'absolute');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('top', '25px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('left', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('-webkit-box-shadow', '0 0 15px #ddd');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('width', '114px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('height', '98px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('padding', '10px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('-webkit-border-radius', '3px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').css('background-color', 'rgb(245, 245, 245)');


                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('border', 'none');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('border-collapse', 'collapse');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('-webkit-border-collapse', 'collapse');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('border-spacing', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('-webkit-border-spacing', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('table-layout', 'fixed');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').css('-webkit-table-layout', 'fixed');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('thead').css('display', 'none');


                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('padding', '0');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('-webkit-cursor', 'pointer');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('width', '17px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('height', '17px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('border', '1px solid #ccc');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('background', '#f3f3f3');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('display', 'inline-block');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('margin', '1px');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('box-sizing', 'border-box');
                $('#main-gre-editor').children('#gre-editor-toolbar').find('#tabledropdown').find('table').find('td').css('-webkit-box-sizing', 'border-box');

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
                    $('#main-gre-editor').children('#lab').find('table').css('-webkit-border-spacing', '0');
                    $('#main-gre-editor').children('#lab').find('table').css('border', '1px solid #eee');
                    $('#main-gre-editor').children('#lab').find('table').find('thead').css('background-color', '#eee');
                    $('#main-gre-editor').children('#lab').find('table').find('thead').find('tr').find('th').css('padding', '8px');
                    $('#main-gre-editor').children('#lab').find('table').find('thead').find('tr').find('th').css('border', '1px solid #FFF');
                    $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td').css('padding', '8px');
                    if (settings.lang == 'ar' || settings.lang == 'fa'){
                        $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td').css('border-left', '1px solid #eee');
                    }else{
                        $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td').css('border-right', '1px solid #eee');
                    }
                    $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td').css('border-bottom', '1px solid #eee');
                    if (settings.lang == 'ar' || settings.lang == 'fa'){
                        $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td:last-child').css('border-left', 'unset');
                    }else{
                        $('#main-gre-editor').children('#lab').find('table').find('tbody').find('tr').find('td:last-child').css('border-right', 'unset');
                    }
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
                        $('#main-gre-editor').children('#main-gre-insert-link').slideToggle(100);
                        $('#main-gre-editor').children('#gre-blur').hide(1);
                    }
                });

                $('#main-gre-editor').children('#main-gre-insert-link').find('button[name="cancel"]').click((e) => {
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').val('');
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[type="checkbox"]').prop("checked", true);
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-url"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-link').find('input[id="insert-url-title"]').css('border', '1px solid #aaa');
                    $('#main-gre-editor').children('#main-gre-insert-link').slideToggle(100);
                    $('#main-gre-editor').children('#gre-blur').hide(1);
                    var textNode = document.createTextNode(lastSelectedText);
                    document.getElementById('link-place-' + lastLinkNode).parentNode.replaceChild(textNode, document.getElementById('link-place-' + lastLinkNode));
                    lastLinkNode = '';
                    lastSelectedText = '';
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
                        }else{
                            newVideo.width = '400px';
                            newVideo.height = '300px';
                        }
                        document.getElementById('video-place-' + lastVideoCursor).parentNode.replaceChild(newVideo, document.getElementById('video-place-' + lastVideoCursor));
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').val('');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[type="checkbox"]').prop("checked", true);
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-url"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-width"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-video').find('input[id="insert-video-height"]').css('border', '1px solid #aaa');
                        $('#main-gre-editor').children('#main-gre-insert-video').slideToggle(100);
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
                    $('#main-gre-editor').children('#main-gre-insert-video').slideToggle(100);
                    $('#main-gre-editor').children('#gre-blur').hide(1);
                    var textNode = document.createTextNode('');
                    document.getElementById('video-place-' + lastVideoCursor).parentNode.replaceChild(textNode, document.getElementById('video-place-' + lastVideoCursor));
                    lastVideoCursor = '';
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


    $(window).bind('keydown', function(event) {
        if (event.ctrlKey || event.metaKey) {
            switch (String.fromCharCode(event.which).toLowerCase()) {
            case 's':
                event.preventDefault();
                $('#main-gre-editor').find('#strikethroughbtn').click();
                break;
            case 'p':
                event.preventDefault();
                $('#main-gre-editor').find('#insertimagebtn').click();
                break;
            case 'k':
                event.preventDefault();
                $('#main-gre-editor').find('#linkbtn').click();
                break;
            }
        }
    });

    
}(jQuery));