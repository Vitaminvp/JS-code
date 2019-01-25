var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    var arr = firstAndLast.split(' ');
    this.getFirstName = function() {
        return arr[0];
    };
    this.getLastName = function() {
        return arr[1];
    };
    this.getFullName = function() {
        return arr[0] +' '+ arr[1];
    };
    this.setLastName = function(last){
        arr[1] = last;
    }
    this.setFirstName = function(first){
        arr[0] = first;
    }
    this.setFullName = function(firstAndLast2){
        var temp = firstAndLast2.split(' ');
        this.setFirstName(temp[0]);
        this.setLastName(temp[1])
    }
};

var bob = new Person('Bob Ross');
bob.getFullName();