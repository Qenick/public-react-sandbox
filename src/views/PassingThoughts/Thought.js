import React, {useEffect} from 'react';

export function Thought({ thought, removeThought }) {


  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect( () => {
    const intervalID = setInterval( () => {
      removeThought(thought.id);
    }, thought.expiresAt - Date.now())

    return () => clearInterval(intervalID);
  }, [thought])

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}