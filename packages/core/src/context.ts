export type Context = {
  container: any;
  loadingObj: any;
  luckysheetfile: any;
  defaultcolumnNum: number;
  defaultrowNum: number;
  fullscreenmode: boolean;
  devicePixelRatio: number;

  currentSheetIndex: number;
  calculateSheetIndex: number;
  flowdata: any[][];
  config: any;

  visibledatarow: number[];
  visibledatacolumn: number[];
  ch_width: number;
  rh_height: number;

  cellmainWidth: number;
  cellmainHeight: number;
  toolbarHeight: number;
  infobarHeight: number;
  calculatebarHeight: number;
  rowHeaderWidth: number;
  columnHeaderHeight: number;
  cellMainSrollBarSize: number;
  sheetBarHeight: number;
  statisticBarHeight: number;
  luckysheetTableContentHW: number[];

  defaultcollen: number;
  defaultrowlen: number;

  jfcountfuncTimeout: any;
  jfautoscrollTimeout: any;

  luckysheet_select_status: boolean;
  luckysheet_select_save: { row: any[]; column: any[] }[];
  luckysheet_selection_range: any[];

  luckysheet_copy_save: any; // 复制粘贴
  luckysheet_paste_iscut: boolean;

  filterchage: boolean; // 筛选
  luckysheet_filter_save: { row: any[]; column: any[] };

  luckysheet_sheet_move_status: boolean;
  luckysheet_sheet_move_data: any[];
  luckysheet_scroll_status: boolean;

  luckysheetisrefreshdetail: boolean;
  luckysheetisrefreshtheme: boolean;
  luckysheetcurrentisPivotTable: boolean;

  luckysheet_rows_selected_status: boolean; // 行列标题相关参
  luckysheet_cols_selected_status: boolean;
  luckysheet_rows_change_size: boolean;
  luckysheet_rows_change_size_start: any[];
  luckysheet_cols_change_size: boolean;
  luckysheet_cols_change_size_start: any[];
  luckysheet_cols_dbclick_timeout: any;
  luckysheet_cols_dbclick_times: number;

  luckysheetCellUpdate: any[];

  luckysheet_shiftpositon: any;

  iscopyself: boolean;

  orderbyindex: number; // 排序下标

  luckysheet_model_move_state: boolean; // 模态框拖动
  luckysheet_model_xy: number[];
  luckysheet_model_move_obj: any;

  luckysheet_cell_selected_move: boolean; // 选区拖动替换
  luckysheet_cell_selected_move_index: any[];

  luckysheet_cell_selected_extend: boolean; // 选区下拉
  luckysheet_cell_selected_extend_index: any[];
  luckysheet_cell_selected_extend_time: any;

  clearjfundo: boolean;
  jfundo: any[];
  jfredo: any[];
  lang: string; // language
  createChart: string;
  highlightChart: string;
  zIndex: number;

  functionList: any; // function list explanation
  luckysheet_function: any;
  chart_selection: any;
  currentChart: string;
  scrollRefreshSwitch: boolean;

  measureTextCache: any;
  measureTextCellInfoCache: any;
  measureTextCacheTimeOut: any;
  cellOverflowMapCache: any;

  zoomRatio: number;

  visibledatacolumn_unique: any;
  visibledatarow_unique: any;

  showGridLines: boolean;

  toobarObject: any; // toolbar constant
  inlineStringEditCache: any;
  inlineStringEditRange: any;

  fontList: any[];
  defaultFontSize: number;

  currentSheetView: string;

  // cooperative editing
  cooperativeEdit: {
    usernameTimeout: any;
    changeCollaborationSize: any[]; // 改变行高或者列宽时，协同提示框需要跟随改变所需数据
    allDataColumnlen: any[]; // 列宽发生过改变的列
    merge_range: any; // 合并时单元格信息
    checkoutData: any[]; // 切换表格页时所需数据
  };

  // Resources that currently need to be loaded asynchronously, especially plugins. 'Core' marks the core rendering process.
  asyncLoad: string[];
  // 默认单元格
  defaultCell: {
    bg: any;
    bl: number;
    ct: { fa: string; t: string };
    fc: string;
    ff: number;
    fs: number;
    ht: number;
    it: number;
    vt: number;
    m: string | number;
    v: string | number;
  };
};

function defaultContext(): Context {
  return {
    container: null,
    loadingObj: {},
    luckysheetfile: null,
    defaultcolumnNum: 60,
    defaultrowNum: 84,
    fullscreenmode: true,
    devicePixelRatio: window.devicePixelRatio,

    currentSheetIndex: 0,
    calculateSheetIndex: 0,
    flowdata: [],
    config: {},

    visibledatarow: [],
    visibledatacolumn: [],
    ch_width: 0,
    rh_height: 0,

    cellmainWidth: 0,
    cellmainHeight: 0,
    toolbarHeight: 0,
    infobarHeight: 0,
    calculatebarHeight: 0,
    rowHeaderWidth: 46,
    columnHeaderHeight: 20,
    cellMainSrollBarSize: 12,
    sheetBarHeight: 31,
    statisticBarHeight: 23,
    luckysheetTableContentHW: [0, 0],

    defaultcollen: 73,
    defaultrowlen: 19,

    jfcountfuncTimeout: null,
    jfautoscrollTimeout: null,

    luckysheet_select_status: false,
    luckysheet_select_save: [{ row: [0, 0], column: [0, 0] }],
    luckysheet_selection_range: [],

    luckysheet_copy_save: {}, // 复制粘贴
    luckysheet_paste_iscut: false,

    filterchage: true, // 筛选
    luckysheet_filter_save: { row: [], column: [] },

    luckysheet_sheet_move_status: false,
    luckysheet_sheet_move_data: [],
    luckysheet_scroll_status: false,

    luckysheetisrefreshdetail: true,
    luckysheetisrefreshtheme: true,
    luckysheetcurrentisPivotTable: false,

    luckysheet_rows_selected_status: false, // 行列标题相关参
    luckysheet_cols_selected_status: false,
    luckysheet_rows_change_size: false,
    luckysheet_rows_change_size_start: [],
    luckysheet_cols_change_size: false,
    luckysheet_cols_change_size_start: [],
    luckysheet_cols_dbclick_timeout: null,
    luckysheet_cols_dbclick_times: 0,

    luckysheetCellUpdate: [],

    luckysheet_shiftpositon: null,

    iscopyself: true,

    orderbyindex: 0, // 排序下标

    luckysheet_model_move_state: false, // 模态框拖动
    luckysheet_model_xy: [0, 0],
    luckysheet_model_move_obj: null,

    luckysheet_cell_selected_move: false, // 选区拖动替换
    luckysheet_cell_selected_move_index: [],

    luckysheet_cell_selected_extend: false, // 选区下拉
    luckysheet_cell_selected_extend_index: [],
    luckysheet_cell_selected_extend_time: null,

    clearjfundo: true,
    jfundo: [],
    jfredo: [],
    lang: "en", // language
    createChart: "",
    highlightChart: "",
    zIndex: 15,
    functionList: null, // function list explanation
    luckysheet_function: null,
    chart_selection: {},
    currentChart: "",
    scrollRefreshSwitch: true,

    measureTextCache: {},
    measureTextCellInfoCache: {},
    measureTextCacheTimeOut: null,
    cellOverflowMapCache: {},

    zoomRatio: 1,

    visibledatacolumn_unique: null,
    visibledatarow_unique: null,

    showGridLines: true,

    toobarObject: {}, // toolbar constant
    inlineStringEditCache: null,
    inlineStringEditRange: null,

    fontList: [],
    defaultFontSize: 10,

    currentSheetView: "viewNormal",

    // cooperative editing
    cooperativeEdit: {
      usernameTimeout: {},
      changeCollaborationSize: [], // 改变行高或者列宽时，协同提示框需要跟随改变所需数据
      allDataColumnlen: [], // 列宽发生过改变的列
      merge_range: {}, // 合并时单元格信息
      checkoutData: [], // 切换表格页时所需数据
    },

    // Resources that currently need to be loaded asynchronously, especially plugins. 'Core' marks the core rendering process.
    asyncLoad: ["core"],
    // 默认单元格
    defaultCell: {
      bg: null,
      bl: 0,
      ct: { fa: "General", t: "n" },
      fc: "rgb(51, 51, 51)",
      ff: 0,
      fs: 11,
      ht: 1,
      it: 0,
      vt: 1,
      m: "",
      v: "",
    },
  };
}

export default defaultContext;