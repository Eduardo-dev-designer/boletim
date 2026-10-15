import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Aluno = {
  nome: string;
  idade: number;
  turma: string;
  nota1: number;
  nota2: number;
};

const aluno1: Aluno = { nome: 'Ana', idade: 10, turma: '22', nota1: 10, nota2: 8 };
const aluno2: Aluno = { nome: 'Carlos', idade: 11, turma: '22', nota1: 7, nota2: 6 };
const aluno3: Aluno = { nome: 'Cláudio', idade: 10, turma: '23', nota1: 7.5, nota2: 9 };
const aluno4: Aluno = { nome: 'Renato', idade: 11, turma: '23', nota1: 6, nota2: 5 };

const lista: Aluno[] = [aluno1, aluno2, aluno3, aluno4];

export default function Aluno() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Alunos</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.nome}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => {
          const media = (item.nota1 + item.nota2) / 2;
          const aprovado = media >= 7;

          return (
            <View style={styles.card}>
              <Text style={styles.nome}>Nome: {item.nome}</Text>
              <Text style={styles.dado}>Idade: {item.idade} anos</Text>
              <Text style={styles.dado}>Turma: {item.turma}</Text>
              <Text style={styles.dado}>Nota 1: {item.nota1}</Text>
              <Text style={styles.dado}>Nota 2: {item.nota2}</Text>
              <Text style={styles.media}>
                Média final: {media.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
              </Text>
              <Text style={[styles.status, aprovado ? styles.aprovado : styles.reprovado]}>
                Status: {aprovado ? 'Aprovado' : 'Reprovado'}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#222222',
  },
  lista: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222222',
  },
  dado: {
    fontSize: 15,
    marginBottom: 4,
    color: '#333333',
  },
  media: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#222222',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
  },
  aprovado: {
    color: '#16803c',
  },
  reprovado: {
    color: '#c62828',
  },
});
