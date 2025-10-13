<template>
	<a :target="props.target">
		<slot></slot>
	</a>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		target?: '_self' | '_blank'
	}>(),
	{
		target: '_blank',
	},
)
</script>

<style lang="scss" scoped></style>
