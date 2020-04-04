(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.widgetbrowser.pages.AbstractPage": {
        "construct": true,
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.type.Array": {},
      "qx.ui.basic.Label": {},
      "qx.ui.control.ColorSelector": {},
      "qx.ui.control.ColorPopup": {},
      "qx.ui.form.Button": {},
      "qx.ui.control.DateChooser": {}
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

  /**
   * Demonstrates qx.ui.control(...):
   *
   * ColorSelector
   * ColorPopup
   * DateChooser
   *
   */
  qx.Class.define("qxl.widgetbrowser.pages.Control", {
    extend: qxl.widgetbrowser.pages.AbstractPage,
    construct: function construct() {
      qxl.widgetbrowser.pages.AbstractPage.constructor.call(this);
      this.__vbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(20));
      this.add(this.__vbox, {
        top: 0
      });
      this.initWidgets();
    },
    members: {
      __vbox: null,
      initWidgets: function initWidgets() {
        var widgets = this._widgets = new qx.type.Array();
        var label; // ColorSelector

        label = new qx.ui.basic.Label("ColorSelector");
        var colorSelector = new qx.ui.control.ColorSelector();
        widgets.push(colorSelector);

        this.__vbox.add(label);

        this.__vbox.add(colorSelector); // ColorPopup


        label = new qx.ui.basic.Label("ColorPopup");
        var colorPopup = new qx.ui.control.ColorPopup();
        colorPopup.exclude();
        var openColorPopup = new qx.ui.form.Button("Open Color Popup").set({
          maxWidth: 150
        });
        widgets.push(openColorPopup);

        this.__vbox.add(label);

        this.__vbox.add(openColorPopup);

        openColorPopup.addListener("execute", function () {
          colorPopup.placeToWidget(openColorPopup, true);
          colorPopup.show();
        }); // DateChooser

        var dateChooser = new qx.ui.control.DateChooser().set({
          maxWidth: 240
        });
        label = new qx.ui.basic.Label("DateChooser");
        widgets.push(dateChooser);

        this.__vbox.add(label);

        this.__vbox.add(dateChooser);
      }
    }
  });
  qxl.widgetbrowser.pages.Control.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Control.js.map?dt=1586007984829