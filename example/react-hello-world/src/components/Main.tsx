import "./Main.css";

const Main = () => {
  const user = { name: "John Doe", login: true };
  return (
    <div>
      <h1>Main</h1>
      <p>
        {user.login ? (
          <div className="logout"> 로그아웃</div>
        ) : (
          <div>로그인</div>
        )}
      </p>
    </div>
  );
};

export default Main;
