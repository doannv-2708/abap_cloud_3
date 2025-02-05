sap.ui.define([
    "sap/ui/core/mvc/Controller",
    ],
    function (Controller, MessageBox) {
      "use strict";
  
      return Controller.extend("sap.training.exc.controller.App", {
  
        onInit: function () {
          this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
  
      });
    }
);