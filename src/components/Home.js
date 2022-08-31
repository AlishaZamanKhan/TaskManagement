import { Button } from "bootstrap";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const handleNavigate = (nav) => {
		navigate(nav);
	};
	return (
		<>
			<Header />
			<div>
				<button
					className="home-button"
					onClick={() => handleNavigate("/tasks")}
				>
					Tasks
				</button>
				<button
					className="home-button"
					onClick={() => handleNavigate("/members")}
				>
					Members
				</button>
			</div>
		</>
	);
};

export default Home;
