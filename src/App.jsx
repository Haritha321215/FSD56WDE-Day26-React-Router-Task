import {Route,Routes} from 'react-router-dom'
import CourseList from './Components/CourseList';
import NavBar from './NavBar';
import { courses } from './utilis/courses';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<CourseList courseList={courses} ctype="All"/>} />
        <Route path="/fsd" element={<CourseList courseList={courses} ctype="Full Stack Development"/>} />
        <Route path="/ai" element={<CourseList courseList={courses} ctype="Artificial Intelligence"/>} />
      </Routes>
    </>
  );
}

export default App;
