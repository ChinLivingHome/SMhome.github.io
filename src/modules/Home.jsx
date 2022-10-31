import React from "react"
import 'antd/dist/antd.min.css'
import {
    PhoneTwoTone, MailTwoTone, EnvironmentTwoTone,
  } from '@ant-design/icons';
import { Col, Layout, Row, Typography, Image } from 'antd';
import '../assets/scss/Home.css'

const Home = () => {
    const { Header, Footer, Content } = Layout;
    const { Title, Paragraph } = Typography;
    return(
        <>
        <Layout>
            <Header className="header-bg-image">
                <Row>
                    <h1 className="header-text">
                        Chin Living Home
                    </h1>
                </Row>
            </Header>
            <Content className="body">
                <Row>
                    <Col>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                         />
                    </Col>
                </Row>
            </Content>
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
                        <Paragraph className="body-text"><EnvironmentTwoTone /> 165/7 ม.9 ซอยเฉลิมพระเกียรติ 17 ต.หนองปรือ อ.บางละมุง จ.ชลบุรี 20150 ประเทศไทย </Paragraph>
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
