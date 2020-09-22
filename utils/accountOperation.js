
export function euroConvert(value, currency) {
    switch(currency) {
        case 'USD': 
        value=value*0.851218;
        case 'GBP':
            value=value*1.089;
          break;
        case 'CHF':
            value=value*0.929;
          break;
        default:
            value;
  };
  return value;
}

export function totalAmount(accounts) {
  var valeurInitiale = 0;
  var total = accounts.reduce(
    (accumulateur, accounts) => accumulateur + parseFloat(euroConvert(accounts.amount))
    , valeurInitiale
);
  return total;
}

export function compare(accounts){
  const byValue = (a,b) => euroConvert(b.amount) - euroConvert(a.amount);
  var sorted = [].slice.call(accounts).sort(byValue);
  return sorted;
};

