//-----------obj creation with functions 
const obj={
  id:3,
  name:'ramesh',
  class:'ece',
  age:22,
  dob:22/12/1996,
  location:'france',
  getName:function(name){
         return  this.name;
  },
setName:function(name){
  this.name=name;
  },
 getid:function(id){
         return  this.id;   
         },
setid:function(id){
  this.id=id;
  },
getclass:function(){
         return  this.class;   
         },
setclass:function(class1){
  this.class= class1;
  },
  getage: function(){
       return this.name;   
       },
setage:function(name){
  this.name=name;
  },
  getdob:function(){
    return this.name;
    },
    setdob:function(name) {
        this.name=name;
     },
getlocation:function(){
      return this.name;
                 },
      setlocation:function(name){
        this.name=name;
      }                
  }


let name=obj.getName();
console.log('name:',name);
obj.setName('hello');
name=obj.getName();
console.log('name:',name);


 
let id=obj.getid();
console.log('id:',id);
obj.setid(50);
id=obj.getid();
console.log('id:',id);

console.log(obj.setclass(7))
console.log(obj.getclass())
console.log(obj.setage(23))
console.log(obj.getage())
console.log(obj.setdob('22/12/1996'))
console.log(obj.getdob())
console.log(obj.setlocation('japan'))
console.log(obj.getlocation())


function person(id){
  let id=id;
  this.name='hi';
  this.setid=function(id){
    id=id;
  }
  this.getid=function(){
    return id;
  }
}
const person=new person('10');
person.setid(2)
console.log(person.getid())
