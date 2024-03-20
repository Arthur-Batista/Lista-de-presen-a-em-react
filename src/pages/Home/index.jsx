import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({
    name: '',
    avatar: '',
  });
  const [isAddingStudent, setIsAddingStudent] = useState(false);

  // Função para adicionar um novo estudante à lista
  const handleAddStudent = () => {
    if (isAddingStudent) return;
    setIsAddingStudent(true);

    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };
    setStudents(prevState => [...prevState, newStudent]);

    // Limpa o campo de entrada após 2 segundos
    setTimeout(() => {
      setStudentName('');
      setIsAddingStudent(false);
    }, 2000);
  };

  // Função para remover um estudante da lista
  const handleRemoveCard = (time) => {
    setStudents(prevStudents => prevStudents.filter(student => student.time !== time));
  };

  useEffect(() => {
    fetch('https://api.github.com/users/arthur-batista')
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
  }, [students, setStudentName]);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        value={studentName}
        onChange={e => setStudentName(e.target.value)}
        disabled={isAddingStudent} // Desabilita o input quando estiver adicionando um estudante
      />
      <button className="add" type="button" onClick={handleAddStudent} disabled={isAddingStudent}>Adicionar</button>
      {
        students.map(student => (
          <Card
            name={student.name}
            time={student.time}
            key={student.time}
            onRemove={handleRemoveCard} // Passa a função de remoção como propriedade
          />
        ))
      }
    </div>
  );
}
