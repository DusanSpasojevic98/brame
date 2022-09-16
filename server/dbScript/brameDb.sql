drop table if exists client;
drop table if exists campaign;

create table drop table if exists client;

(
    Id int primary key,
    username varchar(50) not null,
    password varchar(300) not null
);

insert into client
values(1, 'Client1', '$2y$10$SWylxWX6R/bIShAFRQtVJ.ahr4epnWJ9QtaizbjqgzSDpbdDkyD5u');
insert into client
values(2, 'Client2', '$2y$10$SWylxWX6R/bIShAFRQtVJ.ahr4epnWJ9QtaizbjqgzSDpbdDkyD5u');
insert into client
values(3, 'Client3', '$2y$10$SWylxWX6R/bIShAFRQtVJ.ahr4epnWJ9QtaizbjqgzSDpbdDkyD5u');

create table campaign
(
    Id serial primary key,
    name varchar(50) not null,
    status int not null,
    start_date timestamp null,
    image_path varchar(500) null
);

insert into campaign(name, status, start_date, image_path)
values ('Campaign1', 1, '2022-02-08 22:00:00', 'somePath1');
insert into campaign(name, status, start_date, image_path)
values ('Campaign2', 1, '2022-02-08 22:00:00', 'somePath2');
insert into campaign(name, status, start_date, image_path)
values ('Campaign3,', 1, '2022-02-08 22:00:00', 'somePath13');