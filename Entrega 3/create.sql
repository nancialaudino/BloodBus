create database bloodBus;

use bloodBus;


create table Categoria_Utilizador (id_categoria int not null auto_increment,
									nome_categoria varchar(20),
									primary key (id_categoria));

create table Utilizador (id_user int not null auto_increment,
					 nome varchar(40) not null, data_nasc date, morada varchar(60),
                     cod_postal varchar(10), zona varchar(20), sexo char(1),
                     telefone double, email varchar(30), contribuinte double, categoria_id int not null,
					 primary key (id_user));

create table EstadoRecolha (id_estado int not null auto_increment,
							estado varchar(15),
							primary key (id_estado));	

create table Zona (id_zona int not null auto_increment,
						nome_zona varchar(30),
						primary key (id_zona));   
                        
create table EquipaRecolha (id_equipaRecolha int not null auto_increment,
						  zona_id int not null,
						  primary key (id_equipaRecolha));
                          
create table Hora (id_hora int not null auto_increment, equipa_id int not null, 
						hora datetime, primary key (id_hora));

create table FuncionarioRecolha (id_func int not null auto_increment,
						utilizador_id int not null, equipa_id int not null,
						  primary key (id_func));
                          
create table MarcacaoRecolha (id_marcacao int not null auto_increment, hora_id int not null,
					estado_id int not null, user_id int not null,
					 primary key (id_marcacao));


                     
# Chaves estrangeiras
alter table MarcacaoRecolha add constraint marcacao_fk_utilizador
            foreign key (user_id) references Utilizador(id_user) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table MarcacaoRecolha add constraint marcacao_fk_estadoRecolha
            foreign key (estado_id) references EstadoRecolha(id_estado) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table MarcacaoRecolha add constraint marcacao_fk_hora
            foreign key (hora_id) references Hora(id_hora) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;           
            
alter table Utilizador add constraint utilizador_fk_categoria
            foreign key (categoria_id) references Categoria_Utilizador(id_categoria) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;   
            
alter table EquipaRecolha add constraint equipaRecolha_fk_zona
            foreign key (zona_id) references Zona(id_zona) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;  
            
alter table FuncionarioRecolha add constraint funcionario_fk_funcionarioRecolha
            foreign key (utilizador_id) references Utilizador(id_user) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table FuncionarioRecolha add constraint funcionarioRecolha_fk_utilizador
            foreign key (equipa_id) references EquipaRecolha(id_equipaRecolha) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
 alter table Hora add constraint hora_fk_equipaRecolha
            foreign key (equipa_id) references EquipaRecolha(id_equipaRecolha) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;             