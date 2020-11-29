<template>
    <div>
        <!-- <li>miner #1</li>
        <li>miner #2</li>
        <li>miner #3</li>
        <li>miner #4</li>
        <li class="evil">miner #5</li>
        <li class="evil">miner #6</li>
        <li class="evil">miner #7</li>
        <li class="evil">miner #8</li>
        <li class="evil">miner #9</li>
        <li class="evil">miner #10</li> -->
        <button @click="start_mining" >start</button>
        <button @click="evil" >evil</button>
        {{ pool.length }}
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
        start_mining(){
            setInterval(this.process_transaction,1500) ;
        },

        process_transaction() {
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