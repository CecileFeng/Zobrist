'use strict';

angular.module('myApp')

	.service('menuFactory',function(){

    var promotions=[

              {
                "title": "Product 1",
                "image": "https://lh3.googleusercontent.com/UMB2HRRRAAzXAEaCM9Gg-baCaDx_1RTXHscW5k2Ge3P4KP4mwTt2m6oyEHBWex3c4SxU=w300",
                "price": "$23.00"
              },
              {
                "title": "Product 2",
                "image": "http://placeholder.com/286x327/C82D64/FFF",
                "price": "$23.50"
              },
              {
                "title": "Product 3",
                "image": "http://placeholder.com/286x327/C82D64/FFF",
                "price": "$50.75"
              },
              {
                "title": "Product 4",
                "image": "http://placeholder.com/286x327/C82D64/FFF",
                "price": "$28.20"
              },
              {
                "title": "Product 5",
                "image": "http://placeholder.com/286x327/C82D64/FFF",
                "price": "$23.00"
              },
              {
                "title": "Product 6",
                "image": "http://placeholder.com/286x327/C82D64/FFF",
                "price": "$23.50"
              },
              {
                "title": "Product 7",
                "image": "http://placeholder.com/286x327/C82D64/FFF",
                "price": "$3.75"
              },
              {
                "title": "Product 8",
                "image": "http://placeholder.com/286x327/C82D64/FFF",
                "price": "$45.99"
              },

    {
      "title": "Product 9",
      "image": "http://placeholder.com/286x327/2D5697/FFF",
      "price": "$23.00"
    },
    {
      "title": "Product 10",
      "image": "http://placeholder.com/286x327/2D5697/FFF",
      "price": "$23.50"
    },
    {
      "title": "Product 11",
      "image": "http://placeholder.com/286x327/2D5697/FFF",
      "price": "$50.75"
    },
    {
      "title": "Product 12",
      "image": "http://placeholder.com/286x327/2D5697/FFF",
      "price": "$28.20"
    },
    {
      "title": "Product 13",
      "image": "http://placeholder.com/286x327/2D5697/FFF",
      "price": "$23.00"
    },
    {
      "title": "Product 14",
      "image": "http://placeholder.com/286x327/2D5697/FFF",
      "price": "$23.50"
    },
    {
      "title": "Product 15",
      "image": "http://placeholder.com/286x327/2D5697/FFF",
      "price": "$3.75"
    },
    {
      "title": "Product 16",
      "image": "http://placeholder.com/286x327/2D5697/FFF",
      "price": "$45.99"
    },
    {
      "title": "Product 17",
      "image": "http://placeholder.com/286x327/E4A434/FFF",
      "price": "$23.00"
    },
    {
      "title": "Product 18",
      "image": "http://placeholder.com/286x327/E4A434/FFF",
      "price": "$23.50"
    },
    {
      "title": "Product 19",
      "image": "http://placeholder.com/286x327/E4A434/FFF",
      "price": "$50.75"
    },
    {
      "title": "Product 20",
      "image": "http://placeholder.com/286x327/E4A434/FFF",
      "price": "$28.20"
    },
    {
      "title": "Product 21",
      "image": "http://placeholder.com/286x327/E4A434/FFF",
      "price": "$23.00"
    },
    {
      "title": "Product 22",
      "image": "http://placeholder.com/286x327/E4A434/FFF",
      "price": "$23.50"
    },
    {
      "title": "Product 23",
      "image": "http://placeholder.com/286x327/E4A434/FFF",
      "price": "$3.75"
    },
    {
      "title": "Product 24",
      "image": "http://placeholder.com/286x327/E4A434/FFF",
      "price": "$45.99"
    },
    {
      "title": "Product 25",
      "image": "http://placeholder.com/286x327/7FCE2F/FFF",
      "price": "$23.00"
    },
    {
      "title": "Product 26",
      "image": "http://placeholder.com/286x327/7FCE2F/FFF",
      "price": "$23.50"
    },
    {
      "title": "Product 27",
      "image": "http://placeholder.com/286x327/7FCE2F/FFF",
      "price": "$50.75"
    },
    {
      "title": "Product 28",
      "image": "http://placeholder.com/286x327/7FCE2F/FFF",
      "price": "$28.20"
    },
    {
      "title": "Product 29",
      "image": "http://placeholder.com/286x327/7FCE2F/FFF",
      "price": "$23.00"
    },
    {
      "title": "Product 30",
      "image": "http://placeholder.com/286x327/7FCE2F/FFF",
      "price": "$23.50"
    },
    {
      "title": "Product 31",
      "image": "http://placeholder.com/286x327/7FCE2F/FFF",
      "price": "$3.75"
    },
    {
      "title": "Product 32",
      "image": "http://placeholder.com/286x327/7FCE2F/FFF",
      "price": "$45.99"
    }

                       ];  //end promotions   

  this.getProms = function(){
                    
                    return promotions;
                    
                };                   



	}); //end factory



