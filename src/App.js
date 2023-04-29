import { Navbar, Nav, Container, Button, Form, Col, Row } from 'react-bootstrap';
import './App.css';
import React from 'react'
import { Wheel } from 'react-custom-roulette';

const data = [
  { option: '0', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: '1', style: { backgroundColor: 'white' } },
  { option: '2' },
]


function App() {
  return (
    <div className='full'>
      <Navbar bg="light" expand="lg">
        <Container className='navclass'>
          <Navbar.Brand href="#features">냠냠플래닛 로고</Navbar.Brand>
        </Container>
      </Navbar>
        <Container className='firstclass'>
          <Row>
            <Col>
              <h1>배고픈 점심시간... 뭐먹을지 모르겠다면?</h1>
            </Col>
            <Col>
              <img src='assets/img/q.png' alt="logo"/> 
            </Col>
          </Row>
          <Container className='blank'>
          </Container>
          <Row>
            <Col>
            </Col>
            <Col className='ButtonClass'>
              <Button className="btn float-end btnclass"><Nav.Link href="#contact">테스터 신청</Nav.Link></Button>
            </Col>
          </Row>
        </Container>
      <section id="into">
        <Container>
          <h2>냠냠플래닛 소개</h2>
          <p className='parah'>냠냠플래닛은 선택장애를 위한 점심시간 쿠폰 제공 서비스를 목표로 하여 만들어진 서비스 입니다</p>
          <div>
            <Wheel
              prizeNumber={3}
              data={data}
              backgroundColors={['#3e3e3e', '#df3428']}
              textColors={['#ffffff']}
            />
          </div>
        </Container>
      </section>
      <section id="main">
        <Container>
          <h2>냠냠플래닛 목표</h2>
          <p className='parah'>이러이러한 목표를 가지고 있습니다</p>
        </Container>

        <Container>
          <h2>냠냠플래닛 사용자 불편사항 이걸로 만들게된 계기</h2>
          <p className='parah'>이러이러한 목표를 가지고 있습니다</p>
        </Container>
      </section>
      <section id="plan">
        <Container>
          <h2>냠냠플래닛 계획</h2>
          <p>국제관 앞에서 언제 어디서 ~~한 룰렛을 돌릴 예정입니다</p>
        </Container>
        <Container>
          <h2>냠냠플래닛 베니핏</h2>
          <p>이러이러한 베니핏이 있을 예정입니다</p>
        </Container>
      </section>
      <section id="contact">
        <Container>
          <h2>베타테스터 신청</h2>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>이름</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
              <Container className="text-center">
                <Button size="lg" className="btn float-center submitclass" type="submit">
                  신청하기
                </Button>
              </Container>
          </Form>
        </Container>
      </section>
      <footer>
        <Container>
          <p>FAQ는 이곳으로 하면 됩니다~</p>
        </Container>
        <Container>
          <p>&copy;2023 ReadyBerry</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
