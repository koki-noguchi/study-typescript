export const Practice3 = () => {
  const getTotalNum = (num: number): number => {
    const totalNumber = num * 1.1;
    return totalNumber;
  };
  const onClickPractice = () => {
    let totalNum: number = 0;
    totalNum = getTotalNum(1000);
    console.log(totalNum);
  };
  return (
    <div>
      <p>練習問題3</p>
      <button onClick={onClickPractice}>問題を出す</button>
    </div>
  );
};
