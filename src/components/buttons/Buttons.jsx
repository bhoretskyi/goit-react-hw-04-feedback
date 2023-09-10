export function Buttons({ handleFeedbackClick, options }) {
  return options.map(option => {
    if (option !== 'total') {
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
      )
    }
  return ''});
}
