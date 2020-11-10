import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Modal } from "react-bootstrap";
import axios from "axios";

function HookCourseHome() {
  const [courses, setCourses] = useState([]);
  //const [tags, setTags] = useState([]);
  //const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [selected, setSelected] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const getCourses = async() => {
    const res = await axios.get('/api/courses');
    setCourses(res.data.courses);
  }

  useEffect( () =>{
    getCourses();
  }, [],);

  const showCourses = courses.length > 0 &&  courses.map( (course, index) => {
    return(
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img
          width="100rem"
          height="400rem"

          src={require('../images/mathCard.png')}
          alt="Under Construction"
        />
        <Card.ImgOverlay>
          <Card.Img
            width="30%"
            height="50%"

            variant="right"
            src={require('../images/catPaw.png')}
            alt="Under Construction"
          />
          <Card.Body>
            <Card.Title>
              {course.courseName}
            </Card.Title>
            
            <Card.Text>
              {course.courseDesc.substring(0, 50)}
            </Card.Text>
            <Button 
            style={{justifyContent:'left', marginRight:'1.5rem'}}
            variant="outline-dark"
            onClick={() => {
              setSelected(course)
              setShowDetails(true)
            }}
            >
              Details
            </Button>
            <Button
            variant="warning"
            onClick={() => addToCart(course)}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    )
  });

  function addToCart(props){
    setCartItems(cartItems.concat(props))
  }

  const showCartItems =  cartItems.map( (cartItem, index) => {
    return <li>{cartItem.courseName}</li>
  })

  function SelectFilter() {
    const [show, setShow] = useState(false);
    const handleClose = () => {
      setShow(false);
    };
      const handleShow = () => {
      setShow(true);
    };

    const handleCMPS = async() => {
      const res = await axios.get('/api/courses')
      setCourses(res.data.courses.filter((e) => e.courseName.includes("CMPS")));
    }
    const handleMATH = async() => {
      const res = await axios.get('/api/courses')
      setCourses(res.data.courses.filter((e) => e.courseName.includes("MATH")));
    };
    const handleENGL = async() => {
      const res = await axios.get('/api/courses')
      setCourses(res.data.courses.filter((e) => e.courseName.includes("ENGL")));
    };
    const handleShowAll = async() => {
      const res = await axios.get('/api/courses')
      setCourses(res.data.courses);
    };
    
    return (
      <>
        <br/>
        <Button variant="warning" onClick={handleShow}>
          Need help finding your course?
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>What are you meow-jering in?</Modal.Title>
          </Modal.Header>
          
          <Modal.Footer>
          <Button variant="warning" onClick={handleCMPS}>
              Computer Science
            </Button>
            <Button variant="warning" onClick={handleMATH}>
              Math
            </Button>
            <Button variant="warning" onClick={handleENGL}>
              English
            </Button>
            <Button variant="secondary" onClick={handleShowAll}>
              Show All Courses
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function CourseDetails() {
    const handleClose = () => setShowDetails(false);
  
    return (
      <>
        <Modal show={showDetails} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selected.courseName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selected.courseDesc}</Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => {
              handleClose()
              addToCart(selected)
            }}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <div>
      <div style={{margin: '1rem'}}>
        <SelectFilter />
        <CourseDetails />
      </div>
      <div 
        className="row my-4 justify-content-center"
      >
        {showCourses}
      </div>
      <h4>Items in Cart:</h4>
      {showCartItems}
      <Button variant='warning'>
        Check Out
      </Button>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default HookCourseHome;
