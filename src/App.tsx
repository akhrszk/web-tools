import { useEffect, useState } from "react";

const menu = [
  "uuid-generator",
  "json-formatter",
  "regex-checker",
] as const;

function App() {
  const [currentHash, setCurrentHash] = useState('#' + menu[0]);
  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [setCurrentHash]);
  return (
    <div className="h-full flex flex-row-reverse">
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={currentHash === `#${item}` ? "font-bold" : ""}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1">
        <iframe src={`https://akhrszk.github.io/${currentHash.slice(1)}/`} className="w-full h-full" />
      </main>
    </div>
  )
}

export default App;
