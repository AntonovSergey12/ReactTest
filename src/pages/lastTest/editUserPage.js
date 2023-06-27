import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./authSlice/authslice";
import LoginForm from "./form"


const EditUserPage = () => {
	const {id} =useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => {
		return state.users.find((user) => user.id === Number(id));
	});

	const handleSubmit = () => {
		dispatch(updateUser(user));
		navigate("/people");
	}
	if (!user) {
		return <div>Пользователь не найден</div>;
	 }
  
	 return (
		<div>
		  <h1>Редактирование пользователя {id}</h1>
		  <LoginForm initialValues={user} onSubmit={handleSubmit} />
		</div>
	 );
};

export default EditUserPage;