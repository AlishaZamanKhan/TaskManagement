import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const handleNavigateTo = (nav) => {
		navigate(nav);
	};

	return (
		<div className="header">
			<div className="header-left">
				<h2 className="title">Task Management</h2>
			</div>
			<div className="header-right">
				<div className="header-user">
					<p>Hi Alisha</p>
					<a href="#">logout</a>
				</div>
				<div>
					<button
						className="header-button"
						onClick={() => handleNavigateTo("/home")}
					>
						HOME
					</button>
					<button
						className="header-button"
						onClick={() => handleNavigateTo("/tasks")}
					>
						TASKS
					</button>
					<button
						className="header-button"
						onClick={() => handleNavigateTo("/members")}
					>
						MEMBERS
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
