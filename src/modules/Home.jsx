import React from "react"
import { Layout } from 'antd';
import '../assets/scss/Header.css'
// import { Col, Row } from 'antd';

const Home = () => {
    const { Header, Footer, Content } = Layout;
    return(
        <>
        <Layout>
            <Header class="header-Bgimage">
                <div class="header-text">
                    <h1>
                        Chin Living Home
                    </h1>
                </div>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
        </>
    )
}
export default Home
