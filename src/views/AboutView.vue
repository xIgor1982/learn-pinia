<template>
	<div class="about">
		<h1>About</h1>
		<button @click='storeCounter.incrementCount ' class="counter-button"> {{ storeCounter.count }} </button> 
	</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

const storeCounter = useCounterStore();
</script>

<style scope>
button.counter-button {
	font-size: 50px;
}
</style>
