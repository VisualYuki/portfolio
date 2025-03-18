<template>
	<Project
		title="UI фреймворк для Vue3"
		anchor="Vue-Ui"
		:items="[
			{
				title: {
					title: 'Accordion',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/accordion',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/accordion.png',
				},
			},
			{
				title: {
					title: 'Button',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/button',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/button.png',
				},
			},
			{
				title: {
					title: 'Checkbox',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/checkbox',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/checkbox.png',
				},
			},
			{
				title: {
					title: 'Alert',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/alert',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/alert.png',
				},
			},
			{
				title: {
					title: 'Loading directive',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/directives/loading',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/loading.png',
				},
			},
			{
				title: {
					title: 'Skeleton',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/skeleton',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/skeleton.png',
				},
			},
		]"
	>
		<template #list>
			<li>
				Технологии: vue3, typescript, storybook, vue-utils, vitest,
				tailwindcss, tailwind-variants, eslint, husky, github ci & cd
			</li>

			<li>
				<Link href="https://visualyuki.github.io/sigma-vue">
					Playground
				</Link>
				(storybook)
			</li>

			<li>
				<Link href="https://github.com/VisualYuki/sigma-vue">
					Исходники
				</Link>
			</li>
			<li>
				За основу взято:

				<Link href="https://github.com/nuxt/ui"> nuxt/ui </Link>

				&nbsp;

				<Link href="https://github.com/unovue/reka-ui"> reka-ui </Link>

				&nbsp;

				<Link href="https://github.com/element-plus/element-plus">
					element-plus
				</Link>
			</li>
		</template>
	</Project>
</template>

<script lang="ts" setup>
import Project from '@/components/Project.vue'
import Link from '@/components/Link.vue'
</script>

<style lang="scss" scoped></style>
