import React, { useState } from "react";
import { data } from "./data";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Learn Search Live Data</h1>
      <form action="#">
        <input
          type="text"
          placeholder="masukan apa saja"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="px-2 py-2 bortder"
        />
      </form>

      <div>
        <table>
          <thead>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Phone</th>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                console.log(search);
                return search.toLocaleLowerCase() === "" ? item : item.first_name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
