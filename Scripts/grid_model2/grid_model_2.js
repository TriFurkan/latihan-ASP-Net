var gridDataSourceParamHierarkiAo = [{
    "STATUS_AKTIF": 1,
    "KODE_G2": 1,
    "KODE_G3": 2,
	"KODE_G4": 1,
	"KODE_G5": 2,
	"KODE_G6":1,
	"DIVISI": 1,
	"last_modified_by":"hasan" ,
	"last_modified_date":"2020-20-02"
}, {
     "STATUS_AKTIF": 0,
    "KODE_G2": 3,
    "KODE_G3": 2,
	"KODE_G4": 3,
	"KODE_G5": 2,
	"KODE_G6":4,
	"DIVISI": 1,
	"last_modified_by":"hasan" ,
	"last_modified_date":"2020-20-02"
}, {
     "STATUS_AKTIF": 0,
    "KODE_G2": 2,
    "KODE_G3": 3,
	"KODE_G4": 4,
	"KODE_G5": 2,
	"KODE_G6":2,
	"DIVISI": 2,
	"last_modified_by":"hasan" ,
	"last_modified_date":"2020-20-02"
}, {
     "STATUS_AKTIF": 1,
    "KODE_G2": 1,
    "KODE_G3": 2,
	"KODE_G4": 4,
	"KODE_G5": 2,
	"KODE_G6":1,
	"DIVISI": 2,
	"last_modified_by":"hasan" ,
	"last_modified_date":"2020-20-02"
}

];



$(function () {
    
   var storeDivisi = [{"ID_DIVISI":1,"NAMA_DIVISI":"16 DPKL.DIV DHE NON TAMBANG"},{"ID_DIVISI":2,"NAMA_DIVISI":"21 DPKL.DIV DHE TAMBANG"}];
   var stroreG2 = [{"KODE_USER":1,"NAMA_USER":"agus_pp-Agus Purnomo Putro"},{"KODE_USER":2,"NAMA_USER":"fitri_ig-Fitri Indah Gayatri"},{"KODE_USER":3,"NAMA_USER":"hendra_h-Hendra Hermawan"},{"KODE_USER":4,"NAMA_USER":"sugara_sts-Sugara"},{"KODE_USER":5,"NAMA_USER":"agus_pp-Agus Purnomo" },{"KODE_USER":6,"NAMA_USER":"akhson_dh-Akhson"},{"KODE_USER":7,"NAMA_USER":"aprida_a-Aprida Ariani"}];
   var stroreG3 = [{"KODE_USER":1,"NAMA_USER":"tatag_ba-Tatag Budiarto A"},{"KODE_USER":2,"NAMA_USER":"andri_k-Andri Kurniawan"},{"KODE_USER":3,"NAMA_USER":"Sukarni Tarida Sinurat"},{"KODE_USER":4,"NAMA_USER":"Putro hendra_f-Hendra Franky"},{"KODE_USER":5,"NAMA_USER":" Dwi Hermawan" ,"KODE_USER":6,"NAMA_USER":"sumarti-Sri Sumarti	"},{"KODE_USER":7,"NAMA_USER":"adi_purwanto-Adi Purwanto"}];
   var stroreG4 = [{"KODE_USER":1,"NAMA_USER":"ym.adams-Yose Manindjo Adams"},{"KODE_USER":2,"NAMA_USER":"Tugas Waluyanto	"},{"KODE_USER":3,"NAMA_USER":"dwi_tw-Dwi Tugas Waluyanto"},{"KODE_USER":4,"NAMA_USER":"Manindjo Adams"}];
   var stroreG5 = [{"KODE_USER":1,"NAMA_USER":"marlina_r-Marlina Rante Djaludju"},{"KODE_USER":2,"NAMA_USER":"mrhamami-Mohamad Rizky Hamami"},{"KODE_USER":3,"NAMA_USER":"dwi_tw-Dwi"},{"KODE_USER":4,"NAMA_USER":"asuryono-Adhi Suryono"},{"KODE_USER":5,"NAMA_USER":" aldrina-Aldrina Kusuma Sarie" ,"KODE_USER":6,"NAMA_USER":"ym.adams-Yose "},{"KODE_USER":7,"NAMA_USER":"asuryono-Adhi Suryono"}];
   var stroreG6 = [{"KODE_USER":1,"NAMA_USER":"ym.adams-Yose Manindjo Adams"},{"KODE_USER":2,"NAMA_USER":"Tugas Waluyanto"},{"KODE_USER":3,"NAMA_USER":"hendra_h-Hendra Hermawan"},{"KODE_USER":4,"NAMA_USER":"dwi_tw-Dwi Tugas Waluyanto"},{"KODE_USER":5,"NAMA_USER":"Manindjo Adams" }];
  

    var mAO = "";
    // var URL = routeApi + "MON_Manajemen_Referensi/";
    // var gridDataSourceParamHierarkiAo = new DevExpress.data.DataSource({
        // insert: function (data) {
            // const inUrl = URL + "PostDataHierarkiAOBank";
            // return postGridForm_ins(inUrl, "Post", data);
        // },
        // update: function (data, val) {
            // Object.keys(val).map(function (key, index) {
                // if (typeof data[key] !== 'undefined') {
                    // data[key] = val[key];
                // }
            // });
            // const inUrl = URL + "PutDataHierarkiAOBank";
            // return postGridForm_ins(inUrl, "Post", data);
        // },

        // remove: function (key, dd) {
            // return $.ajax({
                // url: URL + 'deleteByIdHierarkiAOBank?id=' + key.id,
                // type: "POST",
                // dataType: "json",
                // contentType: 'application/json; charset=utf-8'
            // });
        // },
        // load: function (load) {
            // return $.ajax({
                // url: URL + "GetDataHierarkiAOBank",
                // type: "GET"
            // });
        // }
    // });

    // var allDataHierarkiAO = [];
     // gridDataSourceParamHierarkiAo.store().load().done(function (d) {
        // allDataParameterKewenanganReview = d;
     // });

    var storeKomoditasUtama = [];
    var storeLevelUser = [];

 //   function drawDataGrid() {
      //  console.log("drawdataGrid");
        $("#gridContainer").dxDataGrid({
            dataSource: gridDataSourceParamHierarkiAo,

            allowColumnResizing: true,
            columnAutoWidth: true,
            showBorders: true,
            editing: {
                mode: "popup",
                allowAdding: true,
                allowUpdating: true,
                allowDeleting: true,
                popup: {
                    title: "Manajemen Referensi - Tabel Parameter Hierarki AO",
                    showTitle: true,
                    width: 600,
                    height: 400,
                    dragEnabled: true,
                    position: {
                        my: "center",
                        at: "center",
                        of: window
                    }
                },
                form: {
                    colCount: 1,
                    items: [{

                        type: "dxCheckBox",

                        dataField: "STATUS_AKTIF",
                        caption: "Status Aktif",

                        width: 1183

                    }, {
                        editorType: "dxSelectBox",
                        itemType: "simple",
                        dataField: "KODE_G2",
                        label: { text: 'Kode AO (G2)', location: 'left' },

                        editorOptions: {

                            showClearButton: true
                        },
                        onValueChanged: function (d) {
                            $('#KODE_G2').val(d.value);
                        }

                    }, {

                        itemType: "simple",
                        dataField: "KODE_G3",
                        label: { text: 'Kode AO (G3)', location: 'left' },
                        editorOptions: {

                            showClearButton: true
                        },
                        onValueChanged: function (d) {
                            $('#KODE_G3').val(d.value);
                        }


                    }, {

                        itemType: "simple",
                        dataField: "KODE_G4",
                        label: { text: 'Kode G4', location: 'left' },


                        onValueChanged: function (d) {
                            $('#KODE_G4').val(d.value);
                        },
                        validationRules: [
                            {
                                type: "required"

                            }
                        ]

                    }, {
                        editorType: "dxTextBox",
                        itemType: "simple",
                        dataField: "KODE_G5",
                        label: { text: 'Kode G5', location: 'left' },
                        editorOptions: {

                            showClearButton: true
                        },
                        onValueChanged: function (d) {
                            $('#KODE_G5').val(d.value);
                        },
                        validationRules: [
                            {
                                type: "required"

                            }
                        ]
                    }, {
                        editorType: "dxTextBox",
                        itemType: "simple",
                        dataField: "KODE_G6",
                        label: { text: 'Kode G6', location: 'left' },
                        editorOptions: {

                            showClearButton: true
                        },
                        onValueChanged: function (d) {
                            $('#KODE_G6').val(d.value);
                        },
                        validationRules: [
                            {
                                type: "required"
                            }
                        ]
                    }, {
                        editorType: "dxDropDownBox",
                        itemType: "simple",
                        dataField: "DIVISI",
                        label: { text: 'Divisi', location: 'left' }
                    }
                    ]
                }   //end form
            }
            ,
            onRowValidating: function (e) {
                var KODE_G2 = e.newData.KODE_G2 !== undefined ? e.newData.KODE_G2 : e.oldData.KODE_G2;
                var KODE_G3 = e.newData.KODE_G3 !== undefined ? e.newData.KODE_G3 : e.oldData.KODE_G3;
                var KODE_G4 = e.newData.KODE_G4 !== undefined ? e.newData.KODE_G4 : e.oldData.KODE_G4;
                var KODE_G5 = e.newData.KODE_G5 !== undefined ? e.newData.KODE_G5 : e.oldData.KODE_G5;
                var KODE_G6 = e.newData.KODE_G6 !== undefined ? e.newData.KODE_G6 : e.oldData.KODE_G6;
                var DIVISI  = e.newData.DIVISI  !== undefined ? e.newData.DIVISI  : e.oldData.DIVISI;
                 mAO = KODE_G2 + KODE_G3 + KODE_G4 + KODE_G5 + KODE_G6 + DIVISI.toString();

            },



            onRowUpdated: function (e) {
                gridDataSourceParamHierarkiAo.store().load().done(function (d) {
                    allDataHierarkiAO = d;
                });
            },
            onRowInserted: function (e) {
                gridDataSourceParamHierarkiAo.store().load().done(function (d) {
                    allDataHierarkiAO = d;
                });
            },
            onRowRemoved: function (e) {
                gridDataSourceParamHierarkiAo.store().load().done(function (d) {
                    allDataHierarkiAO = d;
                });
            },


            onEditorPreparing: function (e) {
                if (e.dataField === "STATUS_AKTIF" && e.parentType === "dataRow") {
                    e.editorName = "dxCheckBox";
                }
                if (e.parentType === 'dataRow' && e.dataField === 'KODE_G2') {
                    e.editorName = "dxSelectBox";
                }
                if (e.parentType === 'dataRow' && e.dataField === 'KODE_G3') {
                    e.editorOptions.maxLength = 9;
                }
                if (e.parentType === 'dataRow' && e.dataField === 'KODE_G4') {
                    e.editorName = "dxSelectBox";
                }
                if (e.parentType === 'dataRow' && e.dataField === 'KODE_G5') {
                    e.editorOptions.maxLength = 9;
                }
                if (e.parentType === 'dataRow' && e.dataField === 'KODE_G6') {
                    e.editorOptions.maxLength = 9;
                }
                if (e.parentType === 'dataRow' && e.dataField === 'DIVISI') {
                    e.editorName = "dxSelectBox";
                }
            },
            onEditingStart: function (e) {
                e.component.columnOption("KODE_G2", "allowEditing", false);
            },
            onInitNewRow: function (e) {
                e.component.columnOption("KODE_G2", "allowEditing", true);
            },
            searchPanel: {
                visible: true,
                width: 240
            },

            export: {
                enabled: true,
                fileName: "Hierarki AO Bank"
            },
            pager: {
                allowedPageSizes: [5, 10, 15, 20],
                showInfo: true,
                showNavigationButtons: true,
                showPageSizeSelector: true,
                visible: true
            },
            paging: {
                pageSize: 8
            },

            columns: [{
                dataField: "STATUS_AKTIF",
                caption: "Status Aktif",
                dataType: 'boolean',
                value: false,
                setCellValue: function (rowData, value) {
                    var newValue = (value === true ? 1 : 0);
                    this.defaultSetCellValue(rowData, newValue);
                }
            }, {
                editorType: "dxSelectBox",
                dataField: "KODE_G2",
                caption: "Kode G2(AO)",
                lookup: {
                    dataSource: stroreG2,
                    placeholder: "Pilih Kode..",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data)
                            return data.KODE_USER + "-" + data.NAMA_USER;
                    },

                    valueExpr: "KODE_USER",
                    searchEnabled: true
                },
                label: {
                    text: "Kode AO"
                }

            }, {
                dataField: "KODE_G3",
                caption: "Kode G3(AO)",
                lookup: {
                    dataSource: stroreG3,
                    placeholder: "Pilih Kode..",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data)
                            return data.KODE_USER + "-" + data.NAMA_USER;
                    },

                    valueExpr: "KODE_USER",
                    searchEnabled: true
                },
                label: {
                    text: "Kode G3"
                }

            }, {
                dataField: "KODE_G4",
                caption: "Kode G4",
                lookup: {
                    dataSource: stroreG4,
                    placeholder: "Pilih Kode..",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data)
                            return data.KODE_USER + "-" + data.NAMA_USER;
                    },
                    valueExpr: "KODE_USER",
                    searchEnabled: true
                },
                label: {
                    text: "Kode G4"
                },
                validationRules: [
                    {
                        type: "required"
                    }
                ]
            }, {
                dataField: "KODE_G5",
                caption: "Kode G5",
                lookup: {
                    dataSource: stroreG5,
                    placeholder: "Pilih Kode..",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data)
                            return data.KODE_USER + "-" + data.NAMA_USER;
                    },
                    //  keyExpr: "KODE_USER",
                    valueExpr: "KODE_USER",
                    searchEnabled: true
                },
                label: {
                    text: "Kode G5"
                },
                validationRules: [
                    {
                        type: "required"
                    }
                ]
            }, {
                dataField: "KODE_G6",
                caption: "Kode G6",
                lookup: {
                    dataSource: stroreG6,
                    placeholder: "Pilih Kode..",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data)
                            return data.KODE_USER + "-" + data.NAMA_USER;
                    },

                    valueExpr: "KODE_USER",
                    searchEnabled: true
                },
                label: {
                    text: "Kode G6"
                },
                validationRules: [
                    {
                        type: "required"

                    }
                ]
            }, {
                dataField: "DIVISI",
                caption: "Divisi",
                lookup: {
                    dataSource: storeDivisi,
                    placeholder: "Pilih Divisi..",
                    showSelectionControls: true,
                    applyValueMode: "useButtons",
                    displayExpr: function (data) {
                        if (data)
                            return " " + data.ID_DIVISI + " " + data.NAMA_DIVISI
                    },
                    valueExpr: "ID_DIVISI",
                    searchEnabled: true
                },
                label: {
                    text: "Komoditas"
                }
            }, {
                dataField: "last_modified_by",
                caption: "Modified By"
            }, {
                dataField: "last_modified_date",
                caption: "Modified Date",
                dataType: 'date',
                format: 'dd/MM/yyyy HH:mm:ss'
            }]
        }).dxDataGrid("instance");
  //  }
	
  //  function loadDataSource() {
    //    $.when(
            // $.ajax({
                // url: routeApi + "MON_Manajemen_Referensi/GetByDataDivisi",
                // success: function (data) {
                 // //   console.log("Divisi");
                    // storeDivisi = data;
                // }
            // })
			
		//	 storeDivisi=storeDivisi;
		//	,
            // $.ajax({
                // url: routeApi + "MON_Manajemen_Referensi/GetbyDataProfAOG2",
                // success: function (data) {
                // //    console.log("AO G2");
                    // stroreG2 = data;
                // }
            // })
	//		 stroreG2=stroreG2;
	//		,
            // $.ajax({
                // url: routeApi + "MON_Manajemen_Referensi/GetbyDataProfAOG3",
                // success: function (data) {
                    // console.log("AO G3");
                    // stroreG3 = data;
                // }
            // })
	//		 stroreG3=stroreG3;
			
	//	 ,
            // $.ajax({
                // url: routeApi + "MON_Manajemen_Referensi/GetbyDataProfAOG5",
                // success: function (data) {
                    // console.log("AO G5");
                    // stroreG5 = data;
                // }
            // })
	//		 stroreG5=stroreG5;
	//		,
            // $.ajax({
                // url: routeApi + "MON_Manajemen_Referensi/GetbyDataProfAOG6",
                // success: function (data) {
                    // console.log("AO G6");
                    // stroreG6 = data;
                // }
            // })
	//		 stroreG6=stroreG6;
   //     ).then(
       //     drawDataGrid
    //    );
 //  }
  
//  loadDataSource();

    function postGridForm_ins(inUrl,method, data)
{
    // //console.log(mAO);
    // //cek jika ada yang sama

    // var url = routeApi + "MON_Manajemen_Referensi/KonNewHierarkiAOBank?mAO=" + mAO; 
    // $.ajax({
        // url: url,
        // type: method,
        // dataType: "json",
        // success: function (data1) {
            // console.log(data1[0].hasil)
            // if (data1[0].hasil >= 1) {
              
                // DevExpress.ui.notify("Data AO G2, G3,G4,G5,G6,Divisi Sudah pernah di input !!", "warning", 5000);
              
                // return;
            // } else { postGridForm(inUrl, "Post", data) }  //ke api

        // }
    // });

    }

});
