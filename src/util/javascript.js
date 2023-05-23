
export const chatWhatsApp = (product) => {
  const win = window.open(`https://wa.me/573007260320?text=Hola!%20estoy%20interesado%20en%20tu%20producto%20${product}`, '_blank');
  win.focus();
}

export const chatWhatsAppHelp = () => {
  const win = window.open(`https://wa.me/573007260320?text=Hola!%20m%20interesado%20en%20tu%20producto%20necesito%20ayuda`, '_blank');
  win.focus();
}

export const formatoMoneda = (number) => {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  let arr = number.toString().split(',');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(',') : arr[0];
}

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}