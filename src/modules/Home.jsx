import React from "react"
import 'antd/dist/antd.min.css'
import {
    PhoneTwoTone, MailTwoTone, EnvironmentTwoTone,
  } from '@ant-design/icons';
import { Col, Layout, Row, Typography } from 'antd';
import '../assets/scss/Home.css'

const Home = () => {
    const { Header, Footer, Content } = Layout;
    const { Title } = Typography;
    return(
        <>
        <Layout>
            <Header className="header-bg-image">
                <Row>
                <div className="header-text">
                    <h1>
                        Chin Living Home
                    </h1>
                </div>
                </Row>
            </Header>
            <Content>Content</Content>
            <Footer className='footer-bg'>
                <Row>
                    <Col span={18}>
                        <Title> ติดต่อ / Contact </Title>
                    </Col>
                    <Col span={6}>
                        <Title> ที่อยู่ / Location </Title>
                    </Col>
                </Row>
                <Row justify="left">
                    <Col span={18}>
                        <Title level={2}><PhoneTwoTone /> 099-607-8908 (ENG), 081-865-8818(TH)</Title>
                    </Col>
                    <Col span={6}>
                        <Title level={3}><EnvironmentTwoTone /> 165/7 ม.9 ซอยเฉลิมพระเกียรติ 17 ต.หนองปรือ อ.บางละมุง จ.ชลบุรี 20150 ประเทศไทย </Title>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <Title level={2}><MailTwoTone /> chinnawat.5768@gmail.com</Title>
                    </Col>
                </Row>
            </Footer>
        </Layout>
        </>
    )
}
export default Home
