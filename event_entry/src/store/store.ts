import { configureStore } from "@reduxjs/toolkit";
import currentTicketSlice from "./currentTicketSlice";
import ticketListSlice from "./ticketListSlice";

export const createStore = () =>
	configureStore({
		reducer: {
			currentTicket: currentTicketSlice.reducer,
			ticketList: ticketListSlice.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: false,
			}),
	});
const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
