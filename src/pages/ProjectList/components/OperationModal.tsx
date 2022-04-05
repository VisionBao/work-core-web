import type { FC } from 'react';
import { ModalForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import type { BasicListItemDataType } from '../data.d';
import styles from '../style.less';
import { Button, Result } from 'antd';

type OperationModalProps = {
  done: boolean;
  visible: boolean;
  current: Partial<BasicListItemDataType> | undefined;
  onDone: () => void;
  onSubmit: (values: BasicListItemDataType) => void;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { done, visible, current, onDone, onSubmit, children } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<BasicListItemDataType>
      visible={visible}
      title={done ? null : `项目${current ? '编辑' : '添加'}`}
      className={styles.standardListForm}
      width={640}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => (done ? null : dom),
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
        bodyStyle: done ? { padding: '72px 0' } : {},
      }}
    >
      {!done ? (
        <>
          <ProFormText
            name="name"
            label="项目名称"
            rules={[{ required: true, message: '请输入项目名称' }]}
            placeholder="项目名称"
          />
          <ProFormText
            name="symbol"
            label="请输入项目代号（e.g. nano）"
            rules={[{ required: true, message: '请输入项目代号' }]}
            placeholder="项目代号"
          />
          <ProFormSelect
            name={'lang_default'}
            label="请选择项目主语言"
            rules={[{ required: true, message: '请选择项目主语言' }]}
            showSearch
            placeholder="选择主语言"
            valueEnum={{
              open: '中文',
              closed: '英文',
            }}
          />
          <ProFormSelect
            name={'langs'}
            label="请选择项目支持语言"
            rules={[{ required: true, message: '请选择项目支持语言' }]}
            showSearch
            mode={'multiple'}
            placeholder="选择支持语言"
            options={[
              {
                label: '付晓晓',
                value: 'xiao',
              },
              {
                label: '周毛毛',
                value: 'mao',
              },
            ]}
          />
          <ProFormTextArea
            name="subDescription"
            label="项目描述"
            rules={[{ message: '请输入至少五个字符的项目描述！', min: 5 }]}
            placeholder="请输入至少五个字符"
          />
        </>
      ) : (
        <Result
          status="success"
          title="操作成功"
          subTitle="一系列的信息描述，很短同样也可以带标点。"
          extra={
            <Button type="primary" onClick={onDone}>
              知道了
            </Button>
          }
          className={styles.formResult}
        />
      )}
    </ModalForm>
  );
};

export default OperationModal;
