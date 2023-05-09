import { Nav, Container, Button, Form, Alert, Col, Row } from 'react-bootstrap';
import './App.css';
import React,{useState, useRef} from 'react';
import { Wheel } from 'react-custom-roulette';
import emailjs from '@emailjs/browser';
import { FullPage, Slide } from 'react-full-page';

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('메일 전송 완료!');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='full'>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <section id="intro">
            <Container className='firstclass'>
              <Row>
                <Col>
                  <h1>배고픈 점심시간... 뭐먹을지 모르겠다면?</h1>
                </Col>
                <Col>
                  <img className="imgs float-end" src='assets/img/q.png' alt="logo"/> 
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
        </Slide>
        <Slide>
          <section id="into">
            <Container className='text-center'>
              <p className='parah'>냠냠플래닛은 기존 오프라인 외식 산업에 컨텐츠 적인 요소를 가미하여 유저에게는 새로운 경험을 제공함과 동시에, 지역 상권 내에 여러 음식점 업주들에게는 더 많은 손님을 견인하여 지역 상권 활성화에도 기여하고자하는 목표를 가지고 있는 서비스 입니다</p>
              <div className='roulette'>냠냠 룰렛</div>
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
        </Slide>
        <Slide>
          <section id="main">
            <Container>
              <h2>냠냠플래닛 사용자 불편사항 이걸로 만들게된 계기</h2>
              <p className='parah'>이러이러한 목표를 가지고 있습니다</p>
              <h2>냠냠플래닛 계획</h2>
              <p>국제관 앞에서 언제 어디서 ~~한 룰렛을 돌릴 예정입니다</p>
              <h2>냠냠플래닛 베니핏</h2>
              <p>이러이러한 베니핏이 있을 예정입니다</p>
            </Container>
          </section>       
        </Slide>
        <Slide>
          <section id="contact">
            <Container>
              <h2>베타테스터 신청</h2>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label className="formleft" >이름</Form.Label>
                    <Form.Control type="text" name="name" placeholder="이름 입력" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>학과</Form.Label>
                    <Form.Control type="text" name = "department" placeholder="학과 입력" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>학번</Form.Label>
                    <Form.Control type="text" name = "studentno" placeholder="학번 입력" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" name = "email" placeholder="이메일 입력" required />
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
            </Slide>
          </FullPage>
    </div>  
  );
}

export default App;
