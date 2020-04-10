<template>
    <div>
        会员管理
        {{list}}
    </div>
</template>
<script>
import memberApi from '@/api/member'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        //初始化獲取列表數據
        this.fetchData()
    },
    methods:{
        fetchData(){
            memberApi.getList().then(res=>{
                const resp=res.data
                console.log(resp)
                this.list=resp.data
            })
        }
    }
}
</script>