function CVButton({ href, text }) {
  return (
    <a
      href={href}
      className="mx-auto my-0 mt-[24px] inline-block border-2 border-solid border-mainBlack px-[32px] py-[10px] text-small font-bold uppercase tracking-wider text-mainBlack"
    >
      {text}
    </a>
  );
}

export default CVButton;
