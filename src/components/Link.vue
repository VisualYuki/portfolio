<template>
	<a :target="props.target">
		<slot></slot>
	</a>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
	target: {
		type: String as PropType<'_self' | '_blank'>,
		default: 'blank',
	},
})
</script>

<style lang="scss" scoped>
a {
	text-underline-position: under;
}
</style>
