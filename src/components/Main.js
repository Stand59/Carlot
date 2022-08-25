import  '../App.css';
import CarInfo from './CarInfo';
import SideNav from './SideNav';
import { Row, Container, Col } from 'reactstrap';

const Main = () => {
    return(
        <>
            <Container  className='this'>
                <Row>
                    <Col className='col-11'>
                        <CarInfo/>
                    </Col>
                    <Col>
                        <SideNav />
                    </Col>
                </Row>
            </Container>
        </>
    );
}; 

export default Main;