<template>
	<Project
		title="UI фреймворк для Vue3"
		anchor="VueUi"
		:items="[
			{
				title: {
					title: 'Главная страница',
				},
				image: {
					src: '/__portfolio/images/projects/pizza-site/home.png',
				},
			},
		]"
	>
		<template #list>
			<li>....</li>
		</template>
	</Project>
</template>

<script lang="ts" setup>
import Project from '@/components/Project.vue'
</script>

<style lang="scss" scoped></style>
