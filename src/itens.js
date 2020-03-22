// cordenadas de todo os itens
var locIten = {
    'loc': {},
    'info': {},
}

weapons = {
    item: {
        'locaition': {
            'y': 0,
            'x': 0
        },
        'range': 4,
        // quantidade do item
        'qtd': 5,
        'nome': 'Knife',
    }
};
// espawna os intens
function spawn_itens() {
    for (i = 0; i < weapons.item.qtd; i++) {

        weapons.item.locaition.y = Math.floor(Math.random() * (total_coluna - 1)) + 1;
        weapons.item.locaition.x = Math.floor(Math.random() * (total_coluna - 1)) + 1;

        var item_location = weapons.item.locaition.y + '-' + weapons.item.locaition.x;

        locIten['loc'] += '/' + item_location;

        locIten.info[i] = {
            'nome': weapons.item.nome,
            'range': weapons.item.range,
        }

    }
    locIten.loc = locIten.loc.split("/");
}
function getItem() {
    for (i = 1; i < locIten.loc.length; i++) {

        if (locIten.loc[i] == player.posicao.y + '-' + player.posicao.x && locIten.loc[i] != null) {

            $(table).find('th#' + player.posicao.y + '-' + player.posicao.x + '').removeClass("Knife");

            player.itens = {
                'nome': locIten.info[i - 1]['nome'],
                'range': locIten.info[i - 1]['range']
            }
            locIten.loc[i] = null;
        }

    }
}

function item() {
    if (locIten.loc.length == null || locIten.loc.indexOf(null) == 1) {
        spawn_itens()
    }

    for (i = 1; i < locIten.loc.length; i++) {

        $(table).find('th#' + locIten.loc[i] + '').addClass("Knife");


    }

}