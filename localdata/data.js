const data = {
    productos: [
        {
            id: 1,
            nombre: 'Sauvage - Dior',
            genero: 'Hombre',
            descripcion: 'Es una fragancia famosa por su frescura cítrica y potente fondo amaderado. Inspirada en espacios abiertos, combina bergamota de Calabria, pimienta, lavanda y ambroxan para lograr un aroma crudo, noble y sensual, ideal para el hombre moderno. ',
            capacidad: 200,
            foto: 'images/sauvage.jpg',
            comentarios: [
                {
                    usuario: 'Juan',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Muy buen perfume"
                }
            ]
        },
    {
        id: 2,
        nombre: 'The Only One EDP - Dolce & Gabbana',
        genero: 'Mujer',
        descripcion: 'Es una fragancia oriental vainilla para mujeres que combina violeta, café y caramelo, creando un aroma dulce, sofisticado y cremoso.',
        capacidad: 100,
        foto: 'images/theonlyone.jpg',
        comentarios: [
                {
                    usuario: 'Ale',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Hola."
                }
            ]
        },
    {
        id: 3,
        nombre: 'Invictus Victory - Rabanne',
        genero: 'Hombre',
        descripcion: 'Es una fragancia oriental fresco y sensual para hombres, caracterizado por el contraste entre un frescor cítrico-picante y una intensidad vainillada-amaderada.',
        capacidad: 200,
        foto: 'images/invictusvictory.jpg',
        comentarios: [
                {
                    usuario: 'Juan',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Muy buen perfume"
                },
                {
                    usuario: 'Rosa',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Buen perfume"
                }
            ]
        },
    {
        id: 4,
        nombre: '212 Vip Rose - Carolina Herrera',
        genero: 'Mujer',
        descripcion: 'Es una fragancia femenina de la familia olfativa Floral Frutal, diseñada para ser sofisticada, vibrante y divertida. ',
        capacidad: 125,
        foto: 'images/212vip.jpg',
        comentarios: [
                {
                    usuario: 'Andres',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Un perfume unico"
                },
                {
                    usuario: 'Juan',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Muy buen perfume"
                }
            ]
        },
    {
        id: 5,
        nombre: 'Ombre Leather Parfum - Tom Ford',
        genero: 'Unisex',
        descripcion: 'Es una fragancia unisex que intensifica el aroma original con un acorde de cuero negro, hojas de violeta, cedro y jazmín sambac, logrando una estela floral-amaderada profunda, sensual y más opulenta.',
        capacidad: 100,
        foto: 'images/ombreleather.jpg',
        comentarios: [
                {
                    usuario: 'Juan',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Muy buen perfume"
                },
                {
                    usuario: 'Juan',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Muy buen perfume"
                }
            ]
        },
    {
        id: 6,
        nombre: 'Idôle EDP - Lancome',
        genero: 'Mujer',
        descripcion: 'Es una fragancia diseñada para ser fresca, limpia y luminosa, con un marcado acento en la rosa moderna.  ',
        capacidad: 100,
        foto: 'images/idole.jpg',
        comentarios: [
                {
                    usuario: 'Juan',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Muy buen perfume"
                }
            ]
        },
    {
        id: 7,
        nombre: 'Pour Homme Dylan Blue - Versace',
        genero: 'Hombre',
        descripcion: 'Es una fragancia caracterizada por un aroma fresco, intenso y mediterráneo. Equilibra notas acuáticas y cítricas (bergamota, pomelo) con toques especiados, ambroxán y un fondo de incienso, resultando en un perfume versátil, limpio y elegante para uso diario.',
        capacidad: 200,
        foto: 'images/dylanblue.jpg',
        comentarios: [
                {
                    usuario: 'Lucia',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: ""
                },
                {
                    usuario: 'Nicolas',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Sin palabras..."
                }
            ]
        },
    {
        id: 8,
        nombre: ' Everyone EDT - Calvin Klein',
        genero: 'Unisex',
        descripcion: 'Es una fragancia unisex, cítrica y amaderada. Combina aceite de naranja orgánica, té azul y cedro para un aroma fresco, enérgico y versátil, ideal para el uso diario y climas cálidos.',
        capacidad: 200,
        foto: 'images/everyone.jpg',
        comentarios: [
                {
                    usuario: 'Juan',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Muy buen perfume"
                },
                {
                    usuario: 'Maxi',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Hola! Excelente entrega."
                }
            ]
        },
    {
        id: 9,
        nombre: 'Bitter Peach EDP - Tom Ford',
        genero: 'Unisex',
        descripcion: 'Es una fragancia unisex, descrita explícitamente dulce, peligrosa y voluptuosa. Combina notas intensas de durazno de viña, naranja sanguina y cardamomo con un corazón de ron y davana, sobre una base seductora de sándalo y pachulí.',
        capacidad: 50,
        foto: 'images/bitterpeach.png',
        comentarios: [
                {
                    usuario: 'Matias',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Muy rico perfume. Recomendable."
                }
            ]
        },
    {
        id: 10,
        nombre: 'Goddess - Burberry',
        genero: 'Mujer',
        descripcion: 'Es una fragancia diseñada para la mujer moderna que busca confianza y poder. Se destaca por un trío único de vainillas, lavanda, cacao y jengibre, ofreciendo un aroma dulce, sofisticado y duradero, con una propuesta elegante y recargable que evoca la fuerza interior.',
        capacidad: 100,
        foto: 'images/goddess.jpg',
        comentarios: [
                {
                    usuario: 'Roberto',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Riquisima fragancia."
                },
                {
                    usuario: 'Noelia',
                    fotoUsuario: '/images/profile-default.png',
                    comentario: "Horrible perfume."
                }
            ]
        }
    ],
usuario: {
    id: 1,
        nombre: 'usuario1',
            email: 'usuario1@gmail.com',
                fotoDePerfil: '/images/profile-default.png',
        },
    }

module.exports = data;