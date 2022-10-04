<template>
	<div class="home">
		<div class="count">
			{{ count }}
		</div>
		<div class="buttons">
			<button @click="decrementCount">-</button>
			<button @click="incrementCount">+</button>
		</div>
		<hr />
		<div>
			Это четное или нечетное число: <strong>{{ oddOrEvent }}</strong>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(0);

const incrementCount = () => {
	count.value++;
};

const decrementCount = () => {
	count.value--;
};

const oddOrEvent = computed(() => {
	if (count.value % 2 === 0) return 'четное';
	else return 'нечетное';
});
</script>

<style>
.count {
	font-size: 60px;
	margin: 20px;
}

.buttons button {
	font-size: 40px;
	padding: 10px 30px;
	margin: 5px;
}
</style>
