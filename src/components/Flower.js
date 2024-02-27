import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import UpdateForm from './UpdateForm';

function Flower(props) {

    const [showFlag, setShowFlag] = useState(false);

    const addToFav = async (item) => {
        const obj = {
            name: item.name,
            photo: item.photo,
            info: item.info
        }
        const serverURl = `${process.env.REACT_APP_serverURL}/favFlower`
        await axios.post(serverURl, obj);
    }

    const deleteFlower = async (id) => {

        const serverURL = `${process.env.REACT_APP_serverURL}/favFlower/${id}`;
        const response = await axios.delete(serverURL);
        props.updateFlowerArr(response.data);

    }

    const showUpdateModal = async (item) => {
        setShowFlag(true);
    }

    const handleClose = () => {
        setShowFlag(false);
    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.item.photo} height='230' />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        {props.item.info}
                    </Card.Text>
                    {props.parentComp == "Home" ?
                        <Button variant="outline-primary" onClick={() => addToFav(props.item)}>❤️</Button>
                        : ""}
                    {props.parentComp == "Favourites" ?
                        <>
                            <Button variant="primary" onClick={() => showUpdateModal(props.item)}>Update</Button>
                            <Button variant="danger" onClick={() => deleteFlower(props.item.id)}>Delete</Button>
                        </>
                        : ""}
                </Card.Body>
            </Card>
            {showFlag && <UpdateForm show={showFlag} handleClose={handleClose} item={props.item} updateFlowerArr={props.updateFlowerArr} />}
        </>
    )
}

export default Flower;