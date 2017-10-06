/**
 * params = { title, height, width, tableData, getTableDataURL, buttons[] }
 * button = { <Label>:onClickFunction(dialogInstance,tableContentData) }
 */


/**
 * Created by ianagez on 06.10.2017
 */
define([ "dijit/Dialog", "dijit/registry", "hTableSimple","dijit/form/Button","request", "dojo/domReady!"],
    function (Dialog, registry,HTableSimple, Button, Request) {
        return {
            showDialog: function (params,tableData) {
                if (!tableData) {
                    if (!params||!params.getTableDataURL){
                        console.log("No tableData and getTableDataURL");
                        return;
                    }
                    Request.postJSONData({url: params.getTableDataURL},
                        function (success, data) {
                            if (!success) {
                                console.log("No connection with server");
                                return;
                            }
                            tableData = data;
                            buildDialog(params,tableData);
                        });
                }else return buildDialog(params,tableData);
            }
        };

        function buildDialog(params,tableData){
            var myDialog = registry.byId("dialogWithTable");
            var styleStr="";
            if(!myDialog){
                myDialog = new Dialog({"id":"dialogWithTable","content":document.createElement('div') });
                myDialog.show();
                myDialog.startup();
                myDialog.tableSimple=new HTableSimple();
                myDialog.tableSimple.startup();
                myDialog.content.appendChild(myDialog.tableSimple.domNode);
            }
            if (myDialog.hasButtons) {
               var children =  myDialog.getChildren();
                for(var j in children){
                    var child=children[j];
                    if(child.type=="button"){
                        child.destroy();
                    }
                }
            }
            if (params.title) myDialog.set("title", params.title); else myDialog.set("title", "");

            if(params.height){
                styleStr=styleStr+params.height;
                if(styleStr.charAt(styleStr.length-1)!=";")styleStr=styleStr+";";
            }
            if(params.width){
                styleStr=styleStr+params.width;
                if(styleStr.charAt(styleStr.length-1)!=";")styleStr=styleStr+";";
            }
            if(params.style) styleStr=styleStr+params.style;
            if(styleStr.length>0){
                myDialog.set("style", styleStr);
            }else myDialog.set("style", "");

            if(params.buttons){
                setButtonsForDialog(myDialog,tableData, params.buttons);
            }
                myDialog.tableSimple.setContent(tableData);
            return myDialog.show();
        }

        function setButtonsForDialog(myDialog,tableData,buttons){
            for(var i in buttons){
                myDialog.hasButtons=true;
                var butObj=buttons[i];
                var button = new Button();
                if(butObj.label)button.set('label',butObj.label); button.set('label',butObj.label);
                button.onClick=function(){
                    butObj.onClickFunction(myDialog,tableData);
                };
                button.startup();
                myDialog.addChild(button);
            }
        }
    });