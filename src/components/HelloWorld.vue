<template>
  <div>
    <div>
      51 % attack simulation
    </div>
    <div>
      <div class="flex-container">
        <div>
          <label for="">Transactions</label>
          <producer/>
        </div>
        <div>
          <label for=""> Pool</label>
          <pool/>
        </div>
        <div>
          <label for=""> Miners </label>
          <miner/>
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
      
    }
  },

  mounted(){
    this.temp = new Temp('demo')
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
}
.flex-container > div:last-child{
  width: 30vw;
}
</style>
