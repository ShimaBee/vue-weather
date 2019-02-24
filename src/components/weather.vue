<template>

  <div>
    <h2>Weather</h2>
    <p>{{ city }}</p>
    <p>{{ temp }}</p>
    <p>{{ condition.main }}</p>
    <router-link to="/">index</router-link>
  </div>

</template>

<script>
    export default {
        // name: "weather",
      data () {
        return {
          city: null,
          temp: null,
          condition: {
            main: null
          }
        }
      },
      methods: {
      },
      mounted () {
        this.$axios.get('https://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&units=metric&appid=9ddc72715cb40f966f3f265c3eaa3b9a')
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
</script>

<style scoped>
  .bg {

  }

</style>
