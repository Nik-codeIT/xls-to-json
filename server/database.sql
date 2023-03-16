CREATE DATABASE nodexls;

CREATE TABLE autos(
    id SERIAL PRIMARY KEY,
    id_modification INTEGER,
    brand VARCHAR(255),
    model VARCHAR(255),
    modification VARCHAR(255),
    generation VARCHAR(255),
    drive VARCHAR(255));

