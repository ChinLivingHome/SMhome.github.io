import React from "react"
import 'antd/dist/antd.min.css'
import {
    PhoneTwoTone, MailTwoTone, EnvironmentTwoTone,
  } from '@ant-design/icons';
import { Col, Layout, Row, Typography, Image, Carousel } from 'antd';
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
                    <Col span={4}></Col>
                    <Col span={8}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                         />
                    </Col>
                    <Col span={8}>
                        <h1>ChinLivingHome</h1>
                        <p>An apartment building or block of flats may have 
                            a few or many apartments. Each apartment is a se
                            parate room or set of rooms for people to live 
                            in. Sometimes an apartment will only be one small room,
                             and tenants will have to share other rooms like the bathr
                             oom and kitchen. Other times, tenants will only share a
                             n entrance hallway with different doors leading to eac
                             h apartment. This shared area is often cared for by a ja
                             nitor or caretaker.
                        </p>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row className="rowSpace">
                    <Col>
                        <div style={{ width: "100%", height: "100%", backgroundColor: 'orange'}}>
                            <Carousel>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 1</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 2</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 3</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 4</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 5</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 6</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 7</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 8</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 9</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 10</h1>
                                </div>
                                <div>
                                    <h1 style={{ color: 'white', lineHeight: '300px', textAlign:'center'}}>Slide 11</h1>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={3}></Col>
                    <Col span={8}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                         />
                    </Col>
                    <Col span={8}>
                        <h1>ChinLivingHome</h1>
                        <p>An apartment building or block of flats may have 
                            a few or many apartments. Each apartment is a se
                            parate room or set of rooms for people to live 
                            in. Sometimes an apartment will only be one small room,
                             and tenants will have to share other rooms like the bathr
                             oom and kitchen. Other times, tenants will only share a
                             n entrance hallway with different doors leading to eac
                             h apartment. This shared area is often cared for by a ja
                             nitor or caretaker.
                        </p>
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row>
                    <Col span={3}></Col>
                    <Col span={8}>
                    <Image
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                         />
                    </Col>
                    <Col span={8}>
                        <h1>ChinLivingHome</h1>
                        <p>An apartment building or block of flats may have 
                            a few or many apartments. Each apartment is a se
                            parate room or set of rooms for people to live 
                            in. Sometimes an apartment will only be one small room,
                             and tenants will have to share other rooms like the bathr
                             oom and kitchen. Other times, tenants will only share a
                             n entrance hallway with different doors leading to eac
                             h apartment. This shared area is often cared for by a ja
                             nitor or caretaker.
                        </p>
                    </Col>
                    <Col span={4}></Col>
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
