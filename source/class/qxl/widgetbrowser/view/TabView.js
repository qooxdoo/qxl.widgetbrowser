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

qx.Class.define("qxl.widgetbrowser.view.TabView",
{
  extend : qx.ui.tabview.TabView,


  construct : function() {
    this.base(arguments);

    this.init();
    this.addListener("changeSelection", this.__rememberCurrentTab, this);
    this.__setCurrentTab();
  },

  members :
  {
    init: function() {
      var controls; 
      var classname;

      // Form
      classname = "qxl.widgetbrowser.pages.Form";
      controls = {disabled: true, hovered: true, focused: true, invalid: true};
      var form = new qxl.widgetbrowser.view.TabPage("Form", classname, controls);
      this.add(form);

      // Tree
      classname = "qxl.widgetbrowser.pages.Tree";
      controls = {disabled: true};
      var tree = new qxl.widgetbrowser.view.TabPage("Tree", classname, controls);
      this.add(tree);

      // List
      classname = "qxl.widgetbrowser.pages.List";
      controls = {disabled: true};
      var list = new qxl.widgetbrowser.view.TabPage("List", classname, controls);
      this.add(list);

      // Table
      classname = "qxl.widgetbrowser.pages.Table";
      controls = {disabled: true};
      var table = new qxl.widgetbrowser.view.TabPage("Table", classname, controls);
      this.add(table);

      // Menu
      classname = "qxl.widgetbrowser.pages.ToolBar";
      controls = {disabled: true, hovered: true, selected: true, hidesome: true};
      var menu = new qxl.widgetbrowser.view.TabPage("Toolbar/Menu", classname, controls);
      this.add(menu);

      // Window
      classname = "qxl.widgetbrowser.pages.Window";
      controls = {disabled: true};
      var win = new qxl.widgetbrowser.view.TabPage("Window", classname, controls);
      this.add(win);

      // Tab
      classname = "qxl.widgetbrowser.pages.Tab";
      controls = {disabled: true, overflow: true};
      var tab = new qxl.widgetbrowser.view.TabPage("Tab", classname, controls);
      this.add(tab);

      // Control
      classname = "qxl.widgetbrowser.pages.Control";
      controls = {disabled: true};
      var control = new qxl.widgetbrowser.view.TabPage("Control", classname, controls);
      this.add(control);

      // Embed
      classname = "qxl.widgetbrowser.pages.Embed";
      controls = {};
      var embed = new qxl.widgetbrowser.view.TabPage("Embed", classname, controls);
      this.add(embed);

      // EmbedFrame
      classname = "qxl.widgetbrowser.pages.EmbedFrame";
      controls = {};
      var embedFrame = new qxl.widgetbrowser.view.TabPage("EmbedFrame", classname, controls);
      this.add(embedFrame);

      // Basic
      classname = "qxl.widgetbrowser.pages.Basic";
      controls = {disabled: true};
      var basic = new qxl.widgetbrowser.view.TabPage("Basic", classname, controls);
      this.add(basic);

      // Misc
      classname = "qxl.widgetbrowser.pages.Misc";
      controls = {disabled: true};
      var misc = new qxl.widgetbrowser.view.TabPage("Misc", classname, controls);
      this.add(misc);
    },

    __rememberCurrentTab: function(e) {
      qx.bom.Cookie.set("currentTab", e.getData()[0].getLabel());
    },

    __setCurrentTab: function() {
      var cookie = qx.bom.Cookie.get("currentTab") ||
                   qx.bom.Cookie.set("currentTab", "basic");

      var currentTab = new qx.type.Array().append(this.getSelectables()).filter(function(tab) {
        return tab.getLabel() == cookie;
      })[0];

      if (currentTab) {
        this.setSelection([currentTab]);
      }
    }
  }
});
