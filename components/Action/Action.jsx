function Action({ params }) {
  const { title, email, description, buttonText, subtitle, buttonType } =
    params;
  return (
    <div>
      <h2 style={{ fontSize: 30 }}>{title}</h2>

      {email && (
        <p style={{ fontSize: 20 }}>
          {subtitle} <a href="mailto:{email}">{email}</a>
        </p>
      )}

      <p>{description}</p>

      <a
        href="email:mk@gf.com"
        style={
          buttonType
            ? {
                border: 'none',
                color: 'white',
                backgroundColor: 'black',
                padding: 5,
              }
            : { border: '1px solid black', padding: 5 }
        }
      >
        {buttonText}
      </a>
    </div>
  );
}

export default Action;
