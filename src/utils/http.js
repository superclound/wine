import axios from "axios";
import qs from "qs";

const server=axios.create({
    baseURL:"",
    timeout:5000,
    withCredentials:true
})
server.interceptors.request.use(config=>{
    if(config.method.toUpperCase()=="get"){
        config.params={...config.data}
    }else if(config.method.toUpperCase()=="post"){
        config.headers["content-type"]="application/x-www-form-urlendecode/"
        config.data=qs.stringify(config.data)
    }
    return config
},(err)=>{
    Promise.reject(err);
})
server.interceptors.response.use(res=>{
    if(res.statusText=="ok"){
        return res.data;
    }
},(err)=>{
    Promise.reject(err);
})
export default (method,url,data={})=>{
    if(method.toUpperCase()=="GET"){
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase()=="POST"){
        return server.post(url,data)
    }
}