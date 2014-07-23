var Brunch = {
  getRandomBrunch: function (min, max) {
    return this.places[(Math.floor(Math.random() * (max - min)) + min)];
  },
  "places": [
    {
      "id": 1,
      "name": "EastBurn",
      "address": "1800 E Burnside St, Portland, OR 97214",
      "website": "http://www.theeastburn.com/",
      "cuisine": "traditional",
      "type": "public house",
      "drinks": true
    },
    {
      "id": 2,
      "name": "Screen Door",
      "address": "2337 East Burnside Street Portland, OR 97214",
      "website": "http://www.screendoorrestaurant.com/",
      "cuisine": "southern",
      "type": "sit-down",
      "drinks": false
    },
    {
      "id": 3,
      "name": "The Waffle Window",
      "address": "  2624 NE Alberta St, Portland, OR 97211",
      "website": "http://wafflewindow.com/",
      "cuisine": "traditional",
      "type": "sit-down & to-go",
      "drinks": true
    }
  ]
}

