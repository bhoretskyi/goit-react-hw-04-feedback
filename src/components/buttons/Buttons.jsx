export function Buttons({ handleFeedbackClick, options }) {
  return options.map(option => {
        return (
      <button
        key={option}
        type="button"
        onClick={() => {
          handleFeedbackClick(option);
        }}
      >
        {option}
      </button>
    );
  });
}
