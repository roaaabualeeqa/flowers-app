import axios from "axios";
import { useState, useEffect } from "react";
import Flower from "./Flower";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Home() {

    const [flowersArr, setFlowersArr] = useState([]);


    const getAllFlowers = async () => {

        const serverURL = `${process.env.REACT_APP_serverURL}/allFlowers`;
        const response = await axios.get(serverURL);
        setFlowersArr(response.data);
    }

    useEffect(() => {
        getAllFlowers();
    }, [])

    return (
        <>
            <br />
            <h1>Flowers Collections</h1>
            <br />
            <Row xs={1} md={4} className="g-4">
                {flowersArr.map((item) => {
                    return (
                        <Col>
                            <Flower item={item} parentComp="Home" />
                        </Col>
                    )

                })}
            </Row>

        </>
    )
}

export default Home;