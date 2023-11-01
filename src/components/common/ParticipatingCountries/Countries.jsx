import React , {useState , useEffect} from 'react';
import './countries.scss';

const Countries = () => {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {


        fetch(
            "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setItems(result);
                    console.log(result);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const data = Object.values(items);
  return (
    <div className="wrapper">
        <h2 className='heading'>Participating Countries</h2>
    <ul className="card-grid">
        {data.map((item) => (
            <li key={item.alpha3Code}>
                <article className="card">
                    <div className="card-image">
                        <img
                            src={item.flag.large}
                            alt={item.name}
                        />
                    </div>
                    <div className="card-content">
                        <h2 className="card-name">{item.name}</h2>
                        <ol className="card-list">
                            {/* <li>
                                population:{" "}
                                <span>{item.population}</span>
                            </li> */}
                            {/* <li>
                                Region: <span>{item.region}</span>
                            </li> */}
                            {/* <li>
                                Capital: <span>{item.capital}</span>
                            </li> */}
                        </ol>
                    </div>
                </article>
            </li>
        ))}
    </ul>
</div>
  )
}

export default Countries