var userApp = new Vue({
  el: '#userRandomApp',
  data: {
    person:
    {
            "gender": "",
            "name": {
              "title": "",
              "first": "",
              "last": ""
            },
            "location": {
              "street": "",
              "city": "",
              "state": "",
              "postcode": "",
              "coordinates": {
                "latitude": "",
                "longitude": ""
              },
              "timezone": {
                "offset": "",
                "description": ""
              }
            },
            "email": "",
            "login": {
              "uuid": "",
              "username": "",
              "password": "",
              "salt": "",
              "md5": "",
              "sha1": "",
              "sha256": ""
            },
            "dob": {
              "date": "",
              "age": null
            },
            "registered": {
              "date": "",
              "age": null
            },
            "phone": "",
            "cell": "",
            "id": {
              "name": "",
              "value": ""
            },
            "picture": {
              "large": "",
              "medium": "",
              "thumbnail": ""
            },
            "nat": "NO"
    }
},
  methods: {
      fetchUsers() {
          fetch('https://randomuser.me/api/')
          .then( response => response.json() )
          .then( json => {userApp.person = json.results[0]})
          ;
      }
  },
  created() {
    this.fetchUsers();
  }
})
//I worked with Anson Lam, Lindsey Chastain, Riley McGrath, and Brian Emmons
