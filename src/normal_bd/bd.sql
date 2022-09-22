create table project (
    id serial primary key,
    name varchar(50) not null,
    priority integer not null,
    description varchar(255) not null
);

create table task (
    id serial primary key,
    name varchar(50) not null,
    done boolean not null,
    project_id integer references project(id) not null
);