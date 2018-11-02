
<template>
  <div class="container">
    <h2>Cocktail List</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="cocktail in cocktails">{{ cocktail.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'list-view',
  data () {
    return {
      cocktails: [],
      bottom: false
    }
  },
  methods: {
    bottomVisible:function(){
      //수직 방향으로 스크롤되는 픽셀수치
      var scrollY = window.pageYOffset;
      //눈에 보이는 만큼의 높이
      var visible = document.documentElement.clientHeight;
      //스크롤 시키지 않았을때의 전체높이
      var pageHeight = document.documentElement.scrollHeight;
      //스크로된 픽셀과 눈에보이는 만큼의 높이가 문서 전체 높이보다 크거나 같은지 체크
      var bottomOfPage = visible + scrollY + 10 >= pageHeight;
      //console.log(scrollY, visible, pageHeight)
      return bottomOfPage || pageHeight < visible;
    },
    addList:function(){
      var foods = [
        '떡볶이',
        '순대',
        '곱창',
        '족발',
        '매운족발',
        '초밥',
        '파스타',
        '골뱅이무침',
        '샥스핀',
        '탕수육',
        '티본스테이크',
      ]
      var rand = Math.floor(Math.random()*(foods.length))
      console.log(foods.length, rand)
      var add_test = {
        name : foods[rand]
      };
      this.cocktails.push(add_test);
    }
  },
  watch: {
    bottom: function(bottom) {
      if(bottom){
        this.addList();
      }
    }
  },
  created: function(){
    window.addEventListener('scroll',()=>{
      //console.log(this.bottomVisible());
      this.bottom = this.bottomVisible();
    });
    //json파일에서 칵테일 목록을 가져와서 cocktails에 넣어준다.
    axios.get('/static/cocktail_list.json').then(response => {
      var list = response.data;
      this.cocktails = list;
      if(this.bottomVisible()){
        this.addList();
      }
    })

    this.addList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
