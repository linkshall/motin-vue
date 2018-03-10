import axios from 'axios'

axios.defualts.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

export default {
  fetchGet (url,params = {}) {
    return new Promise ( (resolve,reject)=>{
      aixos.get(url,params).then( res=> {
        reslove(res.data)
      }).catch( error => {
        reject(error)
      })
    })
  },
  fetchPost (url,params = {}) {
    return new Promise ( (resolve,reject)=>{
      aixos.post(url,params).then( res=> {
        reslove(res.data)
      }).catch( error => {
        reject(error)
      })
    })
  }
}