// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** Create Project POST /api/v1/projects/add-project */
export async function createProjectApiV1ProjectsAddProjectPost(
  body: API.ProjectCreate,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelProject_>('/api/v1/projects/add-project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** Get Project GET /api/v1/projects/project */
export async function getProjectApiV1ProjectsProjectGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectApiV1ProjectsProjectGetParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelProject_>('/api/v1/projects/project', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Get Project GET /api/v1/projects/projects */
export async function getProjectApiV1ProjectsProjectsGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getProjectApiV1ProjectsProjectsGetParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModelListModel_>('/api/v1/projects/projects', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Delete Project POST /api/v1/projects/delete_project */
export async function deleteProjectApiV1ProjectsDeleteProjectPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteProjectApiV1ProjectsDeleteProjectPostParams,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModel>('/api/v1/projects/delete_project', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** Update Project POST /api/v1/projects/update_project */
export async function updateProjectApiV1ProjectsUpdateProjectPost(
  body: API.Project,
  options?: { [key: string]: any },
) {
  return request<API.RestfulModel>('/api/v1/projects/update_project', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
