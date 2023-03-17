function CVButton({ href, text }) {
  return (
    <a
      href={href}
      className="mx-auto my-0 mt-[24px] inline-block border-2 border-solid border-mainBlack px-[30px] py-[8px] text-small font-bold uppercase tracking-wider text-mainBlack hover:border-[#333333] hover:bg-[#333333] hover:text-white focus:border-[#333333] focus:bg-[#333333] focus:text-white"
    >
      {text}
    </a>
  );
}

export default CVButton;
