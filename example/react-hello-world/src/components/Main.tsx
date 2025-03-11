const Main = () => {
  const user = { name: "John Doe", login: false };
  return (
    <div>
      <h1>Main</h1>
      <p style={{ backgroundColor: "red", borderBottom: "1px solid blue" }}>
        {user.login ? <div> 로그아웃</div> : <div>로그인</div>}
      </p>
    </div>
  );
};

export default Main;
