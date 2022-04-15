// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Get Values By Key GET /api/v1/values/get_values */
export async function getValuesByKeyApiV1ValuesGetValuesGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getValuesByKeyApiV1ValuesGetValuesGetParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelListModel_>('/api/v1/values/get_values', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Get Values By Key POST /api/v1/values/delete_value */
export async function getValuesByKeyApiV1ValuesDeleteValuePost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getValuesByKeyApiV1ValuesDeleteValuePostParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelValue_>('/api/v1/values/delete_value', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Create Values POST /api/v1/values/add-values */
export async function createValuesApiV1ValuesAddValuesPost(
  body: API.ValueCreate[],
  options?: { [key: string]: any },
) {
  return request<API.RestfulModel>('/api/v1/values/add-values', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
