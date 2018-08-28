//包含n个接口请求函数得模块

import ajax from './ajax'

const BASE = './api'

//根据经纬度获取位置详情，
export const reqAddress = (geohash) => ajax(`${BASE}/position/${geohash}`)

//获取食品分类列表
export const reqCatgorys = () =>(BASE+'/index_category/')

//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax(BASE+'/shops',{latitude,longitude})
