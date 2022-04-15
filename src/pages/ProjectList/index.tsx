import {PageContainer} from '@ant-design/pro-layout';
// import React, { useState, useEffect } from 'react';
import {Card} from 'antd';
// import styles from './index.less';
import TableAjax from './TableAjax';

export default () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <div>
      <PageContainer>
        <div>
          <Card>
            <TableAjax/>
          </Card>
        </div>
      </PageContainer>
    </div>
  );
};
