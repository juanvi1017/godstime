
export const chatWhatsApp = (product) => {
    const win = window.open(`https://wa.me/573007260320?text=Hola!%20estoy%20interesado%20en%20tu%20producto%20${product}`, '_blank');
    win.focus();
  }