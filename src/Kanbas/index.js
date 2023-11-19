import Nav from '../Nav';
import KanbasNavigation from './KanbasNavigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Courses from './Courses';
import Account from './Account';
import Settings from './Courses/Settings';
import defaultCourses from './Courses/defaultIndex';

import db from './Database';
import { useState, useEffect } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
	// const [courses, setCourses] = useState(db.courses);
	const [courses, setCourses] = useState([]);

	// const URL = "http://localhost:4000/api/courses";
	const URL = `${API_BASE}/api/courses`;

	const findAllCourses = async () => {
		const response = await axios.get(URL);
		setCourses(response.data);
	};
	useEffect(() => {
		findAllCourses();
	}, []);

	const [course, setCourse] = useState({
		name: 'New Course',
		number: 'New Number',
		startDate: '2023-09-10',
		endDate: '2023-12-15',
	});

	// const addNewCourse = () => {
	//   setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
	// };

	const addNewCourse = async () => {
		const response = await axios.post(URL, course);
		setCourses([...courses, response.data]);
		setCourse({ name: '' });
	};

	// const deleteCourse = (courseId) => {
	//   setCourses(courses.filter((course) => course._id !== courseId));
	// };

	const deleteCourse = async (course) => {
		const response = await axios.delete(`${URL}/${course._id}`);
		setCourses(courses.filter((c) => c._id !== course._id));
	};

	// const updateCourse = () => {
	//   setCourses(
	//     courses.map((c) => {
	//       if (c._id === course._id) {
	//         return course;
	//       } else {
	//         return c;
	//       }
	//     })
	//   );
	// };

	const updateCourse = async (course) => {
		const response = await axios.put(`${URL}/${course._id}`, course);
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					// return response.data;
					return course;
				}
				return c;
			})
		);
		setCourse({ name: '' });
	};

	return (
		<Provider store={store}>
			<div className='d-flex'>
				<KanbasNavigation />
				<div>
					<Routes>
						<Route path='/' element={<Navigate to='Dashboard' />} />
						<Route path='Account/*' element={<Account />} />
						<Route
							path='Dashboard'
							element={
								<Dashboard
									courses={courses}
									course={course}
									setCourse={setCourse}
									addNewCourse={addNewCourse}
									deleteCourse={deleteCourse}
									updateCourse={updateCourse}
								/>
							}
						/>

						{/* add by myself */}
						<Route path='Courses' element={<Courses courses={courses} />} />
						{/* <Route path="Courses/:courseId/Settings" element={<Settings />} /> */}
						{/* add by myself */}

						<Route
							path='Courses/:courseId/*'
							element={<Courses courses={courses} />}
						/>
						<Route path='Calendar' element={<h1>Calender</h1>} />
						<Route path='Inbox' element={<h1>Inbox</h1>} />
						<Route path='History' element={<h1>History</h1>} />
						<Route path='Studio' element={<h1>Studio</h1>} />
						<Route path='Commons' element={<h1>Commons</h1>} />
						<Route path='Help' element={<h1>Help</h1>} />
					</Routes>
				</div>
			</div>
		</Provider>
	);
}
export default Kanbas;
