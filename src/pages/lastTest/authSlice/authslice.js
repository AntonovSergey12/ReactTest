import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: [
	{
		id: 1,
	name: "Tom",
	email: "Tom@gmail.com"
	},
	{
		id: 2,
		name: "Alex",
		email: "Alex@gmail.com"
	},	
  ],

  reducers: {
    updateUser: (state, action) => {
		const {id,name,email} = action.payload;
		const user = state.find((user) => user.id ===id);
		if(user) {
			user.name = name;
			user.email = email;
		}
	 },
  },
});

export const { updateUser } = peopleSlice.actions;

export default peopleSlice.reducer;
