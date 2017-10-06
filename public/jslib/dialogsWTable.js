/**
 * params = { title, height, width, tableData, getTableDataURL, buttons }
 * buttons = { <Label>:onClickFunction(dialogInstance,tableContentData) }
 */
//dialogWTable(params)


/**
 * Created by dmkits on 30.12.16.
 */
define([ "dijit/Dialog", "dojo/keys", "dojo/on", "dijit/registry","hTableSimple","request", "dojo/domReady!"],
    function (Dialog, keys, on, registry,HTableSimple,Request) {
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

            myDialog.tableSimple.setContent(tableData);
            return myDialog.show();
        }
    });