import { FC } from 'react';
// import styles from "./index.less";
import { Button } from 'antd';
import { getProjectApiV1ProjectsProjectsGet } from '@/services/work-core-api/projects';
import { PlusOutlined } from '@ant-design/icons';
import { useAntdTable } from 'ahooks';
import { Params } from 'ahooks/lib/useAntdTable/types';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';

export const ProjectList: FC = () => {
  const getTableData = ({ current, pageSize }: Params[0]): Promise<any> => {
    return getProjectApiV1ProjectsProjectsGet({
      current: current,
      limit: pageSize,
    }).then((res) => res.data);
  };
  const { tableProps } = useAntdTable(getTableData);

  const columns: ProColumns<API.Project>[] = [
    {
      title: 'name',
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: 'symbol',
      dataIndex: 'symbol',
    },
    {
      title: 'lang_default',
      dataIndex: 'lang_default',
    },
    {
      title: 'langs',
      dataIndex: 'langs',
    },
    {
      title: 'content',
      dataIndex: 'content',
    },
  ];

  return (
    <div>
      <ProTable columns={columns} rowKey="id" {...tableProps} />
      <Button
        type="dashed"
        onClick={() => {
          // setVisible(true);
        }}
        style={{ width: '100%', marginBottom: 8 }}
      >
        <PlusOutlined />
        添加
      </Button>
    </div>
  );
};

export default ProjectList;
