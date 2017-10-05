/**
 * params = { title, height, width, tableData, getTableDataURL, buttons }
 * buttons = { <Label>:onClickFunction(dialogInstance,tableContentData) }
 */
//dialogWTable(params)



define(["dojo/_base/declare", "dijit/Dialog","dijit/form/Button","hTableSimple", "dijit/registry","request","dialogsWTable"],
    function(declare, Dialog, Button, HTableSimple, Registry, Request){
        return declare("DialogWTable", [Dialog], {
             dataURL:"",
             height: undefined,
             width: undefined,
             tableData: null,
            constructor: function (args, parentName) {
                //this.srcNodeRef = document.getElementById(parentName);
                declare.safeMixin(this,args);
            },

            postCreate: function(){
                var instance = this;
                //var styleStr = "";
                //if (this.height) {
                //    styleStr = styleStr + "height:" + this.height + "px;"
                //}
                //if (this.width) {
                //    styleStr = styleStr + "width:" + this.width + "px;"
                //}
                //if(styleStr.length>0){
                //    this.set("style",styleStr)
                //}
                if(this.tableData){
                    this.createDialogTable(instance.tableData)
                }
                //if(!this.tableData&&this.dataURL){
                //    this.getTableDataURL(this.tableData)
                //}
              //  this.createTable()
            },
            createDialogTable:function(tableData){
                var dialogContent = document.createElement('div');
                //this.set("content",dialogContent);
                this.content=dialogContent;
                var tableSimple = new HTableSimple({});

                dialogContent.appendChild(tableSimple.domNode);
                tableSimple.startup();
                tableSimple.setContent(tableData);
            },

            /**
             * buttons = { <Label>:onClickFunction(dialogInstance,tableContentData) }
             * @param buttons
             */
            //
            //addActionButtons:function(buttons){
            //
            //}
        });
});