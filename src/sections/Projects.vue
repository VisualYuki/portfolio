<template>
	<PCard>
		<template #title>
			<h3 class="text-red-500 text-center text-2xl">Проекты</h3>
		</template>
		<template #content>
			<VueUI></VueUI>
			<InputValidationNext></InputValidationNext>
			<PizzaSite></PizzaSite>
		</template>
	</PCard>
</template>

<script setup lang="ts">
import PCard from 'primevue/card'

import InputValidationNext from './project/InputValidationNext.vue'
import PizzaSite from './project/PizzaSite.vue'
import VueUI from './project/VueUI.vue'
</script>

<style lang="scss" scope></style>
