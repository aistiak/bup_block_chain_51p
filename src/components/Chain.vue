<template>
    <div>
        <input v-model="filter_id" type="text" name="" id="">
        <li v-for="(v,k) in filter_block_list" :key="k">

            <div>
                prev_hash : {{ v.prev_hash }}
            </div>
            <div>
                self_hash : {{ v.self_hash }}
            </div>
            <div>
                id : {{ v.id }}
            </div>
        </li>
    </div>
</template>
<script>
import Hash from "object-hash"
export default {
    name : 'BlockChain' ,
    data() {
        return {
            block_list : [{
                id : 0 ,
                prev_hash : 'genesis_hash'      ,
                self_hash :  Hash('genesis')    ,
            }] ,
            counter : 0 ,
            filter_id : '' ,
        }
    },
    computed : {
        filter_block_list() {
            if(this.filter_id)
                return this.block_list.filter( v => v.id == this.filter_id)
            return this.block_list     
        }
    },
    methods : {
        add_block(arg){
            // console.log( this.block_list )
            this.counter += 1
            this.block_list.unshift({
                id : this.counter ,
                prev_hash : this.block_list[ this.block_list.length - 1 ].self_hash  ,
                self_hash : arg  ,
            })
        }
    },
}
</script>
<style  scoped>
ul, li {
    list-style: none;
}
li {
    background: rgb(86, 166, 231);
    /* padding : 20px; */
    margin-bottom: 10px;
    padding : 0% ;
}
</style>