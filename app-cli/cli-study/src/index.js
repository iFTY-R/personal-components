#!/usr/bin/env node
// 告诉操作系统我执行自定义命令的时候，是使用 node 去执行的。

import { program } from 'commander'
import * as fs from 'node:fs'
import inquirer from 'inquirer'
import { checkPath, downloadTemp } from './utils.js'

let json = fs.readFileSync('./package.json', 'utf-8')
json = JSON.parse(json)

program.version(json.version)

program
  .command('create <projectName>')
  .alias('c')
  .description('create a new project')
  .action((projectName) => {
    inquirer
      .prompt([
        {
          type: 'input', // input,confirm,list,checkbox
          name: 'projectName', // 返回值的 key
          message: '请输入项目名称', // 描述
          default: projectName // 默认值
        },
        {
          type: 'confirm',
          name: 'isTs',
          message: '是否选用 typescript 模板'
        }
      ])
      .then((res) => {
        // console.log(res);
        if (checkPath(res.projectName)) {
          console.log('文件夹已存在')
          return
        }

        const branch = res.isTs ? 'ts' : 'js'
        downloadTemp(branch, res.projectName).then()
      })
  })

// 不能放在前面
program.parse(process.argv)
