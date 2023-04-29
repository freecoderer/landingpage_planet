import { Navbar, Nav, Container, Button, Form, Col, Row } from 'react-bootstrap';
import './App.css';
import React,{useState} from 'react';
import { Wheel } from 'react-custom-roulette';
import planet from './planet.png'

const data = [
  { option: '삼복', style: { backgroundColor: '#769ECB' , textColor: 'black' } },
  { option: '신동', style: { backgroundColor: '#FAF3DD' , textColor: 'black' } },
  { option: '학교가는길', style: {backgroundColor: '#C8D6B9', textColor: 'black'} },
]


function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className='full'>
      <Navbar  className='navclass' expand="lg">
      <Container>
          <Navbar.Brand href="#into"><img className ='img' src={planet} alt='asdf'></img>&nbsp;&nbsp;&nbsp;냠냠플래닛</Navbar.Brand>
        </Container>
      </Navbar>
      <section id="intro">
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
      </section>
      <section id="into">
        <Container className='text-center'>
          <h2>냠냠플래닛 소개</h2>
          <p className='parah'>냠냠플래닛은 선택장애를 위한 점심시간 쿠폰 제공 서비스를 목표로 하여 만들어진 서비스 입니다</p>
          <div className='wheeldiv'>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={() => {
                setMustSpin(false);}}/>
          </div>
          <Button size="lg" className="btn float-center submitclass" onClick={handleSpinClick} type="submit"> 돌리기!</Button>
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
              <Form.Control type="text" placeholder="이름 입력" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>학과</Form.Label>
              <Form.Control type="text" placeholder="학과 입력" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>학번</Form.Label>
              <Form.Control type="number" placeholder="학번 입력" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="이메일 입력" required />
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
