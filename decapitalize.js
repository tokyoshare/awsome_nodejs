const decapitalize = ([first, ...rest], upperRest = false) => {
    let after = upperRest ? rest.join('').toUpperCase() : rest.join('');
    return first.toLowerCase() + after;
}