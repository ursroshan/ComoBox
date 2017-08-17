sap.ui.controller("zrosh_bind_combobox.Combobox", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zrosh_bind_combobox.Combobox
*/
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
		
		   //oModel.setData(eData);
		oModel.loadData("model/Combo.json");
		   //setting model to view
		   this.getView().setModel(oModel);
		   
		   var oCombo = this.getView().byId("Combox");
	//	   oCombo.bindAggregation("items",
		//		                   "/Deptcollection",
	//			                   new sap.ui.core.Item({text :"{dept}"}));
		   
		   
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zrosh_bind_combobox.Combobox
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zrosh_bind_combobox.Combobox
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zrosh_bind_combobox.Combobox
*/
//	onExit: function() {
//
//	}

});