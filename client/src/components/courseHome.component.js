import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";
import axios from "axios";

function HookCourseHome() {
  const [courses, setCourses] = useState([]);

  const getCourses = async() => {
    const res = await axios.get('/courses');
    setCourses(res.data.courses);
  }

  useEffect( () =>{
    getCourses();
  }, []);

  const allCourses = courses.length > 0 && courses.map( (course, index) => {
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
              {course.courseDesc}
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

  return (
    
    <div 
      class="row my-4 justify-content-center"
    >
      {allCourses}

    </div>
  )}

export default HookCourseHome;
