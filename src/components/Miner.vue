<template>
    <div>
        <button @click="start" v-show="show_start">start</button>
        <button @click="stop" v-show="!show_start">stop</button>
        <button @click="evil" v-show="true">evil</button>
        <span v-show="false" > {{ pool.length }} </span>
        <li v-for="(i,k) in 10" :key="k"  :class="{'evil' : (i > 4) && evil_flag }">
            #{{i}}# miner     
            <span v-if="Object.keys(cur_store).length > 0"> 
                ( {{ ` ${cur[i].id} => ${ cur[i].hash}` }} )
            </span>
        </li>
    </div>
</template>
<script>
import Hash from "object-hash"
export default {
    data(){
        return {
           cur_store : {} ,     
           show_process : false,
           evil_flag : 0 ,
           runner : '' ,
           show_start : true ,
        }
    },
    computed : {
        cur(){
            return this.cur_store || {}
        },
        pool : {
            set(arg){
                this.$parent.pool = arg
            },
            get(){
                return this.$parent.pool 
            }
        } ,  
        validator : {
            set(arg){
                this.$parent.$refs.validator = arg 
            },
            get(){
                return this.$parent.$refs.validator 
            }
        },
        mine (){
            
        },

        evil_mine() {

        },
    },
    mounted(){
        // this.start_mining() 
    },
    methods :{
        evil(){
            this.evil_flag = 1
        },
        start(){
            this.show_start = false 
            this.runner     = setInterval(this.process_transaction,1500) ;
        },
        stop() {
            clearInterval(this.runner)
            this.show_start = true 
        },
        process_transaction() {
            if(!this.pool.length) return 
            let t = this.pool.shift()
            for (let i = 1 ; i <= 10 ; i+=1 ){
                if(this.evil_flag && i > 4 ){
                    
                    this.cur_store[i] = { ...t , 'hash' : 'evil' + Hash(t)  } 
                    

                }else{
                    
                    this.cur_store[i] = { ...t , 'hash' : Hash(t) } 
                }
            }
            this.validator.addTochain ( this.cur_store)
            this.evil_flag = 0 
        }
    }
}
</script>
<style  scoped>
ul, li {
    list-style: none;
}
li {
    /* background: rgb(118, 120, 207); */
    background: rgb(98, 139, 192);
    /* padding : 20px; */
    margin-bottom: 10px;
    padding : 0% ;
}
.evil {
    background: tan;
}
</style>