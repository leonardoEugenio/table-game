document.addEventListener("keydown", keypush);

function status() {
    move();
    item();
    print_fire();
}
// direçao one o player estava 
var estava = {};

var fire = {
    'move': {

    },
    'info': {
        'valid': false,
    },
    'cod': {
        'x': player.posicao.x,
        'y': player.posicao.y,
        'id': '',
    },
    'casa': {
        'qtd': 0
    }
};

function keypush() {

    var tecla_press = event.keyCode;

    const commands = {


        32(posicao) {//fire / space
            var save_fire = ''
            const fire_array = {
                up() {

                    fire.info.move = -1;
                    fire.info.l = 'y'
                },
                left() {

                    fire.info.move = -1;
                    fire.info.l = 'x'
                },
                down() {

                    fire.info.move = 1;
                    fire.info.l = 'y'
                },
                right() {

                    fire.info.move = 1
                    fire.info.l = 'x'
                }

            }
            fire.info.valid = 'true'
            fire_array[fire.move.str]();

            do_fire();

        },


        87(posicao) {//up
            fire.move.str = 'up'
            player.posicao.y--
            move()

        },

        38(posicao) {//up
            fire.move.str = 'up'
            player.posicao.y--
            move()
        },

        68(posicao) {//right
            fire.move.str = 'right'
            player.posicao.x++
            move()
        },

        39(posicao) {//right
            fire.move.str = 'right'
            player.posicao.x++
            move()
        },

        65(posicao) {//left
            fire.move.str = 'left'
            player.posicao.x--
            move()
        },

        37(posicao) {//left
            fire.move.str = 'left'
            player.posicao.x--
            move()
        },

        83(posicao) {//down
            fire.move.str = 'down'
            player.posicao.y++
            move()
        },
        40(posicao) {//down
            fire.move.str = 'down'
            player.posicao.y++
            move()
        },
    }
    direcao = commands[tecla_press];
    if (direcao) {
        direcao(player);
    };
}

function move() {
    // colizao
    if (player.posicao.y <= 0 || player.posicao.x <= 0 || player.posicao.y > total_linha || player.posicao.x > total_coluna || player.move == 'none') {
        player.posicao.x = estava.x;
        player.posicao.y = estava.y;
        estava = {};
    }

    $(table).find('th#' + player.posicao.y + '-' + player.posicao.x + '').addClass("player");

    estava = {
        'y': player.posicao.y,
        'x': player.posicao.x
    };
    // pegar o item
    getItem()

}

function do_fire() {



    fire.casa.qtd

    fire.cod = {
        'x': player.posicao.x,
        'y': player.posicao.y,
        'id': '',
    }

    for (let casa = 0; casa < player.itens.range; casa++) {



        fire.cod[fire.info.l] += fire.info.move;

        fire.casa[casa] = fire.cod.id = fire.cod.y + '-' + fire.cod.x;

        fire.casa.qtd++

    };
};

function print_fire() {
    if (fire.casa.qtd != 0 && player.itens.range != 0) {
        
        for (let i = 0; i < fire.casa.qtd; i++) {

            $(table).find('th#' + fire.casa[i] + '').addClass("fire");

        }

        setTimeout(() => {
            fire.casa.qtd = 0;
        }, 250);
    }
}