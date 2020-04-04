(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Canvas": {
        "construct": true
      },
      "qx.type.Array": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

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
  qx.Class.define("qxl.widgetbrowser.pages.AbstractPage", {
    type: "abstract",
    extend: qx.ui.container.Composite,
    construct: function construct() {
      qx.ui.container.Composite.constructor.call(this);
      this.setLayout(new qx.ui.layout.Canvas());
      this._widgets = new qx.type.Array();
    },
    members: {
      _widgets: null,
      getWidgets: function getWidgets() {
        return this._widgets;
      }
    }
  });
  qxl.widgetbrowser.pages.AbstractPage.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=AbstractPage.js.map?dt=1586007987484