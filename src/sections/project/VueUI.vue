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
					title: 'Alert',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/alert',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/alert.png',
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
					title: 'Collapse',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/collapse',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/collapse.png',
				},
			},
			{
				title: {
					title: 'ContextMenu',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/context-menu',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/context-menu.png',
				},
			},
			{
				title: {
					title: 'DatePicker (date)',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/date-picker',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/date-picker/date.png',
				},
			},
			{
				title: {
					title: 'DatePicker (time)',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/date-picker',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/date-picker/time.png',
				},
			},
			{
				title: {
					title: 'DatePicker (date-time)',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/date-picker',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/date-picker/date-time.png',
				},
			},
			{
				title: {
					title: 'DatePicker (range-date)',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/date-picker',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/date-picker/range-date.png',
				},
			},
			{
				title: {
					title: 'Dialog',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/dialog',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/dialog.png',
				},
			},
			{
				title: {
					title: 'Label',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/label',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/label.png',
				},
			},
			{
				title: {
					title: 'RadioGroup',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/radio-group',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/radio-group.png',
				},
			},
			{
				title: {
					title: 'Scrollbar',
					href: 'https://github.com/VisualYuki/sigma-vue/tree/main/src/components/scrollbar',
				},
				image: {
					src: '/portfolio/images/projects/vue-ui/scrollbar.png',
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
				<Link
					href="https://visualyuki.github.io/sigma-vue/components/accordion.html"
				>
					Песочница (playground)
				</Link>
			</li>

			<li>
				<Link href="https://github.com/VisualYuki/sigma-vue">
					Исходники
				</Link>
			</li>

			<li>
				Технологии: vue3, vue-utils, vitest, typescript, vitepress,
				tailwindcss, class-variance-authority, eslint, husky, github ci & cd
			</li>

			<li>За основу взято: primevue, reka-ui, element-plus</li>
		</template>
	</Project>
</template>

<script lang="ts" setup>
import Project from '@/components/Project.vue'
import Link from '@/components/Link.vue'
</script>

<style lang="scss" scoped></style>
