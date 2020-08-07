export default {
  data: {
    
    loader: true,

    selectedImage: {
      url: null,
      name: null
    },
    
    links: [
      {
        'name': 'Ninja',
        'url':  'https://static.dribbble.com/users/1141243/screenshots/5365674/ninja_8.png'
      },
      {
        'name': 'Gato',
        'url':  'https://static.dribbble.com/users/86597/screenshots/6213126/cat.jpg'
      },
    ]

  },    
  setImage: function(name, url){

    this.data.selectedImage.name = name;
    this.data.selectedImage.url  = url;

  },
  log(){
    console.log("log");
  }
  

}