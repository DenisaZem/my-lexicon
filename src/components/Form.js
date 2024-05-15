import { useState, useReducer, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import Modal from './Modal';

const Form = () => {
  const [wordDe, setWordDe] = useState('');
  const [wordCze, setWordCze] = useState('');
  const [sentence, setSentence] = useState('');

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_WORD':
        return {
          ...state,
          wordDe: [...state.wordDe, action.payload],
          wordCze: '',
          sentence: '',
          showNotification: true,
          notificationContent: 'Slovo bylo přidáno',
        };

      case 'NO_WORD_ADDED':
        return {
          ...state,
          showNotification: true,
          notificationContent: 'Vyplňte prosím všechny údaje',
        };

      case 'CLEAR_NOTIFICATION':
        return {
          ...state,
          showNotification: false,
          notificationContent: '',
        };

      default:
        throw new Error('Chyba - žádná shoda s action.type');
    }
  };

  const defaultState = {
    wordDe: [],
    wordCze: [],
    sentence: [],
    showNotification: false,
    notificationContent: '',
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitForm = async (e) => {
    e.preventDefault();

    if (!wordDe || !wordCze || !sentence) {
      dispatch({ type: 'NO_WORD_ADDED' });
      return;
    }

    const newWord = {
      wordDe,
      wordCze,
      sentence,
      createdAt: new Date(),
    };

    try {
      await projectFirestore.collection('deutsch').add(newWord);
      dispatch({ type: 'ADD_WORD', payload: newWord });
      setWordDe('');
      setWordCze('');
      setSentence('');
    } catch (err) {
      console.log(err.message);
    }
  };

  const clearNotification = () => {
    dispatch({ type: 'CLEAR_NOTIFICATION' });
  };

  useEffect(() => {
    if (state.showNotification) {
      const timeoutId = setTimeout(() => {
        clearNotification();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [state.showNotification]);

  return (
    <div>
      <div className="container--ADDNotif">
        <div className="ADDNotif">
          {state.showNotification && (
            <Modal
              notifContent={state.notificationContent}
              clearNotif={clearNotification}
            />
          )}
        </div>
      </div>
      <form onSubmit={submitForm} className="AddWordForm">
        <input
          type="text"
          placeholder="německé slovo"
          onChange={(e) => setWordDe(e.target.value)}
          value={wordDe}
        />
        <input
          type="text"
          placeholder="český překlad"
          onChange={(e) => setWordCze(e.target.value)}
          value={wordCze}
        />
        <input
          type="text"
          placeholder="pomocná věta"
          onChange={(e) => setSentence(e.target.value)}
          value={sentence}
        />
        <input type="submit" value="Přidat" className="submitButton" />
      </form>
    </div>
  );
};

export default Form;
