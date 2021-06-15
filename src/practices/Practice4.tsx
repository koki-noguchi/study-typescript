export const Practice4 = () => {
  const calcNumber = (num: any) => {
    const totalNumber = num * 1.1;
    console.log(totalNumber);
  };
  const onClickPractice = () => calcNumber(1200);
  return (
    <div>
      <p>練習問題4</p>
      <button onClick={onClickPractice}>問題を出す</button>
    </div>
  );
};
