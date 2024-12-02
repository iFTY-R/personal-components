import * as fs from 'node:fs'
import download from 'download-git-repo'
import ora from 'ora'

const spinner = ora('下载中')

export const checkPath = (path) => {
  return fs.existsSync(path)
}

export const downloadTemp = (branch, name) => {
  return new Promise((resolve, reject) => {
    spinner.start()
    download(
      `direct:https://gitee.com/chinafaker/vue-template.git#${branch}`,
      name,
      { clone: true },
      (err) => {
        if (err) reject(err)
        resolve()
        spinner.succeed('下载完成')
      }
    )
  })
}
