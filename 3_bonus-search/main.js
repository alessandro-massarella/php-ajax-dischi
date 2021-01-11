const myApp = new Vue ({
  el: '#myApp',

  data: {
    records: [],
    // url: "https://flynn.boolean.careers/exercises/api/array/music",
    url: "http://localhost/server.php",
  },

  mounted () {

      axios
            .get (this.url)
            .then ((response)=> {

              this.records = response.data.response
              console.log(response)
            })
  },


});
