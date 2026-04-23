CREATE SCHEMA dataPerfumes;

USE dataPerfumes;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(1000) NOT NULL,
contrasenia  VARCHAR(1000) NOT NULL,
fotoDePerfil VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP

);

CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idUsuario  INT UNSIGNED,
nombre VARCHAR(1000) NOT NULL,
fotoDeImagen  VARCHAR(1000) NOT NULL,
descripcion VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);



CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idUsuario  INT UNSIGNED,
idProducto INT UNSIGNED,
comentario VARCHAR(1000) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (idProducto) REFERENCES productos(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios VALUES (DEFAULT, 'braiangomez@gmail.com', "proyecto",'/images/profile-default.png', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'lourdesD@gmail.com', "proyecto1",'/images/profile-default.png', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'IvanL@gmail.com', "proyecto2",'/images/profile-default.png', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'ValentinV@gmail.com', "proyecto3",'/images/profile-default.png', DEFAULT, DEFAULT, DEFAULT);
INSERT INTO usuarios VALUES (DEFAULT, 'Lucas@gmail.com', "proyecto4",'/images/profile-default.png', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO productos (id, idUsuario, nombre, fotoDeImagen, descripcion, createdAt, updatedAt, deletedAt)
VALUES
(DEFAULT, 1, 'Sauvage - Dior', 'images/sauvage.jpg', 'Es una fragancia famosa por su frescura cítrica y potente fondo amaderado. Inspirada en espacios abiertos, combina bergamota de Calabria, pimienta, lavanda y ambroxan para lograr un aroma crudo, noble y sensual, ideal para el hombre moderno.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 2, 'The Only One EDP - Dolce & Gabbana', 'images/theonlyone.jpg', 'Es una fragancia oriental vainilla para mujeres que combina violeta, café y caramelo, creando un aroma dulce, sofisticado y cremoso.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 5, 'Invictus Victory - Rabanne', 'images/invictusvictory.jpg', 'Es una fragancia oriental fresco y sensual para hombres, caracterizado por el contraste entre un frescor cítrico-picante y una intensidad vainillada-amaderada.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 4, '212 Vip Rose - Carolina Herrera', 'images/212vip.jpg', 'Es una fragancia femenina de la familia olfativa Floral Frutal, diseñada para ser sofisticada, vibrante y divertida.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 1, 'Ombre Leather Parfum - Tom Ford', 'images/ombreleather.jpg', 'Es una fragancia unisex que intensifica el aroma original con un acorde de cuero negro, hojas de violeta, cedro y jazmín sambac, logrando una estela floral-amaderada profunda, sensual y más opulenta.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 3, 'Idôle EDP - Lancome', 'images/idole.jpg', 'Es una fragancia diseñada para ser fresca, limpia y luminosa, con un marcado acento en la rosa moderna.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 3, 'Pour Homme Dylan Blue - Versace', 'images/dylanblue.jpg', 'Es una fragancia caracterizada por un aroma fresco, intenso y mediterráneo. Equilibra notas acuáticas y cítricas (bergamota, pomelo) con toques especiados, ambroxán y un fondo de incienso, resultando en un perfume versátil, limpio y elegante para uso diario.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 2, 'Everyone EDT - Calvin Klein', 'images/everyone.jpg', 'Es una fragancia unisex, cítrica y amaderada. Combina aceite de naranja orgánica, té azul y cedro para un aroma fresco, enérgico y versátil, ideal para el uso diario y climas cálidos.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 5, 'Bitter Peach EDP - Tom Ford', 'images/bitterpeach.png', 'Es una fragancia unisex, descrita explícitamente dulce, peligrosa y voluptuosa. Combina notas intensas de durazno de viña, naranja sanguina y cardamomo con un corazón de ron y davana, sobre una base seductora de sándalo y pachulí.', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 1, 'Goddess - Burberry', 'images/goddess.jpg', 'Es una fragancia diseñada para la mujer moderna que busca confianza y poder. Se destaca por un trío único de vainillas, lavanda, cacao y jengibre, ofreciendo un aroma dulce, sofisticado y duradero, con una propuesta elegante y recargable que evoca la fuerza interior.', DEFAULT, DEFAULT, DEFAULT);

INSERT INTO comentarios (idUsuario, idProducto, comentario)
VALUES
/*Producto 1*/
(1, 1, 'Muy buen perfume'),
(2, 1, 'Me encanto, lo uso todos los dias'),
(3, 1, 'Super recomendable'),

/*Producto 2*/
(2, 2, 'Rico aroma'),
(3, 2, 'Muy dulce para mi gusto'),
(4, 2, 'Excelente calidad'),

/* Producto 3*/
(1, 3, 'Increible fragancia'),
(4, 3, 'Muy duradero'),
(5, 3, 'Me gusto bastante'),

/*Producto 4*/
(3, 4, 'Muy elegante'),
(2, 4, 'Ideal para salir'),
(5, 4, 'Lo volveria a comprar'),

/*Producto 5*/
(1, 5, 'Un perfume unico'),
(2, 5, 'Muy intenso'),
(4, 5, 'Me sorprendio'),

/*Producto 6*/
(5, 6, 'Muy fresco'),
(3, 6, 'Perfecto para el dia'),
(1, 6, 'Aroma suave'),

/*Producto 7*/
(2, 7, 'Muy bueno'),
(4, 7, 'Clasico y elegante'),
(5, 7, 'Me encanto'),

/*Producto 8*/
(3, 8, 'Muy liviano'),
(1, 8, 'Ideal verano'),
(2, 8, 'Lo recomiendo'),

/*Producto 9*/
(4, 9, 'Muy dulce'),
(5, 9, 'Aroma fuerte'),
(3, 9, 'Me gusto mucho'),

/* Producto 10*/
(1, 10, 'Excelente'),
(2, 10, 'No me gusto tanto'),
(5, 10, 'Muy duradero');