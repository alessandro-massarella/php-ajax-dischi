const myApp = new Vue ({
  el: '#myApp',

  data: {
    records: [],
    // url: "https://flynn.boolean.careers/exercises/api/array/music",
    searchText: "",
    url: "http://localhost/server.php" 

  },

  mounted () {

      axios
            .get (this.url)
            .then ((response)=> {

              this.records = response.data.response
              console.log(response)
            })
  },
  
  methods: {

    filtra: function() {
      axios
      .get (this.url, {
        params: {
          'search_text': this.searchText /* invio al server anche la query string per ricercare la parola */
          
        }

      })
      .then ((response)=> {

        this.records = response.data.response
        console.log(response)
      })


    }

  }


});
