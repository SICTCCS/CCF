module.exports=internal.FirebaseObject=class{
    constructor(desc, ia1,ia2,ia3,ia4,ia5,logo,name,type,web) {
        this.desc = desc;
        this.ia1 = ia1;
        this.ia2=ia2;
        this.ia3=ia3;
        this.ia4=ia4;
        this.ia5=ia5;
        this.logo=logo;
        this.name=name;
        this.type=type;
        this.web=web;
      }
    getdesc(){
        return this.desc;
    }
    getia1(){
        return this.ia1
    }
    getia2(){
        return this.ia2;
    }
    getia3(){
        return this.ia3;
    }
    getia4(){
        return this.ia4
    }
    getia5(){
        return this.ia5;
    }
    getlogo(){
        return this.logo;
    }
    getname(){
        return this.name;
    }
    gettype(){
        return this.type;
    }
    getweb(){
        return this.web;
    }
}