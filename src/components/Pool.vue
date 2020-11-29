<template>
    <div>
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
        this.startPlloing()
    },
    methods : {
        startPlloing(){
            setInterval(this.takeFromTransaction,1000)
        },
        takeFromTransaction(){
            this.pool.push( this.producer.pop() )
        }
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