import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Modal } from "react-bootstrap";
import axios from "axios";

function HookCourseHome() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  //const [tags, setTags] = useState([]);
  //const [query, setQuery] = useState([]);

  const getCourses = async() => {
    const res = await axios.get('/courses');
    setCourses(res.data.courses);
  }

  useEffect( () =>{
    getCourses();
    const filterCourses = () => {
      setFilteredCourses(courses.filter((e) => e.courseName.includes("")))
    };
    filterCourses();
  }, [courses]);

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

  const showCourses = filteredCourses.length > 0 &&  filteredCourses.map( (course, index) => {
    return(
      <Card style={{ width: "18rem", margin: "1rem" }}>
        <Card.Img
          width="100rem"
          height="400rem"

          src={require('./mathCard.png')}
          alt="Under Construction"
        />
        <Card.ImgOverlay>
          <Card.Img
            width="30%"
            height="50%"

            variant="right"
            src={require('./catPaw.png')}
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
              variant="warning"
            >
              View
            </Button>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    )
  });

  function Example() {
    const [show, setShow] = useState(false);
  
    //const handleQuery = () => 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <Button variant="warning" onClick={handleShow}>
          Need help finding your course?
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>What are you meow-jering in?</Modal.Title>
          </Modal.Header>
          
          <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
              Computer Science
            </Button>
            <Button variant="warning" onClick={handleClose}>
              Math
            </Button>
            <Button variant="warning" onClick={handleClose}>
              English
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
        class="row my-4 justify-content-center"
      >
        {showCourses}

      </div>
    </div>
  )
}

export default HookCourseHome;
