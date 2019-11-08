import axios from 'axios';

export const loadPhones = () => {
	return (dispatch) => {
		axios.get('http://localhost:3000/posts/').then((res) => {
			dispatch(getPhones(res.data));
		});
	};
};

export const getPhones = (phones) => {
	return {
		type: 'GET_PHONES',
		payload: phones
	};
};

export const postPhone = (phone) => {
	return (dispatch) => {
		axios.post(`http://localhost:3000/posts/`, phone).then(() => {
			dispatch(loadPhones());
		});
	};
};

export const putPhone = (phone) => {
	return (dispatch) => {
		axios.put(`http://localhost:3000/posts/${phone.id}`, phone).then(() => {
			dispatch(loadPhones());
		});
	};
};

export const getSortPhone = (phone) => {
	return (dispatch)=>{
		axios.put(`http://localhost:3000/posts/`, phone).then(() => {
			dispatch(loadPhones());
		});
	}
}
	// return {
	// 	type: 'GET_SORT_PHONES',
	// 	payload: phonesArr
	// };

