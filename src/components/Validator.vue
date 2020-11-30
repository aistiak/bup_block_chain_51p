<template>
    <div>
        <span v-show="false"> {{ pool }}</span> 
        <!-- {{ hash_list }} -->
        <li v-for="(i,k) in Object.values(hash_list)" 
            :key="k"
            :class="{
               // 'good' : k %2 == 0
                  'good' : Object.values( hash_list).filter( v => v.hash == i.hash).length >=5   
            }">
            {{ ` miner ${k+1} - block #${i.id} - ${i.hash}` }}
        </li>
    </div>
</template>
<script>
export default {
    data(){
        return {
            hash_list : {} ,
            
        }
    },
    watch :{

    } ,
    computed :{

        pool : {
            set(arg){
                this.$parent.pool = arg
            },
            get(){
                return this.$parent.pool 
            }
        } ,
    },
    methods : {
        addTochain(arg){
            this.hash_list = arg 
            // pass the hash with greater count 
            let arr = Object.values( this.hash_list).map( v => v.hash )
            let hash = {} 
            let big_one = {} 
            let t = 0 
            for(let i in arr) {
                let  val  = arr[i]
                hash[val] = hash[val]     ? (hash[val] + 1) : 1   
                big_one   = hash[val] > t ?       val       : big_one
                
            }
            console.log(big_one)
            // console.log(this.$parent.$refs.block_chain.add_block)
            this.$parent.$refs.block_chain.add_block(big_one);
        }
    }
}
</script>

<style  scoped>
ul, li {
    list-style: none;
}
li {
    background: red;
    /* padding : 20px; */
    margin-bottom: 10px;
    padding : 0% ;
}

.good {
    background: rgb(62, 190, 36);
}
.evil {
    background: tan;
}
</style>