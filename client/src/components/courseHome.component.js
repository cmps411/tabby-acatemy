import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Modal } from "react-bootstrap";
import axios from "axios";

function HookCourseHome() {
  const [courses, setCourses] = useState([]);
  //const [tags, setTags] = useState([]);
  //const [query, setQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const getCourses = async() => {
    const res = await axios.get('/api/courses');
    setCourses(res.data.courses);
  }
  
  // const filterCourses = async() => {
  //   const res = await axios.get('/api/courses')
  //   setFilteredCourses(res.data.courses.filter((e) => e.courseName.includes(query)));
  // }

  useEffect( () =>{
    getCourses();
  }, [],);

  //QUERY TESTING
  

  //Website loops through the tags to filter out the courses (ROUGH I KNOW LMAO)
  // try{
  //   var query = [""];
    
  //   var queriedCourses = courses.filter((e) => e.courseName.includes(query[0]));

  //   for (var i=1; i<query.length; i++){
  //     queriedCourses = queriedCourses.filter((e) => e.courseName.includes(query[i]));
  //   }
  // }catch (error) {
  //   console.log(error);
  // }

  // const queryCourses = () => {
  //   setQuery("CMPS");
  //   //setQuery(query.concat=("CMPS"));
  // }  

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
            <Card.Title
            >
              {course.courseName}
            </Card.Title>
            
            <Card.Text>
              {course.courseDesc.substring(0, 57)}
            </Card.Text>
            <Button 
            style={{justifyContent:'left', marginRight:'1.5rem'}}
            variant="outline-dark"
            onClick={sayMeow}
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

  function sayMeow(props) {
    alert("MEOW");
  }

  function addToCart(props){
    setCartItems(cartItems.concat(props))
  }

  const showCartItems =  cartItems.map( (cartItem, index) => {
    //const courses = ["alligator", "snake", "lizard"];
    
    return <li>{cartItem.courseName}</li>
  })

  function Example() {
    const [show, setShow] = useState(false);
  
    //const handleQuery = () => 

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
  
 

  // const allCourses = courses.length > 0 && courses.map( (course, index) => {
  //   return(
  //     <Card style={{ width: "18rem", margin: "1rem" }}>
  //       <Card.Img
  //         width="100rem"
  //         height="400rem"

  //         src={require('./mathCard.png')}
  //         alt="Under Construction"
  //       />
  //       <Card.ImgOverlay>
  //         <Card.Img
  //           width="30%"
  //           height="50%"

  //           variant="right"
  //           src={require('./catPaw.png')}
  //           alt="Under Construction"
  //         />
  //         <Card.Body>
  //           <Card.Title
  //           >
  //             {course.courseName}
  //           </Card.Title>
            
  //           <Card.Text>
  //             {course.courseDesc.substring(0, 57)}
  //           </Card.Text>
  //           <Button 
  //             variant="warning"
  //           >
  //             View
  //           </Button>
  //         </Card.Body>
  //       </Card.ImgOverlay>
  //     </Card>
  //   )
  // });

  return (
    <div>
      <div style={{margin: '1rem'}}>
        <Example />
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
