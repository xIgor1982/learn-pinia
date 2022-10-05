import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
	id: 'counter',
	state: () => ({
		count: 0,
	}),
	actions: {
		incrementCount() {
			this.count++;
		},
		decrementCount() {
			this.count--;
		},
	},
	getters: {
		oddOrEvent: state => {
			if (state.count % 2 === 0) return 'четное';
			else return 'нечетное';
		},
	},
});
