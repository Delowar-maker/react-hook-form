import React from "react";

export default function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || gitChildId(children);
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {!!error && <div>{error.message}</div>}
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
