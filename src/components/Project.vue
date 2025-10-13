<template>
	<div class="mb-20" :id="props.anchor">
		<a :href="`/#${props.anchor}`" class="no-underline">
			<p class="text-center text-green-500 text-xl">
				{{ props.title }}
			</p>
		</a>
		<ul class="mb-4">
			<slot name="list"> </slot>
		</ul>

		<div class="grid grid-cols-12 gap-8">
			<div class="col-span-4" v-for="(item, idx) in props.items" :key="idx">
				<PCard class="">
					<template #title>
						<Link
							v-bind="item.title"
							class="block text-center mb-4 text-lg font-normal text-black"
							target="_blank"
						>
							{{ item.title.title }}
						</Link>
					</template>
					<template #content>
						<PImage
							v-bind="item.image"
							preview
							image-class="object-contain object-center w-full"
							class="w-full h-60"
						></PImage>
					</template>
				</PCard>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import PImage from 'primevue/image'
import Link from '@/components/Link.vue'
import PCard from 'primevue/card'

const props = withDefaults(
	defineProps<{
		title: string
		items: {
			title: { title: string; href?: string }
			image: { src: string }
		}[]
		anchor: string
	}>(),
	{
		anchor: '',
	},
)
</script>

<style lang="scss" scoped></style>
