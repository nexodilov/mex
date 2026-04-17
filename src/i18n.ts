export const languages = {
	ru: 'Русский',
	en: 'English',
} as const

export type Lang = keyof typeof languages

export const defaultLang: Lang = 'ru'

export const translations: Record<Lang, Record<string, string>> = {
	ru: {
		// SEO
		'seo.title': 'MEX - Мессенджер Экосистема и Платежи',
		'seo.description':
			'MEX — комплексная экосистема на базе мессенджера с интегрированными платежами, цифровыми активами и приложениями.',

		// Nav
		'nav.main': 'ГЛАВНАЯ',
		'nav.news': 'НОВОСТИ',

		// Hero
		'hero.h1': 'Супер Приложение Нового Поколения',
		'hero.p':
			'Комплексная экосистема на базе мессенджера с интегрированными платежами, цифровыми активами и приложениями для максимального вовлечения пользователей',
		'hero.launch': 'Запуск во 2 квартале 2026',
		'hero.getItOn': 'Скачать в',
		'hero.downloadOn': 'Загрузить в',

		// About
		'about.label': 'О нас',
		'about.heading': 'Не просто чат, а целая экосистема',
	},
	en: {
		// SEO
		'seo.title': 'MEX - Messenger Ecosystem & Payments',
		'seo.description':
			'MEX - Comprehensive messenger-based ecosystem with integrated payments, digital assets and apps.',

		// Nav
		'nav.main': 'MAIN',
		'nav.news': 'NEWS',

		// Hero
		'hero.h1': 'Next Generation Super App',
		'hero.p':
			'A comprehensive messenger-based ecosystem with integrated payments, digital assets and apps for maximum user engagement',
		'hero.launch': 'Launch in the Q2 of 2026',
		'hero.getItOn': 'Get it on',
		'hero.downloadOn': 'Download on the',

		// About
		'about.label': 'About',
		'about.heading': 'Not just a chat app, but an ecosystem',
	},
}

export function getLangFromUrl(url: URL): Lang {
	const [, langSegment] = url.pathname.split('/')
	if (langSegment in translations) return langSegment as Lang
	return defaultLang
}

export function useTranslations(lang: Lang) {
	return function t(key: string): string {
		return translations[lang][key] || translations[defaultLang][key] || key
	}
}
