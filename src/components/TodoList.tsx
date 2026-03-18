import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  onSnapshot
} from 'firebase/firestore';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt?: number;
}

const COLLECTION_NAME = 'todos';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [cloudStatus, setCloudStatus] = useState<'connecting' | 'connected' | 'offline'>('connecting');

  useEffect(() => {
    let isMounted = true;
    const colRef = collection(db, COLLECTION_NAME);

    // Single real-time listener — no getDocs, no timeout
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      if (!isMounted) return;
      console.log('[Firebase] Snapshot received:', snapshot.docs.length, 'docs');
      
      const todosData: Todo[] = snapshot.docs.map(d => ({
        id: d.id,
        text: d.data().text,
        completed: d.data().completed,
        createdAt: d.data().createdAt || 0,
      }));
      todosData.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
      
      setTodos(todosData);
      setLoading(false);
      setCloudStatus('connected');
    }, (error) => {
      if (!isMounted) return;
      console.error('[Firebase] Listener error:', error);
      setLoading(false);
      setCloudStatus('offline');
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    setInputValue('');

    try {
      await addDoc(collection(db, COLLECTION_NAME), {
        text,
        completed: false,
        createdAt: Date.now()
      });
    } catch (error) {
      console.error('[Firebase] Error adding todo:', error);
    }
  };

  const toggleComplete = async (id: string, current: boolean) => {
    try {
      await updateDoc(doc(db, COLLECTION_NAME, id), { completed: !current });
    } catch (error) {
      console.error('[Firebase] Error toggling todo:', error);
    }
  };

  const removeTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
    } catch (error) {
      console.error('[Firebase] Error removing todo:', error);
    }
  };

  return (
    <div className="todo-list">
      <div className="todo-header">
        <h3 className="section-title">✔️ PRIORIDADES & SEMANA</h3>
        <span className={`cloud-badge ${cloudStatus}`}>
          {cloudStatus === 'connecting' && '⏳ Conectando...'}
          {cloudStatus === 'connected' && '🟢 Nube'}
          {cloudStatus === 'offline' && '🔴 Sin conexión'}
        </span>
      </div>
      <form onSubmit={handleAdd} className="todo-form">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Añadir una meta (ej. Terminar lab AWS el Jueves)..." 
          className="todo-input"
        />
        <button type="submit" className="todo-submit">+</button>
      </form>
      <div className="todo-items">
        {loading && <p className="todo-empty">Conectando con la nube... ☁️</p>}
        {!loading && todos.length === 0 && <p className="todo-empty">No hay tareas pendientes. ¡Semana libre! 😎</p>}
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <label className="checkbox-container">
              <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id, todo.completed)} />
              <span className="checkmark"></span>
            </label>
            <span className="todo-text">{todo.text}</span>
            <button className="todo-delete" onClick={() => removeTodo(todo.id)}>✕</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
