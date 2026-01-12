type SpacerProps = {
  size?: "sm" | "md" | "lg";
};

export function Spacer({ size = "md" }: SpacerProps) {
  const height =
    size === "sm" ? "2rem" : size === "lg" ? "6rem" : "4rem";

  return <div style={{ height }} aria-hidden />;
}
