
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
    bottomVisble:function(){
      //수직 방향으로 스크롤되는 픽셀수치
      var scrollY = window.pageYOffset;
      //눈에 보이는 만큼의 높이
      var visible = document.documentElement.clientHeight;
      //스크롤 시키지 않았을때의 전체높이
      var pageHeight = document.documentElement.scrollHeight;
      //스크로된 픽셀과 눈에보이는 만큼의 높이가 문서 전체 높이보다 크거나 같은지 체크
      var bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visble;
    },
    addList:function(){
      //json파일에서 칵테일 목록을 가져와서 cocktails에 넣어준다.
      axios.get('/data/cocktail_list.json').then(function(response){
        this.cocktails.push(response.cocktails);
        if(this.bottomVisble()){
          this.addList();
        }
      })
    }
  },
  created: function(){
    window.addEventListener('scroll',()=>{
      this.bottom = this.bottomVisible();
    });

    this.addList();
  },
  watch: {
    bottom: function(bottom) {
      if(bottom){
        this.addList();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
