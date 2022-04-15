declare namespace API {
  type HTTPValidationError = {
    /** Detail */
    detail?: ValidationError[];
  };

  type Key = {
    /** Key */
    key: string;
    /** Project Id */
    project_id?: number;
    /** Page Id */
    page_id?: number;
  };

  type KeyCreate = {
    /** Key */
    key: string;
    /** Project Id */
    project_id?: number;
    /** Page Id */
    page_id?: number;
  };

  type Language = {
    /** Lang Code */
    lang_code: string;
    /** En Des */
    en_des: string;
    /** Cn Des */
    cn_des: string;
    /** Id */
    id: number;
  };

  type ListModel = {
    /** List */
    list?: any;
    /** Current */
    current?: number;
    /** Pagesize */
    pageSize?: number;
    /** Total */
    total?: number;
  };

  type Page = {
    /** Pid */
    pid?: number;
    /** Project Id */
    project_id: number;
    /** Name */
    name: string;
    /** File Name */
    file_name?: string;
    /** Id */
    id: number;
  };

  type PageCreate = {
    /** Pid */
    pid?: number;
    /** Project Id */
    project_id: number;
    /** Name */
    name: string;
    /** File Name */
    file_name?: string;
  };

  type Project = {
    /** Symbol */
    symbol: string;
    /** Name */
    name: string;
    /** Langs */
    langs?: string;
    /** Content */
    content?: string;
    /** Access */
    access?: string;
    /** Lang Default */
    lang_default: number;
    /** Id */
    id: number;
  };

  type ProjectCreate = {
    /** Symbol */
    symbol: string;
    /** Name */
    name: string;
    /** Langs */
    langs?: string;
    /** Content */
    content?: string;
    /** Access */
    access?: string;
    /** Lang Default */
    lang_default: number;
  };

  type RestfulModel = {
    /** Success */
    success?: boolean;
    /** Data */
    data?: any;
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type RestfulModelKey_ = {
    /** Success */
    success?: boolean;
    data?: Key;
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type RestfulModelLanguage_ = {
    /** Success */
    success?: boolean;
    data?: Language;
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type RestfulModelListModel_ = {
    /** Success */
    success?: boolean;
    data?: ListModel;
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type RestfulModelPage_ = {
    /** Success */
    success?: boolean;
    data?: Page;
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type RestfulModelProject_ = {
    /** Success */
    success?: boolean;
    data?: Project;
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type RestfulModelValue_ = {
    /** Success */
    success?: boolean;
    data?: Value;
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type Key_ = {
    /** Success */
    success?: boolean;
    /** Data */
    data?: Key[];
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type Language_ = {
    /** Success */
    success?: boolean;
    /** Data */
    data?: Language[];
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type Page_ = {
    /** Success */
    success?: boolean;
    /** Data */
    data?: Page[];
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type Value_ = {
    /** Success */
    success?: boolean;
    /** Data */
    data?: Value[];
    /** Errorcode */
    errorCode?: string;
    /** Errormessage */
    errorMessage?: string;
    /** Showtype */
    showType?: string;
    /** Traceid */
    traceId?: string;
    /** Host */
    host?: string;
  };

  type ValidationError = {
    /** Location */
    loc: string[];
    /** Message */
    msg: string;
    /** Error Type */
    type: string;
  };

  type Value = {
    /** Key */
    key: string;
    /** Lang Id */
    lang_id: number;
    /** Value */
    value: string;
    /** Id */
    id: number;
  };

  type ValueCreate = {
    /** Key */
    key: string;
    /** Lang Id */
    lang_id: number;
    /** Value */
    value: string;
  };

  type getKeyApiV1KeysGetKeyGetParams = {
    key: string;
  };

  type getKeysApiV1KeysGetKeysGetParams = {
    skip?: number;
    limit?: number;
  };

  type getKeysApiV1KeysGetKeysByProjectIdGetParams = {
    project_id: number;
    skip?: number;
    limit?: number;
  };

  type getKeysApiV1KeysGetKeysByPageIdGetParams = {
    page_id: number;
    skip?: number;
    limit?: number;
  };

  type createKeyApiV1KeysDeleteKeyPostParams = {
    key: string;
  };

  type getLanguagesApiV1LanguagesLanguageGetParams = {
    lang_id?: number;
    lang_code?: string;
  };

  type getPageApiV1PagesGetPageGetParams = {
    page_id: number;
  };

  type getPageApiV1PagesGetPagesGetParams = {
    project_id: number;
  };

  type getPageApiV1PagesDeletePagePostParams = {
    page_id: number;
  };

  type getProjectApiV1ProjectsProjectGetParams = {
    project_id: number;
  };

  type getProjectApiV1ProjectsProjectsGetParams = {
    skip?: number;
    limit?: number;
  };

  type deleteProjectApiV1ProjectsDeleteProjectPostParams = {
    project_id: number;
  };

  type getValuesByKeyApiV1ValuesGetValuesGetParams = {
    key: string;
  };

  type getValuesByKeyApiV1ValuesDeleteValuePostParams = {
    key: string;
  };
}
