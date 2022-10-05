<template>
	<div class="home">
		<Counter />
		<div class="buttons">
			<button @click="storeCount.decrementCount">-</button>
			<button @click="storeCount.incrementCount">+</button>
		</div>
		<hr />
		<div>
			Это четное или нечетное число:
			<strong>{{ storeCount.oddOrEvent }}</strong>
		</div>
		<hr />
		<div>
			<h3>Редактировать count:</h3>
			<input v-model="storeCount.count" class="edit-count" type="number" />
		</div>
		<hr />
	</div>
</template>

<script setup>
import Counter from '@/components/Counter.vue'
import { useCounterStore } from '@/stores/counter';

const storeCount = useCounterStore();
</script>

<style scope>
.buttons button {
	margin: 5px;
}
input.edit-count {
	font-size: 30px;
}
</style>
