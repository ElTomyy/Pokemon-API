import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import { useRef, useState } from "react";
import { useGetPokemons } from "./hooks/useGetPokemons";
import { FormInput } from "./components/FormInput";
import { LoadMoreButton } from "./components/LoadMoreButton";
import { DisplayPokemons } from "./components/DisplayPokemons";

function App() {
  const [newFilter, setNewFilter] = useState(null)
  const [size, setSize] = useState(1);
  const [word, setWord] = useState(null);
  const { data, loading } = useGetPokemons({ size, newFilter, keyword: word });
  console.log(data)
  console.log(word)

  const handleClick = () => {
    setSize(size + 20);
  };

  const handleSubmit = ({keyword}) => {
    setWord(keyword);
  };

  const handleFilter = ({filter}) => {
    setNewFilter(filter)
    setSize(1);
  }

  return (
    <div className="container-fluid py-5 bg-black content">
      <h1 className="text-center pb-5">Pokemon API</h1>

      <main className="d-flex flex-column">
        <div className="row row-cols-xl-5 row-cols-md-4 row-cols-sm-3  gap-3 justify-content-center main-div">
          <FormInput getFilter={handleFilter} getQuery={handleSubmit} />

          <DisplayPokemons newWord={handleSubmit} data={data} />
        </div>

        {word ? null : <LoadMoreButton loading={loading} prop={handleClick} />}
      </main>
    </div>
  );
}

export default App;
