
export function Text({ as = "p", variant = "p3", className = "", children }) {

  const styles = {
    p1: "text-p1",
    p2: "text-p2 ",
    p3: "text-p3",
    p4: "text-p4",
    p4b: "text-p4 font-semibold",
  };

  const Component = as;

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
}
