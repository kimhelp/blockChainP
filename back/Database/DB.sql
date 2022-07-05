create database block;
use block;

CREATE TABLE block(
    version varchar(8) DEFAULT '1.0.0' not null,
    number int not null,
    parentHash varchar(100) not null,
    stateRoot varchar(100) not null,
    hash varchar(100) not null,
    timestamp varchar(100) not null,
    difficulty varchar(100) DEFAULT 0 not null,
    nonce varchar(100) DEFAULT 0 not null,
    PRIMARY KEY (number)
);