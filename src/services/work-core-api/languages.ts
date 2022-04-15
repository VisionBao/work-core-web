// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Get Languages GET /api/v1/languages/languages */
export async function getLanguagesApiV1LanguagesLanguagesGet(options?: { [key: string]: any }) {
  return request<API.RestfulModelListModel_>('/api/v1/languages/languages', {
    method: 'GET',
    ...(options || {}),
  });
}

/** Get Languages GET /api/v1/languages/language */
export async function getLanguagesApiV1LanguagesLanguageGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getLanguagesApiV1LanguagesLanguageGetParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelLanguage_>('/api/v1/languages/language', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
