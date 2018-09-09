scope = 'Global';

function getValue() {
    scope = 'Local';
    return scope;
}
console.log(getValue());
console.log(scope);