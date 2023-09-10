import  {StatisticsSection}  from "./Statistics.styled";
export function Statistics({good, neutral, bad, total}) {
    const goodFeedbackCalk = () => {
        return Math.round((good / total) * 100);
      };
    return(<StatisticsSection $total={total}>
        <h2>Statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>total {total}</p>
        <p>
          Positive feedback {goodFeedbackCalk() ? goodFeedbackCalk() : 0}%
        </p>
      </StatisticsSection>)
    
}