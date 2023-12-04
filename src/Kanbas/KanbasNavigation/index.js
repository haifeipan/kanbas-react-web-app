import { Link, useLocation } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUser,
	faTachometerAlt,
	faBook,
	faCalendar,
	faEnvelope,
	faHistory,
	faVideo,
	faUsers,
	faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

function KanbasNavigation() {
	const links = [
		{ name: 'signin', icon: faUser },
		{ name: 'signup', icon: faUser },
		{ name: 'account', icon: faUser },
		// { name: "Account", icon: faUser },
		{ name: 'Dashboard', icon: faTachometerAlt },
		{ name: 'Courses', icon: faBook },
		{ name: 'Calendar', icon: faCalendar },
		{ name: 'Inbox', icon: faEnvelope },
		{ name: 'History', icon: faHistory },
		{ name: 'Studio', icon: faVideo },
		{ name: 'Commons', icon: faUsers },
		{ name: 'Help', icon: faQuestionCircle },
	];

	const { pathname } = useLocation();

	return (
		<div className='sidebar'>
			{links.map((link, index) => (
				<Link
					key={index}
					to={`/Kanbas/${link.name}`}
					// className={`sidebar-item ${pathname.includes(link.name) && "active"}`}
					className={`sidebar-item ${
						pathname.includes(link.name) ? 'active-link' : ''
					}`}>
					<FontAwesomeIcon icon={link.icon} style={{ color: 'red' }} />
					<span>{link.name}</span>
				</Link>
			))}
		</div>
	);
}

export default KanbasNavigation;
