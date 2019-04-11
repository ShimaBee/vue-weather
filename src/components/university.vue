<template>
  <div>
    <h2>University</h2>
    <!--<h2>University</h2>-->
    <p>{{ name }}</p>
    <!--<p>{{ temp }}</p>-->
    <!--<p>{{ condition.main }}</p>-->
    <router-link to="/">index</router-link>
    <router-link to="/weather">weather</router-link>
  </div>
</template>

<script>

      export default {
        // name: "weather",
        data () {
          return {
            name: null,
            // temp: null,
            // condition: {
            //   main: null
            // }
          }
        },
        methods: {
        },
        mounted () {
          this.$axios.get('webservice.recruit.co.jp/shingaku/campus/v2?keyword=東京&key=d534d34d1b84c4a8&format=json')
            .then(function(response){
              this.name = response.name
              // this.temp = response.data.main.temp
              // this.condition = response.data.weather[0]
            }.bind(this))
            .catch(function(error){
              console.log(error)
            })
        }
      }

</script>

<style scoped>

</style>
