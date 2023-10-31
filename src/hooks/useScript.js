import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function useScript(url, dataId, reloadOnRouteChange = false) {
  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", url);
    script.setAttribute("async", true);
    script.setAttribute("data-id", dataId);
    ref.current?.appendChild(script);

    // Needed for cleaning residue left by the external script that can only be removed by reloading the page
    const onRouterChange = (newPath) => {
      window.location.href = router.basePath + newPath;
    };
    if (reloadOnRouteChange) {
      router.events.on("routeChangeStart", onRouterChange);
    }

    return () => {
      if (reloadOnRouteChange) {
        router.events.off("routeChangeStart", onRouterChange);
      }
      ref.current?.removeChild(script);
    };
  }, [router, url]);

  return ref;
}
