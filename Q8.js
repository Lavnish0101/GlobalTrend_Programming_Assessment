class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        if (key in this.map) {
            delete this.map[key];
        }
    }
}

const map = new HashMap();
map.put("apple", 10);
map.put("banana", 20);
map.put("orange", 5);

console.log(map.get("apple")); 
console.log(map.get("banana"));

map.remove("banana");

console.log(map.get("banana"));  
