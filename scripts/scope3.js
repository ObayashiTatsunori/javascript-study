var scope = 'Global';

function getValue() {
    console.log(scope);
    var scope = 'Local';
    return scope;
}
console.log(getValue());
console.log(scope);