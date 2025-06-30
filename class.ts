class emp {
    id!: number;
    name!: string;
    address!: string;
    constructor(id: number, name: string, address: string) {
        this.id=id;
        this.name=name;
        this.address = address;
    }
}

// function getnamewithAddress() : string {
    // return this.name + "" + this.address;
// }


let john = new emp(1,"john","Highway 71");

// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 71';

console.log(john);
// console.log(getnamewithAddress);