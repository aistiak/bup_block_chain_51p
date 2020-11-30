<template>
    <div>
        <button @click="start" v-show="show_start">start</button>
        <button @click="stop" v-show="!show_start">stop</button>
        <li v-for="(i,k) in producer" :key="k">
            {{ `#${i.id} ${i.from} sent ${i.amount} to ${i.to}` }}  
        </li>
    </div>
</template>
<script>
export default {
    name : 'Producer' ,
    data(){
        return {
            counter : 1 ,
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
        },

    },
    mounted(){
        
    },
    methods : {
        startProducing(){
           this.runner = setInterval(this.addTransaction, 500);
        },
        addTransaction(){
            this.producer.unshift({
                id     : this.counter , 
                from   : this.$faker().name.firstName() ,
                to     : this.$faker().name.firstName() ,
                amount : Math.floor( Math.random() * 5000)
            }) 
            this.counter += 1
        },

        start() {
            this.show_start = false 
            this.startProducing()
        },

        stop() {
            clearInterval(this.runner)
            this.show_start = true 
        },
    }
}
</script>
<style  scoped>
ul, li {
    list-style: none;
}
li {
    background: springgreen;
    /* padding : 20px; */
    margin-bottom: 10px;
    padding : 10% ;
}
</style>