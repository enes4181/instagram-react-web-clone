export default function Button({ type = "button", children, ...props }) {
  return (
    <button
      type={type}
    {...props}
      className="h-[30px] mt-1 w-full flex items-center justify-center rounded gap-x-2 bg-brand font-medium text-white px-2.5 text-sm disabled:opacity-50"
    >
      {children}
    </button>
  );
}
