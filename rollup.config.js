import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import esbuild from 'rollup-plugin-esbuild'

import PluginJson from '@rollup/plugin-json'

const commonPlugin = [
    esbuild({
        exclude: /node_modules/,
        sourceMap: false,
        minify: true, // 是否开启压缩
        tsconfig: 'tsconfig.json',
    }),
    resolve(),
    commonjs(),
    PluginJson(),
    babel({ babelHelpers: 'bundled', exclude: '/node_modules/' }),
]

const entryConfig = [
    {
        input: './src/index.ts',
        output: [
            {
                file: './lib/index.js',
                format: 'esm',
            },
        ],
        plugins: commonPlugin,
        external: ['commander', 'inquirer', 'fs-extra', 'ora', 'git-clone'],
    },
]

const config = {
    Entry: entryConfig,
}

export default config[process.env.config]
