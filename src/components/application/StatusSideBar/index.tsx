import { Menu, MenuProps } from 'antd';
import { APPLICATION_STATUS_MAP } from 'constant';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

type Props = {};

const StatusSideBar = (props: Props) => {
  const [status, setStatus] = useState(APPLICATION_STATUS_MAP.keys().next().value);
  const router = useRouter();
  const handleClick: MenuProps['onClick'] = (e) => {
    setStatus(e.key);
    router.query.status = e.key;
    router.push(router);
  };

  return (
    <Menu
      style={{ width: 256 }}
      mode={'inline'}
      theme={'light'}
      selectedKeys={[status]}
      onClick={handleClick}
    >
      {Array.from(APPLICATION_STATUS_MAP).map(([key, value]) => (
        <Menu.Item key={key}>{value.text.toUpperCase()}</Menu.Item>
      ))}
    </Menu>
  );
};

export default StatusSideBar;
