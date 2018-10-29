
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
      cocktails: [
        {"name":"Pusse Cafe"},
        {"name":"Manhattan"},
        {"name" : "Dry Martini"},
        {"name" : "Old Fashioned"},
        {"name" : "Brandy Alexander"},
        {"name" : "Bloody Mary"},
        {"name" : "Singapore Sling"},
        {"name" : "Balck Russian"},
        {"name" : "Margarita"},
        {"name" : "Rusty Nail"},
        {"name" : "Wiskey Sour"},
        {"name" : "New York"},
        {"name" : "Harvey Wallbanger"},
        {"name" : "Daiquiry"},
        {"name" : "Kiss of Fire"},
        {"name" : "B-52"},
        {"name" : "June Bug"},
        {"name" : "Bacardi Cocktail"},
        {"name" : "Sloe Gin Fizz"},
        {"name" : "Cuba Libre"},
        {"name" : "Grasshopper"},
        {"name" : "Seabreeze"},
        {"name" : "Apple Martini"},
        {"name" : "Negroni"},
        {"name" : "Long lsland Iced Tea"},
        {"name" : "Sidecar"},
        {"name" : "Mai-Tai"},
        {"name" : "Pina Colada"},
        {"name" : "CosmopolitanCocktail"},
        {"name" : "Moscow Mule"},
        {"name" : "Apricot Cocktail"},
        {"name" : "Honeymoon Cocktail"},
        {"name" : "Blue Hawaian"},
        {"name" : "Kir"},
        {"name" : "Tequila Sunrise"},
        {"name" : "Healing(힐링)"},
        {"name" : "Jindo(진도)"},
        {"name" : "Puppy Love(풋사랑)"},
        {"name" : "Geumsan(금산)"},
        {"name" : "Gochang(고창)"}
      ],
      msg: 'Welcome to Your list-view App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
