<template>
	<div class="container mb-3">
		<PCard>
			<template #title>
				<h4 class="text-danger">Обо мне</h4>
			</template>
			<template #subtitle>
				<h5 class="text-success">
					Мошкин Денис - Frontend разработчик (vue3)
				</h5>
			</template>
			<template #content>
				<ul>
					<li>
						<span class="fw-bold">Интересны технологии:</span>

						<ul>
							<li>
								frontend (vue), графика (canvas, webgl), node (express,
								next).
							</li>
						</ul>
					</li>
					<li>
						<span class="fw-bold"
							>Что ищу в проектах (не обязательно должно быть все):</span
						>
						<ul>
							<li>Качественные и сложные проекты</li>
							<li>Свежий стэк разработки (vue3, pinia, ...)</li>
							<li>Описание api запросов (swagger, ...)</li>
							<li>Код ревью кода, который уходит на prod</li>
							<li>Наличие документации по проекту.</li>
							<li>Frontend должен быть отделен от backend'а</li>
						</ul>
					</li>
					<li>
						<span class="fw-bold">Ссылки:</span>
						<ul>
							<li>
								<a href="	https://github.com/VisualYuki" target="_blank">
									github
								</a>
							</li>
							<li>
								<a href="https://t.me/denis_moshkin" target="_blank">
									telegram
								</a>
							</li>

							<li>
								<a
									href="mailto:denis.moshkin.007@yandex.ru"
									target="_blank"
								>
									denis.moshkin.007@yandex.ru
								</a>
							</li>
							<li>
								<a href="tel:+89635508754"> 89635508754 </a>
							</li>
							<li>
								<a
									href="https://visualyuki.github.io/portfolio/dist/webp-img/about/university-result.webp"
									target="_blank"
								>
									Оценки в университете
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</template>
		</PCard>
	</div>
</template>

<script lang="ts" setup>
import PButton from 'primevue/button'
import PCard from 'primevue/card'
</script>

<style lang="scss">
.row-title-text {
	&__title {
	}

	&__text {
	}
}
</style>
