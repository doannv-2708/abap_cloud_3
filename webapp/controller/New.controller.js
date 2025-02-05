sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("sap.training.exc.controller.New", {
            onInit: function () {
                var oModel = new JSONModel();
                this.getView().setModel(oModel, "customer");
            },

            onSave: function () {
                var oModelData = this.getView().getModel("customer").getData();
                var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
    
                if (oModelData.Discount === undefined) { oModelData.Discount = 0; }

                this.byId("customerTable").getBinding("items").create({
                    "Form": oModelData.Form,
                    "CustomerName": oModelData.CustomerName,
                    "Discount": oModelData.Discount + "",
                    "Street": oModelData.Street,
                    "PostCode": oModelData.PostCode,
                    "City": oModelData.City,
                    "Country": oModelData.Country,
                    "Email": oModelData.Email,
                    "Telephone": oModelData.Telephone
                }).created().then(function () {
                    MessageToast.show(oResourceBundle.getText("customerCreatedMessage"));
                });

                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("overview", {}, true);
            },

            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
              
                if (sPreviousHash !== undefined) {
                  window.history.go(-1);
                } else {
                  var oRouter = this.getOwnerComponent().getRouter();
                  oRouter.navTo("overview", {}, true);
                }
            }


        });
    });