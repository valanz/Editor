/**
 * This file is a part of nekland editor package
 *
 * (c) Nekland <nekland.fr@gmail.fr>
 *
 * For the full license, take a look to the LICENSE file
 * on the root directory of this project
 */

(function() {
    var basicModule = function() {
        // Noting to do in the constructor
    };

    basicModule.prototype.getTemplateBefore = function() {
        var tpl;
        tpl = '<button type="button" class="btn nekland-editor-command" data-editor-command="bold"><b>' + this.translate('bold', {
            ucfirst: true
        }) + '</b></button>';
        return tpl += '<button type="button" class="btn nekland-editor-command" data-editor-command="italic"><i>' + this.translate('italic', {
            ucfirst: true
        }) + '</i></button>';
    };
    basicModule.prototype.getTemplateAfter = function() { return ''; };
    basicModule.prototype.addEvents        = function() {};


    window.nekland.Editor.modules.push(basicModule);
})();