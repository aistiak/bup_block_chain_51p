<template>
    <div>
        <span v-show="false">  {{pool.length}} </span>
        <button @click="start" v-show="show_start" >start</button>
        <button @click="stop" v-show="!show_start" >stop</button>
        <li v-for="(i,k) in pool" :key="k">
            {{ `#${i.id} ${i.from} sent ${i.amount} to ${i.to}` }}  
        </li>

    </div>

</template>
<script>
export default {
    name : 'Pool' ,
    data() {
        return {
            runner : '' ,
            show_start : true ,
        }
    },
    computed : {
        producer : {
            set(arg){
                this.$parent.producer = arg
            },
            get(){
                return this.$parent.producer 
            }
        } ,       
        pool : {
            set(arg){
                this.$parent.pool = arg
            },
            get(){
                return this.$parent.pool 
            }
        } ,       
    },
    mounted(){
        // this.startPlloing()
    },
    methods : {
        start(){
            this.show_start = false
            this.runner     = setInterval(this.takeFromTransaction,1000)
        },
        stop(){
            clearInterval( this.runner )
            this.show_start = true 
        },
        takeFromTransaction(){
            if(this.producer.length)
                this.pool.push( this.producer.pop() )
        },
    }
}
</script>

<style  scoped>
ul, li {
    list-style: none;
}
li {
    background: rgb(109, 167, 138);
    /* padding : 20px; */
    margin-bottom: 10px;
    padding : 10% ;
}
</style>