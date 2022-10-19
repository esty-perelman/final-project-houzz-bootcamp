export class ProdtuctClass {
    private producer:string;
    private model:string;
    private state:string;
    private category:{
        id:string,
        name:string
    };
    private engine:string;
    private YearOfProduction:number;
    private km:number;
    private engineCapacity:number;
    private tradeInOnline:boolean;
    private numOfSites:number;
    private accessories :string;
    private color:string;
    private price:number;
    private quantity:number;
    private image:string;

     constructor(producer:string, model:string, state:string, category:{ id:string,  name:string}, engine:string, YearOfProduction:number,km:number,
        engineCapacity:number,tradeInOnline:boolean,numOfSites:number,accessories:string,color:string,price:number, quantity:number,image:string) {
         this.producer = producer;
         this.model = model;
         this.state = state;
         this.category = category;
         this.engine = engine;
         this.YearOfProduction = YearOfProduction;
         this.km = km;
         this.engineCapacity=engineCapacity;
         this.tradeInOnline=tradeInOnline;
         this.numOfSites=numOfSites;
         this.accessories=accessories;
         this.color=color;
         this.price=price;
         this.quantity=quantity;
         this.image=image;
     }


     public get getProducer ():string {return this.producer };
     public get getModel ():string { return this.model };
     public get getState ():string { return this.state };
     public get getCategory ():{id:string,name:string} { return this.category };
     public get getEngine ():string { return this.engine };
     public get getYearOfProduction ():number { return this.YearOfProduction };
     public get getKm ():number { return this.km };
     public get getEengineCapacity ():number { return this.engineCapacity };
     public get getTradeInOnline ():boolean { return this.tradeInOnline };
     public get getNumOfSites ():number { return this.numOfSites };
     public get getAccessories ():string { return this.accessories };
     public get getColor ():string { return this.color };
     public get getPrice ():number { return this.price };
     public get getQuantity ():number { return this.quantity };
     public get getImage ():string { return this.image };


}