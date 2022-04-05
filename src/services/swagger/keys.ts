// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Create Key POST /api/v1/keys/add-key */
export async function createKeyApiV1KeysAddKeyPost(
  body: API.KeyCreate,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelKey_>('/api/v1/keys/add-key', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get Key GET /api/v1/keys/get-key */
export async function getKeyApiV1KeysGetKeyGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKeyApiV1KeysGetKeyGetParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelKey_>('/api/v1/keys/get-key', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Get Keys GET /api/v1/keys/get-keys */
export async function getKeysApiV1KeysGetKeysGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKeysApiV1KeysGetKeysGetParams,
  options?: { [key: string]: any },
) {
  return request<API.Key_>('/api/v1/keys/get-keys', {
    method: 'GET',
    params: {
      // limit has a default value: 100
      limit: '100',
      ...params,
    },
    ...(options || {}),
  });
}

/** Get Keys GET /api/v1/keys/get_keys_by_project_id */
export async function getKeysApiV1KeysGetKeysByProjectIdGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKeysApiV1KeysGetKeysByProjectIdGetParams,
  options?: { [key: string]: any },
) {
  return request<API.Key_>('/api/v1/keys/get_keys_by_project_id', {
    method: 'GET',
    params: {
      // limit has a default value: 100
      limit: '100',
      ...params,
    },
    ...(options || {}),
  });
}

/** Get Keys GET /api/v1/keys/get_keys_by_page_id */
export async function getKeysApiV1KeysGetKeysByPageIdGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getKeysApiV1KeysGetKeysByPageIdGetParams,
  options?: { [key: string]: any },
) {
  return request<API.Key_>('/api/v1/keys/get_keys_by_page_id', {
    method: 'GET',
    params: {
      // limit has a default value: 100
      limit: '100',
      ...params,
    },
    ...(options || {}),
  });
}

/** Create Key POST /api/v1/keys/delete-key */
export async function createKeyApiV1KeysDeleteKeyPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.createKeyApiV1KeysDeleteKeyPostParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModel>('/api/v1/keys/delete-key', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Update Key POST /api/v1/keysupdate_key */
export async function updateKeyApiV1KeysupdateKeyPost(
  body: API.Key,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModel>('/api/v1/keysupdate_key', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
