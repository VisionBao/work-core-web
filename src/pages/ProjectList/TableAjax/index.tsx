import {FC, useEffect, useState} from "react";
// import styles from "./index.less";
import {Button, List, Table} from "antd";
import {getProjectApiV1ProjectsProjectsGet} from '@/services/work-core-api/projects';
import {PlusOutlined} from "@ant-design/icons";
import {useRequest} from "@@/plugin-request/request";
import {useAntdTable} from "ahooks";


const getTableData = ({current,pageSize}): Promise<any> => {
  return getProjectApiV1ProjectsProjectsGet({
    skip: current,
    limit: pageSize
  })
};

export const ProjectList: FC = () => {
  const {tableProps} = useAntdTable(getTableData);

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ];

  return <Table columns={columns} rowKey="email" {...tableProps} />;
  const {
    data,
    loading,
    mutate
  } = useRequest(() => {
    return getProjectApiV1ProjectsProjectsGet({
      skip: 0,
      limit: 100
    });
  });
  const list = data || [];
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 5,
    total: list.length
  };
  return (
    <div>
      <List
        size="large"
        rowKey="id"
        loading={loading}
        pagination={paginationProps}
        dataSource={list}
        renderItem={(item: API.Project) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.symbol}>{item.name}</a>}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <Button
        type="dashed"
        onClick={() => {
          // setVisible(true);
        }}
        style={{width: '100%', marginBottom: 8}}
      >
        <PlusOutlined/>
        添加
      </Button>
      {/*<OperationModal*/}
      {/*  done={done}*/}
      {/*  visible={visible}*/}
      {/*  current={current}*/}
      {/*  onDone={handleDone}*/}
      {/*  onSubmit={handleSubmit}*/}
      {/*/>*/}
    </div>
  )
}

export default ProjectList;
