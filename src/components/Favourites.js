import axios from "axios";
import { useState, useEffect } from "react";
import Flower from "./Flower";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Favourites() {

    const [favArr, setFavArr] = useState([]);


    const getFavFlowers = async () => {

        const serverURL = `${process.env.REACT_APP_serverURL}/allFavFlowers`;
        const response = await axios.get(serverURL);
        setFavArr(response.data);
    }

    const updateFlowerArr = (newArr) =>{
        setFavArr(newArr);
    }

    useEffect(() => {
        getFavFlowers();
    }, [favArr])

    return (
        <>
            <br />
            <h1>Flowers Collections</h1>
            <br />
            <Row xs={1} md={4} className="g-4">
                {favArr.map((item) => {
                    return (
                        <Col>
                            <Flower item={item} parentComp="Favourites" updateFlowerArr={updateFlowerArr}/>
                        </Col>
                    )

                })}
            </Row>

        </>
    )
}

export default Favourites;