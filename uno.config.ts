import { defineConfig, presetAttributify, presetIcons, presetUno, transformerAttributifyJsx } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import type { UserConfig } from 'unocss'

const unocssConfig: UserConfig = defineConfig({
	theme: {},
	safelist: [],
	presets: [
		presetUno(),
		presetAttributify(),
		presetRemToPx({ baseFontSize: 4 }),
		presetIcons({
			extraProperties: { display: 'inline-block', 'vertical-align': 'middle' },
		}),
	],
	transformers: [transformerDirectives(), transformerAttributifyJsx()],
	shortcuts: [
		{
			'flex-c-c': 'flex items-center justify-center',
			'flex-sb-c': 'flex items-center justify-between',
			'flex-sa-c': 'flex items-center justify-around',
			'text-purple': 'text-#A821FF',
			'text-gray': 'text-#828991',
			'flex-col-c': 'flex flex-col items-center justify-between',
			'bg-purple': 'bg-#A821FF',
			'el-keep-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
		},
	],
	rules: [
		[
			/^text-overflow-(\d+)$/,
			([, d]) => ({
				display: `-webkit-box`,
				[`-webkit-line-clamp`]: `${d}`,
				[`-webkit-box-orient`]: `vertical`,
				overflow: `hidden`,
				[`text-overflow`]: `ellipsis`,
				[`word-break`]: `break-all`,
				[`white-space`]: `pre-line`,
			}),
		],
	],
})
export default unocssConfig
