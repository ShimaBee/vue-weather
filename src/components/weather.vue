<template>

  <div>
    <p>{{ city }}</p>
    <p>{{ temp }}</p>
    <p>{{ condition.main }}</p>
    <input type="text" v-model="myKeyword">
    <button @click="search">調べる</button>
    <div>
    <router-link to="/">index</router-link>
    </div>
    <div>
    <router-link to="/university">university</router-link>
    </div>
  </div>
</template>

<!--<script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->
<script>
  export default {
    data () {
      return {
        myKeyword: '',
        city: null,
        temp: null,
        condition: {
          main: null
        }
      }
    },
    methods: {
      search () {

        if (this.myKeyword == '') {
          this.myKeyword = 'Okinawa'
        }

        var temp =
          'https://api.openweathermap.org/data/2.5/weather?q='
          + this.myKeyword
          + ',jp&units=metric&appid=9ddc72715cb40f966f3f265c3eaa3b9a'

        this.$axios.get(temp)
          .then(function(response){
            this.city = response.data.name
            this.temp = response.data.main.temp
            this.condition = response.data.weather[0]
          }.bind(this))
          .catch(function(error){
            console.log(error)
          })

      }
    }
  }

</script>

<style scoped>
</style>
