//包含n个接口请求函数得模块

import ajax from './ajax'

const BASE = './api'

//根据经纬度获取位置详情，
export const reqAddress = (geohash) => ajax(`${BASE}/position/${geohash}`)

//获取食品分类列表
export const reqCatgorys = () =>(BASE+'/index_category/')

//根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax(BASE+'/shops',{latitude,longitude})
//账号密码登录
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd',{
  name,
  pwd,
  captcha
},'POST')

//获取短信验证码
export const reqSendCode = phone => ajax('/api/sendcode', {phone})

//手机号验证码登录
export const reqMsgLogin = (phone,code) => ajax('/api/login_sms',{phone,code},'POST')

//获取用户信息（根据会话）
export const reqUser = () => ajax('/api/userinfo')

//退出登录
export const reqLogout = () => ajax('/api/logout')



