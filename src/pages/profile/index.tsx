import { Col, Layout, Row } from 'antd';
import InfoDetails from 'components/profile/InfoDetails';
import PersonalInfo from 'components/profile/PersonalInfo';
import ToolSidebar from 'components/profile/ToolSidebar';
import { NextPage } from 'next';
import React from 'react';
import { Award } from 'types';

type Props = {
  awards?: Award[];
};
const { Header, Content, Footer } = Layout;
const ProfilePage: NextPage<Props> = () => {
  return (
    <div className='py-6'>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col lg={16} md={24}>
          <PersonalInfo />
        </Col>
        <Col lg={8} md={24}>
          <ToolSidebar />
        </Col>
      </Row>
      <InfoDetails />
    </div>
  );
};

export default ProfilePage;
