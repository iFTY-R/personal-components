import { useQinglongStore } from '@/stores/qinglong.js'
import alovaInstance from '@/utils/requests/alova/qinglong.js'

const qinglongStore = useQinglongStore()

const options = {
  clientId: 'v-8kJgAcnA8l',
  clientSecret: '8Py3NQAE-Nr9b2Cj_aMGh3v_'
}

export const QINGLONG_TASK_MEITUAN_ID = 2

export function login() {
  const url = `/open/auth/token?client_id=${options.clientId}&client_secret=${options.clientSecret}`
  return alovaInstance.Get(url).then((res) => {
    // console.log(res);
    const { code, data } = res
    if (code === 200) {
      qinglongStore.setToken(`${data.token_type} ${data.token}`)
    } else {
      qinglongStore.setToken(``)
    }
    return res
  })
}

/*
  async getEnvs(val) {
    const url = `${ this.address }/open/envs?searchValue=${ val || '' }`;

    try {
      const { data } = await this.request(url, 'GET');
      return data || [];
    } catch (error) {
      this.log(`获取环境变量失败：${ error }`);
      return [];
    }
  }

 */

export function getEnvs(val) {
  const url = `/open/envs?searchValue=${val || ''}`
  return alovaInstance.Get(url, {}).then((res) => {
    // console.log(res.data);
    return res.data
  })
}

export function getMeituanTokens() {
  return getEnvs('meituanCookie').then((res) => {
    const info = res[0]
    if (!info) return null

    const names = info.remarks.split('，')
    const tokens = info.value.split('\n')

    // console.log(result);
    return names.map((v, i) => ({ id: i + 1, name: v, token: tokens[i], metaData: info }))
  })
}

export function updateEnv({ id, name, remarks, value }) {
  const url = `/open/envs`
  return alovaInstance.Put(url, { id, name, remarks, value }).then((res) => {
    // console.log(res.data);
    return res.data
  })
}

function runTask(ids) {
  if (!ids.length) return
  const url = `/open/crons/run`
  //   /api/crons/run?t=1709002290807
  return alovaInstance.Put(url, ids).then((res) => {
    return res.data
  })
}

export function runMeituanTask() {
  return runTask([QINGLONG_TASK_MEITUAN_ID])
}

export function getTaskLogById(id) {
  if (!id) return
  const url = `/open/crons/${id}/log`
  // http://116.196.94.1:5700/api/crons/2/log
  return alovaInstance.Get(url).then((res) => {
    return res.data
  })
}

export function getTaskById(id) {
  const url = `/open/crons/${id}`
  return alovaInstance.Get(url).then((res) => {
    console.log(res)
    return res.data
  })
}

/*
export function login() {
  const url = `/open/auth/token?client_id=${ options.clientId }&client_secret=${ options.clientSecret }`;

  return useQinglongFetch(url, {
    afterFetch(ctx) {
      // console.log(ctx.data);
      const { code, data } = ctx.data;
      if (code === 200) {
        qinglongStore.setToken(`${ data.token_type } ${ data.token }`);
      }
      return ctx.data;
    },
  }).json();
}
*/
