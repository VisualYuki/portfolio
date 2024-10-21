<template>
	<div class="container">
		<PCard>
			<template #title> <h4 class="text-danger">Проекты</h4> </template>
			<template #content>
				<div class="project-item">
					<h5 class="text-center text-success">
						NPM плагин для валидации полей формы.
					</h5>
					<ul>
						<li>
							Почти 100% кода покрыто
							<a
								href="https://github.com/VisualYuki/input-validation-next/blob/main/test/plugin.test.ts"
								target="_blank"
							>
								тестами
							</a>
							(coverage около 95%)
						</li>
						<li>
							Присутствует локализация сообщений. (нужно пока самому
							добавлять)
						</li>
						<li>
							Практически полная проверка типов передоваемых от
							пользователя (params, config).
						</li>
						<li>Технологии: ts, jsdom, vitest, vite, vitepress</li>
						<li>
							За основу взят
							<a
								href="https://jqueryvalidation.org/documentation/"
								target="_blank"
							>
								jquery-validation
							</a>
						</li>
						<li>
							<a
								href="https://github.com/VisualYuki/input-validation-next"
								target="_blank"
							>
								Исходники
							</a>
						</li>
					</ul>

					<ul class="project-item__items row">
						<li class="col-4">
							<PCard>
								<template #title>
									<a
										href="https://jsfiddle.net/VisualYuki/h0ryxqfd/14/"
										class="d-block text-center"
									>
										Playground
									</a>
								</template>
								<template #content>
									<PImage preview></PImage>
								</template>
							</PCard>
						</li>
						<li class="col-4">
							<PCard><template #content> dfdf </template></PCard>
						</li>
						<li class="col-4">
							<PCard><template #content> dfdf </template></PCard>
						</li>
					</ul>
				</div>
			</template>
		</PCard>
	</div>
</template>

<script setup lang="ts">
import PCard from 'primevue/card'
import PImage from 'primevue/image'
</script>

<style lang="scss" scope>
.project-item {
	&__items {
		list-style: none;

		.p-card {
			background: rgb(248, 250, 252) !important;
		}
	}
}
</style>
