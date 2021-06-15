export const Practice1 = () => {
  const calcNumber = (num: number) => {
    const totalNumber = num * 1.1;
    console.log(totalNumber);
  };
  const onClickPractice = () => calcNumber(1200);
  return (
    <div>
      <p>練習問題1</p>
      <button onClick={onClickPractice}>問題を出す</button>
    </div>
  );
};
