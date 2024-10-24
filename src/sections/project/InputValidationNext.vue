<template>
	<Project
		title="NPM плагин для валидации полей формы."
		:items="[
			{
				title: {
					title: 'Playground',
					href: 'https://jsfiddle.net/VisualYuki/h0ryxqfd/14/',
				},
				image: {
					src: '/__portfolio/images/projects/input-validation-next/1.png',
				},
			},
			{
				title: {
					title: 'Документация: главная страница.',
					href: 'https://visualyuki.github.io/input-validation-next/',
				},
				image: {
					src: '/__portfolio/images/projects/input-validation-next/docs-index.png',
				},
			},
			{
				title: {
					title: 'Документация: страница гайда.',
					href: 'https://visualyuki.github.io/input-validation-next/guide',
				},
				image: {
					src: '/__portfolio/images/projects/input-validation-next/docs-page.png',
				},
			},
		]"
		anchor="input-validation-next"
	>
		<template #list>
			<li>
				Почти 100% кода покрыто
				<Link
					href="https://github.com/VisualYuki/input-validation-next/blob/main/test/plugin.test.ts"
				>
					тестами
				</Link>
				(coverage около 95%)
			</li>
			<li>
				Присутствует локализация сообщений. (нужно пока самому добавлять)
			</li>
			<li>
				Практически полная проверка типов передоваемых от пользователя
				(params, config).
			</li>
			<li>Технологии: ts, jsdom, vitest, vite, vitepress</li>
			<li>
				За основу взят
				<Link href="https://jqueryvalidation.org/documentation/">
					jquery-validation
				</Link>
			</li>
			<li>
				<Link href="https://github.com/VisualYuki/input-validation-next">
					Исходники
				</Link>
			</li>
		</template>
	</Project>
</template>

<script lang="ts" setup>
import Link from '@/components/Link.vue'
import Project from '@/components/Project.vue'
</script>

<style lang="scss" scoped></style>
