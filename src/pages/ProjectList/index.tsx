import { PageContainer } from '@ant-design/pro-layout';
// import styles from './index.less';
import type { Params } from 'ahooks/lib/useAntdTable/types';
import {
  createProjectApiV1ProjectsAddProjectPost,
  getProjectApiV1ProjectsProjectsGet,
  deleteProjectApiV1ProjectsDeleteProjectPost,
} from '@/services/work-core-api/projects';
import { useAntdTable } from 'ahooks';
import { useModel } from '@@/plugin-model/useModel';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { useState } from 'react';
import { Button, Card, message, Popconfirm } from 'antd';
import ProForm, {
  ProFormText,
  ProFormSelect,
  DrawerForm,
  ProFormTextArea,
} from '@ant-design/pro-form';

export default () => {
  const getTableData = ({ current, pageSize }: Params[0]): Promise<any> => {
    return getProjectApiV1ProjectsProjectsGet({
      current: current,
      limit: pageSize,
    }).then((res) => res.data);
  };
  const { tableProps, refresh } = useAntdTable(getTableData);
  const { initialState } = useModel('@@initialState');
  const [drawerVisit, setDrawerVisit] = useState(false);
  const columns: ProColumns<API.Project>[] = [
    {
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '项目代号',
      dataIndex: 'symbol',
    },
    {
      title: '默认语言',
      dataIndex: 'lang_default',
      render: (lang) => {
        let langName = '_';
        initialState!.languages!.forEach((element: API.Language) => {
          if (lang === element.id) {
            langName = element.cn_des;
            return false;
          }
          return true;
        });
        return <div>{langName}</div>;
      },
    },
    {
      title: '支持语言',
      dataIndex: 'langs',
      render: (langs) => {
        console.log(langs);
        const langsList = JSON.parse(
          typeof langs === 'string' && langs != '-' && langs != null ? langs : '[]',
        );
        const langNameList: string[] = [];
        initialState!.languages!.forEach((element: API.Language) => {
          if (langsList.indexOf(element.id) > -1) {
            langNameList.push(element.cn_des);
          }
        });
        return (
          <div>
            {langNameList.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        );
      },
    },
    {
      title: 'content',
      dataIndex: 'content',
    },
    {
      title: '操作',
      valueType: 'option',
      key: 'option',
      render: (text, record) => [
        <a key="view" onClick={() => {}}>
          查
        </a>,
        <Popconfirm
          title="是否删除该项目"
          onConfirm={async () => {
            await deleteProjectApiV1ProjectsDeleteProjectPost({
              project_id: record.id,
            }).then(() => {
              refresh();
            });
          }}
          okText="删除"
          cancelText="取消"
        >
          <a href="#">删</a>
        </Popconfirm>,

        <a
          key="editable"
          onClick={() => {
            // action?.startEditable?.(record.id);
          }}
        >
          改
        </a>,
      ],
    },
  ];

  function getLanguageOptions() {
    const optionList: any[] = [];
    initialState!.languages!.forEach((element: API.Language) => {
      optionList.push({
        value: element.id,
        label: element.cn_des,
      });
    });
    return optionList;
  }

  return (
    <div>
      <PageContainer>
        <div>
          <Card>
            <ProTable
              columns={columns}
              rowKey="id"
              {...tableProps}
              toolBarRender={() => [
                <Button
                  type="primary"
                  key="primary"
                  onClick={() => {
                    setDrawerVisit(true);
                  }}
                >
                  创建应用
                </Button>,
              ]}
              search={false}
            />
            <DrawerForm
              onVisibleChange={setDrawerVisit}
              title="新建项目"
              visible={drawerVisit}
              onFinish={async (value) => {
                await createProjectApiV1ProjectsAddProjectPost(value as API.ProjectCreate).then(
                  () => {
                    message.success('提交成功');
                    refresh();
                  },
                );
                return true;
              }}
            >
              <ProForm.Group>
                <ProFormText
                  width="md"
                  name="name"
                  label="项目名称"
                  tooltip="最长为 24 位"
                  placeholder="请输入名称"
                  rules={[{ required: true }]}
                />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormText
                  width="md"
                  name="symbol"
                  label="项目代号"
                  tooltip="最长为 24 位"
                  placeholder="请输入代号"
                  rules={[{ required: true }]}
                />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormSelect
                  name="lang_default"
                  label="项目默认语言"
                  showSearch
                  debounceTime={300}
                  options={getLanguageOptions()}
                  placeholder="请选择默认语言"
                  rules={[{ required: true }]}
                />
              </ProForm.Group>
              <ProForm.Group>
                <ProFormSelect
                  name="langs"
                  width="xl"
                  label="项目支持语言（多选）"
                  showSearch
                  debounceTime={300}
                  options={getLanguageOptions()}
                  fieldProps={{
                    mode: 'multiple',
                  }}
                  placeholder="请选择默认语言"
                />
              </ProForm.Group>

              <ProForm.Group>
                <ProFormTextArea width="xl" name="content" label="项目描述" />
              </ProForm.Group>
            </DrawerForm>
          </Card>
        </div>
      </PageContainer>
    </div>
  );
};
