var scope = 'Global';

function getValue() {
    var scope = 'Local';
    return scope;
}
console.log(getValue());
console.log(scope);