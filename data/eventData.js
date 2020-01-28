// data/eventData.js

export default data = [
    {
       id:1,
       title:"Domaine de la Castille",
       type: "Balades",
       duree: "20",
       date: "15/02/20",
       heure: '15h30',
       parcours: "2.3",
       latitude:43.161260,
       longitude:6.067227,
       icon:require('../assets/images/marqueurs-02.png'),
       description:'',
      photo:require('../assets/images/domaineBalade.png'),
      difficulté:"facile",
      photos:[
        {
           id:1,
           photo:require("../assets/images/walk2.jpg")
        },
        {
           id:2,
          photo:require("../assets/images/walk3.jpg")
       },
       {
          id:3,
          photo:require("../assets/images/walk4.jpg")
       },
      ]
    },
    {
      id:2,
      title:"Mont Caume",
      type: "Balades",
      duree: "35",
      date: "25/01/20",
      parcours: "2.4",
      latitude:43.183259,
      longitude:5.899638, 
      icon:require('../assets/images/marqueurs-02.png'),
      description:'',
      photo:require('../assets/images/caumeBalade.png'),
      difficulté:"difficile"
   },
   {
      id:3,
      title:"Balade foret",
      type : "Balades",
      duree: "40",
      date: "02/03/20",
      parcours: "3",   
      latitude:43.105452,
      longitude:5.927411,
      icon:require('../assets/images/marqueurs-02.png'),
      photo:require('../assets/images/foretBalade.png'),
      description:'',
  },
  {
   id:4,
   title:"Parc de la tour royale",
   type : "Balades",
   duree: "40",
   date: "02/03/20",
   parcours: "3",   
   latitude:43.105452,
   longitude:5.927411,
   icon:require('../assets/images/marqueurs-02.png'),
   photo:require('../assets/images/tourBalade.png'),
   description:'',
   difficulté:"Moyenne"
},
  {
    id:5,
    title:"Salon du chiot de Toulon",
    type: "Salon",
    duree: "40",
    date: "02/03/20",
    parcours: "3",
    latitude:43.124830,
    longitude:5.928624,
    icon:require('../assets/images/marqueurs-03.png'),
    description:'',
  },
  {
   id:6,
   title:"Clinique Vétérinaire du Las",
   type: "Vétérinaire",
   duree: "40",
   date: "02/03/20",
   parcours: "3",
   latitude:43.132642,
   longitude:5.914065,
   icon:require('../assets/images/marqueurs-01.png'),
   description:'',
 },
 {
   id:7,
   title:"Cabinet Vétérinaire médico-chirurgical du Docteur Gelot Eric",
   type: "Vétérinaire",
   duree: "40",
   date: "02/03/20",
   parcours: "3",
   latitude:43.118860,
   longitude:5.944964,
   icon:require('../assets/images/marqueurs-01.png'),
   description:'',
 },
 ] 

 
 