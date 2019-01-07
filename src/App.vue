<template>
  <div id="app">
    <h1>購物清單</h1>
    <hr>
    <div class="listBlock">
      <div class="listBox">
        <h2>小美</h2>
        <RecordList v-bind:records="records"
        @removeListItem="list1RemoveItem"></RecordList>
      </div>
      <div class="line"></div>
      <div class="listBox">
        <h2>小明</h2>
        <RecordList v-bind:records="records2"
        @removeListItem="list2RemoveItem"></RecordList>
      </div>
    </div>
    <hr>
    <div class="inputBox">
      <input v-model="newRecord.cata" placeholder="名稱">
      <input v-model="newRecord.date" placeholder="日期">
      <input v-model.number="newRecord.price" placeholder="價格">
      <div class="buttonBox">
        <button @click="addRecord">新增小美的項目</button>
        <button @click="addRecord2">新增小明的項目</button>
      </div>
    </div>
  </div>
</template>

<script>
// import RecordList from './components/RecordList.vue'
export default {
  name: 'app',
  data () {
    return {
      newRecord:{},
      records:[
        {
          date:'2018/11/10',
          price: 500,
          cata: '食物'
        },{
          date:'2018/11/15',
          price: 800,
          cata: '衣服'
        },{
          date:'2018/12/25',
          price: 1500,
          cata: '修車'
        }
      ],
      records2:[
        {
          date:'2018/11/03',
          price: 300,
          cata: '食物'
        },{
          date:'2018/11/08',
          price: 1800,
          cata: '衣服'
        },{
          date:'2018/11/15',
          price: 3500,
          cata: '保養品'
        }
      ]
    }
  },
  // components: {
  //   RecordList: RecordList
  // },
  methods: {
    list1RemoveItem(obj){
      // console.log('App receive event from child')
      this.records=this.records.filter(item=>item!==obj.record)
    },
    list2RemoveItem(obj){
      this.records2=this.records2.filter(item=>item!==obj.record)
    },
    addRecord(){
      // 值不可為null
      if(Object.keys(this.newRecord).length<3){
        alert('項目請勿留白')
        return false
      }else if(isNaN(this.newRecord.price) || this.newRecord.price ==''){
        this.newRecord.price =''
        alert('價格請填數字')
        return false
      }else{
        console.log(this.newRecord.price)
        this.records.push(this.newRecord)
        this.newRecord ={}
      }
    },
    addRecord2(){
      // 值不可為null
      if(Object.keys(this.newRecord).length<3){
        alert('項目請勿留白')
        return false
      }else if(isNaN(this.newRecord.price) || this.newRecord.price ==''){
        this.newRecord.price =''
        alert('價格請填數字')
        return false
      }else{
        console.log(this.newRecord.price)
        this.records2.push(this.newRecord)
        this.newRecord ={}
      }
    }
  }
}
</script>

<style lang="scss">
#app{
  font-family: Arial, Helvetica, '微軟正黑體', Microsoft JhengHei, Apple LiGothic, '蘋果儷中黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  line-height: 1.5;
  color: #2c3e50;
  margin-top: 40px;
  .listBlock{
    display: flex;
    justify-content: center;
    .listBox{
      flex: 1;
      padding-top: 10px;
      padding-bottom: 50px;
      position: relative;
      h2{
        font-weight: 600px;
        font-size: 25px;
        color: #ffffff;
      }
    }
    .line{
      display:none;
    }
  }
  .inputBox{
    padding: 15px 5px;
    input{
      display: inline-block;
      width: 30%;
      padding: 0.2em;
    }
    .buttonBox{
      padding-top: 20px;
    }
  }
}
h1{
  font-weight: normal;
  color: #f5b641;
}

ul{
  padding: 0;
  text-align: left;
}

li{
  margin: 0 10px;
}

a{
  color: #42b983;
}
hr{
  background-color: #9e9e9e;
  border: none;
  height: 1px;
}

@media screen and (max-width: 860px) {
  #app{
    .listBlock{
      display: block;
      .line{
        display:block;
        width: 45%;
        height: 1px;
        background-color: rgba(255,255,255,0.3);
        margin: 20px auto 0 auto;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  #app{
    .inputBox{
      padding: 15px 5px;
      input{
        display: block;
        width: 80%;
        padding: 0.5em;
        margin: 10px auto;
      }
    }
  }
}

</style>
