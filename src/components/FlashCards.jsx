import { useState } from 'react';
import data from '../../public/data';
import { FlashCard } from './FlashCard';
export function FlashCards() {
  const [selectted, setSelectted] = useState(null);

  return (
    <div className='flashcards'>
      {data.map((question) => (
        <FlashCard
          key={question.id}
          question={question}
          selectted={selectted}
          setSelectted={setSelectted}
        />
      ))}
    </div>
  );
}
