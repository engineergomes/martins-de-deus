export const CleanButton = (props: { text: string; href: string }) => {
  return (
    <a href={props.href} target="_blank">
      <button className="text-white rounded-full border-2 lg:min-w-[200px] border-[#d5a675] p-3 px-10 font-semibold hover:opacity-80">
        {props.text}
      </button>
    </a>
  );
};
