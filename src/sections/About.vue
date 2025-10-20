<template>
	<div class="container mb-3">
		<PCard>
			<template #title>
				<p class="text-red-500 text-center text-2xl">Обо мне</p>
			</template>
			<template #subtitle>
				<p class="text-green-500 text-xl">Мошкин Денис</p>
			</template>
			<template #content>
				<div class="flex justify-between">
					<ul>
						<li>
							<span class="font-bold">Компетенции:</span>
							<ul class="">
								<li>Frontend разработчик (vue) (senior)</li>
								<li>Backend разработчик (node.js, sqlite) (junior)</li>
							</ul>
						</li>
						<li>
							<span class="font-bold">Интересны технологии:</span>
							<ul class="">
								<li>
									frontend (vue3), графика (canvas, webgl), node
									(express, next).
								</li>
							</ul>
						</li>
						<!-- <li>
						<span class="font-bold">
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
					</li> -->
						<li>
							<span class="font-bold">Ссылки:</span>
							<ul class="">
								<li>
									<Link href="https://github.com/VisualYuki">
										github
									</Link>
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
									<Link href="https://vk.com/moshkin_denis"> vk </Link>
								</li>
								<li>
									<Link
										href="/portfolio/images/about-section/university-result.jpg"
									>
										оценки в университете
									</Link>
								</li>
								<!-- <li>
									<Link href="https://disk.yandex.ru/i/R90ShMP3xcYBJw">
										мои правила для дизайнера
									</Link>
								</li> -->
							</ul>
						</li>
					</ul>
					<div class="">
						<img
							class="w-100 object-cover object-center h-100 rounded-lg"
							:src="photoUrl"
							alt="photo"
						/>
					</div>
				</div>
			</template>
		</PCard>
	</div>
</template>

<script lang="ts" setup>
import PCard from 'primevue/card'
import Link from '@/components/Link.vue'

const photoUrl = '/portfolio/images/photo.jpg'
</script>

<style lang="scss"></style>
