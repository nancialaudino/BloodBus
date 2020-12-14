insert into Categoria_Utilizador (nome_categoria) values('Dador');
insert into Categoria_Utilizador (nome_categoria) values('Admnistrador');
insert into Categoria_Utilizador (nome_categoria) values('Equipa de Recolha');
                        
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('Joaquim Pires Lopes',str_to_date('1995.01.01','%Y.%m.%d'),'Rua de Cascais 111','1700-333','Lumiar','M', 9999999,'jpl@gmail.com',2128233,1);  
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('Ana Maria Fonseca',str_to_date('1997.03.03','%Y.%m.%d'), 'Rua de Roma 22', '1700-333', 'Campo Grande','F',9999999,'ana@sapo.pt',147585,1);  
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('Paula Antunes',str_to_date('1996.07.06','%Y.%m.%d'),'Rua de Olais 1','1700-333', 'Expo','F',9999999,'ana@sapo.pt',27458364564,1);  
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('Joana Ramalho Silva',str_to_date('1984.09.23','%Y.%m.%d'),'Rua de Deus 55','1700-333','Cais do Sodré','F',9999999,'juana@mac.com',38746576,1);  
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('Rui Manuel Silva',str_to_date('1994.08.15','%Y.%m.%d'),'Rua de Alcântara 66','1700-333','Ameixoeira','M',9999999,'rms@gmail.com',184568465,2);  
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('João Paulo Santos',str_to_date('1991.11.16','%Y.%m.%d'),'Rua de Areeiro 77','1700-333','Odivelas','M',9999999,'jps@yahoo.com',174865432,3);  
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('Cristina Fernandes Lopes',str_to_date('1996.01.07','%Y.%m.%d'),'Rua de Odivelas 88','1700-333','Rossio','F',9999999,'ana@sapo.pt',17456864,3); 
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('Jorge Antunes',str_to_date('1991.11.16','%Y.%m.%d'),'Rua de Olivais 1','1700-333','Belém','M',9999999,'jps@yahoo.com',174865432,3);  
insert into Utilizador (nome, data_nasc, morada, cod_postal, zona, sexo, telefone, email, contribuinte, categoria_id) values ('Carla Faria',str_to_date('1996.01.07','%Y.%m.%d'),'Rua do Porto 5','1700-333','Olivais','F',9999999,'ana@sapo.pt',17456864,3); 


insert into EstadoRecolha (estado) values ('Solicitada');
insert into EstadoRecolha (estado) values ('Pendente');
insert into EstadoRecolha (estado) values ('Cancelada');
insert into EstadoRecolha (estado) values ('Finalizada'); 

insert into Zona (nome_zona) values ('Lumiar');
insert into Zona (nome_zona) values ('Cascais');
insert into Zona (nome_zona) values ('Campo Grande');
insert into Zona (nome_zona) values ('Expo');

insert into EquipaRecolha (zona_id) values (1);
insert into EquipaRecolha (zona_id) values (2);
insert into EquipaRecolha (zona_id) values (3);
insert into EquipaRecolha (zona_id) values (4);

insert into Hora (equipa_id, hora) values (1, '2020.12.28 12:00:00');
insert into Hora (equipa_id, hora) values (2, '2020.12.30 12:00:00');
insert into Hora (equipa_id, hora) values (3, '2021.01.21 12:00:00');
insert into Hora (equipa_id, hora) values (4, '2021.02.22 12:00:00');


                        
insert into FuncionarioRecolha (utilizador_id,equipa_id) values (6,1);
insert into FuncionarioRecolha (utilizador_id,equipa_id) values (7,2);
insert into FuncionarioRecolha (utilizador_id,equipa_id) values (8,3);
insert into FuncionarioRecolha (utilizador_id,equipa_id) values (9,4);
	

insert into MarcacaoRecolha (hora_id, estado_id, user_id) values (1,1,1);
insert into MarcacaoRecolha (hora_id, estado_id, user_id) values (2,1,2);
insert into MarcacaoRecolha (hora_id, estado_id, user_id) values (3,2,3);
insert into MarcacaoRecolha (hora_id, estado_id, user_id) values (4,2,4);







commit;
          