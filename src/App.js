import { Nav, Container, Button, Form, Alert, Col, Row } from 'react-bootstrap';
import './App.css';
import React,{useState, useEffect,useRef} from 'react';
import { Wheel } from 'react-custom-roulette';
import emailjs from '@emailjs/browser';
import { FullPage, Slide } from 'react-full-page';

const data = [
  { option: '홍천식당', name: '홍천식당', count:20, style: { backgroundColor: '#769ECB' , textColor: 'black' } },
  { option: '더53', name: '더 53', count:20, style: { backgroundColor: '#FAF3DD' , textColor: 'black' } },
  { option: '남경', name: '남경', count:20, style: {backgroundColor: '#C8D6B9', textColor: 'black'} },
  { option: '모야그집', name: '모야그집', count:20, style: {backgroundColor: '#7CAA98', textColor: 'black'} },
  { option: '새우식탁', name: '새우식탁', count:20, style: {backgroundColor: '#8FC1A9', textColor: 'black'} }
]


function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [takenCounts, setTakenCounts] = useState(Array(data.length).fill(0));

  const handleSpinClick = () => {
    if (!mustSpin) {
      const availablePrizes = data.filter(
        (prize, index) => takenCounts[index] < prize.count
      );
      
      if (availablePrizes.length > 0) {
        const randomIndex = Math.floor(Math.random() * availablePrizes.length);
        const newPrizeNumber = data.indexOf(availablePrizes[randomIndex]);
        
        const newTakenCounts = [...takenCounts];
        newTakenCounts[newPrizeNumber] += 1;
        
        setPrizeNumber(newPrizeNumber);
        setTakenCounts(newTakenCounts);
        setMustSpin(true);
      }
    }
  };

  const allCountsExhausted = takenCounts.every((count, index) => count >= data[index].count);

  useEffect(() => {
    console.log('Count Status:');
    takenCounts.forEach((count, index) => {
      console.log(`${data[index].name}: ${data[index].count - count} 개 남음`);
    });
  }, [takenCounts]);


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
          alert('이메일을 성공적으로 보냈습니다!');
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
          <section className="intro">
            <Container className='firstclass'>
                <div>
                  <h1>Ready to YUM YUM!</h1>
                </div>
                <div className=''>
                  <img src='/nyumnyum.png' alt='nyumnyumyi'></img>
                </div>
                <div>
                  <p class="parah">대학생들의 외식 소비 부담을 게임 컨텐츠를 통해 해결하고자 합니다.</p>
                </div>
            </Container>
          </section>
        </Slide>
        <Slide>
          <section className="firstintro">
          <Container className='text-center'>
            <Row>
              <Col>
                <div><h2>밥값이 부담되거나</h2></div> 
                <div><h2>오늘 뭐먹지 고민될 때!</h2></div>
              </Col>
              <Col>
              </Col>
            </Row>
            <Container className='blank'>
            </Container>
            <Row>
              <Col>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
          </section>
        </Slide>
        <Slide>
          <section className="into">
            <Container className='text-center'>
                <p className='parah'>500미터 이내의 음식점을 냠냠 룰렛으로 정해보세요<br></br>오늘 안에 방문하면 <strong>최대 20% 할인!</strong></p>
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
                {allCountsExhausted && <p>재료가 전부 소진되었습니다!</p>}

            </Container>
          </section>
        </Slide>
        <Slide>
          <section id="contact">
            <Container>
              <p className='normal'>&#40;5월 말 예정&#41; 베타 서비스 오픈 소식을 이메일로 가장 먼저 보내드립니다!</p>
              <br></br>
              <h2>베타테스트 신청</h2>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group controlId="formBasicName">
                    <Form.Label className="formleft" >이름</Form.Label>
                    <Form.Control type="text" name="name" placeholder="이름을 입력하세요" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>학과</Form.Label>
                    <Form.Control type="text" name = "department" placeholder="학과를 입력하세요" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>학번</Form.Label>
                    <Form.Control type="text" name = "studentno" placeholder="학번을 입력하세요" required />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>이메일</Form.Label>
                    <Form.Control type="email" name = "email" placeholder="이메일을 입력하세요" required />
                  </Form.Group>
                  <Container className="text-center">
                    <Button size="lg" className="btn float-center submitclass" type="submit">
                      전송하기
                    </Button>
                    <p className='normal'>&copy;2023 ReadyBerry</p>
                    <p className='normal'>대표: 오남택 010-9295-5340 nyamnyam.planet@gmail.com</p>
                  </Container>
                </Form>
            </Container>
          </section>
            </Slide>
          </FullPage>
    </div>  
  );
}

export default App;
