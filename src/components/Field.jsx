import React from "react";

export default function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || gitChildId(children);
  return (
    <div className="flex flex-col items-start justify-start mt-2 p-0 w-full mr-2">
      {label && (
        <label htmlFor={id} className="mb-1">
          {label}
        </label>
      )}
      {children}
      {!!error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
}

const gitChildId = (children) => {
  const child = React.Children.only(children);
  //   if ("id" in child?.props) {
  //     return child.props.id;
  //   }
  if (child && "id" in child.props) {
    return child.props.id;
  }
};
