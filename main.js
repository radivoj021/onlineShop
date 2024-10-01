
//objekat prodavnica
let prodavnica = {
    proizvodi: [
        {
            naziv: 'laptop',
            cena: 5000
        },
        {
            naziv: 'telefon',
            cena: 3000
        },
        {
            naziv: 'kompjuter',
            cena:  154000
        }
    ],

    korpa: [],

    prikaziProizvode: function(){
        let productsDiv = document.getElementById("products");

        this.proizvodi.forEach((proizvod, index) => {
            productsDiv.innerHTML += 
            `<div class="product">
                <span> ${proizvod.naziv} - ${proizvod.cena} RSD </span>
                <button onclick = "prodavnica.dodajUKorpu(${index})">Dodaj u korpu</button>
            </div>`
        })
    },

    dodajUKorpu: function(indexProizvoda){
        this.korpa.push(this.proizvodi[indexProizvoda]);

        this.prikaziKorpu();
    },

    prikaziKorpu: function(){
        let cartDiv = document.getElementById('cart');
        let counterDiv = document.getElementById('counter');

        cartDiv.innerHTML = '';

        let ukupnaCena = 0;

        this.korpa.forEach((proizvod) => {
            cartDiv.innerHTML += 
            `<div>${proizvod.naziv} - ${proizvod.cena} RSD</div>`;
            


            ukupnaCena += proizvod.cena;
        });

        document.getElementById('totalPrice').innerText = ukupnaCena;
        
        counterDiv.innerText = this.korpa.length; 
    }


};

prodavnica.prikaziProizvode();

