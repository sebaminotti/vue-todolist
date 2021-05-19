// parte di Vuejs
const app = new Vue ({
    el:'#app',

    
    data: {
        deleted :'',
        nuoviTodo :"",
     todos:[
      'lavare la macchina',
      'tagliando macchina',
      'fare shopping',
      'prendere su cane e morosa',
      'partire',

     ]
    },
   methods:{
       removeTodo(index){
           this.todos.splice(index,1);
       },
       
       cancella(index){
        this.todos.splice(index);
       },

       addTodo(){
       
        this.todos.push(this.nuoviTodo);
        this.nuoviTodo ="";
         
       },

       
   }
   
}) 
//--------------------------------------------
