import  '../App.css';
import CarInfo from './CarInfo';
import SideNav from './SideNav';
import Title from './Title';
import { Row, Container, Col } from 'reactstrap';

const Main = () => {
    return(
        <>
            <Title className='title' />
            <Container className='this'>
                <Row>
                    <Col className='col-12'>
                        <CarInfo/>
                    </Col>
                </Row>
            </Container>
            <SideNav className="pink" />
        </>
    );
}; 

export default Main;