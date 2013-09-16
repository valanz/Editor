/**
 * This file is a part of nekland editor package
 *
 * (c) Nekland <nekland.fr@gmail.fr>
 *
 * For the full license, take a look to the LICENSE file
 * on the root directory of this project
 */

/**
 * Class NeklandEditor
 *
 * Everything is inside this class.
 */
window.nekland.Editor = function($domElement, _options, _templates) {
    // Constructor
    if (_options == null) {
        _options = {};
    }

    if (_templates == null) {
        _templates = {};
    }

    // Settings merging
    this.settings = $.extend(true, {}, {
        mode: 'classical',
        uid: uniqid(),
        lang: 'en'
    }, _options);

    // Translations loading
    this.translations = window.nekland.lang.editor[this.settings.lang];

    this.templates = $.extend(true, {}, _templates, this.getTemplates());

    this.$wrapper = this.templates.load($domElement, this.settings.uid);
    this.$domElement = $domElement;
    this.$editor = this.$wrapper.find('.nekland-editor-html');
    this.$editor = this.$editor.html(this.p_ize(this.$editor.html()));
    this.lastKey = null;
    this.addEvents();
};

/**
 * Switch html editor/wysiwyg
 *
 * @param $switcher jQuery object of the switch link
 * @return false
 */
window.nekland.Editor.prototype.switchEditor = function($switcher) {

    if (this.$editor.is(':visible')) {
        // Notice: no need to synchronize since it's done on each keyup
        this.$editor.hide();
        this.$domElement.val(this.clearHtml(this.$domElement.val()));
        this.$domElement.show();

        $switcher.html(this.translate('swapToText', {
            ucfirst: true
        }));

        } else {
        this.$editor.html(this.clearHtml(this.$domElement.val()));
        this.$domElement.hide();
        this.$editor.show();

        $switcher.html(this.translate('swapToHtml', {
            ucfirst: true
        }));
    }

    // Doesn't follow links after switch if defined as event
    return false;
};

/**
 * Synchronize content between the editor and the input
 */
window.nekland.Editor.prototype.synchronize = function() {
    return this.$domElement.val(this.$editor.html());
};