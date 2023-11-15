import useScript from "@/hooks/useScript";

export default function Forms() {
  const formRef = useScript(
    "https://cdn.reviewwave.com/js/reviewwave.js",
    "800086218c737f42429eaf7b9c955d9556d0",
    true,
  );

  return <div ref={formRef} />;
}
