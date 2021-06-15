export const Practice2 = () => {
  const getTotalNum = (num: number): number => {
    const totalNumber = num * 1.1;
    return totalNumber;
  };
  const onClickPractice = () => console.log(getTotalNum(1200));
  return (
    <div>
      <p>練習問題2</p>
      <button onClick={onClickPractice}>問題を出す</button>
    </div>
  );
};
