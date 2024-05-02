const excludedFolders = [
  // '/components/',
  '/hooks/'
]

function shouldIncludeModule(key: string): boolean {
  return !excludedFolders.some((folder) => key.includes(folder))
}

const modules = import.meta.glob('@/views/main/**/*.vue', { eager: true })
console.log(modules)

const filteredModules = Object.keys(modules)
  .filter((key) => shouldIncludeModule(key))
  .map((key) => {
    let name = key.replace(/(.*\/)*([^.]+).*/gi, '$2')

    // let name = key.match(/\/([^/]+)\//)?.[1] || ""; // 提取文件夹名称
    if (key.endsWith('/index.vue')) {
      const parts = key.split('/')
      name = parts[parts.length - 2] // 取倒数第二个部分作为文件夹名称
    }
    return {
      key,
      name
    }
  })

console.log(filteredModules)

const asyncRoutes = filteredModules.map(({ key, name }) => {
  const mod = (modules as any)[key].default || {}
  return {
    path: `/${name}`,
    name,
    component: mod
    // component: () => import('@/views/NativeJs/DragAndDropDemo.vue')
  }
})

export default asyncRoutes
