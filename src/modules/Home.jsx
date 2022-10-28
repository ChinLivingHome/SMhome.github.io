import React from "react"
import { Col, Layout, Row } from 'antd';
import '../assets/scss/Home.css'
// import { Col, Row } from 'antd';

const Home = () => {
    const { Header, Footer, Content } = Layout;
    return(
        <>
        <Layout>
            <Header>
                <Row className="header-bg-image">
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
                    <Col span={18} push={6}>
                        Tel: 099-607-8908
                    </Col>
                </Row>
                <Row>
                    <Col span={18} push={6}>
                        Email: chinnawat.5768@gmail.com
                    </Col>
                </Row>
            </Footer>
        </Layout>
        </>
    )
}
export default Home
