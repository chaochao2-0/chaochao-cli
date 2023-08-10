#!/usr/bin/env node

import { Command } from 'commander'
import inquirer from 'inquirer'
import { downloadTemplate } from './download'

const InitPrompts = [
    {
        type: 'list',
        name: 'type',
        message: '模板类型',
        choices: ['vue', 'react', 'flutter'],
    },
]
const templateGitUrl = 'https://gitee.com/chaochao2_0/vue3.0_test.git'
let downloadPath: any = null

const program = new Command()
program.version('1.0.0')

program
    .command('init <name>')
    .description('新建项目')
    .action(async (name: string) => {
        downloadPath = name
        const initOptions = await inquirer.prompt(InitPrompts)
        console.log('initOptions', initOptions)
        try {
            await downloadTemplate(name, templateGitUrl, downloadPath)
        }
        catch (error) {
            console.error(error)
        }
    })

program.parse()
