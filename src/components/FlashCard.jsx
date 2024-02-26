export const FlashCard = ({ selectted, setSelectted, question }) => {
  return (
    <div
      className={`${selectted === question.id && 'selected'}`}
      onClick={() =>
        setSelectted(() => (selectted == question.id ? null : question.id))
      }
    >
      <p>{selectted != question.id ? question.question : question.answer}</p>
    </div>
  );
};
