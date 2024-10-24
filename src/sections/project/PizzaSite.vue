<template>
	<Project
		title="Сайт по продаже пиццы на Laravel + Vue.js."
		anchor="pizza-site"
		:items="[
			{
				title: {
					title: 'Главная страница',
				},
				image: {
					src: '/__portfolio/images/projects/pizza-site/home.png',
				},
			},
			{
				title: {
					title: 'Корзина',
				},
				image: {
					src: '/__portfolio/images/projects/pizza-site/cart.png',
				},
			},
			{
				title: {
					title: 'Заказы',
				},
				image: {
					src: '/__portfolio/images/projects/pizza-site/order.png',
				},
			},
			{
				title: {
					title: 'Админка с продуктами',
				},
				image: {
					src: '/__portfolio/images/projects/pizza-site/admin-products.png',
				},
			},
			{
				title: {
					title: 'Редактирование продукта',
				},
				image: {
					src: '/__portfolio/images/projects/pizza-site/admin-product-edit.png',
				},
			},
		]"
	>
		<template #list>
			<li>Технологии: laravel, apache, mysql, php, vue, vue-router.</li>
			<li>
				Реализована домашняя страница с пиццами, которые можно добавить в
				корзину
			</li>
			<li>
				Реализована страница корзины с добавленными туда пиццами и
				оформлением заказа.
			</li>
			<li>
				Реализована страница заказов для каждого пользователя. Идентификация
				храниться на backaend (db) и на frontend (localstorage)
			</li>
			<li>Админка с продуктами, которые можно редактировать и добавлять.</li>
			<li>Админка сделана на основе AdminLTE 3</li>
			<li>Изображение кликабельны (откроется модалка)</li>
			<li>
				<Link href="https://github.com/VisualYuki/pizza-site">
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
