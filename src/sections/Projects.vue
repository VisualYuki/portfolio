<template>
	<div class="container">
		<PCard>
			<template #title>
				<h3 class="text-danger text-center">Проекты</h3>
			</template>
			<template #content>
				<VueUI></VueUI>
				<InputValidationNext></InputValidationNext>
				<PizzaSite></PizzaSite>
			</template>
		</PCard>
	</div>
</template>

<script setup lang="ts">
import PCard from 'primevue/card'

import InputValidationNext from './project/InputValidationNext.vue'
import PizzaSite from './project/PizzaSite.vue'
import VueUI from './project/VueUI.vue'
</script>

<style lang="scss" scope></style>
