import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import Members from "./components/Members";
import AddTask from "./components/AddTask";
import AddMember from "./components/AddMember";
import MemberDetail from "./components/MemberDatail";
import TaskDetail from "./components/TaskDetail";



function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/home" element={<Home />} />
				<Route path="/tasks" element={<Tasks />} />
				<Route path="/members" element={<Members />} />
				<Route path="/addmember" element={<AddMember />} />
				<Route path="/addtask" element={<AddTask />} />
				<Route path="/addmember" element={<AddMember />} />
                <Route path="/memberdetail-:id" element = { <MemberDetail/>} />
                <Route path="/taskdetail-:id" element = { <TaskDetail /> } />


			</Routes>
		</div>
	);
}

export default App;
