/*global QUnit*/

sap.ui.define([
	"microsoft-api-project/controller/ImageUploadView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ImageUploadView Controller");

	QUnit.test("I should test the ImageUploadView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
