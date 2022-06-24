import { NavLink, Outlet } from 'react-router-dom';
import { Separator } from '../../components/Separator';

export const PageMembers = () => {
	return (
		<div className="page_members">
			<nav className="navMembers">
				<NavLink to="info">Info</NavLink>
				<Separator />
				<NavLink to="edward">Edward</NavLink>
				<Separator />
        <NavLink to="eli">Eli</NavLink>
        <Separator />
				<NavLink to="orhan">Orhan</NavLink>
			</nav>
			<Outlet />
		</div>
	);
};
