ayName = new Array(
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado"
);
monName = new Array(
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "agosto",
  "outubro",
  "novembro",
  "dezembro"
);
now = new Date();
document.write(
  "<h1> Hoje é " +
    dayName[now.getDay()] +
    ", " +
    now.getDate() +
    " de " +
    monName[now.getMonth()] +
    " de " +
    now.getFullYear() +
    ". </h1>"
);
