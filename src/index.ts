import { Command } from 'commander'
import inquirer from 'inquirer'

const InitPrompts = [
    {
        type: 'list',
        name: 'type',
        message: '模板类型',
        choices: ['vue', 'react', 'flutter'],
    },
]

const program = new Command()
program.version('1.0.0')

program
    .command('init <name>')
    .description('新建项目')
    .action(async (name: string) => {
        console.log('测试一下init命令', name)
        const initOptions = await inquirer.prompt(InitPrompts)
        console.log('initOptions', initOptions)
    })

program.parse()
