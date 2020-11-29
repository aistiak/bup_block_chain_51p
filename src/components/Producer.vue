<template>
    <div>
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
        this.startProducing()
    },
    methods : {
        startProducing(){
            setInterval(this.addTransaction, 500);
        },
        addTransaction(){
            this.producer.unshift({
                id     : this.counter , 
                from   : this.$faker().name.firstName() ,
                to     : this.$faker().name.firstName() ,
                amount : Math.floor( Math.random() * 5000)
            }) 
            this.counter += 1
        }
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