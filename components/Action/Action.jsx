import { Button } from 'components/Button/Button';

function Action({ params }) {
  const { title, email, description, buttonText, subtitle } = params;
  return (
    <>
      {email ? (
        //!==============================================Career
        <div className="mx-auto text-center md:w-[450px] xl:w-[690px]">
          <div className="mt-[50px] flex flex-col items-center justify-center gap-[20px] ">
            <h2 className="sectionTitle font-bold tracking-wide">{title}</h2>
            <p className=" tracking-teighter sectionSubtitle font-bold">
              {subtitle} <a href="mailto:{email}">{email}</a>
            </p>
            <p className="text-middle font-normal text-gray md:w-[450px]">
              {description}
            </p>
          </div>
          <Button
            text={buttonText}
            href="email:mk@gf.com"
            className="mx-auto my-0 mt-[24px] inline-block border-2 border-solid border-mainBlack px-[32px] py-[10px] text-small font-bold uppercase tracking-wider text-mainBlack"
          />
        </div>
      ) : (
        //!==========================================Feel free to contact us
        <div className="mx-auto text-center md:w-[375px] xl:w-[590px]">
          <div className="mt-[50px] flex flex-col items-center justify-center gap-[20px]">
            <h2 className="sectionTitle font-bold">{title}</h2>
            <p className="text-middle font-normal text-gray">{description}</p>
          </div>
          <Button
            text={buttonText}
            href="#contact"
            className="mt-[24px] inline-block border-none bg-mainBlack py-[10px] px-[33px] text-small font-bold uppercase tracking-wider text-white"
          />
        </div>
      )}
    </>
  );
}

export default Action;
