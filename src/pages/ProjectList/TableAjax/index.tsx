import React from "react";
import styles from "./index.less";
import {message, Table} from "antd";
// import reqwest from "reqwest";
import { getProjectApiV1ProjectsProjectsGet } from '@/services/work-core-api/projects';
import {history} from "@@/core/history";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: "20%"
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" }
    ],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];

class App extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false
  };

  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters
    });
  };

  fetch = async (params = {}) => {
    console.log("params:", params);
    this.setState({loading: true});
    const msg = await getProjectApiV1ProjectsProjectsGet({});
    var a = 1



    // const handleSubmit = async (values: API.getProjectApiV1ProjectsProjectsGetParams) => {
    //   try {
    //     // 登录
    //     const msg = await getProjectApiV1ProjectsProjectsGet({ });
    //     if (msg.status === 'ok') {
    //       const defaultLoginSuccessMessage = intl.formatMessage({
    //         id: 'pages.login.success',
    //         defaultMessage: '登录成功！',
    //       });
    //       message.success(defaultLoginSuccessMessage);
    //       await fetchUserInfo();
    //       /** 此方法会跳转到 redirect 参数所在的位置 */
    //       if (!history) return;
    //       const { query } = history.location;
    //       const { redirect } = query as { redirect: string };
    //       history.push(redirect || '/');
    //       return;
    //     }
    //     console.log(msg);
    //     // 如果失败去设置用户错误信息
    //     setUserLoginState(msg);
    //   } catch (error) {
    //     const defaultLoginFailureMessage = intl.formatMessage({
    //       id: 'pages.login.failure',
    //       defaultMessage: '登录失败，请重试！',
    //     });
    //     message.error(defaultLoginFailureMessage);
    //   }


    // reqwest({
    //   url: "https://randomuser.me/api",
    //   method: "get",
    //   data: {
    //     results: 10,
    //     ...params
    //   },
    //   type: "json"
    // }).then(data => {
    //   const pagination = { ...this.state.pagination };
    //   // Read total count from server
    //   // pagination.total = data.totalCount;
    //   pagination.total = 200;
    //   this.setState({
    //     loading: false,
    //     data: data.results,
    //     pagination
    //   });
    // });
  };

  render() {
    return (
      <Table
        columns={columns}
        rowKey={record => record.login.uuid}
        dataSource={this.state.data}
        pagination={this.state.pagination}
        loading={this.state.loading}
        onChange={this.handleTableChange}
      />
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-ajax">
      <App />
    </div>
  </div>
);
