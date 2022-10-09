// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Draft.js',
	tagline: '基于React的富文本编辑器框架',
	url: 'https://youdianfan.github.io/draftjs-zh-cn/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/draftjs-logo.ico',
	
	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'youdianfan', // Usually your GitHub org/user name.
	projectName: 'draftjs-zh-cn', // Usually your repo name.
	
	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-cn',
		locales: ['zh-cn'],
	},
	
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	
	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Draft.js',
				logo: {
					alt: 'Draft.js Logo',
					src: 'img/draftjs-logo.svg',
				},
				items: [
					{
						position: 'left',
						label: '文档',
						href: '/docs/getting-started',
					},
					{
						href: 'https://github.com/facebook/draft-js',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: '文档',
						items: [
							{
								label: '入门指南',
								to: 'docs/getting-started',
							},
							{
								label: 'API Reference',
								to: 'docs/api-reference-editor',
							},
						],
					},
					{
						title: '社区',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/draftjs',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/draft_js',
							},
						],
					},
					{
						title: '更多',
						items: [
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/draft-js',
							},
						],
					},
				],
				logo: {
					alt: 'Facebook Open Source Logo',
					src: '/img/oss_logo.png',
					href: 'https://opensource.facebook.com/',
				},
				copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
			},
			
		}),
};

module.exports = config;
