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
      "qx.type.Array": {},
      "qx.ui.table.model.Simple": {},
      "qx.ui.table.Table": {},
      "qx.ui.table.selection.Model": {},
      "qx.ui.table.cellrenderer.Boolean": {},
      "qx.ui.table.headerrenderer.Icon": {}
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

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * Demonstrates qx.ui.table(...):
   *
   * Table
   * columnmenu.Button
   * columnmenu.MenuItem
   * headerrenderer.HeaderCell
   * pane.Clipper
   * pane.FocusIndicator
   * pane.Header
   * pane.Pane
   * pane.Scroller
   *
   *
   * @asset(qx/icon/${qx.icontheme}/16/apps/office-calendar.png)
   */
  qx.Class.define("qxl.widgetbrowser.pages.Table", {
    extend: qxl.widgetbrowser.pages.AbstractPage,
    construct: function construct() {
      qxl.widgetbrowser.pages.AbstractPage.constructor.call(this);
      this.initWidgets();
    },
    members: {
      __nextId: 0,
      initWidgets: function initWidgets() {
        var widgets = this._widgets = new qx.type.Array();

        var table = this.__createTable();

        table.setFocusedCell(2, 5);
        widgets.push(table);
        this.add(table);
      },
      __createTable: function __createTable() {
        var rowData = this.__createRandomRows(500);

        var tableModel = new qx.ui.table.model.Simple();
        tableModel.setColumns(["ID", "A number", "A date", "Boolean"]);
        tableModel.setData(rowData);
        tableModel.setColumnEditable(1, true);
        tableModel.setColumnEditable(2, true);
        tableModel.setColumnSortable(3, false);
        var table = new qx.ui.table.Table(tableModel);
        table.set({
          width: 600,
          height: 400,
          decorator: null
        });
        table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
        var tcm = table.getTableColumnModel();
        tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());
        tcm.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Icon("icon/16/apps/office-calendar.png", "A date"));
        return table;
      },
      __createRandomRows: function __createRandomRows(rowCount) {
        var rowData = [];
        var now = new Date().getTime();
        var dateRange = 34560000000; // 400 days

        for (var row = 0; row < rowCount; row++) {
          var date = new Date(now + Math.random() * dateRange - dateRange / 2);
          rowData.push([this.__nextId++, Math.random() * 10000, date, Math.random() > 0.5]);
        }

        return rowData;
      }
    }
  });
  qxl.widgetbrowser.pages.Table.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Table.js.map?dt=1586007985248