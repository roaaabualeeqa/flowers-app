import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function UpdateForm(props) {

    const updateFlower = async (e) => {
        e.preventDefault();
    
        const obj = {
            name : e.target.name.value,
            photo: e.target.photo.value,
            info : e.target.info.value
        }
        console.log(props.item.id);
        console.log(obj)
        const serverURl = `${process.env.REACT_APP_serverURL}/favFlower/${props.item.id}`
        const axiosRes = await axios.put(serverURl,obj);
        props.handleClose();
        props.updateFlowerArr(axiosRes.data);
        // console.log(axiosRes.data);
        //close the update modal
        // props.closeUpdateModal();
        //update the old FavArr
        // props.takeNewArrFromChild(axiosRes.data);
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update Flower</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateFlower}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" defaultValue={props.item.name} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image Path</Form.Label>
                        <Form.Control name="photo" type="text" defaultValue={props.item.photo} />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Top Text</Form.Label>
                        <Form.Control name="info" type="text" defaultValue={props.item.info} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateForm;