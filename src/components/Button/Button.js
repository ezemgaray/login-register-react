import React from "react";
import cn from "classnames";

export const Button = ({
  children,
  additionalClasses = "",
  variant,
  htmlType = "button",
  ...props
}) => {
  const classes = cn(
    "btn",
    variant ? `btn-${variant}` : "btn-primary",
    additionalClasses && additionalClasses.split(" "),
  );

  return (
    <button className={classes} type={htmlType} {...props}>
      {
        children === 'loading' 
          ? (
              <>
                <span 
                  className="spinner-grow spinner-grow-sm" 
                  role="status" 
                  aria-hidden="true"
                  >
                </span>
                Loading...
              </>
            )
          : children
      }
    </button>
  );
}

