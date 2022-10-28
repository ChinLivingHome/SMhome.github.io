import React from "react"
import 'antd/dist/antd.min.css'
import { Col, Layout, Row } from 'antd';
import '../assets/scss/Home.css'


const Home = () => {
    const { Header, Footer, Content } = Layout;
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
                <Row justify="left">
                    <Col span={18}>
                        Tel: 099-607-8908
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        Email: chinnawat.5768@gmail.com
                    </Col>
                </Row>
            </Footer>
        </Layout>
        </>
    )
}
export default Home
