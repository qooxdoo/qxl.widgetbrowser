/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)

************************************************************************ */

/* ************************************************************************


************************************************************************ */

/**
 *
 * @asset(qxl/widgetbrowser/loading66.gif)
 * @use(qxl.widgetbrowser.pages.Tree)
 * @use(qxl.widgetbrowser.pages.List)
 * @use(qxl.widgetbrowser.pages.Table)
 * @use(qxl.widgetbrowser.pages.Form)
 * @use(qxl.widgetbrowser.pages.ToolBar)
 * @use(qxl.widgetbrowser.pages.Window)
 * @use(qxl.widgetbrowser.pages.Tab)
 * @use(qxl.widgetbrowser.pages.Control)
 * @use(qxl.widgetbrowser.pages.Embed)
 * @use(qxl.widgetbrowser.pages.EmbedFrame)
 * @use(qxl.widgetbrowser.pages.Basic)
 * @use(qxl.widgetbrowser.pages.Misc)
 */

qx.Class.define("qxl.widgetbrowser.view.TabPage",
{
  extend: qx.ui.tabview.Page,

  include: qxl.widgetbrowser.MControls,

  construct: function(label, classname, controls) {
    this.base(arguments);

    this.setLabel(label);
    this.setLayout(new qx.ui.layout.Canvas());

    // Load content of tab on "appear"
    this.addListenerOnce("appear", function() {
        var clazz = qx.Class.getByName(classname);
        /* eslint-disable-next-line new-cap */
        var pageContent = new clazz();
        // Add to page
        this.add(pageContent, {top: 40, edge: 0});
        // Init controls for widgets of page
        this.initControls(pageContent.getWidgets(), controls);
        // Exclude loading indicator
        loading.setVisibility("excluded");
    }, this);

    // Show centered loading indicator
    var loading = new qx.ui.basic.Image("qxl/widgetbrowser/loading66.gif");
    loading.setMarginTop(-33);
    loading.setMarginLeft(-33);
    this.add(loading, {left: "50%", top: "50%"});
  },

  members :
  {
  }
});
