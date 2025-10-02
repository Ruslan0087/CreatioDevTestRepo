define("UsrTournament_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrTournament"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "b372a3f6-c970-4d98-a663-c68b4864dbe8",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Active",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrActive_5d2lthv",
					"labelPosition": "right",
					"control": "$PDS_UsrActive_5d2lthv"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrTitle_pglxhhn",
					"labelPosition": "auto",
					"control": "$PDS_UsrTitle_pglxhhn",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Code",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrCode_8pt1r70",
					"labelPosition": "auto",
					"control": "$PDS_UsrCode_8pt1r70",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TournamentType",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrTournamentType_jv4jhg4",
					"labelPosition": "auto",
					"control": "$PDS_UsrTournamentType_jv4jhg4",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_9dllv1b",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_9dllv1b",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNotes_t03j1yj",
					"labelPosition": "auto",
					"control": "$PDS_UsrNotes_t03j1yj",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_awdtywg",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_awdtywg_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_gpxu7np",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_awdtywg",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7n3wpp7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_gpxu7np",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_qhcklc3",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_qhcklc3_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrGame",
							"defaultValues": [
								{
									"attributeName": "UsrTournament",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_7n3wpp7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_myysmwx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_myysmwx_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_dw3qltlDS"
						}
					}
				},
				"parentName": "FlexContainer_7n3wpp7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_w8xe23d",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_w8xe23d_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_7n3wpp7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_xkmh0pa",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_xkmh0pa_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GameGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_w8xe23d",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_u1ayvyq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_u1ayvyq_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrGame"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_w8xe23d",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_zvq7tft",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_zvq7tft_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_zvq7tft_GridDetail_dw3qltl",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_dw3qltl"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_zvq7tft_SearchValue",
							"GridDetailSearchFilter_zvq7tft_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_7n3wpp7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_z2zlcgs",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_awdtywg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GameGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_dw3qltl",
					"activeRow": "$GridDetail_dw3qltl_ActiveRow",
					"selectionState": "$GridDetail_dw3qltl_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_dw3qltl_SelectionState"
					},
					"primaryColumnName": "GridDetail_dw3qltlDS_Id",
					"columns": [
						{
							"id": "4089b6a6-874d-f2ba-9be6-26954fa55b77",
							"code": "GridDetail_dw3qltlDS_UsrGameDateAndTime",
							"caption": "#ResourceString(GridDetail_dw3qltlDS_UsrGameDateAndTime)#",
							"dataValueType": 7,
							"width": 172
						},
						{
							"id": "3a8b5cbd-0229-60c2-2d38-ba338cc24099",
							"code": "GridDetail_dw3qltlDS_UsrPlayerBl",
							"caption": "#ResourceString(GridDetail_dw3qltlDS_UsrPlayerBl)#",
							"dataValueType": 10,
							"width": 160
						},
						{
							"id": "9db20e85-814b-7d65-e99a-1de87e106f90",
							"code": "GridDetail_dw3qltlDS_UsrPlayerWh",
							"caption": "#ResourceString(GridDetail_dw3qltlDS_UsrPlayerWh)#",
							"dataValueType": 10,
							"width": 134
						},
						{
							"id": "2eb9a400-49d5-ae21-b8e0-822699c55b25",
							"code": "GridDetail_dw3qltlDS_UsrDurationSeconds",
							"caption": "#ResourceString(GridDetail_dw3qltlDS_UsrDurationSeconds)#",
							"dataValueType": 4,
							"width": 189
						},
						{
							"id": "cb8d985e-409d-6242-f40b-7b8ce272f324",
							"code": "GridDetail_dw3qltlDS_UsrGameResult",
							"caption": "#ResourceString(GridDetail_dw3qltlDS_UsrGameResult)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_z2zlcgs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_dw3qltl_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_dw3qltlDS",
							"filters": "$GridDetail_dw3qltl | crt.ToCollectionFilters : 'GridDetail_dw3qltl' : $GridDetail_dw3qltl_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_dw3qltl_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GameGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_dw3qltl_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_dw3qltlDS",
							"filters": "$GridDetail_dw3qltl | crt.ToCollectionFilters : 'GridDetail_dw3qltl' : $GridDetail_dw3qltl_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_dw3qltl_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_dw3qltl_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_dw3qltl_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GameGridDetail",
							"filters": "$GridDetail_dw3qltl | crt.ToCollectionFilters : 'GridDetail_dw3qltl' : $GridDetail_dw3qltl_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_dw3qltl_SelectionState"
						}
					}
				},
				"parentName": "GameGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_dw3qltl_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_dw3qltlDS",
							"filters": "$GridDetail_dw3qltl | crt.ToCollectionFilters : 'GridDetail_dw3qltl' : $GridDetail_dw3qltl_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_dw3qltl_SelectionState"
						}
					}
				},
				"parentName": "GameGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrTitle_pglxhhn": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrCode_8pt1r70": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"PDS_UsrManager_9dllv1b": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrTournamentType_jv4jhg4": {
						"modelConfig": {
							"path": "PDS.UsrTournamentType"
						}
					},
					"PDS_UsrNotes_t03j1yj": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrActive_5d2lthv": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					},
					"GridDetail_dw3qltl": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_dw3qltlDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_zvq7tft_GridDetail_dw3qltl",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrDurationSeconds"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_dw3qltlDS_UsrGameDateAndTime": {
									"modelConfig": {
										"path": "GridDetail_dw3qltlDS.UsrGameDateAndTime"
									}
								},
								"GridDetail_dw3qltlDS_UsrPlayerBl": {
									"modelConfig": {
										"path": "GridDetail_dw3qltlDS.UsrPlayerBl"
									}
								},
								"GridDetail_dw3qltlDS_UsrPlayerWh": {
									"modelConfig": {
										"path": "GridDetail_dw3qltlDS.UsrPlayerWh"
									}
								},
								"GridDetail_dw3qltlDS_UsrDurationSeconds": {
									"modelConfig": {
										"path": "GridDetail_dw3qltlDS.UsrDurationSeconds"
									}
								},
								"GridDetail_dw3qltlDS_UsrGameResult": {
									"modelConfig": {
										"path": "GridDetail_dw3qltlDS.UsrGameResult"
									}
								},
								"GridDetail_dw3qltlDS_Id": {
									"modelConfig": {
										"path": "GridDetail_dw3qltlDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_dw3qltlDS": [
							{
								"attributePath": "UsrTournament",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrTournament"
						},
						"scope": "page"
					},
					"GridDetail_dw3qltlDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrGame",
							"attributes": {
								"UsrGameDateAndTime": {
									"path": "UsrGameDateAndTime"
								},
								"UsrPlayerBl": {
									"path": "UsrPlayerBl"
								},
								"UsrPlayerWh": {
									"path": "UsrPlayerWh"
								},
								"UsrDurationSeconds": {
									"path": "UsrDurationSeconds"
								},
								"UsrGameResult": {
									"path": "UsrGameResult"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			 {

					request:"crt.SaveRecordRequest",
					handler: async (request, next) => {

					   const sysSettingsService = new sdk.SysSettingsService();
					   const mySetting = await sysSettingsService.getByCode("MaximumNumberOfRegionalTournaments");
					   var setting = mySetting.value;
			
					   var tournament_type = await request.$context.PDS_UsrTournamentType_jv4jhg4;
					   var is_active = await request.$context.PDS_UsrActive_5d2lthv;
					   var record_id = await request.$context.Id;

					   console.log(is_active);
					   console.log(tournament_type.displayValue);

					   var regionalTypeId = "59bf10d0-7336-4b53-8d79-5f776ead8108";	
					   if (is_active == true && tournament_type?.value === regionalTypeId) {
							  const filters = new sdk.FilterGroup();
							  await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrTournamentType", regionalTypeId);
							  await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrActive", true);
							  const accountModel = await sdk.Model.create("UsrTournament");
			
							  const partners = await accountModel.load({
								  attributes: ["Id"],
								  parameters: [{
												 type: sdk.ModelParameterType.Filter,
												 value: filters
												}]
								  });
	
							console.log(partners);
	
						   var total = 0;
						   for (const r of partners) {
							  if (r.Id === record_id) continue;
							  total += 1;
						   }
	
						   total += 1;
						   console.log(total);
	
						   if (total > setting) {
							  Terrasoft.showInformation(`No more than ${setting} regional tournaments can be active at a time.`);
							  return;
						   }
						}

						return next?.handle(request);
					}
			 }
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});