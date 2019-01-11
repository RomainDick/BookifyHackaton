export const states = {
  
  user : {
    login : false,
    infos : {
      token : null,
      id : null,
    },
    data : {
      firstName : null,
      lastName : null,
      gender : null,
      phone : null,
      birthday : null,
      email : null,
      department : "",
    }
  },

  media : {
    id : null
  },
  
  search : {
    results : {},
    loading : false,
    loaded : false
  },

  items : {
    results : {},
    loading : false,
    loaded : false
  },

  item : {
    results : {},
    loading : false,
    loaded : false
  },
  
  categories : {
    results : {},
    loading : false,
    loaded : false
  },

  errors : {
    login : false,
    register : false,
    server : false,
  },
};