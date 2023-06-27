import {Link} from "react-router-dom"

const PageUser = () => {
	return (
		<div>
			<h1>Страница с пользователями</h1>
			<Link to="/user/edit/first">
			Редактировать пользователя first
			</Link>
		</div>
	)
}

export default PageUser