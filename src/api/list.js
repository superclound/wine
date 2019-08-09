import axios from "axios"
// movie_now_api 是个promise
// export const list1_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=4")

export const list1_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1565100686636&pagenum=1&tabnum=1")
// 更新数据第一页的接口
export const list1_1_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=2&tabnum=2")

export const list2_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=2")
// 更新数据第二页的接口
export const list2_2_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?t=1565100686636&pagenum=1&tabnum=1")


export const list3_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=3")
export const list3_3_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=2&tabnum=2")

export const list4_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=1&tabnum=4")
export const list4_4_time_api = ()=>axios.get("https://m.jiuxian.com/m_v1/promote/qgajax.do?from=ad_03&pagenum=2&tabnum=2")

export const list1_detail_api = (proId)=>axios.get("https://m.jiuxian.com/m_v1/goods/detailPromo/"+proId)


//城市列表
//  https://m.jiuxian.com/m_v1/goods/getRegions
export const list1_city_api = ()=>axios.get("https://m.jiuxian.com/m_v1/goods/getRegions")
