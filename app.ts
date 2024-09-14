// *********************** primitives and refence ************************** //


// *************** obj{}  array[] () are refrence and other are primitives likes  bollean string numebr  ********************** \\
// let a=b;      primitive
// **************************************//
// let a=[]
// let b=a            // refrence bma change thay to a=[] ma bhi change tahy 





// *********************** interface *************************** //

// if we pass object as argument in function we define its  structure like below *********** //

// interface Abcd{
// name:string,
// email:string,
// password:string,
// age?:number,           // here ? means argument ma  ni apavi to bhi chale
// }


// function abcd(obj:Abcd):void{         // void ni jagyaye function je datatype return kare te write karavanu
//                                        // kay return ni return  karatu hoy to void or   number return karatu hoy to number                                    
// }

// abcd({name:"yagnik",email:"ya@MediaList.com",password:"bsbwbdvv"})


//***************************        extends nterface is work like classes         *****************************/

// interface Abcd{
//     name:string,
//     email:string,
//     password:string,
//     age?:number,          
//     }
//  interface Admin extends Abcd{                // admin ma extends karavathi admin ma Abcd ni proparty access kari shakay
//     admin:boolean
//  }   
    
//     function abcd(obj:Abcd):void{      // admin use karava mate obj:admin                                                              
//     }
    
//     abcd({name:"yagnik",email:"ya@MediaList.com",password:"bsbwbdvv"})

//##############################   type aliases   #######################################//

// type name=string | null;  // type ma name ni jagyaye je name rakhavu hoy te

// function abcd(obj:name){  
// }
// abcd("bbbbr")


                           // intersection type //

//  type User={
//    name:string,
//    email:string,
//  }              
 
//  type admin=User & {
//    getdetail(user:string):void;
//  }

//  function abcd(a:admin){
   
//  }



// ****************************  class *************************** //

// class BottleMaker{
//     constructor(public name:string){
//         this.name=name;                     // b1 ma je argument pass thay  te constructor ma recive thay 
//                                             //    public variable class ni bar bhi acess kari shkay  
//     }
// }

// let b1=new BottleMaker("yagnik")



// class BottleMaker{
// private name1:string='suhwuh'
//     constructor(public name:string){
//         this.name=name;                     // b1 ma je argument pass thay  te constructor ma recive thay
//                                              //    public variable class ni bar bhi acess kari shkay  
//     }
// }
// class MetalBottlermaker extends BottleMaker {
//     constructor(name:string) {
//         super(name)
//     }
//     getvalue(){
//         console.log(this.name,this.name1);  // we cant acess name1 outside of bottelmaker class becauseof private
        
//     }
// }                                           // protected khali calss ma access thay class ni bar ni, class ni method ma access thy
                                            // bottle maker ma je getvalue function che aene method kevay

// let b1=new MetalBottlermaker("yagnik")


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$           static           $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//

// class yagnik{
//     static version=1.0;
//     static getrandomnumber(){
// return Math.random();
// }
// }


// class ni mehod use karava mate static lagavavu pade direct access ni kari shakay 
// static vagar let b=new yagnik() obj banavi aevi rite access karavu pade
// b.verson aevi rite


///////////////////////////////////      function   //////////////////////////////////////


// function abcd(name:string,age:number,cb:(arg:string)=>void){
// cb('yagnik');
// }
// abcd('yagnik',25,(arg:string)=>{
//     console.log(arg);
    
// });


// %%%%%%%%%%%%%%%%%%%%%%%%%%%    generic       %%%%%%%%%%%%%%%%%%%%%%%%%%%%//

// why need generic let do with an example

// function abcd(a:string){

// }

// abcd("yagnik");          function ma jayre apade koy bhi data type ni argument send karava mate use thay generic
// abcd(12);
// abcd(true);
// abcd(()=>{};)


//////    what is generic  //////
// function abcd<t>(a:t){
// console.log(a);

// }
// abcd<number>(64)

// function a<t>(c:t){
//     console.log(c);
// }

// a<boolean>(true);
// a<number>(90);
// a<string>('yagnik');


// function z<t>(a:t,b:number,c:boolean){}

// z<string>("yagnik",32,true)


// function log<t>(val:t){
// console.log(val);

// }                                              //this also work function call karavi tyare argument ma generic  ni lakhvi to chale

// log(34);
// log(true)

// @@@@@@@@@@@@@@@@@@@@        intrnface generic    @@@@@@@@@@@@@@@@@@@@ //

// interface yagnik<t>{
//     name:string,
//     age:number,
//     key:t;
// }

// function a(obj:yagnik<string>){}

// a({name:"yagnik",age:34,key:'hhs'})

// ^^^^^^^^^^^^^^^^      generic classes      ^^^^^^^^^^^^^^^^^ //

// class bottlemaker<t>{
//     constructor(public key:t){}
// }

// let b1=new bottlemaker<string>('hi')
// let b2=new bottlemaker<number>(89)


// <<<<<<<<<<<<<<<<             return function generic        >>>>>>>>>>>>>>>>>>>>>//

// function a<t>(a:t,b:t):t{
//     return <t> 'hi'                       // ():t means a function t type return kare che
// }

// a<string>('yagnik','hhs')


// function a<t>(a:t,b:t):t{
//     return 'hi' as t                       // ():t means a function t type return kare che
// }
//                                         // as lakhi ne bhi chale
// a<string>('yagnik','hhs')

//   *************************  enum ************************//

// enum userRole{
//     ADMIN='admin',
//     GUST='gust',
//     SUPER_ADMIN="super_admin",
// }

// userRole.ADMIN