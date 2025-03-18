<template>
	<div class="project-item" :id="props.anchor">
		<a :href="`/#${props.anchor}`" class="title">
			<h5 class="text-center text-success">
				{{ props.title }}
			</h5>
		</a>
		<ul>
			<slot name="list"> </slot>
		</ul>

		<ul class="project-item__items row">
			<li class="col-4 mb-3" v-for="(item, idx) in props.items" :key="idx">
				<PCard class="project-item__item">
					<template #title>
						<Link
							v-bind="item.title"
							class="project-item__item-title d-block text-center mb-4 h6"
							target="_blank"
						>
							{{ item.title.title }}
						</Link>
					</template>
					<template #content>
						<PImage v-bind="item.image" preview width="100%"></PImage>
					</template>
				</PCard>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import PImage from 'primevue/image'
import Link from '@/components/Link.vue'
import PCard from 'primevue/card'
import type { PropType } from 'vue'

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	items: {
		type: Array as PropType<
			{ title: { title: string; href?: string }; image: { src: string } }[]
		>,
		required: true,
	},
	anchor: {
		type: String,
		required: true,
	},
})
</script>

<style lang="scss" scoped>
.title {
	text-decoration: none;
}

.project-item {
	margin-bottom: 70px;

	&__items {
		list-style: none;

		.p-card {
			background: var(--p-gray-50) !important;
		}
	}

	&__item {
		height: 100%;

		.p-image {
			width: 100%;
			height: 250px;
		}

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
}
</style>
