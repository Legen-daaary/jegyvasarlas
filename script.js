const vasarlasGomb = document.getElementById("vasarlasGomb");
const tipusok = document.getElementsByName("tipus");
const mennyiseg = document.getElementById("mennyiseg");
const fizetendo = document.getElementById("fizetendo");

const EGYSEGAR = {
    "felnott": 6000,
    "idos": 3500
}

const formazo = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
  });

vasarlasGomb.addEventListener("click", () => {
    let i = 0;

    while (i < tipusok.length && !tipusok[i].checked) i++;

    const ar = EGYSEGAR[tipusok[i].id] * mennyiseg.value;

    fizetendo.innerText = formazo.format(ar);
});