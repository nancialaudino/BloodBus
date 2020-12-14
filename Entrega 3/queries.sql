select * from MarcacaoRecolha;


select * from Hora;


#devolve os dados dos funcionários da equipa de recolha
select * from Utilizador join Categoria_Utilizador on Utilizador.categoria_id=id_categoria where categoria_id=3;                      

#devolve os nomes dos funcionarios da equipa de recolha
select Utilizador.nome as 'Funcionário Equipa de Recolha' from FuncionarioRecolha join Utilizador on FuncionarioRecolha.utilizador_id=id_user;

#devolve a tabela com as marcações (Nome do dador, data/hora da recolha e o estado da recolha)
select EstadoRecolha.estado as 'Estado da Recolha', Utilizador.nome as 'Dador', Hora.hora as 'Hora da Marcação'
from MarcacaoRecolha join EstadoRecolha on MarcacaoRecolha.estado_id=id_estado join Utilizador on MarcacaoRecolha.user_id=id_user
join Hora on MarcacaoRecolha.hora_id=id_hora;