<template>
  <div>
    <div>
      51 % attack simulation
      <button @click="reset" > reset </button>
      <button @click="start" v-show="show_start"> start </button>
      <button @click="stop" v-show="!show_start"> stop </button>
    </div>
    <div>
      <div class="flex-container">
        <div>
          <label for="">Transactions</label>
          <producer ref="producer"/>
        </div>
        <div>
          <label for=""> Pool</label>
          <pool ref="pool" />
        </div>
        <div>
          <label for=""> Miners </label>
          <miner ref="miners"/>
        </div>
        <div>
          <label for=""> Validation</label>
          <Validator ref="validator"/>
        </div>
        <div>
          <label for=""> Block Chain </label>
          <Chain ref="block_chain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Temp from "../lib/Temp"
import Producer from './Producer.vue'
import Pool from "./Pool"
import Miner from "./Miner"
import Validator from "./Validator"
import Chain from "./Chain"
export default {
  name: 'HelloWorld',
  components:{
    Producer ,
    Pool ,
    Miner ,
    Validator ,
    Chain ,
  } ,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      temp : {} ,
      producer : [] ,
      pool : [] ,
      show_start : true ,
      
    }
  },

  mounted(){
    this.$loading(true)
    setTimeout(() => {
      this.$loading(false)
    }, 6000);
  },

  methods : {
    start(){
      this.show_start = false 
      this.$refs.producer.start()
      this.$refs.pool.start()
      this.$refs.miners.start()
    },
    stop(){
      this.$refs.producer.stop()
      this.$refs.pool.stop()
      this.$refs.miners.stop()
      this.show_start = true 

    },
    reset() {
      window.location.href = "/"
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.flex-container > div {
  border: 2px solid grey;
  height: 90vh;
  width: 20vw;
  margin-right: 30px;
  overflow: scroll;
  overflow-x: hidden;
}
.flex-container > div:last-child{
  width: 30vw;
}
</style>
