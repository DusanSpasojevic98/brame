drop table if exists client;
drop table if exists campaign;

create table client
(
    Id int primary key,
    username varchar(50) not null,
    password varchar(300) not null
);

insert into client
values(1, 'Client1', '$2b$06$ROIksKJzJ2PHhceOJlW64.ivW8MQxXSmvg6IsPS6xerFeL2Op5DdW');
insert into client
values(2, 'Client2', '$2b$06$ROIksKJzJ2PHhceOJlW64.ivW8MQxXSmvg6IsPS6xerFeL2Op5DdW');
insert into client
values(3, 'Client3', '$2b$06$ROIksKJzJ2PHhceOJlW64.ivW8MQxXSmvg6IsPS6xerFeL2Op5DdW');

create table campaign
(
    Id serial primary key,
    name varchar(50) not null,
    status int not null,
    start_date timestamp null,
    image_url varchar(500) null
);

insert into campaign(name, status, start_date, image_url)
values ('Campaign1', 1, '2022-08-22 22:00:00', 'somePath1');
insert into campaign(name, status, start_date, image_url)
values ('Campaign2', 1, '2022-08-22 22:00:00', 'somePath2');
insert into campaign(name, status, start_date, image_url)
values ('Campaign3', 1, '2022-08-22 22:00:00', 'somePath13');