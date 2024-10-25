<template>
	<div class="container mb-3">
		<PCard>
			<template #title>
				<h3 class="text-danger text-center">Обо мне</h3>
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
						<span class="fw-bold">
							Что ищу в проектах (не обязательно должно быть все):
						</span>
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
								<Link href="https://github.com/VisualYuki">github</Link>
							</li>
							<li>
								<Link href="https://t.me/denis_moshkin">
									telegram
								</Link>
							</li>
							<li>
								<Link href="mailto:denis.moshkin.007@yandex.ru">
									denis.moshkin.007@yandex.ru
								</Link>
							</li>
							<li>
								<Link href="tel:+89635508754"> 89635508754 </Link>
							</li>
							<li>
								<Link
									href="/portfolio/images/about-section/university-result.jpg"
								>
									оценки в университете
								</Link>
							</li>
							<li>
								<Link href="https://disk.yandex.ru/i/R90ShMP3xcYBJw">
									мои правила для дизайнера
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</template>
		</PCard>
	</div>
</template>

<script lang="ts" setup>
import PCard from 'primevue/card'
import Link from '@/components/Link.vue'
</script>

<style lang="scss"></style>
