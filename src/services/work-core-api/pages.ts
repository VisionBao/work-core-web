// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Create Page POST /api/v1/pages/add-page */
export async function createPageApiV1PagesAddPagePost(
  body: API.PageCreate,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelPage_>('/api/v1/pages/add-page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get Page GET /api/v1/pages/get_page */
export async function getPageApiV1PagesGetPageGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPageApiV1PagesGetPageGetParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelPage_>('/api/v1/pages/get_page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Get Page GET /api/v1/pages/get-pages */
export async function getPageApiV1PagesGetPagesGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPageApiV1PagesGetPagesGetParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelListModel_>('/api/v1/pages/get-pages', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Get Page POST /api/v1/pages/delete_page */
export async function getPageApiV1PagesDeletePagePost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getPageApiV1PagesDeletePagePostParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModel>('/api/v1/pages/delete_page', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Update Page POST /api/v1/pages/update_page */
export async function updatePageApiV1PagesUpdatePagePost(
  body: API.Page,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModel>('/api/v1/pages/update_page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
