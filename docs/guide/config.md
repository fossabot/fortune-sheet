# Overall configuration

## Basic Structure

Below is a simple configuration example:

```js
// Configuration item
const settings = {
     data: [{ name: 'Sheet1', celldata: [{ r: 0, c: 0, v: null }] }], // sheet data
     onChange: (data) => {}, // onChange event
     lang:'zh' // set language
     // More other settings...
}

// Render the workbook
<Workbook {...settings} />
```

`Workbook` props will affect the entire workbook. The configuration of a single worksheet needs to be set in the `settings.data` array to set more detailed parameters. Refer to [Worksheet Configuration](/guide/sheet.html)

For personalized needs, in addition to allowing configuration information bar ([showinfobar](#showinfobar)), toolbar ([showtoolbar](#showtoolbar)), bottom sheet bar ([showsheetbar](#showsheetbar)), bottom count bar ([ShowstatisticBar](#showstatisticBar)),
Luckysheet has opened more detailed custom configuration options, which are as follows:

- Customize the toolbar ([showtoolbarConfig](#showtoolbarConfig))
- Customize the bottom sheet bar ([showsheetbarConfig](#showsheetbarConfig))
- Customize the counting bar ([showstatisticBarConfig](#showstatisticBarConfig))
- Custom cell right-click menu ([cellRightClickConfig](#cellRightClickConfig))
- Customize the right-click menu of the bottom sheet bar ([sheetRightClickConfig](#sheetRightClickConfig))

## Configuration item

The following are all supported setting parameters

- Language [lang](#lang)
- Worksheet configuration [data](#data)
- Worksheet onChange event [onChange](#onchange)
- Number of columns [column](#column)
- Number of rows [row](#row)
- Billion format [autoFormatw](#autoFormatw)
- Accuracy [accuracy](#accuracy)
- Allow copying [allowCopy](#allowCopy)
- Toolbar [showtoolbar](#showtoolbar)
- Customize Toolbar [showtoolbarConfig](#showtoolbarconfig)
- Information bar [showinfobar](#showinfobar)
- Bottom sheet bar [showsheetbar](#showsheetbar)
- Customize the bottom sheet bar [showsheetbarConfig](#showsheetbarconfig)
- The bottom count bar [showstatisticBar](#showstatisticbar)
- Custom Count Bar [showstatisticBarConfig](#showstatisticbarconfig)
- Allow adding rows [enableAddRow](#enableaddrow)
- Ratio [devicePixelRatio](#devicepixelratio)
- Auto-indent interface [showConfigWindowResize](#showconfigwindowresize)
- Custom cell right-click menu [cellRightClickConfig](#cellrightclickconfig)
- Customize the right-click menu of the bottom sheet bar [sheetRightClickConfig](#sheetrightclickconfig)
- The width of the row header area [rowHeaderWidth](#rowheaderwidth)
- The height of the column header area [columnHeaderHeight](#columnheaderheight)
- Whether to show the formula bar [sheetFormulaBar](#sheetformulabar)
- Initialize the default font size [defaultFontSize](#defaultfontsize)

### lang
- Type: String
- Default: "zh"
- Usage: Internationalization settings, allow to set the language of the table, support simplified Chinese ("zh"), English ("en") and traditional Chinese ("zh_tw") and Spanish ("es")

------------
### data
- Type: Array
- Default: undefined
- For detailed parameter settings, please refer to [worksheet configuration](/guide/sheet.html)

------------
### onChange
- Type: Function
- Default: undefined
- Emitted when workbook `data` has changed

------------
### column
- Type: Number
- Default: 60
- Usage: The default number of columns in an empty workbook

------------
### row
- Type: Number
- Default: 84
- Usage: The default number of rows in an empty workbook

------------
### autoFormatw
- Type: Boolean
- Default: false
- Usage: Automatically format numbers with more than 4 digits into "billion format", for example: true or "true" or "TRUE"

------------
### accuracy
- Type: Number
- Default: undefined
- Usage: Set the precision, the number of digits after the decimal point. The parameter is a number or a string of numbers, for example: "0" or 0

------------
### allowCopy
- Type: Boolean
- Default: true
- Usage: Whether to allow copy

------------
### showtoolbar
- Type: Boolean
- Default: true
- Usage: Whether to show the toolbar

------------
### showtoolbarConfig

- Type: Array
- Usage: Custom configuration toolbar,can be used in conjunction with `showtoolbar`, `showtoolbarConfig` has a higher priority.
- Format:

```json
	[
		"clear-format",
		"|",
		"format",
		"text-size",
		"|",
		"bold",
		"italic",
		"strike-through",
		"underline",
		"|",
		"text-color",
		"text-background",
		"border-all",
		"merge-cell",
		"|",
		"align-left",
		"align-center",
		"align-right",
		"align-top",
		"align-mid",
		"align-bottom",
	]
```

------------
### showinfobar
- Type: Boolean
- Default: true
- Usage: Whether to show the top information bar

------------
### showsheetbar
- Type: Boolean
- Default: true
- Usage: Whether to show the bottom sheet button

------------
### showsheetbarConfig

- Type: Object
- Default: {}
- Usage: Custom configuration bottom sheet button, can be used in conjunction with `showsheetbar`, `showsheetbarConfig` has a higher priority.
- Format: 
    ```json
    {
        add: false, //Add worksheet
        menu: false, //Worksheet management menu
        sheet: false //Worksheet display
    }
    ```
- Example:
	- Only display the `Add worksheet` button:
		
		```js
			//options
			{
				showsheetbar: false,
				showsheetbarConfig:{
					add: true,
				}
			}
		```
	- Only hide the `Add worksheet` and `Worksheet management menu` buttons:
		
		```js
			//options
			{
				showsheetbar: true, // The default is true, you can leave it unset
				showsheetbarConfig:{
					add: false,
					menu: false,
				}
			}
		```

------------
### showstatisticBar
- Type: Boolean
- Default: true
- Usage: Whether to show the bottom count bar

------------
### showstatisticBarConfig

- Type: Object
- Default: {}
- Usage: Customize the bottom count bar, can be used in conjunction with `showstatisticBar`, `showstatisticBarConfig` has a higher priority.
- Format: 
    ```json
    {
		count: false, // Count bar
		view: false, // Print view
        zoom: false // Zoom
    }
	```
- Example:
	- Only display the `Zoom` button:
		
		```js
			//options
			{
				showstatisticBar: false,
				showstatisticBarConfig:{
					zoom: true,
				}
			}
		```
	- Only hide the `print view` button:
		
		```js
			//options
			{
				showstatisticBar: true, // The default is true, you can leave it unset
				showstatisticBarConfig:{
					view: false,
				}
			}
		```	
------------
### enableAddRow
- Type: Boolean
- Default: true
- Usage: Allow additional rows

------------

### devicePixelRatio
- Type: Number
- Default: window.devicePixelRatio
- Usage: Device ratio, the larger the ratio, the higher the resolution of the workbook

------------
### showConfigWindowResize
- Type: Boolean
- Default: true
- Usage: The configuration of the chart or pivot table will pop up on the right, set whether the workbook will be automatically indented after popping up

------------
### cellRightClickConfig

- Type: Array
- Default: []
- Usage: Custom configuration cell right-click menu
- Format: 	
	```json
	[
		"copy", // 复制
		"copyAs", // 复制为
		"paste", // 粘贴
		"insertRow", // 插入行
		"insertColumn", // 插入列
		"deleteRow", // 删除选中行
		"deleteColumn", // 删除选中列
		"deleteCell", // 删除单元格
		"hideRow", // 隐藏选中行和显示选中行
		"hideColumn", // 隐藏选中列和显示选中列
		"rowHeight", // 行高
		"columnWidth", // 列宽
		"clear", // 清除内容
		"matrix", // 矩阵操作选区
		"sort", // 排序选区
		"filter", // 筛选选区
		"chart", // 图表生成
		"image", // 插入图片
		"link", // 插入链接
		"data", // 数据验证
		"cellFormat" // 设置单元格格式
	]
	```
	
	In addition to the cells, the configuration here also includes the row header right-click menu, the column header right-click menu, and the column header drop-down arrow menu. The specific configuration relationships are as follows:
	
	|Right-click menu configuration|Cell|Row header|Column header|Column arrow|
	| ------------ | ------------ | ------------ | ----------- | ------------ |
	|copy|copy|copy|copy|copy|
	|copyAs|copy as|copy as|copy as|copy as|
	|paste|paste|paste|paste|paste|
	|insertRow|Insert a row|Increase N rows upwards and N rows downwards|-|-|
	|insertColumn|Insert Column|-|Add N columns to the left and N columns to the right|Add N columns to the left and N columns to the right|
	|deleteRow|Delete selected row|Delete selected row|-|-|
	|deleteColumn|Delete selected column|-|Delete selected column|Delete selected column|
	|deleteCell|Delete cell|-|-|-|
	|hideRow|-|Hide the selected row and show the selected row|-|-|
	|hideColumn|-|-|Hide the selected column and show the selected column|Hide the selected column and show the selected column|
	|rowHeight|-|row height|-|-|
	|columnWidth|-|-|Column Width|Column Width|
	|clear|clear content|clear content|clear content|-|
	|matrix|Matrix Operation Selection|Matrix Operation Selection|Matrix Operation Selection|-|
	|sort|Sort selection|Sort selection|Sort selection|A-Z sort and Z-A sort|
	|filter|Filter selection|Filter selection|Filter selection|-|
	|chart|chart generation|chart generation|chart generation|-|
	|image|Insert Picture|Insert Picture|Insert Picture|-|
	|link|Insert link|Insert link|Insert link|-|
	|data|Data Verification|Data Verification|Data Verification|-|
	|cellFormat|Set cell format|Set cell format|Set cell format|-|

------------
### sheetRightClickConfig

- Type: Object
- Default: {}
- Usage: Customize the right-click menu of the bottom sheet bar
- Format: 
    ```json
    {   
        delete: false, //Delete
        copy: false, //Copy
        rename: false, //Rename
        color: false, //Change color
        hide: false, //Hide, unhide
        move: false, //Move to the left, move to the right
    }

------------
### rowHeaderWidth
- Type: Number
- Default: 46
- Usage: The width of the row header area, if set to 0, it means to hide the row header

------------
### columnHeaderHeight
- Type: Number
- Default: 20
- Usage: The height of the column header area, if set to 0, it means hide the column header

------------
### sheetFormulaBar
- Type: Boolean
- Default: true
- Usage: Whether to show the formula bar

------------
### defaultFontSize
- Type：Number
- Default：11
- Usage：Initialize the default font size

------------

### limitSheetNameLength
- Type: Boolean
- Default: true
- Usage：Is the length of the sheet name limited in scenarios such as sheet renaming

------------

### defaultSheetNameMaxLength
- Type：Number
- Default：31
- Usage：Default maximum allowed sheet name length

------------


<!-- ## Hook Function (TODO)

When the hook function is used in secondary development, hooks will be implanted in each common mouse or keyboard operation, and the function passed in by the developer will be called to expand the function of Luckysheet.

The hook functions are uniformly configured under ʻoptions.hook`, and configuration hooks can be created separately for cells, sheet pages, and tables.

## Cell

### cellEditBefore

- Type: Function
- Default: null
- Usage: Triggered before entering the cell editing mode. When a cell is selected and in the non-editing state, there are usually the following three conventional methods to trigger the edit mode
   - Double click the cell
   - Hit Enter
   - Use API: enterEditMode
- Parameter: 
	- {Array} [range]: Current selection range

------------
### cellUpdateBefore

- Type: Function
- Default: null
- Usage: Triggered before updating this cell value, `return false` will not perform subsequent updates. After modifying the cell in the editing state, this hook is triggered before exiting the editing mode and updating the data.
- Parameter: 
	- {Number} [r]: The row number of the cell
	- {Number} [c]: The column number of the cell
	- {Object | String | Number} [value]: The content of the cell to be modified
	- {Boolean} [isRefresh]: Whether to refresh the entire table

------------
### cellUpdated

- Type: Function
- Default: null
- Usage: Triggered after updating this cell
- Parameter: 
	- {Number} [r]: The row number of the cell
	- {Number} [c]: The column number of the cell
	- {Object} [oldValue]: Cell object before modification
	- {Object} [newValue]: Modified cell object
	- {Boolean} [isRefresh]: Whether to refresh the entire table

------------
### cellRenderBefore

- Type: Function
- Default: null
- Usage: Triggered before the cell is rendered, `return false` will not render the cell
- Parameter: 
	- {Object} [cell]:Cell object
	- {Object} [position]:
		+ {Number} [r]: The row number of the cell
		+ {Number} [c]: The column number of the cell
		+ {Number} [start_r]: The horizontal coordinate of the upper left corner of the cell
		+ {Number} [start_c]: The vertical coordinate of the upper left corner of the cell
		+ {Number} [end_r]: The horizontal coordinate of the lower right corner of the cell
		+ {Number} [end_c]: The vertical coordinate of the lower right corner of the cell
	- {Object} [sheet]: Current sheet object
	- {Object} [ctx]: The context of the current canvas

------------
### cellRenderAfter

- Type: Function
- Default: null
- Usage: Triggered after the cell rendering ends, `return false` will not render the cell
- Parameter: 
	- {Object} [cell]: Cell object
	- {Object} [position]:
		+ {Number} [r]: The row number of the cell
		+ {Number} [c]: The column number of the cell
		+ {Number} [start_r]: The horizontal coordinate of the upper left corner of the cell
		+ {Number} [start_c]: The vertical coordinate of the upper left corner of the cell
		+ {Number} [end_r]: The horizontal coordinate of the lower right corner of the cell
		+ {Number} [end_c]: The vertical coordinate of the lower right corner of the cell
	- {Object} [sheet]: Current worksheet object
	- {Object} [ctx]: The context of the current canvas

- Example:

	A case of drawing two pictures in the upper left corner and lower right corner of cell D1
	:::::: details
	```js
	luckysheet.create({
            hook: {
                cellRenderAfter: function (cell, position, sheetFile, ctx) {
                    var r = position.r;
                    var c = position.c;
                    if (r === 0 && c === 3) { // Specify to process cell D1
                        if (!window.storeUserImage) {
                            window.storeUserImage = {}
                        }
						
                        if (!window.storeUserImage[r + '_' + c]) {
                            window.storeUserImage[r + '_' + c] = {}
                        }

                        var img = null;
                        var imgRight = null;

                        if (window.storeUserImage[r + '_' + c].image && window.storeUserImage[r + '_' + c].imgRight) {
							
							// Fetch directly after loading
                            img = window.storeUserImage[r + '_' + c].image;
                            imgRight = window.storeUserImage[r + '_' + c].imgRight;

                        } else {

                            img = new Image();
                            imgRight = new Image();

                            img.src = 'https://www.dogedoge.com/favicon/developer.mozilla.org.ico';
                            imgRight.src = 'https://www.dogedoge.com/static/icons/twemoji/svg/1f637.svg';

							// The picture is cached in the memory, fetched directly next time, no need to reload
                            window.storeUserImage[r + '_' + c].image = img;
                            window.storeUserImage[r + '_' + c].imgRight = imgRight;

                        }

						
                        if (img.complete) { //Direct rendering that has been loaded
                            ctx.drawImage(img, position.start_c, position.start_r, 10, 10);
                        } else {
                            img.onload = function () {
                                ctx.drawImage(img, position.start_c, position.start_r, 10, 10);
                            }

                        }

                        if (imgRight.complete) {
                            ctx.drawImage(imgRight, position.end_c - 10, position.end_r - 10, 10, 10);
                        } else {

                            imgRight.onload = function () {
                                ctx.drawImage(imgRight, position.end_c - 10, position.end_r - 10, 10, 10);
                            }
                        }

                    }
                }
            }
        })
	```
	:::

------------
### cellAllRenderBefore

- Type: Function
- Default: null
- Usage:The method executed before all cells are rendered. Internally, this method is added before `luckysheetDrawMain` renders the table.
- Parameter: 
	- {Object} [data]: Two-dimensional array data of the current worksheet
	- {Object} [sheet]: Current worksheet object
	- {Object} [ctx]: The context of the current canvas

------------
### rowTitleCellRenderBefore

- Type: Function
- Default: null
- Usage: Triggered before the row header cell is rendered, `return false` will not render the row header
- Parameter: 
	- {String} [rowNum]: Row number
	- {Object} [position]:
		+ {Number} [r]: The row number of the cell
		+ {Number} [top]: The vertical coordinate of the upper left corner of the cell
		+ {Number} [width]: Cell width
		+ {Number} [height]: Cell height
	- {Object} [ctx]: The context of the current canvas

------------
### rowTitleCellRenderAfter

- Type: Function
- Default: null
- Usage: Triggered after the row header cell is rendered, `return false` will not render the row header
- Parameter: 
	- {String} [rowNum]: Row number
	- {Object} [position]:
		+ {Number} [r]: The row number of the cell
		+ {Number} [top]: The vertical coordinate of the upper left corner of the cell
		+ {Number} [width]: Cell width
		+ {Number} [height]: Cell height
	- {Object} [ctx]: The context of the current canvas

------------
### columnTitleCellRenderBefore

- Type: Function
- Default: null
- Usage: Triggered before the column header cell is rendered, `return false` will not render the column header
- Parameter: 
	- {Object} [columnAbc]: Column header characters
	- {Object} [position]:
		- {Number} [c]: The column number of the cell
		- {Number} [left]: The horizontal coordinate of the upper left corner of the cell
		- {Number} [width]: Cell width
		- {Number} [height]: Cell height
	- {Object} [ctx]: The context of the current canvas

------------
### columnTitleCellRenderAfter

- Type: Function
- Default: null
- Usage: Triggered after the column header cell is rendered, `return false` will not render the column header
- Parameter: 
	- {Object} [columnAbc]: Column header characters
	- {Object} [position]:
		- {Number} [c]: The column number of the cell
		- {Number} [left]: The horizontal coordinate of the upper left corner of the cell
		- {Number} [width]: Cell width
		- {Number} [height]: Cell height
	- {Object} [ctx]: The context of the current canvas

------------

## Selected area

### rangeSelect
- Type: Function
- Default: null
- Usage: Frame selection or trigger after setting selection
- Parameter: 
	- {Object} [sheet]: Current worksheet object
	- {Object | Array} [range]: Selection area, may be multiple selection areas

------------

### rangeMoveBefore
- Type: Function
- Default: null
- Usage: Before moving the selection, include a single cell
- Parameter: 
	- {Array} [range]: The current selection area, can only be a single selection area

------------
### rangeMoveAfter
- Type: Function
- Default: null
- Usage: After moving the selection, include a single cell
- Parameter: 
	- {Array} [oldRange]: The current selection range before moving, can only be a single selection
	- {Array} [newRange]: The current selection range after moving, can only be a single selection

------------
### rangeEditBefore
- Type: Function
- Default: null
- Usage: Before the selection
- Parameter: 
	- {Object | Array} [range]: Selection area, may be multiple selection areas
	- {Object} [data]: Data corresponding to the selection area

------------
### rangeEditAfter
- Type: Function
- Default: null
- Usage: After the selection is modified
- Parameter: 
	- {Object | Array} [range]: Selection area, may be multiple selection areas
    - {Object} [oldData]: Before modification, the data corresponding to the selection area
    - {Object} [newData]: After modification, the data corresponding to the selection area

------------
### rangeCopyBefore
- Type: Function
- Default: null
- Usage: Before copying selection
- Parameter: 
	- {Object | Array} [range]: Selection area, may be multiple selection areas
	- {Object} [data]: Data corresponding to the selection area

------------
### rangeCopyAfter
- Type: Function
- Default: null
- Usage: After copying selection
- Parameter: 
	- {Object | Array} [range]: Selection area, may be multiple selection areas
	- {Object} [data]: Data corresponding to the selection area

------------
### rangePasteBefore
- Type: Function
- Default: null
- Usage: Before pasting the selection
- Parameter: 
	- {Object | Array} [range]: Selection area, may be multiple selection areas
	- {Object} [data]: The data corresponding to the selection area to be pasted

------------
### rangePasteAfter
- Type: Function
- Default: null
- Usage: After pasting the selection
- Parameter: 
	- {Object | Array} [range]: Selection area, may be multiple selection areas
	- {Object} [originData]: The data corresponding to the selection area to be pasted
	- {Object} [pasteData]: Data to paste

------------
### rangeCutBefore
- Type: Function
- Default: null
- Usage: Before selection cut
- Parameter: 
	- {Array} [range]: Selection range, can only be a single range
	- {Object} [data]: The data corresponding to the selection area to be cut

------------
### rangeCutAfter
- Type: Function
- Default: null
- Usage: After selection cut
- Parameter: 
	- {Array} [range]: Selection range, can only be a single range
	- {Object} [data]: The data corresponding to the selection area to be cut

------------
### rangeDeleteBefore
- Type: Function
- Default: null
- Usage: Before the selection is deleted
- Parameter: 
	- {Array} [range]: Selection range, can only be a single range
	- {Object} [data]: The data corresponding to the selection area to be deleted

------------
### rangeDeleteAfter
- Type: Function
- Default: null
- Usage: After the selection is deleted
- Parameter: 
	- {Array} [range]: Selection range, can only be a single range
	- {Object} [data]: The data corresponding to the selection area to be deleted

------------
### rangeClearBefore
- Type: Function
- Default: null
- Usage: Before the selection is cleared
- Parameter: 
	- {Object | Array} [range]: Selection area, may be multiple selection areas
	- {Object} [data]: The data corresponding to the selection area to be cleared

------------
### rangeClearAfter
- Type: Function
- Default: null
- Usage: After the selection is cleared
- Parameter: 
	- {Object | Array} [range]: Selection area, may be multiple selection areas
	- {Object} [data]: The data corresponding to the selection area to be cleared

------------
### rangePullBefore
- Type: Function
- Default: null
- Usage: Before selection drop down
- Parameter: 
	- {Array} [range]: The current selection range, can only be a single range

------------
### rangePullAfter
- Type: Function
- Default: null
- Usage: After selection drop down
- Parameter: 
	- {Array} [range]: The selection range after the drop-down can only be a single range

------------

## Worksheet

### sheetCreatekBefore
(TODO)
- Type: Function
- Default: null
- Usage: Triggered before the worksheet is created, the new worksheet also includes the new pivot table

------------
### sheetCreateAfter
(TODO)
- Type: Function
- Default: null
- Usage: Triggered after the worksheet is created, the new worksheet also includes the new pivot table
- Parameter: 
	- {Object} [sheet]: The configuration of the newly created worksheet

------------
### sheetMoveBefore
(TODO)
- Type: Function
- Default: null
- Usage: Before the worksheet is moved
- Parameter: 
	- {Number} [i]: `index` of current worksheet
	- {Number} [order]: `Order` of current worksheet

------------
### sheetMoveAfter
(TODO)
- Type: Function
- Default: null
- Usage: After the worksheet is moved
- Parameter: 
	- {Number} [i]: `index` of current worksheet
	- {Number} [oldOrder]: Before modification, the `order` of the current worksheet
	- {Number} [newOrder]: After modification, the `order` of the current worksheet

------------
### sheetDeleteBefore
(TODO)
- Type: Function
- Default: null
- Usage: Before the worksheet is deleted
- Parameter: 
	- {Object} [sheet]: Configuration of the worksheet to be deleted

------------
### sheetDeleteAfter
(TODO)
- Type: Function
- Default: null
- Usage: After the worksheet is deleted
- Parameter: 
	- {Object} [sheet]: Configuration of deleted worksheet

------------
### sheetEditNameBefore
(TODO)
- Type: Function
- Default: null
- Usage: Before changing the name of the worksheet
- Parameter: 
	- {Number} [i]: `index` of current worksheet
	- {String} [name]: Current worksheet name

------------
### sheetEditNameAfter
(TODO)
- Type: Function
- Default: null
- Usage: After changing the name of the worksheet
- Parameter: 
	- {Number} [i]: `index` of current worksheet
	- {String} [oldName]: Before modification, the current worksheet name
	- {String} [newName]: After modification, the current worksheet name

------------
### sheetEditColorBefore
(TODO)
- Type: Function
- Default: null
- Usage: Before changing the color of the worksheet
- Parameter: 
	- {Number} [i]: `index` of current worksheet
	- {String} [color]: Current worksheet color

------------
### sheetEditColorAfter
(TODO)
- Type: Function
- Default: null
- Usage: After changing the color of the worksheet
- Parameter: 
	- {Number} [i]: `index` of current worksheet
	- {String} [oldColor]: Before modification, the current worksheet color
	- {String} [newColor]: After modification, the current worksheet color

------------
### sheetZoomBefore
(TODO)
- Type: Function
- Default: null
- Usage: Before worksheet zoom
- Parameter: 
	- {Number} [i]: `index` of current worksheet
	- {String} [zoom]: Current worksheet zoom ratio

------------
### sheetZoomAfter
(TODO)
- Type: Function
- Default: null
- Usage: After worksheet zoom
- Parameter: 
	- {Number} [i]: `index` of current worksheet
	- {String} [oldZoom]: Before modification, the current worksheet zoom ratio
	- {String} [newZoom]: After modification, the current worksheet zoom ratio

------------
### sheetActivateBefore
(TODO)
- Type: Function
- Default: null
- Usage：Before worksheet activate
- Parameter：
	- {Number} [i]: `index` of current worksheet

------------
### sheetActivateAfter
(TODO)
- Type: Function
- Default: null
- Usage：After worksheet activate
- Parameter：
	- {Number} [i]: `index` of current worksheet

------------
### sheetDeactivateBefore
（TODO）
- Type: Function
- Default: null
- Usage：Before the worksheet changes from active to inactive
- Parameter：
	- {Number} [i]: `index` of current worksheet

------------
### sheetDeactivateAfter
（TODO）
- Type: Function
- Default: null
- Usage：After the worksheet is changed from active to inactive
- Parameter：
	- {Number} [i]: `index` of current worksheet

------------

## Workbook

### workbookCreateBefore
- Type: Function
- Default: null
- Usage: Triggered before the worksheet is created. The old hook function is called `beforeCreateDom`
- Parameter: 
	- {Object} [book]:Configuration of the entire workbook (options)
    
------------
### workbookCreateAfter
- Type: Function
- Default: null
- Usage: Triggered after the workbook is created
- Parameter: 
	- {Object} [book]:Configuration of the entire workbook (options)
     
------------
### workbookDestroyBefore
- Type: Function
- Default: null
- Usage: Triggered before the workbook is destroyed
- Parameter: 
	- {Object} [book]:Configuration of the entire workbook (options)
    
------------
### workbookDestroyAfter
- Type: Function
- Default: null
- Usage: Triggered after the workbook is destroyed
- Parameter: 
	- {Object} [book]:Configuration of the entire workbook (options)
    
------------
### updated
- Type: Function
- Default: null
- Usage: The method executed after each operation is updated is executed after the canvas rendering, monitor changes in worksheet content, that is, every time the client performs a workbook operation, Luckysheet saves the operation in the history and triggers it. When undoing and redoing, it is also an operation, of course, the hook function will be triggered.
- Parameter: 
	- {Object} [operate]: The history information of this operation will have different history records according to different operations. Refer to the source code [History](https://github.com/mengshukeji/Luckysheet/blob/master/src/controllers/controlHistory.js )
    
------------
### resized
- Type: Function
- Default: null
- Usage: After resize is executed
- Parameter: 
	- {Object} [size]: The width and height of the entire workbook area
    
------------

## Cooperative

### cooperativeMessage

- Type：Function
- Default：null
- Usage：Receive the cooperation message, secondary development. Expanding cooperative message instruction set
- Params:
	- {Object} : Receives the entire collaboration message body object sent by the server

## Image

### imageInsertBefore
- Type: Function
- Default: null
- Usage: Before the picture is inserted
- Parameter: 
	- {Object} [url]: Picture address
    
------------
### imageInsertAfter
- Type: Function
- Default: null
- Usage: After the picture is inserted
- Parameter: 
	- {Object} [item]]: Picture address, width and height, location and other information
    
------------
### imageUpdateBefore
- Type: Function
- Default: null
- Usage: Before the picture is modified, the modified content includes operations such as width and height, position, and cropping
- Parameter: 
	- {Object} [item]]: Picture address, width and height, location and other information
    
------------
### imageUpdateAfter
- Type: Function
- Default: null
- Usage: After the picture is modified, the modified content includes operations such as width and height, position, and cropping
- Parameter: 
	- {Object} [oldItem]]: Before modification, the picture address, width and height, location and other information
	- {Object} [newItem]]: After modification, the picture address, width and height, location and other information
    
------------
### imageDeleteBefore
- Type: Function
- Default: null
- Usage: Before the picture is deleted
- Parameter: 
	- {Object} [item]]: Picture address, width and height, location and other information
    
------------
### imageDeleteAfter
- Type: Function
- Default: null
- Usage: After the picture is deleted
- Parameter: 
	- {Object} [item]]: Picture address, width and height, location and other information
    
------------

## Comment

### commentInsertBefore
- Type: Function
- Default: null
- Usage: Before inserting comments
- Parameter: 
	- {Object} [cell]: The cell information of the comment to be inserted, such as:`{ r:0,c:2,v:{m:'233',v:'233'}}`

------------
### commentInsertAfter
- Type: Function
- Default: null
- Usage: After inserting comments
- Parameter: 
	- {Object} [cell]: The cell information where the comment is inserted, such as:`{ r:0,c:2,v:{m:'233',v:'233'}}`, contains comment information
    
------------
### commentDeleteBefore
- Type: Function
- Default: null
- Usage: Before deleting comments
- Parameter: 
	- {Object} [cell]: The cell information of the comment to be deleted, such as:`{ r:0,c:2,v:{m:'233',v:'233'}}`

------------
### commentDeleteAfter
- Type: Function
- Default: null
- Usage: After deleting the comment
- Parameter: 
	- {Object} [cell]: The cell information of the deleted comment, such as:`{ r:0,c:2,v:{m:'233',v:'233'}}`
    
------------
### commentUpdateBefore
- Type: Function
- Default: null
- Usage: Before modifying comments
- Parameter: 
	- {Object} [cell]: The cell information of the comment, such as:`{ r:0,c:2,v:{m:'233',v:'233'}}`

------------
### commentUpdateAfter
- Type: Function
- Default: null
- Usage: After modifying the comment
- Parameter: 
	- {Object} [oldCell]: Before modification, the cell information where the comment is located, such as:`{ r:0,c:2,v:{m:'233',v:'233'}}`
	- {Object} [newCell]: After modification, the cell information where the comment is located, such as:`{ r:0,c:2,v:{m:'233',v:'233'}}`
    
------------

## Pivot table

### pivotTableEditBefore
- Type: Function
- Default: null
- Usage: Before modifying the PivotTable, operations such as dragging fields, etc.
- Parameter: 
	- {Object} [sheet]: Worksheet configuration where the pivot table is located

------------
### pivotTableEditAfter
- Type: Function
- Default: null
- Usage: After modifying the PivotTable, operations such as dragging fields, etc.
- Parameter: 
	- {Object} [oldSheet]: Before modification, the worksheet configuration where the pivot table is located
	- {Object} [newSheet]: After modification, the worksheet configuration where the pivot table is located
    
------------

## Freeze

### frozenCreateBefore
- Type: Function
- Default: null
- Usage: Before setting freeze
- Parameter: 
	- {Object} [frozen]: Freeze type information

------------
### frozenCreateAfter
- Type: Function
- Default: null
- Usage: After setting freeze
- Parameter: 
	- {Object} [frozen]: Freeze type information
    
------------
### frozenCancelBefore
- Type: Function
- Default: null
- Usage: Before unfreezing
- Parameter: 
	- {Object} [frozen]: Freeze type information

------------
### frozenCancelAfter
- Type: Function
- Default: null
- Usage: After unfreezing
- Parameter: 
	- {Object} [frozen]: Freeze type information
    
------------

#### Legacy Hook Function

### fireMousedown
- Type: Function
- Default: null
- Usage: Customized method of drilling down cell data, note that this hook function is mounted under options: `options.fireMousedown`

------------

## Pager

### onTogglePager

- Type: Function
- Default: null
- Usage: Click the page button to call back the function, return the current page number, refer to [sPage backFun](https://github.com/jvbei/sPage)
- Parameter:
	- {Object} [page]: Return the current page object

------------ -->