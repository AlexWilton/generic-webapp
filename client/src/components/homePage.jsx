import React from "react";

const homePage = ({ user }) => {
  return (
    <div>
      <main role="main" className="text-center inner cover">
        {user ? <h2>Welcome {user.username}!</h2> : <h2>Welcome</h2>}
        <p className="lead">
          Hello World!
        </p>
      </main>
    </div>
  );
};

export default homePage;
