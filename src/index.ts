import { Command } from 'commander'

const program = new Command()
program.version('1.0.0')

program
    .command('init <name>')
    .description('新建项目')
    .action((name: string) => {
        console.log('测试一下init命令', name)
    })

program.parse()
