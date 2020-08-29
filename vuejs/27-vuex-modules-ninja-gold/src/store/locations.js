export default {
  namespaced: true,
  state: {
    locations: [
      {
        name:   'Farm',
        text:   'earns 10-20 golds',
        start:  10,
        end:    20
      },
      {
        name:   'Cave',
        text:   'earns 5-10 golds',
        start:  5,
        end:    10
      },
      {
        name:   'House',
        text:   'earns 2-5 golds',
        start:  2,
        end:    5
      },
      {
        name:   'Casino',
        text:   'earns/takes 0-50 golds',
        start:  -50,
        end:    50
      },
    ],
  },
  
}